import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView,
        Dimensions, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SelectDropdown from 'react-native-select-dropdown'

import currentTheme from '../Components/currentTheme';
import MenuBar from '../hotBar';

const {width, height} = Dimensions.get('screen');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      horaInicio: new Date(),
      horaInicioOpen: false,
      textHoraInicio: 'Selecciona la hora',
      horaFin: new Date(),
      horaFinOpen: false,
      textHoraFin: 'Selecciona la hora',
      dia: 0,
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

    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

    const registroMaximo = () => {
      registroMateria;
      registroHorario;
    }

    const registroMateria = () => {

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

    const registroHorario = () => {

      let regex = new RegExp("^[a-zA-Z0-9_ ]+$");
  
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
                  
          }
          
        xhttp.open("GET", 'https://dory69420.000webhostapp.com/horario.php?dia=' + this.state.dia + 
        '&hora_inicio=' + this.state.textHoraInicio + '&hora_fin=' + this.state.textHoraFin, true);
  
        xhttp.send();
  
      }
  
    }
    
    return (
      <View style = {styles.container}>

      <View style={styles.nav}>
        <MenuBar/>
      </View>

      <ScrollView>

      <View style={styles.iconContainer}>
        <Icon name='notebook' size={30} color={'#C2C2C2'}/>
          <TextInput 
            placeholder = "Nombre de la materia"
            style = {styles.input}
            clearTextOnFocus={true}
            onChangeText={(nombre => this.setState({nombre}))}
            maxLength={60}
          />
      </View> 

      {/* Linea divisoria 1 */}
      <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:3.5, width: width}}/>

      <View style = {styles.containerTitulo}>
        <Text style = {[styles.titulo,{color: currentTheme.quaternaryColor}]}> Horario </Text>
      </View>

      <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:3.5, width: width}}/>

      <View style={styles.iconContainer}>
       <Icon name='calendar-blank-outline' size={30} color={'#C2C2C2'}/>

       {/* Selector */}

       <SelectDropdown
        data={dias}
        defaultButtonText={'Selecciona el día'}
        buttonStyle={styles.selector}
        buttonTextStyle={styles.selectorTexto}
        dropdownBackgroundColor = {'#FFFFFF'}
        onSelect={(selectedItem, index) => {
          this.setState({ dia: index })
          console.log(selectedItem, index)
        }}

        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem
        }}

        rowTextForSelection={(item, index) => {
          return item
        }}
      />

      </View>

        {/* Sección para agregar las horas de inicio y fin */}

        <View style={styles.iconContainer}>
          <Icon name='clock-outline' size={30} color={'#C2C2C2'}/>

          <Text style = {styles.subTitle}> Inicio </Text>

          <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => this.setState({ horaInicioOpen: true })}>
                <Text style={styles.input}>{this.state.textHoraInicio}</Text>
              </TouchableOpacity>
          </View>
        </View>

        <View style={styles.iconContainer}>
          <Icon name='clock-time-three-outline' size={30} color={'#C2C2C2'}/>
          <Text style = {styles.subTitle}> Fin </Text>

          <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => this.setState({ horaFinOpen: true })}>
                <Text style={styles.input}>{this.state.textHoraFin}</Text>
              </TouchableOpacity>
          </View>
        </View>

      {/* Sección para la información general de la materia */}

      <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:3.5, width: width}}/>


        <View style = {styles.containerTitulo}>
          <Text style = {[styles.titulo,{color: currentTheme.quaternaryColor}]}> Información </Text>
        </View>

        <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:3.5, width: width}}/>


      <View style={styles.iconContainer}>
       <Icon name='human-male-board' size={30} color={'#C2C2C2'}/>
        <TextInput 
          placeholder = "Nombre del profesor"
          style = {styles.input}
          clearTextOnFocus={true}
          onChangeText={(profesor => this.setState({profesor}))}
          maxLength={70}
        />
      </View>


      <View style={styles.iconContainer}>
       <Icon name='chair-school' size={30} color={'#C2C2C2'}/>
        <TextInput 
          placeholder = "Aula"
          style = {styles.input}
          clearTextOnFocus={true}
          onChangeText={(aula => this.setState({aula}))}
          maxLength={5}
        />
      </View>

      <View style={styles.iconContainer}>
       <Icon name='magnify' size={30} color={'#C2C2C2'}/>
        <TextInput 
          placeholder = "NRC"
          style = {styles.input}
          clearTextOnFocus={true}
          onChangeText={(nrc => this.setState({nrc}))}
          maxLength={6}
          keyboardType='number-pad'
        />
      </View>

      <TextInput 
        placeholder = "Color"
        style = {styles.input}
        clearTextOnFocus={true}
        onChangeText={(color => this.setState({color}))}
      />

        {/* DatePicker */}

          <DatePicker
            modal
            open={this.state.horaInicioOpen}
            date={this.state.horaInicio}
            mode={'time'}
            minuteInterval={10}
            onConfirm={(date) => {
              this.setState({ horaInicioOpen: false })
              this.setState({ horaInicio: date })
              this.setState({ textHoraInicio: date.getHours() + ':' + (date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()) })
            }}
            onCancel={() => {
              this.setState({ horaInicioOpen: false })
            }}
          />

          <DatePicker
            modal
            open={this.state.horaFinOpen}
            date={this.state.horaFin}
            mode={'time'}
            minuteInterval={10}
            onConfirm={(date) => {
              this.setState({ horaFinOpen: false })
              this.setState({ horaFin: date })
              this.setState({ textHoraFin: date.getHours() + ':' + (date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()) })
            }}
            onCancel={() => {
              this.setState({ horaFinOpen: false })
            }}
          /> 

      <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:3.5, width: width, marginBottom: 10}}/>

      <View style = {{alignItems: 'center'}}>
        <TouchableOpacity style = {[styles.boton, {backgroundColor: currentTheme.primaryColor}]} 
          onPress={registroMaximo}
        > 
          <Text style = {styles.textoBoton}> AÑADIR </Text>
        </TouchableOpacity>
      </View>

      </ScrollView>

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
  selector: {
    backgroundColor: '#FFFFFF'
  },
  selectorTexto: {
      fontSize: 15,
      paddingRight: 50,
      flexDirection: 'row',
      color: '#A9A9A9',
      textAlign: 'left',
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
    paddingTop: 7,
    paddingLeft: 10,
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    fontSize: 15,
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
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
    marginLeft: 20,
  },
})