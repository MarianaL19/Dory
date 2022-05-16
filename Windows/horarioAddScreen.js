import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView,
        Dimensions, Alert} from 'react-native';
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

    const registro = () => {

      if(this.state.nombre == "" || this.state.profesor == "" || this.state.aula == "" || 
      this.state.nrc == "" || this.state.color == ""){
        Alert.alert("Campos Vacios", "Es necesario que llenes todos los campos", [
          {
            text:"ok", onPress: ()=> console.log("Campos Vacios")
          }
        ]);

      } else {

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
                
          }
        };

        xhttp.open("GET", 'https://dory69420.000webhostapp.com/materias.php?nombre=' + this.state.nombre + 
        '&profesor=' + this.state.profesor + '&aula=' + this.state.aula + '&nrc=' + this.state.nrc + 
        '&color=' + this.state.color, true);
        xhttp.send();

      }
      
    }

    return (
      <View style = {styles.container}>
      <ScrollView>

        <View style={styles.nav}>
          <MenuBar/>
        </View>

        <TextInput 
          placeholder = "Nombre de la materia"
          style = {styles.input}
          clearTextOnFocus={true}
          onChangeText={(nombre => this.setState({nombre}))}
        />

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginBottom:5.5 ,marginTop: 6, flex: 2, height: .5, backgroundColor: currentTheme.primaryColor}} />
      </View>

      <View style = {styles.containerTitulo}>
        <Text style = {[styles.titulo,{color: currentTheme.quaternaryColor}]}> Horario </Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginTop: 6, flex: 2, height: .5, backgroundColor: currentTheme.primaryColor}} />
      </View>

        <TextInput 
        placeholder = "Selecciona el día"
        style = {styles.input}
        />

        {/* Sección para agregar las horas de inicio y fin */}

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

      {/* Sección para la información general de la materia */}

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginBottom:5.5 ,marginTop: 6, flex: 2, height: 1, backgroundColor: currentTheme.primaryColor}} />
      </View>

        <View style = {styles.containerTitulo}>
          <Text style = {[styles.titulo,{color: currentTheme.quaternaryColor}]}> Información </Text>
        </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginTop: 6, flex: 2, height: .5, backgroundColor: currentTheme.primaryColor}} />
      </View>

        <TextInput 
          placeholder = "Nombre del profesor"
          style = {styles.input}
          clearTextOnFocus={true}
          onChangeText={(profesor => this.setState({profesor}))}
        />

        <TextInput 
          placeholder = "Aula (Max. 5 Carácteres)"
          style = {styles.input}
          clearTextOnFocus={true}
          onChangeText={(aula => this.setState({aula}))}
          maxLength={5}
        />

        <TextInput 
          placeholder = "NRC (Max. 6 Carácteres)"
          style = {styles.input}
          clearTextOnFocus={true}
          onChangeText={(nrc => this.setState({nrc}))}
          maxLength={6}
        />

        <TextInput 
          placeholder = "Color"
          style = {styles.input}
          clearTextOnFocus={true}
          onChangeText={(color => this.setState({color}))}
        />

      </ScrollView>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginBottom:20 ,marginTop: 6, flex: 2, height: .5, backgroundColor: currentTheme.primaryColor}} />
      </View>

      <View style = {{alignItems: 'center'}}>
      <TouchableOpacity style = {[styles.boton, {backgroundColor: currentTheme.primaryColor}]} 
        onPress={registro}
      > 
          <Text style = {styles.textoBoton}> AÑADIR </Text>
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
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    paddingLeft: 30,
    flexDirection: 'row',
  },
  input: {
    fontSize: 15,
    paddingLeft: 50,
    paddingRight: 50,
    flexDirection: 'row',
  },
  boton: {
    width: 140,
    height: 60,
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