import React, { Component, useState } from 'react';
import currentTheme from '../Components/currentTheme';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
  ScrollView,
  RefreshControl,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Contact from '../Components/ContactList';
import { NavigationContext } from '@react-navigation/native';
import MenuBar from '../hotBar';

// Variable de dimensiones
const {width, height} = Dimensions.get('screen');

// BUSQUEDA

export default class AgendaScreen extends Component {
  
  static contextType = NavigationContext;

  constructor(props) {
    super(props);
    this.state = {
      // variables para filtro y busquedas
      id: '',
      tagfilter: "Todos",
      search: "",
      listContact: [],
      refreshing: false,
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
    // Vacia la lista para nueva carga
    this.setState({listContact: []});
    var xhttp = new XMLHttpRequest();
    let _this = this;

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status ==200){
        let nombre = "";
        let id_contacto = "";
        let id_usuario = "";
        let telefono = "";
        let correo = "";
        let etiqueta = "";

        var contacto = xhttp.responseText;
        if (contacto != ''){

        var registros = contacto.split('|'); //Delimitador de registro

        var numeroRegistros = registros[0];

        for (let i = 1; i <= numeroRegistros; i++){
          var datos = registros[i].split('¬'); //Delimitador de campo
          // console.log('contacto: ' + datos[0]);
          nombre = datos[0];
          id_usuario = datos[1];
          telefono = datos[2];
          correo = datos[3];
          etiqueta = datos[4];
          id_contacto = datos[5];

          const objetoContacto = {
            ID_C: id_contacto,
            nombreC: nombre,
            ID_Usuario: id_usuario,
            telefonoC: telefono,
            correoC: correo,
            etiquetaC: etiqueta,
          };

          const nuevoArregloContactos = [..._this.state.listContact, objetoContacto];
          _this.setState({listContact: nuevoArregloContactos});
          // console.log(objetoContacto);
        }
        }
        // console.log(_this.state.listContact);
      }
    };
    // Cambia estado de cargando a falso
    this.setState({refreshing: false});
    xhttp.open("GET", 'https://dory69420.000webhostapp.com/recuperarContacto.php?id='+ this.state.id,  true);
    xhttp.send();
  }

  _onRefresh = () => {
    this.setState({listContact: []});
    this.recuperarDatos();
  }

  componentDidMount(){
    this.recuperarIDUsuario();
  }
  
  render() {

    const navigation = this.context;

    return (
      
      <View style={[styles.wholeContainer, {backgroundColor: currentTheme.backgroundColor}]}>
      
        {/* Menu header */}
        <View style={styles.nav}>
          <MenuBar/>
        </View>

        {/*Seccion de barra de busqueda*/}
        <View style={styles.iconContainerSearch}>

          {/* Icono lupa */}
          <Icon name='magnify' size={25} color={'#C2C2C2'}/>

          {/* Barra */}
          <TextInput style={{padding: 5}}
            placeholder='Buscar contacto'
            fontSize={18}
            placeholderTextColor='#C4C4C4'
            onChangeText = {(search => this.setState({search}))}
          />

        </View>

        {/*Botones de filtros*/}
        <View style={styles.buttonContainer}>

          {/* Boton para ver Todos los contactos */}
          <TouchableOpacity onPress={() => this.setState({tagfilter: 'Todos'})}
            style={[styles.buttonFormat, this.state.tagfilter == 'Todos' ? {backgroundColor: currentTheme.quinaryColor} : {}]}>
            <Text style={[styles.searchText, this.state.tagfilter == 'Todos' ? {color: currentTheme.primaryColor, marginHorizontal: 7} : {marginHorizontal: 7}]}>Todos</Text>
          </TouchableOpacity>

          {/* Boton para ver solo Compañeros */}
          <TouchableOpacity onPress={() => this.setState({tagfilter: 'Compañero'})}
            style={[styles.buttonFormat, this.state.tagfilter == 'Compañero' ? {backgroundColor: currentTheme.quinaryColor} : {}]}>
            <Text style={[styles.searchText, this.state.tagfilter == 'Compañero' ? {color: currentTheme.primaryColor} : {}]}>Compañero</Text>
          </TouchableOpacity>

          {/* Boton para ver solo profesor */}
          <TouchableOpacity onPress={() => this.setState({tagfilter: 'Profesor'})}
            style={[styles.buttonFormat, this.state.tagfilter == 'Profesor' ? {backgroundColor: currentTheme.quinaryColor} : {}]}>
            <Text style={[styles.searchText, this.state.tagfilter == 'Profesor' ? {color: currentTheme.primaryColor}: {}]}>Profesor</Text>
          </TouchableOpacity>

          {/* Boton para ver solo Administrativo */}
          <TouchableOpacity onPress={() => this.setState({tagfilter: 'Administrativo'})}
            style={[styles.buttonFormat, this.state.tagfilter == 'Administrativo' ? {backgroundColor: currentTheme.quinaryColor} : {}]}>
            <Text style={[styles.searchText, this.state.tagfilter == 'Administrativo' ? {color: currentTheme.primaryColor} : {}]}>Administrativo</Text>
          </TouchableOpacity>
          
        </View>

        {/*Area de scroll para ver contactos*/}
        <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={() => {this.setState({refreshing: true}); this._onRefresh();}}
          />
        }
        >
        {/* Validación para saber si hay contactos */}
        {!this.state.listContact.length ?
          ( //Si no los hay, muestra un mensaje
            <View style={[styles.emptyHeaderContainer, {backgroundColor: currentTheme.backgroundColor}]}>
              <Text style={[styles.emptyHeader, {justifyContent: 'center'}]}>
                Parece que no tienes ningun contacto añadido,
              </Text>
              <Text style={[styles.emptyHeader, {marginTop: 15}]}>¡Empieza añadiendo uno!</Text>
            </View>
          ) : (this.state.search === "" ? (
                <FlatList //Si hay elementos los muestra
                  data={this.state.tagfilter === 'Todos' ?
                                                          (this.state.listContact) : 
                                                          (this.state.tagfilter === 'Compañero' ?
                                                                                                  (this.state.listContact.filter(objetoContacto => objetoContacto.etiquetaC === 'Compañero')) : 
                                                                                                  (this.state.tagfilter === 'Profesor' ?
                                                                                                                                          (this.state.listContact.filter(objetoContacto => objetoContacto.etiquetaC === 'Profesor')) :
                                                                                                                                          (this.state.listContact.filter(objetoContacto => objetoContacto.etiquetaC === 'Administrativo'))
                                                                                                    )
                                                            )
                        }
                  renderItem={({ item }) => <Contact item={item}/>} style={{ backgroundColor: currentTheme.backgroundColor }}
                />) : (<FlatList //Solo muestra coincidencia exacta
                          data={this.state.listContact.filter(objetoContacto => objetoContacto.nombreC.toLowerCase() === this.state.search ||
                                                              objetoContacto.nombreC.toUpperCase() === this.state.search ||
                                                              objetoContacto.nombreC === this.state.search)}
                          renderItem={({ item }) => <Contact item={item}/>} style={{ backgroundColor: currentTheme.backgroundColor }}
                        />))
        }
        </ScrollView>
        {/*Botón para agregar contactos*/}
        <TouchableOpacity onPress={() => {navigation.navigate("AddContact");}} style={styles.addIcon} >
          <Icon name='plus-circle' size={50} color={currentTheme.primaryColor}/>
        </TouchableOpacity>

      </View>
      //Modal para ver contacto esta en ContactList.js
      //Esta aparece al seleccionar un contacto
    );
  }
}

const styles = StyleSheet.create({
    wholeContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    nav:{
      width: width,
      height: 60,
    },
    //Estilos para ver contactos
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 10,
      paddingHorizontal: 5,
    },
    iconContainerSearch: {
      flexDirection: 'row',
      marginBottom: 15,
      marginTop: 15,
      alignItems:'center',
      paddingHorizontal: 20,
      backgroundColor: '#ffffff',
      borderRadius: 50,
      padding: 3,
      alignSelf: 'center',
      textAlign: 'center',
      width: width*0.9,
      height: 50,
      // Para la sombra
      shadowOpacity: 0.5,
      shadowRadius: 5,
      shadowColor: '#470000',
      shadowOffset: {width: 10, height: 10},
      elevation: 10,
    }, 
    buttonFormat: {
      alignSelf: 'center',
      backgroundColor: '#E5E5E5',
      paddingVertical: 6,
      justifyContent: 'center',
      borderRadius: 5,
      alignItems: 'center',
      marginBottom: 10,
      marginHorizontal: 5,
    },
    searchBoxFormat: {
      backgroundColor: '#ffffff',
      borderRadius: 50,
      borderWidth: 3,
      borderColor: '#C4C4C4',
      padding: 3,
      fontSize: 15,
      alignSelf: 'center',
      textAlign: 'center',
      marginBottom: 20,
      marginTop: 15,
      width: width*0.9,
    },
    searchText: {
      fontFamily: 'Sen',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 14,
      color: '#A9A9A9',
      marginTop: 2,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      paddingHorizontal: 5,
    },
    addIcon: {
      position: 'absolute',
      zIndex: 1,
      bottom: 10,
      right: 10,
    },
    emptyHeaderContainer: {
      flex: 1,
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: 35,
      marginTop: 130,
    },
    emptyHeader: {
      alignSelf: 'center',
      fontSize: 23,
      fontWeight: 'bold',
      opacity: 0.5,
      bottom: 30,
    },
},);
  