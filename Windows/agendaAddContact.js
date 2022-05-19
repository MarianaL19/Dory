import React, { Component, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Dimensions, Alert, ScrollView } from "react-native";
import currentTheme from '../Components/currentTheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Contact from '../Components/ContactList';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContext } from '@react-navigation/native';

export default class AgendaAddContact extends Component {
  static contextType = NavigationContext;
  // Variables para la ventana
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      id_usuario: "",
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
    console.log(this.state.id_usuario);
  }

  componentDidMount(){
    this.recuperarDatos();
  }

  render() {
    const navigation = this.context;

    //Funciones para recuperar datos de usuario
    const restaurarValores = () => {
      this.setState({})
    }

    // Funcion para registro de informacion
    const registro = () => {

      // Expresion regular para nombres
      let exregNom = new RegExp("^[a-zA-Z ]+$");
      // Expresion regular para numeros telefonicos
      let exregTelefono = new RegExp("^([0-9]{10})$");
      // Expresion regular para correos
      let exregCorreo = new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$");

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
        Alert.alert("Nombre invalido", "El nombre solo puede contener caracteres alfabeticos", [
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
          xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                  //???
              }
          };
          // Comando que se comunica con un PHP que hace los Query en la base de datos
          xhttp.open("GET", 'https://dory69420.000webhostapp.com/addContact.php?nombre=' + this.state.nombre +
          '&telefono=' + this.state.telefono + '&correo=' + this.state.correo + '&etiqueta=' + this.state.etiqueta +
          '&id_usuario=' + this.state.id_usuario, true);
          xhttp.send();

          console.log('nombre: '+ this.state.nombre + 'usuario: ' + this.state.id_usuario + 'telefono: ' + this.state.telefono + 'correo: ' + this.state.correo + 'etiqueta: ' + this.state.etiqueta);
          navigation.navigate("Agenda");
        }

        
    }

    return (
      // Contenedor general
      <View style={[styles.wholeContainer, {backgroundColor: currentTheme.backgroundColor}]}>
        
        {/* Scrollview para que el teclado no desplace toda la ventana */}
        <ScrollView>   

          {/* Vista que contiene los campos de entradas de informacion */}
          <View style={[styles.inputFormat, {backgroundColor: currentTheme.backgroundColor}]}>
            
            {/* Titulo de la ventana */}
            <Text style={[styles.modalTitle, {color: currentTheme.primaryColor}]}>Ingrese nuevo contacto</Text>

            {/* Linea divisoria 1 */}
            <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:1, width: width}}/>

            {/* Contenedor de icono e input: nombre */}
            <View style={styles.iconContainer}>

              {/* Icono de persona */}
              <Icon name='account-outline' size={40} color={'#E5E5E5'}/>

              {/* Input para nombre del contacto */}
              <TextInput style={styles.addInputFormat}
                  placeholder='Nombre del contacto'
                  placeholderTextColor='#C4C4C4'
                  maxLength={70}
                  clearTextOnFocus={true}
                  onChangeText = {(nombre => this.setState({nombre}))}
              />

            </View>

            {/* Linea divisoria 2 */}
            <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:1, width: width}}/>

            {/* Contenedor de icono e input: telefono */}
            <View style={styles.iconContainer}>

              {/* Icono de teledono */}
              <Icon name='phone' size={40} color={'#E5E5E5'}/>

              {/* Input para telefono del contacto */}
              <TextInput style={styles.addInputFormat}
                  placeholder='Añadir número de teléfono'
                  placeholderTextColor='#C4C4C4'
                  keyboardType='number-pad'
                  maxLength={10}
                  clearTextOnFocus={true}
                  onChangeText = {(telefono => this.setState({telefono}))}
              />

            </View>

            {/* Linea divisoria 3 */}
            <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:1, width: width}}/>

            {/* Contenedor de icono e input: email */}
            <View style={styles.iconContainer}>

              {/* Icono de email */}
              <Icon name='email' size={40} color={'#E5E5E5'}/>

              {/* Input para email del contacto */}
              <TextInput style={styles.addInputFormat}
                  placeholder='Añadir correo electronico'
                  placeholderTextColor='#C4C4C4'
                  maxLength={64}
                  clearTextOnFocus={true}
                  onChangeText = {(correo => this.setState({correo}))}
              />

            </View>

            {/* Linea divisoria 4 */}
            <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:1, width: width}}/>

          </View>

          {/* Contenedor para menu de etiquetas */}
          <View style={{backgroundColor: currentTheme.backgroundColor, padding: 15}}>

            {/* Titulo de seccion */}
            <Text style={styles.tagFormat}>Etiqueta</Text>

            {/* Contenedor de los botones */}
            <View style={styles.buttonContainer}>

              {/* Boton para asignar Compañero */}
              <TouchableOpacity onPress={() => this.setState({etiqueta: 'Compañero'})}
                style={[styles.buttonFormat, this.state.etiqueta == 'Compañero' ? {backgroundColor: currentTheme.quinaryColor} : {}]}>
                <Text style={[styles.searchText, this.state.etiqueta == 'Compañero' ? {color: currentTheme.tertiaryColor} : {}]}>Compañero</Text>
              </TouchableOpacity>

              {/* Boton para asignar Profesor */}
              <TouchableOpacity onPress={() => this.setState({etiqueta: 'Profesor'})}
                style={[styles.buttonFormat, this.state.etiqueta == 'Profesor' ? {backgroundColor: currentTheme.quinaryColor} : {}]}>
                <Text style={[styles.searchText, this.state.etiqueta == 'Profesor' ? {color: currentTheme.tertiaryColor} : {}]}>Profesor</Text>
              </TouchableOpacity>

              {/* Boton para asignar Administrativo */}
              <TouchableOpacity onPress={() => this.setState({etiqueta: 'Administrativo'})}
                style={[styles.buttonFormat, this.state.etiqueta == 'Administrativo' ? {backgroundColor: currentTheme.quinaryColor} : {}]}>
                <Text style={[styles.searchText, this.state.etiqueta == 'Administrativo' ? {color: currentTheme.tertiaryColor} : {}]}>Administrativo</Text>
              </TouchableOpacity>

            </View>

          </View>

          {/* Contenedor de boton de Añador */}
          <View style={[styles.addButtonContainer, {backgroundColor: currentTheme.backgroundColor}]}>

            {/* boton Añadir, manda a llamar a la funcion registro */}
            <TouchableOpacity
              style={[styles.addButtonFormat, {backgroundColor: currentTheme.primaryColor}]}
              onPress={registro}
            >
                
              {/* Texto de botono */}
              <Text style={styles.addButtonText}>AÑADIR</Text>

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
    searchText: {
      fontFamily: 'Sen',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 18,
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
      marginBottom: 40,
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
      paddingHorizontal: 10,
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
      fontWeight: '600',
      fontSize: 25,
      display: 'flex',
      alignItems: 'center',
      color: '#00456e',
      marginBottom: 15,
      marginTop: 40,
    },
    addInputFormat: {
      fontSize: 18,
      textAlign: 'left',
      alignSelf: 'center',
      paddingLeft: 20,
    },
});