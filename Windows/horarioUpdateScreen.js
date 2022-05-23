import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Switch, Dimensions, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import currentTheme from '../Components/currentTheme';
import DatePicker from 'react-native-date-picker';
import { cambioFormato } from '../Components/Date';
import { NavigationContext } from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import MenuBar from '../hotBar';


const { width, height } = Dimensions.get('screen');

export default class MateriaUpdateScreen extends Component {

  static contextType = NavigationContext;

  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      id_usuario: '',
      nombre: '',
      profesor: '',
      aula: '',
      nrc: '',
      horaInicio: new Date(),
      horaInicioOpen: false,
      textHoraInicio: 'Selecciona la hora',
      horaFin: new Date(),
      horaFinOpen: false,
      textHoraFin: 'Selecciona la hora',
      dia: -1,
      color: ''
    };

  }

  recuperarIDNativo = async() => {
    const jsonValue = await AsyncStorage.getItem('dataStorage');
    var data = JSON.parse(jsonValue);

    this.setState({id: data[0]});
    console.log(this.state.id);
    this.recuperarDatos();
  }


  recuperarID = async() => {
    const jsonValue = await AsyncStorage.getItem('Actualizar');
    var data = JSON.parse(jsonValue);

    this.setState({id_materia: data[0]});
    console.log(this.state.id_materia);
    this.recuperarIDNativo();
  }

  recuperarDatos = () => {
    var xhttp = new XMLHttpRequest();
    let _this = this;       // Esto es para usar 'this' dentro de la función
  
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let nombreMateria = '';
        let profesorMateria = '';
        let aulaMateria = '';
        let nrcMateria = '';
        let diaMateria = '';
        let hora_inicio = '';
        let hora_fin = '';
        let id_materia = '';
        let colorMateria = '';
          
        var materia = xhttp.responseText;
            
        var registros = materia.split('|');
  
        var numeroRegistros = registros[0];
  
        for (let i=1; i<=numeroRegistros; i++){
          var datos = registros[i].split('¬');

          if(datos[7] == _this.state.id_materia ){
            nombreMateria = datos[0];
            profesorMateria = datos[1];
            aulaMateria = datos[2];
            nrcMateria = datos[3];
            diaMateria = datos[4];
            hora_inicio = datos[5];
            hora_fin = datos[6];
            id_materia = datos[7];
            colorMateria = datos[8];

            _this.setState({nombre: nombreMateria});
            _this.setState({profesor: profesorMateria});
            _this.setState({aula: aulaMateria});
            _this.setState({nrc: nrcMateria});
            _this.setState({dia: diaMateria});
            _this.setState({textHoraInicio: hora_inicio});
            _this.setState({textHoraFin: hora_fin});
            _this.setState({id: id_materia});
            _this.setState({color: colorMateria});
          }
        }
      }
    };
      xhttp.open("GET", 'https://dory69420.000webhostapp.com/recuperarMaterias.php?id=' + this.state.id
      , true);
      xhttp.send();
  }

  componentDidMount(){
    this.recuperarID();
  }

  render() {
    const navigation = this.context;

    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

    const editar = () => {

      let regex = new RegExp("^[a-zA-Z0-9_ ]+$");
      let regex2 = new RegExp("^[0-9]*$");

      if(this.state.nombre == "" || this.state.profesor == "" || this.state.aula == "" 
      || this.state.dia == 8 || this.state.textHoraInicio == 'Selecciona la hora'
      || this.state.textHoraFin == 'Selecciona la hora'){
        Alert.alert("Campos vacíos", "Es necesario llenar todos los campos obligatorios", [
          {
              text:"ok", onPress: ()=> console.log("Campos Vacios")
          }
        ]);
      }
      
      else if(!regex.test(this.state.nombre)){
        Alert.alert("Error", "Nombre de materia invalido, no se permiten caracteres especiales", [
          {
              text:"ok", onPress: ()=> console.log("Nombre Invalido")
          }
        ]);

      }else if(!regex.test(this.state.profesor)){
        Alert.alert("Error", "Nombre de maestro invalido, no se permiten caracteres especiales", [
          {
              text:"ok", onPress: ()=> console.log("Nombre Invalido")
          }
        ]);

      } else if(!regex.test(this.state.aula)){
        Alert.alert("Error", "Aula invalida, no se permiten caracteres especiales", [
          {
              text:"ok", onPress: ()=> console.log("Nombre Invalido")
          }
        ]);
      
      } else if(!regex2.test(this.state.nrc)){
        Alert.alert("Error", "NRC invalido, no se permiten caracteres especiales", [
          {
              text:"ok", onPress: ()=> console.log("Nombre Invalido")
          }
        ]);
      
      } else if(this.state.color == ""){
        Alert.alert("Error", "Es necesario elegir un color para la materia", [
          {
              text:"ok", onPress: ()=> console.log("Nombre Invalido")
          }
        ]);
      
      } else{
        var xhttp = new XMLHttpRequest();
        let _this = this;       // Esto es para usar 'this' dentro de la función

        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {

          }
        };

        xhttp.open("GET", 'https://dory69420.000webhostapp.com/editarMateria.php?nombre=' + this.state.nombre
          + '&profesor=' + this.state.profesor + '&aula=' + this.state.aula + '&nrc=' + this.state.nrc
          + '&color=' + this.state.color + '&dia=' + this.state.dia + '&hora_inicio=' + this.state.textHoraInicio +
          '&hora_fin=' + this.state.textHoraFin + '&id=' + this.state.id, true);
        xhttp.send();
      }

      navigation.navigate("Horario");
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
            onChangeText={(value) => this.setState({ nombre: value })} value={this.state.nombre}
            maxLength={60}
          />
      </View> 

      {/* Linea divisoria 1 */}
      <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:2.5, width: width}}/>

      <View style = {styles.containerTitulo}>
        <Text style = {[styles.titulo,{color: currentTheme.quaternaryColor}]}> Horario </Text>
      </View>

      <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:2.5, width: width}}/>

      <View style={styles.iconContainer}>
       <Icon name='calendar-blank-outline' size={30} color={'#C2C2C2'}/>

       {/* Selector */}

       <SelectDropdown
        data={dias}
        defaultButtonText={<Text style={{fontSize: 16, fontWeight: '500',color: '#A9A9A9'}}>Día</Text>}
        defaultValueByIndex = {this.state.dia}
        buttonStyle={styles.selector}
        buttonTextStyle={styles.selectorTexto}
        dropdownBackgroundColor = {'#FFFFFF'}
        onSelect={(selectedItem, index) => {
          this.setState({ dia: index }) 
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

      <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:2.5, width: width}}/>


        <View style = {styles.containerTitulo}>
          <Text style = {[styles.titulo,{color: currentTheme.quaternaryColor}]}> Información </Text>
        </View>

        <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:2.5, width: width}}/>


      <View style={styles.iconContainer}>
       <Icon name='human-male-board' size={30} color={'#C2C2C2'}/>
        <TextInput 
          placeholder = "Nombre del profesor"
          style = {styles.input}
          clearTextOnFocus={true}
          onChangeText={(value) => this.setState({ profesor: value })} value={this.state.profesor}
          maxLength={70}
        />
      </View>

      <View style={styles.iconContainer}>
       <Icon name='chair-school' size={30} color={'#C2C2C2'}/>
        <TextInput 
          placeholder = "Aula"
          style = {styles.input}
          clearTextOnFocus={true}
          onChangeText={(value) => this.setState({ aula: value })} value={this.state.aula}
          maxLength={5}
        />
      </View>

      <View style={styles.iconContainer}>
       <Icon name='magnify' size={30} color={'#C2C2C2'}/>
        <TextInput 
          placeholder = "NRC (opcional)"
          style = {styles.input}
          clearTextOnFocus={true}
          onChangeText={(value) => this.setState({ nrc: value })} value={this.state.nrc}
          maxLength={6}
          keyboardType='number-pad'
        />
      </View>

      {/* ColorPicker */}

      <View style={styles.iconContainer2}>
        <Icon name='palette' size={30} color={'#C2C2C2'}/>
        <Text style={[styles.modalDayText, {fontWeight: 'bold', textAlign: 'center'}]}> Color </Text>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 25, marginHorizontal: 20, alignItems: 'center', justifyContent: 'center'}}>

        <TouchableOpacity style={[styles.colorPickerBoton, {backgroundColor: '#67CB95'}]}
          onPress={() => this.setState({ color: '67CB95' })}>
          <Icon name='check' size={11} color={this.state.color === '67CB95' ? '#FFFFFF' : '#67CB95'}/>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.colorPickerBoton, {backgroundColor: '#D1B2D3'}]}
          onPress={() => this.setState({ color: 'D1B2D3' })}>
          <Icon name='check' size={11} color={this.state.color === 'D1B2D3' ? '#FFFFFF' : '#D1B2D3'}/>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.colorPickerBoton, {backgroundColor: '#16BDAE'}]}
          onPress={() => this.setState({ color: '16BDAE' })}>
          <Icon name='check' size={11} color={this.state.color === '16BDAE' ? '#FFFFFF' : '#16BDAE'}/>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.colorPickerBoton, {backgroundColor: '#ED8198'}]}
          onPress={() => this.setState({ color: 'ED8198' })}>
          <Icon name='check' size={11} color={this.state.color === 'ED8198' ? '#FFFFFF' : '#ED8198'}/>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.colorPickerBoton, {backgroundColor: '#4EB9E0'}]}
          onPress={() => this.setState({ color: '4EB9E0' })}>
          <Icon name='check' size={11} color={this.state.color === '4EB9E0' ? '#FFFFFF' : '#4EB9E0'}/>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.colorPickerBoton, {backgroundColor: '#F5B089'}]}
          onPress={() => this.setState({ color: 'F5B089' })}>
          <Icon name='check' size={11} color={this.state.color === 'F5B089' ? '#FFFFFF' : '#F5B089'}/>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.colorPickerBoton, {backgroundColor: '#BC9BE0'}]}
          onPress={() => this.setState({ color: 'BC9BE0' })}>
          <Icon name='check' size={11} color={this.state.color === 'BC9BE0' ? '#FFFFFF' : '#BC9BE0'}/>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.colorPickerBoton, {backgroundColor: '#F2A6AD'}]}
          onPress={() => this.setState({ color: 'F2A6AD' })}>
          <Icon name='check' size={11} color={this.state.color === 'F2A6AD' ? '#FFFFFF' : '#F2A6AD'}/>
        </TouchableOpacity>
      </View>

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
            this.setState({ textHoraInicio: (date.getHours() < 10 ? ('0' + date.getHours()) : date.getHours()) + ':' + (date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()) })
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
              this.setState({ textHoraFin: (date.getHours() < 10 ? ('0' + date.getHours()) : date.getHours()) + ':' + (date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()) })
            }}
            onCancel={() => {
              this.setState({ horaFinOpen: false })
            }}
          /> 

      <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:2.5, width: width, marginBottom: 10}}/>

      <View style = {{alignItems: 'center'}}>
        <TouchableOpacity style = {[styles.boton, {backgroundColor: currentTheme.primaryColor}]} 
          onPress={editar}
        > 
          <Text style = {styles.textoBoton}> GUARDAR </Text>
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
      fontSize: 16,
      paddingRight: 50,
      fontWeight: '500',
      flexDirection: 'row',
      color: 'black',
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
  iconContainer2: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    marginHorizontal: 140,
  },
  colorPickerBoton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom:20,
    marginHorizontal: 5,
    borderRadius: 100,
  },
  modalDayText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#C4C4C4',
    textAlign: 'center',
  },
})