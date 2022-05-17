import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Button, Input} from 'react-native-elements'
import { NavigationContext } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

    this.setState({id: data[0]});
    console.log(this.state.id);
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
      <View>
        <Text> Por favor ingrese su nombre </Text>
        <Input
          onChangeText={(nombre => this.setState({nombre}))}
        />
        <Button title={"Checa"}
          onPress={Registro}
        />
        <Button title={"ENTRAR"}
            onPress={() => navigation.push('Menu')}
        />
      </View>
    );
  }
}
