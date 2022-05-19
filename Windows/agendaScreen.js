import React, { Component, useState } from 'react';
import currentTheme from '../Components/currentTheme';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Contact from '../Components/ContactList';
import { NavigationContext } from '@react-navigation/native';

export default class AgendaScreen extends Component {
  
  static contextType = NavigationContext;

  constructor(props) {
    super(props);
    this.state = {
      // variables para filtro y busquedas
      tagfilter: "Todos",
      search: "",
      listContact: [],
      // Variables de contacto por si acaso
      // nombre: "",
      // telefono: "",
      // correo: "",
      // etiqueta: "",
    };
  }

  recuperarDatos = () => {
    var xhttp = new XMLHttpRequest();
    let _this = this;

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status ==200){
        let nombre = "";
        let id_usuario = "";
        let telefono = "";
        let correo = "";
        let etiqueta = "";

        var contacto = xhttp.responseText;
        console.log(contacto);

        var registros = contacto.split('|'); //Delimitador de registro

        var numeroRegistros = registros[0];

        for (let i = 1; i <= numeroRegistros; i++){
          var datos = registros[i].split('¬'); //Delimitador de campo
          console.log('contacto: ' + datos[0]);
          nombre = datos[0];
          id_usuario = datos[1];
          telefono = datos[2];
          correo = datos[3];
          etiqueta = datos[4];

          const objetoContacto = {
            nombreC: nombre, ID_Usuario: id_usuario, telefonoC: telefono, correoC: correo, etiquetaC: etiqueta 
          };

          const nuevoArregloContactos = [..._this.state.listContact, objetoContacto];
          _this.setState({listContact: nuevoArregloContactos});
          console.log(objetoContacto);
        }
        console.log(_this.state.listContact);
      }
    };
    xhttp.open("GET", 'https://dory69420.000webhostapp.com/recuperarContacto.php',  true);
    xhttp.send();
  }

  componentDidMount(){
    this.recuperarDatos();
  }

  //Prueba
  //nota: forceupdate?
  
  render() {

    const navigation = this.context;

    return (
      
      <View style={[styles.wholeContainer, {backgroundColor: currentTheme.backgroundColor}]}>
      
        {/*Seccion de barra de busqueda*/}
        <View>

          <TextInput style={styles.searchBoxFormat}
            placeholder='Buscar contacto'
            placeholderTextColor='#C4C4C4'
          />

        </View>

        {/*Botones de filtros*/}
        <View style={styles.buttonContainer}>

          {/* Boton para ver Todos los contactos */}
          <TouchableOpacity onPress={() => this.setState({tagfilter: 'Todos'})}
            style={[styles.buttonFormat, this.state.tagfilter == 'Todos' ? {backgroundColor: currentTheme.quinaryColor} : {}]}>
            <Text style={[styles.searchText, this.state.tagfilter == 'Todos' ? {color: currentTheme.tertiaryColor} : {}]}>Todos</Text>
          </TouchableOpacity>

          {/* Boton para ver solo Compañeros */}
          <TouchableOpacity onPress={() => this.setState({tagfilter: 'Compañero'})}
            style={[styles.buttonFormat, this.state.tagfilter == 'Compañero' ? {backgroundColor: currentTheme.quinaryColor} : {}]}>
            <Text style={[styles.searchText, this.state.tagfilter == 'Compañero' ? {color: currentTheme.tertiaryColor} : {}]}>Compañero</Text>
          </TouchableOpacity>

          {/* Boton para ver solo profesor */}
          <TouchableOpacity onPress={() => this.setState({tagfilter: 'Profesor'})}
            style={[styles.buttonFormat, this.state.tagfilter == 'Profesor' ? {backgroundColor: currentTheme.quinaryColor} : {}]}>
            <Text style={[styles.searchText, this.state.tagfilter == 'Profesor' ? {color: currentTheme.tertiaryColor}: {}]}>Profesor</Text>
          </TouchableOpacity>

          {/* Boton para ver solo Administrativo */}
          <TouchableOpacity onPress={() => this.setState({tagfilter: 'Administrativo'})}
            style={[styles.buttonFormat, this.state.tagfilter == 'Administrativo' ? {backgroundColor: currentTheme.quinaryColor} : {}]}>
            <Text style={[styles.searchText, this.state.tagfilter == 'Administrativo' ? {color: currentTheme.tertiaryColor} : {}]}>Administrativo</Text>
          </TouchableOpacity>
          
        </View>

        {/*Area de scroll para ver contactos*/}
        {/* Validación para saber si hay contactos */}
        {!this.state.listContact.length ?
          ( //Si no los hay, muestra un mensaje
            <View style={[styles.emptyHeaderContainer, {backgroundColor: currentTheme.backgroundColor}]}>
              <Text style={styles.emptyHeader}>
                Parece que no tienes ningun contacto añadido, ¡Empieza añadiendo uno!
              </Text>
            </View>
          ) : 
              ( // Si hay contactos los muestra
                <FlatList
                  data={this.state.listContact}
                  //keyExtractor={item => item.nombre}
                  //renderItem={({ item }) => <Contact item={item.nombreC}/>} style={{ backgroundColor: currentTheme.backgroundColor }}
                  renderItem={({item}) => <TouchableOpacity><Text>{item.nombreC}</Text></TouchableOpacity>}
                />
              ) 
        }
        
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
    //Estilos para ver contactos
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 10,
      paddingHorizontal: 20,
    },
    buttonFormat: {
      backgroundColor: '#E5E5E5',
      padding: 5,
      paddingHorizontal: 10,
      borderRadius: 5,
      borderColor: '#E5E5E5',
    },
    searchBoxFormat: {
      backgroundColor: '#ffffff',
      borderRadius: 50,
      borderWidth: 3,
      borderColor: '#C4C4C4',
      padding: 3,
      fontSize: 15,
      textAlign: 'center',
      marginBottom: 20,
      marginTop: 15,
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
      alignItems: 'center',
      zIndex: -1,
      padding: 35,
    },
    emptyHeader: {
      fontSize: 30,
      fontWeight: 'bold',
      opacity: 0.5,
      bottom: 30,
    },
},);
  