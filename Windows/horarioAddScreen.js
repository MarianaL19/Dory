import React, { Component } from 'react';

import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView,
        Dimensions} from 'react-native';
//import actualTheme from './Components/actualTheme';

import currentTheme from '../Components/currentTheme';

import MenuBar from '../hotBar';

const {width, height} = Dimensions.get('screen');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.container}>
      <ScrollView>

        <View style={styles.nav}>
          <MenuBar/>
        </View>

        <TextInput 
        placeholder = "Nombre de la materia"
        style = {styles.input}
        />

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginTop: 10, flex: 1, height: 2, backgroundColor: currentTheme.primaryColor}} />
      </View>

      <View style = {styles.containerTitulo}>
        <Text style = {[styles.titulo,{color: currentTheme.primaryColor}]}> Horario </Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginTop: 8, flex: 1, height: 2, backgroundColor: currentTheme.primaryColor}} />
      </View>

        <TextInput 
        placeholder = "Selecciona el día"
        style = {styles.input}
        />
        <Text style = {styles.subTitle}> Inicio </Text>
        <TextInput 
        placeholder = "Selecciona hora de inicio"
        style = {styles.input}
        />
        <Text style = {styles.subTitle}> Fin </Text>
        <TextInput 
        placeholder = "Selecciona hora de fin"
        style = {styles.input}
        />

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginTop: 2, flex: 1, height: 2, backgroundColor: currentTheme.primaryColor}} />
      </View>

      <View style = {styles.containerTitulo}>
      <Text style = {[styles.titulo,{color: currentTheme.primaryColor}]}> Información </Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginTop: 6, flex: 1, height: 2, backgroundColor: currentTheme.primaryColor}} />
      </View>

        <TextInput 
        placeholder = "Nombre del profesor"
        style = {styles.input}
        />
        <TextInput 
        placeholder = "Añadir descripción"
        style = {styles.input}
        />
        <TextInput 
        placeholder = "Aula"
        style = {styles.input}
        />
        <TextInput 
        placeholder = "NRC"
        style = {styles.input}
        />

      </ScrollView>

      <View style = {{alignItems: 'center'}}>
        <TouchableOpacity style = {styles.boton}> 
          <Text style = {styles.textoBoton}> GUARDAR </Text>
        </TouchableOpacity>
      </View>

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  nav:{
    width: width,
    height: 60,
  },

  container: {
    flex: 1,
    backgroundColor: '#F9FFF',
    justifyContent: 'center',
  },
  containerTitulo: {
    backgroundColor: '#F9FFF',
    textAlign: 'left',
    paddingLeft: 50,
  },
  titulo: {
    fontSize: 22,
    color: '#1B18F9',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
    paddingLeft: 40,
  },
  input: {
    fontSize: 19,
    paddingLeft: 50,
    paddingRight: 50,
  },
  boton: {
    width: 140,
    height: 60,
    backgroundColor: "#0E63F4",
    borderRadius: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  textoBoton: {
    fontSize: 21,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 13,
  },
})