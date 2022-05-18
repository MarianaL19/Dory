import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity,
        Dimensions, FlatList, ScrollView} from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";

import MenuBar from '../hotBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import currentTheme from '../Components/currentTheme';
import AddRecordatorios from './recordatoriosAddScreen';
import { NavigationContext } from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

export default class Recordatorios extends Component {

  static contextType = NavigationContext;

  constructor(props) {
    super(props);
    this.state = {
      listaRecordatorios: [],
    };
  }

  recuperarDatos = () => {
    var xhttp = new XMLHttpRequest();
    let _this = this;       // Esto es para usar 'this' dentro de la función

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let nombreRecordatorio = '';
          let etiquetaRecordatorio = '';
          let materiaRecordatorio = '';
          let estadoRecordatorio = '';
          let fechaRecordatorio = '';
          let horaRecordatorio = '';
          let descripcionRecordatorio = '';
          let idRecordatorio = -1;

          var recordatorio = xhttp.responseText;
          
          var registros = recordatorio.split('|');

          var numeroRegistros = registros[0];

          for (let i=1; i<=numeroRegistros; i++){
            var datos = registros[i].split('¬');
            console.log('datos: ' + datos[0]);
            nombreRecordatorio = datos[0];
            etiquetaRecordatorio = datos[1];
            materiaRecordatorio = datos[2];
            estadoRecordatorio = datos[3];
            fechaRecordatorio = datos[4];
            horaRecordatorio = datos[5];
            descripcionRecordatorio = datos[6];
            idRecordatorio = datos[7];

            const objetoRecordatorio =
            {nombre: nombreRecordatorio, etiqueta: etiquetaRecordatorio,
             materia: materiaRecordatorio, estado: estadoRecordatorio,
             fecha: fechaRecordatorio, hora: horaRecordatorio,
             descripcion: descripcionRecordatorio, id: idRecordatorio};

            const nuevoArreglo = [..._this.state.listaRecordatorios, objetoRecordatorio];
            _this.setState({listaRecordatorios: nuevoArreglo});
            console.log(objetoRecordatorio);
          }
          console.log(_this.state.listaRecordatorios);
        }
    };
    xhttp.open("GET", 'https://dory69420.000webhostapp.com/recuperarRecordatorios.php'
    , true);
    xhttp.send();
    }

  componentDidMount(){
    this.recuperarDatos();
  }

  render() {
    const navigation = this.context;

    return (
      <>
      <View style = {{backgroundColor: currentTheme.backgroundColor, flex: 1}}>

        <View style={styles.nav}>
          <MenuBar/>
        </View>

        <View style={styles.filterButtonContainer}>
          
          <TouchableOpacity
          style={styles.filterButton}
          >
            <Text
            style={styles.filterText}
            >
              Todos
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
          style={styles.filterButton}
          >
            <Text
            style={styles.filterText}
            >
              Tareas
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
          style={styles.filterButton}
          >
            <Text
            style={styles.filterText}
            >
              Exámenes
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity
          style={styles.filterButton}
          >
            <Text
            style={styles.filterText}
            >
              Otros
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
        <View style = {{marginBottom: '50%'}}>
        <Collapse>
        <CollapseHeader>
          <Text style={styles.collapseTitle}>Completados</Text>
        </CollapseHeader>
        <CollapseBody>
        <FlatList
              data = {this.state.listaRecordatorios.filter(objetoRecordatorio => {
              return objetoRecordatorio.estado.includes('completado');})}

              renderItem={({item}) => <TouchableOpacity><Text style={styles.collapseItems}>{item.nombre}</Text></TouchableOpacity>}
          />
        </CollapseBody>
        </Collapse>

        <Collapse>
        <CollapseHeader>
          <Text style={styles.collapseTitle}>Omitidos</Text>
        </CollapseHeader>
        <CollapseBody>
        <FlatList
              data = {this.state.listaRecordatorios.filter(objetoRecordatorio => {
              return objetoRecordatorio.estado.includes('omitido');})}

              renderItem={({item}) => <TouchableOpacity><Text style={styles.collapseItems}>{item.nombre}</Text></TouchableOpacity>}
          />
        </CollapseBody>
        </Collapse>

        <Collapse>
        <CollapseHeader>
          <Text style={styles.collapseTitle}>Pendientes</Text>
        </CollapseHeader>
        <CollapseBody>
          <FlatList
              data = {this.state.listaRecordatorios.filter(objetoRecordatorio => {
              return objetoRecordatorio.estado.includes('pendiente');})}

              renderItem={({item}) => <TouchableOpacity><Text style={styles.collapseItems}>{item.nombre}</Text></TouchableOpacity>}
          />
        </CollapseBody>
        </Collapse>
        </View>
        </ScrollView>

      </View>

      {/* Botón para agregar recordatorios */}
      <TouchableOpacity onPress={() => {navigation.navigate("AddRecordatorio");}} style={styles.addIcon}>
        <Icon name='plus-circle' size={50} color={currentTheme.primaryColor}/>
      </TouchableOpacity>
      </>
    );
  }
}

const styles = StyleSheet.create({
  nav:{
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
  },
  filterButton: {
    alignItems: 'center',
    backgroundColor: currentTheme.quinaryColor,
    borderRadius: 5,
    width: 80,
    padding: 3,
  },
  filterText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: currentTheme.tertiaryColor,
  },
  collapseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: currentTheme.tertiaryColor,
    marginHorizontal: 15,
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