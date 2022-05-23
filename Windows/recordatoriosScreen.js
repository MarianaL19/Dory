import React, { Component, useState } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
  Dimensions, FlatList, ScrollView
} from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { NavigationContext } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MenuBar from '../hotBar';
import currentTheme from '../Components/currentTheme';
import RenderRecordatorio from '../Components/renderRecordatorio';

const { width, height } = Dimensions.get('screen');

export default class Recordatorios extends Component {

  static contextType = NavigationContext;

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      listaRecordatorios: [],
      isOpenCompletados: false,
      isOpenOmitidos: false,
      isOpenPendientes: false,
      filtroMostrar: 'Todos',
      fechaActual: '',
      isLoading: false,
    };
  }

  recuperarIDUsuario = async() => {
    const jsonValue = await AsyncStorage.getItem('dataStorage');
    var data = JSON.parse(jsonValue);

    this.setState({id: data[0]});
    console.log('USUARIO:');
    console.log(this.state.id);
    console.log(data[0]);
    this.recuperarDatos();
  }

  recuperarDatos = () => {
    this.setState({listaRecordatorios: []});
    var xhttp = new XMLHttpRequest();
    let _this = this;       // Esto es para usar 'this' dentro de la función

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let nombreRecordatorio = '';
        let etiquetaRecordatorio = '';
        let materiaRecordatorio = '';
        let estadoRecordatorio = '';
        let fechaRecordatorio = '';
        let horaRecordatorio = '';
        let descripcionRecordatorio = '';
        let idRecordatorio = -1;
        let checkRecordatorio = -1;
        let marcado;

        var recordatorio = xhttp.responseText;

        if (recordatorio != ''){

        var registros = recordatorio.split('|');

        var numeroRegistros = registros[0];
        
        for (let i = 1; i <= numeroRegistros; i++) {
          var datos = registros[i].split('¬');
          // console.log('datos: ' + datos[0]);
          nombreRecordatorio = datos[0];
          etiquetaRecordatorio = datos[1];
          materiaRecordatorio = datos[2];
          estadoRecordatorio = datos[3];
          fechaRecordatorio = datos[4];
          horaRecordatorio = datos[5];
          descripcionRecordatorio = datos[6];
          idRecordatorio = datos[7];
          checkRecordatorio = datos[8];
          { checkRecordatorio == 0 ? marcado = false : marcado = true };
          

          let fechaR = new Date(fechaRecordatorio);
          let horaR = new Date('2020-01-01');
          horaR.setHours(horaRecordatorio.substr(0,2));
          horaR.setMinutes(horaRecordatorio.substr(3,2));
          // console.log(fechaR);

          let fechaA = new Date(_this.fechaActual());
          let horaA = new Date('2020-01-01');
          horaA.setHours(_this.horaActual().substr(0,2));
          horaA.setMinutes(_this.horaActual().substr(3,2));
          // console.log('actual: ' + horaA);
          // console.log('record: ' + horaR);

          // console.log('actual: ' + fechaA);
          // console.log('record: ' + fechaR);

          if(fechaR < fechaA && estadoRecordatorio!='completado'){
            estadoRecordatorio = 'omitido';
          }else if(fechaR.getTime() === fechaA.getTime() && horaR.getTime() < horaA.getTime() && estadoRecordatorio!='completado'){
            estadoRecordatorio = 'omitido';
          }

          const objetoRecordatorio =
          {
            nombre: nombreRecordatorio, etiqueta: etiquetaRecordatorio,
            materia: materiaRecordatorio, estado: estadoRecordatorio,
            fecha: fechaRecordatorio, hora: horaRecordatorio,
            descripcion: descripcionRecordatorio, id: idRecordatorio, check: marcado
          };

          const nuevoArreglo = [..._this.state.listaRecordatorios, objetoRecordatorio];
          _this.setState({ listaRecordatorios: nuevoArreglo });
          // console.log(objetoRecordatorio);
        }
        // console.log(_this.state.listaRecordatorios);
        }
      }
    };
    this.setState({isLoading: false});
    // let idUser = this.recuperarIDUsuario();
    console.log('USUARIO EN LA FUNCION:');
    console.log(this.state.id);
  // console.log(idUser);
    xhttp.open("GET", 'https://dory69420.000webhostapp.com/recuperarRecordatorios.php?id='+ this.state.id, true);
    xhttp.send();
  }


  fechaActual = () => {
    let actual = new Date();
    let fechaActual = actual.getFullYear() + '-' +  ((actual.getMonth() + 1) < 10 ? ('0' + (actual.getMonth() + 1)) : (actual.getMonth() + 1)) + '-' + actual.getDate()
    // console.log(fechaActual);
    return fechaActual;
  }

  horaActual = () => {
    let actual = new Date();
    let horaActual = (actual.getHours() < 10 ? ('0' + actual.getHours()) : actual.getHours()) + ':' + (actual.getMinutes() < 10 ? ('0' + actual.getMinutes()) : actual.getMinutes());
    // console.log(horaActual);
    return horaActual;
  }


  componentDidMount() {
    this.recuperarIDUsuario();
  }

  render() {
    const navigation = this.context;

    return (
      <>
        <View style={{ backgroundColor: currentTheme.backgroundColor, flex: 1 }}>

          <View style={styles.nav}>
            <MenuBar />
          </View>

          <View style={styles.filterButtonContainer}>

            <TouchableOpacity
              onPress={() => this.setState({ filtroMostrar: 'Todos' })}
              style={[styles.filterButton, this.state.filtroMostrar == 'Todos' ? { backgroundColor: currentTheme.quinaryColor } : {}]}
            >
              <Text
                style={[styles.filterText, this.state.filtroMostrar == 'Todos' ? { color: currentTheme.primaryColor } : {}]}
              >
                Todos
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.setState({ filtroMostrar: 'tarea' })}
              style={[styles.filterButton, this.state.filtroMostrar == 'tarea' ? { backgroundColor: currentTheme.quinaryColor } : {}]}
            >
              <Text
                style={[styles.filterText, this.state.filtroMostrar == 'tarea' ? { color: currentTheme.primaryColor } : {}]}
              >
                Tareas
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.setState({ filtroMostrar: 'examen' })}
              style={[styles.filterButton, this.state.filtroMostrar == 'examen' ? { backgroundColor: currentTheme.quinaryColor } : {}]}
            >
              <Text
                style={[styles.filterText, this.state.filtroMostrar == 'examen' ? { color: currentTheme.primaryColor } : {}]}
              >
                Exámenes
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.setState({ filtroMostrar: 'otro' })}
              style={[styles.filterButton, this.state.filtroMostrar == 'otro' ? { backgroundColor: currentTheme.quinaryColor } : {}]}
            >
              <Text
                style={[styles.filterText, this.state.filtroMostrar == 'otro' ? { color: currentTheme.primaryColor } : {}]}
              >
                Otros
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView>
            <View style={{ marginBottom: '10%' }}>
              <Collapse
                onToggle={() => this.setState({ isOpenCompletados: !this.state.isOpenCompletados })}
              >
                <CollapseHeader>
                  <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text style={styles.collapseTitle}>Completados</Text>
                    <Icon name={this.state.isOpenCompletados === true ? 'chevron-up' : 'chevron-down'} size={30} color={currentTheme.primaryColor} />
                  </View>
                </CollapseHeader>
                <CollapseBody>
                  <FlatList
                    data={this.state.filtroMostrar === 'Todos' ?
                    (this.state.listaRecordatorios.filter(objetoRecordatorio => objetoRecordatorio.estado === 'completado')) :
                    (this.state.listaRecordatorios.filter(objetoRecordatorio => objetoRecordatorio.estado === 'completado'
                                                                               && objetoRecordatorio.etiqueta === this.state.filtroMostrar))}
                    renderItem={({ item }) => <RenderRecordatorio item={item} />}
                    refreshing={this.state.isLoading}
                    onRefresh={() => {this.setState({isLoading: true});this.recuperarDatos();}}
                  />
                </CollapseBody>
              </Collapse>

              <Collapse
                onToggle={() => this.setState({ isOpenOmitidos: !this.state.isOpenOmitidos })}
              >
                <CollapseHeader>
                  <View style={{ flexDirection: 'row', marginTop: 5}}>
                    <Text style={styles.collapseTitle}>Omitidos</Text>
                    <Icon name={this.state.isOpenOmitidos === true ? 'chevron-up' : 'chevron-down'} size={30} color={currentTheme.primaryColor} />
                  </View>
                </CollapseHeader>
                <CollapseBody>
                  <FlatList
                    data={this.state.filtroMostrar === 'Todos' ?
                    (this.state.listaRecordatorios.filter(objetoRecordatorio => objetoRecordatorio.estado === 'omitido')) :
                    (this.state.listaRecordatorios.filter(objetoRecordatorio => objetoRecordatorio.estado === 'omitido'
                                                                             && objetoRecordatorio.etiqueta === this.state.filtroMostrar))}
                    renderItem={({ item }) => <RenderRecordatorio item={item} />}
                    refreshing={this.state.isLoading}
                    onRefresh={() => {this.setState({isLoading: true});this.recuperarDatos();}}
                  />
                </CollapseBody>
              </Collapse>

              <Collapse
                onToggle={() => this.setState({ isOpenPendientes: !this.state.isOpenPendientes })}
              >
                <CollapseHeader>
                  <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text style={styles.collapseTitle}>Pendientes</Text>
                    <Icon name={this.state.isOpenPendientes === true ? 'chevron-up' : 'chevron-down'} size={30} color={currentTheme.primaryColor} />
                  </View>
                </CollapseHeader>
                <CollapseBody>
                  <FlatList
                    data={this.state.filtroMostrar === 'Todos' ?
                    (this.state.listaRecordatorios.filter(objetoRecordatorio => objetoRecordatorio.estado === 'pendiente')) :
                    (this.state.listaRecordatorios.filter(objetoRecordatorio => objetoRecordatorio.estado === 'pendiente'
                                                                             && objetoRecordatorio.etiqueta === this.state.filtroMostrar))}
                    renderItem={({ item }) => <RenderRecordatorio item={item} />}
                    refreshing={this.state.isLoading}
                    onRefresh={() => {this.setState({isLoading: true});this.recuperarDatos();}}
                  />
                </CollapseBody>
              </Collapse>
            </View>
          </ScrollView>

        </View>

        {/* Botón para agregar recordatorios */}
        <TouchableOpacity onPress={() => { navigation.navigate("AddRecordatorio"); }} style={styles.addIcon}>
          <Icon name='plus-circle' size={50} color={currentTheme.primaryColor} />
        </TouchableOpacity>
      </>
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    width: width,
    height: 60,
  },
  addIcon: {
    position: 'absolute',
    zIndex: 1,
    bottom: 10,
    right: 10,
  },
  filterButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  filterButton: {
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
    borderRadius: 5,
    width: 80,
    padding: 3,
  },
  filterText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#A9A9A9',
  },
  collapseTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: currentTheme.tertiaryColor,
    marginLeft: 15,
    paddingBottom: 15,
  },
  collapseItems: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    color: currentTheme.tertiaryColor,
    backgroundColor: currentTheme.quinaryColor,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: currentTheme.secondaryColor,
    marginHorizontal: 30,
    padding: 10,
  },
});