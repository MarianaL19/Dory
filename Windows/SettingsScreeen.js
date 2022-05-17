import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions,
        TextInput, TouchableOpacity, Switch} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContext } from '@react-navigation/native';

import currentTheme from '../Components/currentTheme';

const {width, height} = Dimensions.get("screen");

export default class SettingsScreeen extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        id: "",
    };
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
    return (
        <View style={styles.container}>
            <Text style={styles.TituloUsuario}>¡Hola, {this.state.username}!</Text>
  
            <View style={{flexDirection:"row", justifyContent: "space-around"}}>
            {/* Casilla de input para texto (nombre de usuario) */}
            <TextInput 
                style={styles.inputTexto}
                placeholder="nombre de usuario"
                //onChangeText={(value)=>setNombre(value)}
                maxLength={20}
            />
            <TouchableOpacity style={{
                alignItems: "center",
                backgroundColor: "#E7E7E7",
                width: 42,
                height: 42,
                borderRadius: 25,
                marginTop: 15,}}
                //onPress={cambiarUsername}
            >
                <Text style={{marginTop: 3, fontSize: 25 }}>💽</Text>
            </TouchableOpacity>
            </View>
            {/* La siguiente view es utilizada para crear una linea vertical */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 35, flex: 1, height: 1, backgroundColor: currentTheme.quinaryColor}} />
            </View>
    
            {/* A partir de aqui es el apartado de notificaciones */}
            <Text style={styles.titulo2}>Habilitar nofiticaciones</Text>
            <Switch 
            style={{marginTop: 15}}
            trackColor={{ false: "#767577", true: currentTheme.secondaryColor }}
            //thumbColor={isEnabled ? currentTheme.quinaryColor : "#f4f3f4"}
            //onValueChange={toggleSwitch}
            //value={isEnabled}
            ></Switch>
    
            {/* Aqui es la separación de Temas */}
            <View style={styles.Themes}>
            <Text style={{fontSize: 20, paddingLeft: 50, marginTop: 10, color: currentTheme.tertiaryColor, fontWeight: "600",}}>Temas</Text>
            </View>
        
            {/* Aqui se contendran los temas */}
            <View style={{marginTop: 25, flexDirection:"row", justifyContent: "space-between"}}>
            
            {/* Funcionalidad Tema 1 */}
            {/* <TouchableOpacity style={[styles.buttonTheme, tag == 'Button1' ? {backgroundColor: currentTheme.quinaryColor} : {}]} onPress={Tema1}>
                <Image 
                style={{marginTop: 30, width: 70, height: 40}}
                source = {require("../imagenes/doryBlue.png")}>
                </Image>
            </TouchableOpacity>  */}
    
            {/* Funcionalidad Tema 2 */}
            {/* <TouchableOpacity style={[styles.buttonTheme, tag == 'Button2' ? {backgroundColor: currentTheme.quinaryColor} : {}]} onPress={Tema2}>
                <Image 
                style={{marginTop: 30, width: 70, height: 40}}
                source = {require("../imagenes/doryPink.png")}> 
                </Image>
            </TouchableOpacity> */}
    
            {/* Funcionalidad Tema 3 */}
            {/* <TouchableOpacity style={[styles.buttonTheme, tag == 'Button3' ? {backgroundColor: currentTheme.quinaryColor} : {}]} onPress={Tema3}>
                <Image 
                    style={{marginTop: 30, width: 70, height: 40}}
                    source = {require("../imagenes/doryGreen.png")}>
                </Image> 
            </TouchableOpacity> */}
    
            </View>
    
            {/* Aqui son los botones cerrar y guardar */}
            <View style={{marginTop: 40, flexDirection: "row", justifyContent: "space-between"}}>
            
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
    },
  
    TituloUsuario: {
      marginTop: 40,
      color: currentTheme.quaternaryColor,
      textAlign: "center",
      justifyContent: "center",
      fontSize: 25,
      fontWeight: "600",
      
    },
    titulo2: {
      marginTop: 35,
      color: currentTheme.tertiaryColor,
      fontSize: 19,
      fontWeight: "600",
    },
  
    inputTexto: {
      backgroundColor: "#E7E7E7",
      marginTop: 15,
      alignContent: "center",
      borderRadius: 20,
      paddingLeft: 15,
      marginHorizontal: 5,
      width: 250,
      height: 42,
    },
    Themes: {
      height: 50,
      width: width,
      marginTop: 35,
      backgroundColor: "white",
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