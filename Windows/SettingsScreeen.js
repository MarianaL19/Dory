import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions,
        TextInput, TouchableOpacity, Switch, Image, DevSettings} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContext } from '@react-navigation/native';

import HotBarToy from '../hotBarToy'

import currentTheme from '../Components/currentTheme';

const {width, height} = Dimensions.get("screen");

export default class SettingsScreeen extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        id: "",
        tag: "Button1",
        nuevoNombre: '',
    };
  }
  
  Button1Blue = () => {
    this.setState({tag: "Button1"});
    AsyncStorage.setItem('Theme', JSON.stringify(["1"]));

  }

  Button2Pink = () => {
    this.setState({tag: "Button2"});
    AsyncStorage.setItem('Theme', JSON.stringify(["2"]));

  }

  Button3Green = () => {
    this.setState({tag: "Button3"});
    AsyncStorage.setItem('Theme', JSON.stringify(["3"]));
  }

  recuperarDatos = async() => {
    const jsonValue = await AsyncStorage.getItem('dataStorage');
    var data = JSON.parse(jsonValue);

    this.setState({id: data[0]});
    console.log(this.state.id);
    this.nombreUser();
  }

  nombreUser = () => {
    let _this = this;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var nombre = xhttp.responseText;
            _this.setState({username: nombre});
        }
    };
    xhttp.open("GET", 'https://dory69420.000webhostapp.com/buscarUser.php?id=' + this.state.id, true);
    xhttp.send();
  }

  componentDidMount(){
    this.recuperarDatos();
  }

  render() {
    const navigation = this.context;

    const cambiarUsername = () => {
      let _this = this;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              
          }
      };
      xhttp.open("GET", 'https://dory69420.000webhostapp.com/cambiarNombre.php?id=' + this.state.id + '&nombre=' + this.state.nuevoNombre, true);
      xhttp.send();
      DevSettings.reload();
    };
    return (
        <View style={styles.container}>
          <HotBarToy/>
            <Text style={styles.TituloUsuario}>¡Hola, {this.state.username}!</Text>
  
            <View style={{flexDirection:"row", justifyContent: "space-around", backgroundColor: currentTheme.backgroundColor}}>
              {/* Casilla de input para texto (nombre de usuario) */}
              <TextInput 
                  style={styles.inputTexto}
                  placeholder="nombre de usuario"
                  onChangeText={(nuevoNombre => this.setState({nuevoNombre}))}
                  maxLength={20}
              />
              <TouchableOpacity style={{
                  alignItems: "center",
                  backgroundColor: "#E7E7E7",
                  width: width/10,
                  height: width/10,
                  borderRadius: 20,
                  marginTop: 30,}}
                  onPress={cambiarUsername}
              >
              </TouchableOpacity>
            </View>
            {/* La siguiente view es utilizada para crear una linea vertical */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{marginTop: 70, flex: 1, height: 1, backgroundColor: currentTheme.quinaryColor}} />
            </View>

            {/* A partir de aqui es el apartado de notificaciones */}
            <Text style={styles.titulo2}>Habilitar nofiticaciones</Text>
            <Switch 
            style={{marginTop: 30}}
            trackColor={{ false: "#767577", true: currentTheme.secondaryColor }}
            //thumbColor={isEnabled ? currentTheme.quinaryColor : "#f4f3f4"}
            //onValueChange={toggleSwitch}
            //value={isEnabled}
            ></Switch>
    
            {/* Aqui es la separación de Temas */}
            <View style={styles.Themes}>
              <Text style={{fontSize: width*0.05, paddingLeft: 46, marginTop: 15, color: currentTheme.tertiaryColor, fontWeight: "600",}}>Temas</Text>
            </View>
        
            {/* Aqui se contendran los temas */}
            <View style={{marginTop: 25, flexDirection:"row", justifyContent: "space-between"}}>
              
              {/* Funcionalidad Tema 1  */}
              <TouchableOpacity style={[styles.buttonTheme, this.state.tag == 'Button1' ? {backgroundColor: currentTheme.quinaryColor} : {}]} onPress={this.Button1Blue}>
                <Image style={{marginTop: 30, width: 70, height: 40}} source={require('../imagenes/doryBlue.png')}/>
              </TouchableOpacity>
              
              {/* Funcionalidad Tema 2 */}
              <TouchableOpacity style={[styles.buttonTheme, this.state.tag == 'Button2' ? {backgroundColor: currentTheme.quinaryColor} : {}]} onPress={this.Button2Pink}>
                <Image style={{marginTop: 30, width: 70, height: 40}} source={require('../imagenes/doryPink.png')}/>
              </TouchableOpacity>
      
              {/* Funcionalidad Tema 3 */}
              <TouchableOpacity style={[styles.buttonTheme, this.state.tag == 'Button3' ? {backgroundColor: currentTheme.quinaryColor} : {}]} onPress={this.Button3Green}>
                <Image style={{marginTop: 30, width: 70, height: 40}} source={require('../imagenes/doryGreen.png')}/>
              </TouchableOpacity>
              
            </View>

            {/* Aqui son los botones cerrar y guardar */}
            <View style={{marginBottom: 100, marginTop: 100, flexDirection: "row", justifyContent: "space-between", backgroundColor: currentTheme.backgroundColor}}>
              {/* Boton Cerrar */}
              <TouchableOpacity 
                  style={styles.button}
                  onPress={() => navigation.goBack()}
                  >
                  <Text style={{color: "white", marginTop: 8, fontSize: 18}}>CERRAR</Text>
              </TouchableOpacity>
              
              {/* Boton Guardar */}
              <TouchableOpacity 
                  style={styles.button}
                  //onPress={GUARDAR}
                  >
                  <Text style={{color: "white", marginTop: 8, fontSize: 18}}>GUARDAR</Text>
              </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      marginTop: 0,
      alignItems: "center",
      backgroundColor: currentTheme.backgroundColor,
      width: width,
      height: height,

    },
  
    TituloUsuario: {
      marginTop: 100,
      color: currentTheme.quaternaryColor,
      textAlign: "center",
      justifyContent: "center",
      fontSize: width*0.08,
      fontWeight: "600",
      
    },
    titulo2: {
      marginTop: 30,
      color: currentTheme.tertiaryColor,
      fontSize: width*0.05,
      fontWeight: "600",
    },
  
    inputTexto: {
      backgroundColor: "#E7E7E7",
      marginTop: 30,
      borderRadius: 20,
      textAlign: 'center',
      marginHorizontal: 5,
      width: width/1.5,
      height: width/10,
    },
    Themes: {
      height: 60,
      width: width,
      marginTop: 35,
      backgroundColor: currentTheme.backgroundColor,
      shadowOpacity: 0.5,
      shadowRadius: 25,
      elevation: 12,
      shadowColor: "#000",
    },
    button: {
      alignItems: "center",
      backgroundColor: currentTheme.quaternaryColor,
      width: 150,
      height: 42,
      borderRadius: 20,
      marginHorizontal: 15,
    },
    buttonTheme: {
      alignItems: "center",
      backgroundColor: "#E7E7E7",
      width: 100,
      height: 100,
      borderRadius: 25,
      marginHorizontal: 10,
      marginTop: 10,
    }
  });