import React, { Component, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Dimensions, Alert, ScrollView } from "react-native";
import currentTheme from '../Components/currentTheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Contact from '../Components/ContactList';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContext } from '@react-navigation/native';
import MenuBar from '../hotBar';

export default class AgendaAddContact extends Component {
  static contextType = NavigationContext;
  // Variables para la ventana
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      id_usuario: "",
      id_contacto: 0,
      telefono: "",
      correo: "",
      etiqueta: "",
    };
  }

  // Funciones para recuperar la id del usuario
  recuperarDatos = async() => {
    const jsonValue = await AsyncStorage.getItem('dataStorage');
    var data = JSON.parse(jsonValue);

    this.setState({id_usuario: data[0]});
    // console.log(this.state.id_usuario);
    this.recuperarID();
  }

  recuperarID = async() => {
      const jsonValue = await AsyncStorage.getItem('ActualizarC');
      var data = JSON.parse(jsonValue);

      this.setState({id_contacto: data[0]});
      this.recuperarContactos();
      // console.log(this.state.id_contacto);
  }

  recuperarContactos = () => {
    var xhttp = new XMLHttpRequest();
    let _this = this;

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status ==200){
        let nombreContacto = "";
        let id_usuarioContacto = "";
        let telefonoContacto = "";
        let correoContacto = "";
        let etiquetaContacto = "";
        let id_contactoContacto = -1;

        var contacto = xhttp.responseText;
        // console.log(contacto);

        var registros = contacto.split('|'); //Delimitador de registro

        var numeroRegistros = registros[0];

        for (let i = 1; i <= numeroRegistros; i++){
          var datos = registros[i].split('¬'); //Delimitador de campo
          // console.log('contacto: ' + datos[0]);

          if(datos[5] == _this.state.id_contacto){
            nombreContacto = datos[0];
            id_usuarioContacto = datos[1];
            telefonoContacto = datos[2];
            correoContacto = datos[3];
            etiquetaContacto = datos[4];
            id_contactoContacto = datos[5];

            _this.setState({nombre: nombreContacto});
            _this.setState({id_usuario: id_usuarioContacto});
            _this.setState({telefono: telefonoContacto});
            _this.setState({correo: correoContacto});
            _this.setState({etiqueta: etiquetaContacto});
            // console.log(_this.state.nombre, _this.state.telefono, _this.state.correo);
          }          
        }
      }
    };
    xhttp.open("GET", 'https://dory69420.000webhostapp.com/recuperarContacto.php?id=' + this.state.id_usuario,  true);
    xhttp.send();
  }

  componentDidMount(){
    this.recuperarDatos();
  }

  render() {
    const navigation = this.context;

    // Funcion para registro de informacion
    const editar = () => {

      // Expresion regular para nombres
      let exregNom = new RegExp("^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$");
      // Expresion regular para numeros telefonicos
      let exregTelefono = new RegExp("^([0-9]{10})$");
      // Expresion regular para correos
      let exregCorreo = new RegExp("^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$");

      //Aqui van las validaciones
      //Validacion de espacio vacio
      if(this.state.nombre == "" || this.state.telefono == "" || this.state.correo == "" || this.state.etiqueta == ""){
          Alert.alert("Hay campos vacios", "Necesita llenar todos los campos", [
            {
              text: "OK", onPress: () => console.log("Campos Vacios")
            }
          ]);
      }
      // Nombre no valido
      else if(!exregNom.test(this.state.nombre)){
        Alert.alert("Nombre invalido", "El nombre solo puede contener caracteres alfabeticos y espacios", [
          {
            text: "OK", onPress: () => console.log("Nombre Invalido")
          }
        ]);
      }
      // Telefono no valido
      else if(!exregTelefono.test(this.state.telefono)){
        Alert.alert("Telefono invalido", "El telefono solo puede contener caracteres numericos", [
          {
            text: "OK", onPress: () => console.log("Telefono invalido")
          }
        ]);
      }
      // Correo no valido
      else if(!exregCorreo.test(this.state.correo)){
        Alert.alert("Correo electronico invalido", "El correo ingresado no cumple con la estructura de un correo electronico", [
          {
            text: "OK", onPress: () => console.log("Correo electronico invalido")
          }
        ]);
      }
      //TODOS los campos validos
      else{
        var xhttp = new XMLHttpRequest();
        let _this = this;
          xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                  //???
              }
          };
          // Comando que se comunica con un PHP que hace los Query en la base de datos
          xhttp.open("GET", 'https://dory69420.000webhostapp.com/editarContacto.php?nombre=' + this.state.nombre +
          '&telefono=' + this.state.telefono + '&correo=' + this.state.correo + '&etiqueta=' + this.state.etiqueta +
          '&id_usuario=' + this.state.id_usuario + '&id=' + this.state.id_contacto, true);
          xhttp.send();

          // console.log('nombre: '+ this.state.nombre + 'usuario: ' + this.state.id_usuario + 'telefono: ' + this.state.telefono + 'correo: ' + this.state.correo + 'etiqueta: ' + this.state.etiqueta);
          
        }
        navigation.navigate("Agenda");
    }

    return (
      // Contenedor general
      <View style={[styles.wholeContainer, {backgroundColor: 'white'}]}>
        
        <View style={styles.nav}>
           <MenuBar/>
       </View>
        
        {/* Scrollview para que el teclado no desplace toda la ventana */}
        <ScrollView>   

          {/* Vista que contiene los campos de entradas de informacion */}
          <View style={[styles.inputFormat, {backgroundColor: 'white'}]}>
            
            {/* Titulo de la ventana */}
            {/* 
            <Text style={[styles.modalTitle, {color: currentTheme.primaryColor}]}>Ingrese nuevo contacto</Text> */}
            <View style={styles.foto}>
              <Icon name='account' size={95} color={currentTheme.quinaryColor}/>
            </View>

            {/* Linea divisoria 1 */}
            <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:2, width: width}}/>

            {/* Contenedor de icono e input: nombre */}
            <View style={styles.iconContainer}>

              {/* Icono de persona */}
              <Icon name='account-outline' size={35} color={'#C2C2C2'}/>

              {/* Input para nombre del contacto */}
              <TextInput style={styles.addInputFormat}
                  placeholder='Nombre del contacto'
                  placeholderTextColor='#C4C4C4'
                  maxLength={70}
                  clearTextOnFocus={true}
                  onChangeText = {(value) => this.setState({nombre: value})}
                  value={this.state.nombre}
              />

            </View>

            {/* Linea divisoria 2 */}
            <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:2, width: width}}/>

            {/* Contenedor de icono e input: telefono */}
            <View style={styles.iconContainer}>

              {/* Icono de teledono */}
              <Icon name='phone' size={32} color={'#C2C2C2'}/>

              {/* Input para telefono del contacto */}
              <TextInput style={styles.addInputFormat}
                  placeholder='Añadir número de teléfono'
                  placeholderTextColor='#C4C4C4'
                  keyboardType='phone-pad'
                  maxLength={10}
                  clearTextOnFocus={true}
                  onChangeText = {(value) => this.setState({telefono: value})}
                  value={this.state.telefono}
              />

            </View>

            {/* Linea divisoria 3 */}
            <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:2, width: width}}/>

            {/* Contenedor de icono e input: email */}
            <View style={styles.iconContainer}>

              {/* Icono de email */}
              <Icon name='email' size={30} color={'#C2C2C2'}/>

              {/* Input para email del contacto */}
              <TextInput style={styles.addInputFormat}
                  placeholder='Añadir correo electronico'
                  placeholderTextColor='#C4C4C4'
                  maxLength={64}
                  clearTextOnFocus={true}
                  onChangeText = {(value) => this.setState({correo: value})}
                  value={this.state.correo}
              />

            </View>

            {/* Linea divisoria 4 */}
            <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:2, width: width}}/>

          </View>

          {/* Contenedor para menu de etiquetas */}
          <View style={{backgroundColor: 'white', padding: 15}}>

            {/* Titulo de seccion */}
            <Text style={styles.tagFormat}>Etiqueta</Text>

            {/* Contenedor de los botones */}
            <View style={styles.buttonContainer}>

              {/* Boton para asignar Compañero */}
              <TouchableOpacity onPress={() => this.setState({etiqueta: 'Compañero'})}
                style={[styles.buttonFormat, this.state.etiqueta == 'Compañero' ? {backgroundColor: currentTheme.quinaryColor} : {}]}>
                <Text style={[styles.searchText, this.state.etiqueta == 'Compañero' ? {color: currentTheme.primaryColor} : {}]}>Compañero</Text>
              </TouchableOpacity>

              {/* Boton para asignar Profesor */}
              <TouchableOpacity onPress={() => this.setState({etiqueta: 'Profesor'})}
                style={[styles.buttonFormat, this.state.etiqueta == 'Profesor' ? {backgroundColor: currentTheme.quinaryColor} : {}]}>
                <Text style={[styles.searchText, this.state.etiqueta == 'Profesor' ? {color: currentTheme.primaryColor} : {}]}>Profesor</Text>
              </TouchableOpacity>

              {/* Boton para asignar Administrativo */}
              <TouchableOpacity onPress={() => this.setState({etiqueta: 'Administrativo'})}
                style={[styles.buttonFormat, this.state.etiqueta == 'Administrativo' ? {backgroundColor: currentTheme.quinaryColor} : {}]}>
                <Text style={[styles.searchText, this.state.etiqueta == 'Administrativo' ? {color: currentTheme.primaryColor} : {}]}>Administrativo</Text>
              </TouchableOpacity>

            </View>

          </View>

          {/* Contenedor de boton de editar */}
          <View style={[styles.addButtonContainer, {backgroundColor: 'white'}]}>

            {/* boton EDITAR, manda a llamar a la funcion editar */}
            <TouchableOpacity
              style={[styles.addButtonFormat, {backgroundColor: currentTheme.primaryColor}]}
              onPress={editar}
            >
                
              {/* Texto de botono */}
              <Text style={styles.addButtonText}>EDITAR</Text>

            </TouchableOpacity>

          </View>

        </ScrollView>

      </View>
    );
  }
}

// Variable de tamaño de pantalla para estilos
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    nav:{
      width: width,
      height: 60,
    },
    //Estilos para formulario
    wholeContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    iconContainer: {
      flexDirection: 'row',
      marginBottom: 10,
      marginTop: 10,
      alignItems:'center',
      marginLeft: 20,
    }, 
    modalTitle: {
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: 'center',
      marginBottom: 20,
    },
    foto: {
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: currentTheme.primaryColor,
      width: 120,
      height: 120,
      borderRadius: 100,
      marginBottom: 30,
      marginTop: 30,
    },
    searchText: {
      fontFamily: 'Sen',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 17,
      color: '#A9A9A9',
      marginTop: 2,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
    },
    addButtonContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    addButtonFormat: {
      padding: 5,
      borderRadius: 20,
      width: 140,
      height: 60,
    },
    buttonFormat: {
      backgroundColor: '#E5E5E5',
      padding: 5,
      paddingHorizontal: 8,
      borderRadius: 5,
      borderColor: '#E5E5E5',
    },
    addButtonText: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 18,
      color: '#FFFFFF',
      marginTop: 10,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
    },
    inputFormat: {
      marginTop: 15,
      marginBottom: 15,
    },
    tagFormat: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 18,
      display: 'flex',
      alignItems: 'center',
      color: '#00456e',
      marginBottom: 15,
    },
    addInputFormat: {
      fontSize: 18,
      textAlign: 'left',
      alignSelf: 'center',
      paddingLeft: 20,
    },
});