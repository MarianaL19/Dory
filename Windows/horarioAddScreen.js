import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView,
        Dimensions, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DatePicker from 'react-native-date-picker';
import { cambioFormato } from '../Components/Date';

import currentTheme from '../Components/currentTheme';
import MenuBar from '../hotBar';

const {width, height} = Dimensions.get('screen');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      nombre: '',
      etiqueta: 'null',
      materia: 0,
      fecha: new Date(),
      fechaOpen: false,
      textFecha: 'Selecciona la fecha de entrega',
      hora: new Date(),
      horaOpen: false,
      textHora: 'Selecciona la hora de entrega',
      descripcion: '',
      estado: 'pendiente',
      usuarios: [],
    };
  }

  recuperarDatos = async() => {
    const jsonValue = await AsyncStorage.getItem('dataStorage');
    var data = JSON.parse(jsonValue);

    this.setState({id: data[0]});
    //console.log(this.state.id);
  }

  componentDidMount(){
    this.recuperarDatos();
  }

  render() {

    const registro = () => {

      let regex = new RegExp("^[a-zA-Z0-9_ ]+$");

      if(this.state.nombre == ""){
        Alert.alert("Campos Vacios", "Es necesario llenar todos los campos obligatorios", [
          {
              text:"ok", onPress: ()=> console.log("Campos Vacios")
          }
        ]);

      } else if(!regex.test(this.state.nombre)){
        Alert.alert("Error", "Nombre de materia invalido", [
          {
              text:"ok", onPress: ()=> console.log("Nombre invalido")
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

      <View style={styles.nav}>
        <MenuBar/>
      </View>


      <ScrollView>

        
        <TextInput 
          placeholder = "Nombre de la materia"
          style = {styles.input}
          clearTextOnFocus={true}
          onChangeText={(nombre => this.setState({nombre}))}
          maxLength={60}
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

        <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => this.setState({ fechaOpen: true })}>
              <Text style={styles.input}>{cambioFormato(this.state.textFecha)}</Text>
            </TouchableOpacity>
        </View>

        <Text style = {styles.subTitle}> Fin </Text>

        <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => this.setState({ fechaOpen: true })}>
              <Text style={styles.input}>{cambioFormato(this.state.textFecha)}</Text>
            </TouchableOpacity>
        </View>

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
          maxLength={70}
        />

        <TextInput 
          placeholder = "Aula"
          style = {styles.input}
          clearTextOnFocus={true}
          onChangeText={(aula => this.setState({aula}))}
          maxLength={5}
        />

        <TextInput 
          placeholder = "NRC"
          style = {styles.input}
          clearTextOnFocus={true}
          onChangeText={(nrc => this.setState({nrc}))}
          maxLength={6}
          keyboardType='number-pad'
        />

        <TextInput 
          placeholder = "Color"
          style = {styles.input}
          clearTextOnFocus={true}
          onChangeText={(color => this.setState({color}))}
        />

        {/* DatePickers */}

        <DatePicker
          modal
          open={this.state.fechaOpen}
          date={this.state.fecha}
          locale={'es'}
          mode={'date'}
          onConfirm={(date) => {
            this.setState({ fechaOpen: false })
            this.setState({ fecha: date })
            this.setState({ textFecha: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() })
          }}
          onCancel={() => {
            this.setState({ fechaOpen: false })
          }}
        />

        <DatePicker
          modal
          open={this.state.fechaOpen}
          date={this.state.fecha}
          locale={'es'}
          mode={'date'}
          onConfirm={(date) => {
            this.setState({ fechaOpen: false })
            this.setState({ fecha: date })
            this.setState({ textFecha: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() })
          }}
          onCancel={() => {
            this.setState({ fechaOpen: false })
          }}
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
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  containerTitulo: {
    backgroundColor: '#FFFFFF',
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
    marginBottom: 10,
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