import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Switch, Dimensions, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import currentTheme from '../Components/currentTheme';
import DatePicker from 'react-native-date-picker';
import { cambioFormato } from '../Components/Date';
import { NavigationContext } from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown'
import PushNotification from "react-native-push-notification";

import MenuBar from '../hotBar';


const { width, height } = Dimensions.get('screen');

export default class RecordatoriosAddScreen extends Component {
  static contextType = NavigationContext;

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      nombre: '',
      etiqueta: 'null',
      materia: 0,
      fecha: new Date(),
      fechaOpen: false,
      textFecha: 'Selecciona la fecha de entrega',
      hora: new Date(),
      horaOpen: false,
      textHora: '23:59:00',
      descripcion: '',
      estado: 'pendiente',
      marcado: 0,
      notificacion24: false,
      notificacion12: false,
      notificacionEntrega: false,
      listaMaterias: [],
      username: '',
    };

  }

  recuperarDatos = async() => {
    const jsonValue = await AsyncStorage.getItem('dataStorage');
    var data = JSON.parse(jsonValue);

    this.setState({id: data[0]});
    this.recuperarMaterias();
    this.nombreUser();
    // console.log(this.state.id);
  }

  recuperarMaterias = () => {
    var xhttp = new XMLHttpRequest();
    let _this = this;       // Esto es para usar 'this' dentro de la función

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let idMateria = '';
          let nombreMateria = '';

          var materia = xhttp.responseText;
          
          if(materia != ''){
          var registros = materia.split('|');

          var numeroRegistros = registros[0];

          for (let i=1; i<=numeroRegistros; i++){
            var datos = registros[i].split('¬');
            idMateria = datos[0];
            nombreMateria = datos[1];

            const objetoMateria = {id: idMateria, materia: nombreMateria};

            const nuevoArreglo = [..._this.state.listaMaterias, objetoMateria];
            _this.setState({listaMaterias: nuevoArreglo});
            // console.log(objetoMateria);
          }
          }
          // console.log(_this.state.listaMaterias);
        }
    };
    xhttp.open("GET", 'https://dory69420.000webhostapp.com/listadoMaterias.php?id=' + this.state.id
    , true);
    xhttp.send();
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

    const restaurarValores = () => {
      this.setState({nombre: '', etiqueta: 'null', materia: 0, textFecha: 'Selecciona la fecha de entrega',
      textHora: '23:59:00',descripcion: '', notificacionEntrega: false, notificacion12: false, notificacion24: false})
    }

    const registro = () => {
      let notiEntrega; 
      let noti12;
      let noti24;

      {this.state.notificacionEntrega === false ? notiEntrega = 0 : notiEntrega = 1};
      {this.state.notificacion12 === false ? noti12 = 0 : noti12 = 1};
      {this.state.notificacion24 === false ? noti24 = 0 : noti24 = 1};


      let regex = new RegExp("^[a-z0-9À-ÿ\u00f1\u00d1,.:!¡()¿?#$%&'*+/-_ ]+$");
      let regex2 = new RegExp("^[a-z0-9À-ÿ\u00f1\u00d1,.:!¡()¿?#$%&'*+/-_ ]*$");

      if(this.state.nombre == "" || this.state.etiqueta == "null" || this.state.materia == 0 || 
        this.state.textFecha == "Selecciona la fecha de entrega"){
        Alert.alert("Campos vacíos", "Es necesario llenar todos los campos obligatorios", [
          {
              text:"ok", onPress: ()=> console.log("Campos Vacios")
          }
        ]);
      }
      
      else if(!regex.test(this.state.nombre)){
        Alert.alert("Error", "Nombre Inválido, no se permiten caracteres especiales", [
          {
              text:"ok", onPress: ()=> console.log("Nombre Invalido")
          }
        ]);
      }else if(!regex2.test(this.state.descripcion)){
        Alert.alert("Error", "Descripción Inválida, no se permiten caracteres especiales", [
          {
              text:"ok", onPress: ()=> console.log("Descripción Invalida")
          }
        ]);
      }else{
        var xhttp = new XMLHttpRequest();
        let _this = this;       // Esto es para usar 'this' dentro de la función

        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
          }
        };

        xhttp.open("GET", 'https://dory69420.000webhostapp.com/addRecordatorio.php?nombre=' + this.state.nombre
          + '&etiqueta=' + this.state.etiqueta + '&materia=' + this.state.materia + '&fecha=' + this.state.textFecha
          + '&hora=' + this.state.textHora + '&descripcion=' + this.state.descripcion + '&estado=' + this.state.estado
          + '&id=' + this.state.id + '&marcado=' + this.state.marcado + '&notiEntrega=' + notiEntrega + '&noti12=' + noti12 + '&noti24=' + noti24, true);
        xhttp.send();

        // console.log('nombre=' + this.state.nombre
        // + '&etiqueta=' + this.state.etiqueta + '&materia=' + this.state.materia + '&fecha=' + this.state.textFecha
        // + '&hora=' + this.state.textHora + '&descripcion=' + this.state.descripcion + '&estado=' + this.state.estado
        // + '&id=' + this.state.id + '&marcado=' + this.state.marcado  + '&notificacionEntrega=' + notiEntrega
        // + '&notificacion12=' + noti12 + '&notificacion24=' + noti24,true);
        restaurarValores();
        crearFecha();

        if(this.state.notificacionEntrega){
          handleNotficationDay(this.state.nombre, this.state.descripcion, this.state.fecha);
        }
  
        if(this.state.notificacion12){
          console.log(this.state.fecha);
          handleNotfication12(this.state.nombre, this.state.descripcion, this.state.fecha);
        }
  
        if(this.state.notificacion24){
          handleNotfication24(this.state.nombre, this.state.descripcion, this.state.fecha);
        }

        navigation.navigate("Recordatorios");
      }

    }

    const handleNotfication12 = (titulo, descripcion, fecha) => {

      PushNotification.localNotificationSchedule({
          channelId: 'Prueba',
          title: titulo,
          message: 'Hola ' + this.state.username + ', tienes un pendiente dentro de 12 horas',
          //bigText: descripcion,
          date: fecha,
          allowWhileIdle: true,
      });
    }

    const handleNotfication24 = (titulo, descripcion, fecha) => {

      PushNotification.localNotificationSchedule({
          channelId: 'Prueba',
          title: titulo,
          message: 'Hola ' + this.state.username + ', tienes un pendiente dentro de 24 horas',
          //bigText: descripcion,
          date:fecha,
          allowWhileIdle: true,
      });
    }

    const handleNotficationDay = (titulo, descripcion, fecha) => {
      PushNotification.localNotificationSchedule({
        channelId: 'Prueba',
        title: titulo,
        message: 'Hola ' + this.state.username + ', tienes un pendiente ahora',
        //bigText: descripcion,
        date: fecha,
        allowWhileIdle: true,
    });
    }

    const crearFecha = () => {
      if(this.state.notificacion12){
        this.state.fecha.setHours(this.state.hora.getHours() - 12);
        this.state.fecha.setMinutes(this.state.hora.getMinutes());
        this.state.fecha.setSeconds(0);
        this.state.fecha.setMilliseconds(0);
      }
      if(this.state.notificacion24){
        this.state.fecha.setHours(this.state.hora.getHours() - 24);
        this.state.fecha.setMinutes(this.state.hora.getMinutes());
        this.state.fecha.setSeconds(0);
        this.state.fecha.setMilliseconds(0);
      }
      if(this.state.notificacionEntrega){
        this.state.fecha.setHours(this.state.hora.getHours());
        this.state.fecha.setMinutes(this.state.hora.getMinutes());
        this.state.fecha.setSeconds(0);
        this.state.fecha.setMilliseconds(0);
      }
    }

    return (
      <View style={styles.container}>

      <View style={styles.nav}>
        <MenuBar/>
      </View>

        <ScrollView>
          <Text style={[styles.title, { color: currentTheme.quaternaryColor }]}>Nuevo recordatorio</Text>

          <View style={{ borderBottomColor: currentTheme.quinaryColor, borderBottomWidth: 2.8, width: width }} />

          <TextInput placeholder="Título del recordatorio" keyboardType="default" style={[styles.inputs, { marginVertical: 5, paddingHorizontal: 10 }]}
            onChangeText={(value) => this.setState({ nombre: value })} value={this.state.nombre} maxLength={100}/>

          <View style={{ borderBottomColor: currentTheme.quinaryColor, borderBottomWidth: 2.8, width: width }} />

          {/* ~~~~~~~~ Etiquetas de tipo de recordatorio ~~~~~~~~ */}
          <Text style={[styles.subtitle, { color: currentTheme.tertiaryColor }]}>Tipo de recordatorio</Text>

          <View style={styles.filterButtonContainer}>
            <TouchableOpacity onPress={() => this.setState({ etiqueta: 'tarea' })}
              style={[styles.filterButton, this.state.etiqueta == 'tarea' ? { backgroundColor: currentTheme.quinaryColor } : {}]}>
              <Text style={[styles.filterText, this.state.etiqueta == 'tarea' ? { color: currentTheme.primaryColor } : {}]}>Tarea</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.setState({ etiqueta: 'examen' })}
              style={[styles.filterButton, this.state.etiqueta == 'examen' ? { backgroundColor: currentTheme.quinaryColor } : {}]}>
              <Text style={[styles.filterText, this.state.etiqueta == 'examen' ? { color: currentTheme.primaryColor } : {}]}>Examen</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {this.setState({ etiqueta: 'otro' }); this.setState({materia: -1})}}
              style={[styles.filterButton, this.state.etiqueta == 'otro' ? { backgroundColor: currentTheme.quinaryColor } : {}]}>
              <Text style={[styles.filterText, this.state.etiqueta == 'otro' ? { color: currentTheme.primaryColor } : {}]}>Otro</Text>
            </TouchableOpacity>
          </View>

          <View style={{ borderBottomColor: currentTheme.quinaryColor, borderBottomWidth: 2.8, width: width }} />


          {/* ~~~~~~~~ Materia ~~~~~~~~ */}

          {this.state.etiqueta != 'otro' ? (
            <>
              <View style={styles.iconContainer}>
                <Icon name='notebook' size={25} color='#A9A9A9' />
                <SelectDropdown
                  data={this.state.listaMaterias}
                  defaultButtonText={'Materia'}
                  buttonStyle={styles.selector}
                  buttonTextStyle={styles.selectorTexto}
                  dropdownBackgroundColor = {'#FFFFFF'}
                  onSelect={(selectedItem, index) => {
                    this.setState({materia: selectedItem.id})
                  }}

                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem.materia
                  }}

                  rowTextForSelection={(item, index) => {
                    return item.materia
                  }}
                />
              </View>
            </>
          ) : null}



          {/* ~~~~~~~~ Seleccionar la fecha y hora de entrega ~~~~~~~~ */}

          <View style={styles.iconContainer}>
            <Icon name='calendar-blank-outline' size={25} color='#A9A9A9' />
            <TouchableOpacity onPress={() => this.setState({ fechaOpen: true })}>
              <Text style={styles.inputs}>{cambioFormato(this.state.textFecha)}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.iconContainer}>
            <Icon name='clock-time-four-outline' size={25} color='#A9A9A9' />
            <TouchableOpacity onPress={() => this.setState({ horaOpen: true })}>
              <Text style={[styles.inputs, this.state.textHora === '23:59:00' ? {color: '#A9A9A9'} : {}]}>
                    {this.state.textHora === '23:59:00' ? 'Selecciona la hora de entrega   (opcional)' : this.state.textHora}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ borderBottomColor: currentTheme.quinaryColor, borderBottomWidth: 2.8, width: width }} />

          {/* ~~~~~~~~ Descripción ~~~~~~~~ */}

          <View style={styles.iconContainer}>
            <Icon name='pencil' size={25} color='#A9A9A9' />
            <TextInput multiline={true} numberOfLines={3} placeholder="Descripción     (opcional)" keyboardType="default" style={[styles.inputs, { width: width * 0.8 }]}
              onChangeText={(value) => this.setState({ descripcion: value })} value={this.state.descripcion} maxLength={280}/>
          </View>
          <View style={{ borderBottomColor: currentTheme.quinaryColor, borderBottomWidth: 2.8, width: width }} />


          {/* ~~~~~~~~ Notificar recordatorio encabezado ~~~~~~~~ */}

          <View style={[styles.iconContainer, { paddingTop: 10 }]}>
            <Icon name='bell' size={27} color={currentTheme.primaryColor} />
            <Text style={[styles.notificarText, { color: currentTheme.tertiaryColor }]}>Notificar recordatorio</Text>
          </View>


          {/* ~~~~~~~~ Opciones de notificar recordatorio ~~~~~~~~ */}

          <View style={styles.opcRecordatorioContainer}>
            <Text style={[styles.recordatoriosText, { color: currentTheme.tertiaryColor }]}>Hora de entrega</Text>
            <Switch
            value={this.state.notificacionEntrega}
            onValueChange={(value) => this.setState({notificacionEntrega: value})}
            trackColor={{ false: currentTheme.quinaryColor, true: currentTheme.secondaryColor }}
            />
          </View>

          <View style={styles.opcRecordatorioContainer}>
            <Text style={[styles.recordatoriosText, { color: currentTheme.tertiaryColor }]}>12 horas antes</Text>
            <Switch
            value={this.state.notificacion12}
            onValueChange={(value) => this.setState({notificacion12: value})}
            trackColor={{ false: currentTheme.quinaryColor, true: currentTheme.secondaryColor }}
            />
          </View>

          <View style={styles.opcRecordatorioContainer}>
            <Text style={[styles.recordatoriosText, { color: currentTheme.tertiaryColor }]}>24 horas antes</Text>
            <Switch
            value={this.state.notificacion24}
            onValueChange={(value) => this.setState({notificacion24: value})}
            trackColor={{ false: currentTheme.quinaryColor, true: currentTheme.secondaryColor }}
            />
          </View>

          {/* Botón para guardar el recordatorio */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={registro} style={[styles.addButton, { backgroundColor: currentTheme.primaryColor }]}>
              <Text style={styles.buttonText}>AÑADIR</Text>
            </TouchableOpacity>
          </View>

          {/* ~~~~~~~~ Dates pickers ~~~~~~~~ */}
          <DatePicker
            modal
            open={this.state.fechaOpen}
            date={this.state.fecha}
            locale={'es'}
            mode={'date'}
            onConfirm={(date) => {
              this.setState({ fechaOpen: false })
              this.setState({ fecha: date })
              this.setState({ textFecha: date.getFullYear() + '-' + (date.getMonth()+1 < 10 ? ('0' + (date.getMonth()+1)) : (date.getMonth()+1)) + '-' + date.getDate() })
            }}
            onCancel={() => {
              this.setState({ fechaOpen: false })
            }}
          />


          <DatePicker
            modal
            open={this.state.horaOpen}
            date={this.state.hora}
            mode={'time'}
            onConfirm={(date) => {
              this.setState({ horaOpen: false })
              this.setState({ hora: date })
              this.setState({ textHora: date.getHours() + ':' + (date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()) })
            }}
            onCancel={() => {
              this.setState({ horaOpen: false })
            }}
          />

        </ScrollView>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  nav:{
    width: width,
    height: 60,
  },
  filterButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
    marginLeft: 20,
  },
  addButton: {
    borderRadius: 5,
    padding: 3,
    marginTop: 20,
    marginBottom: 20,
  },
  filterButton: {
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
    borderRadius: 5,
    padding: 6,
    paddingHorizontal: 25,
  },
  filterText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#A9A9A9',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 10,
  },
  notificarText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginBottom: 3,
  },
  inputs: {
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 8,
    marginRight: 50,
    color: '#1C1A1B',
  },
  recordatoriosText: {
    color: "#00456E",
    fontSize: 15,
    fontWeight: '500',
    marginHorizontal: 20,
    marginVertical: 7,
  },
  opcRecordatorioContainer: {
    paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonText: {
    color: "#FAF9F3",
    fontSize: 18,
    fontWeight: "600",
    paddingHorizontal: 25,
    paddingVertical: 5,
  },
  selector: {
    backgroundColor: '#FFFFFF'
  },
  selectorTexto: {
      fontSize: 15,
      fontWeight: '600',
      paddingRight: 50,
      flexDirection: 'row',
      color: 'black',
      textAlign: 'left',
  },
});