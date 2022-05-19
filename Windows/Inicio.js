import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet,
        Image, KeyboardAvoidingView} from 'react-native';
import {Button, Input} from 'react-native-elements'
import { NavigationContext } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import currentTheme from '../Components/currentTheme';

const {width, height} = Dimensions.get('screen');

export default class Inicio extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      nombre:"",
      id:"",
    };
  }

  recuperarDatos = async() => {
    const jsonValue = await AsyncStorage.getItem('dataStorage');
    var data = JSON.parse(jsonValue);
    var menu = "Menu";

    this.setState({id: data[0]});
    console.log(this.state.id);
    if(this.state.id != 0){
      console.log("Hola");
      AsyncStorage.setItem('dataStorage2', JSON.stringify([menu]));
    }
  }

  componentDidMount(){
    this.recuperarDatos();
  }

  render() {
    const navigation = this.context;

    const Registro = () => {
      let _this = this;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              console.log(xhttp.responseText);
              AsyncStorage.setItem('dataStorage', JSON.stringify([xhttp.responseText]));
          }
      };
      xhttp.open("GET", 'https://dory69420.000webhostapp.com/usuarios.php?nombre=' + this.state.nombre, true);
      xhttp.send();
    }

    return (
      <KeyboardAvoidingView style={styles.bg}
        behavior='position'
      >
        <View style={styles.bg}>
          <Image source={require('../imagenes/encabezado.png')}
            style={styles.encabezado}
          />
          <Image source={require('../imagenes/Dory_texto.png')}
            style={styles.textoDory}
          />
          <Text style={styles.hola}> ¡Hola! </Text>
          <Text style={styles.textoWelcome}>Bienvenido a</Text>
          <Text style={styles.textoWelcome}>Dory</Text>
          <Text style={styles.alias}>Por favor ingrese un alías</Text>
          <View>
            <Input
              onChangeText={(nombre => this.setState({nombre}))}
              maxLength = {15}
              inputContainerStyle={{
                width: width-50,
                borderColor: 'white',
                borderRadius: 50,
                shadowColor: '#000000',
                shadowOpacity: 0.5,
                shadowRadius: 25,
                elevation: 12,
                backgroundColor: 'white',
            }}
            inputStyle={{
                fontSize: 22,
                fontWeight: 'bold',
                color: 'black',
                textAlign: 'center',
            }}
            />
          </View>
      
          <Button title={"ACEPTAR"}
            onPress={Registro}
            buttonStyle={{
              backgroundColor: currentTheme.quaternaryColor,
              borderWidth: 2,
              borderColor: currentTheme.quaternaryColor,
              borderRadius: 50,
              height: 60,
          }}
          containerStyle={{
              width: width/2,
              alignContent: 'center',
          }}
          titleStyle={{
            fontWeight: 'bold',
          }}
          />

          {/* Boton para probar la app */}
          {/* <Button title={"ENTRAR"}
              onPress={() => navigation.push('Menu')}
          /> */}
        </View>
      </KeyboardAvoidingView>
    );
  }
}


const styles = StyleSheet.create({
  bg :{
    backgroundColor: 'white',
    alignItems: 'center',
    width: width,
    height: height,
  },

  encabezado: {
    width: width,
    height: width*0.8,
    position: 'absolute',
  },

  textoDory: {
    width: 270,
    height: 40,
    marginTop: 80,
  },

  hola: {
    fontSize: 80,
    fontWeight: '600',
    color: 'black',
    marginTop: 100,
    marginBottom: 10,
  },

  textoWelcome:{
    fontSize: 38,
    fontWeight: '600',
    color: 'black',
  },

  alias: {
    fontSize: 18,
    fontWeight: '600',
    color: '#737373',
    marginTop: 20,
    marginBottom: 20,
  },
}
)