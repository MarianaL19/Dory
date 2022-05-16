import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Switch, Dimensions, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import currentTheme from '../Components/currentTheme';
import DatePicker from 'react-native-date-picker';
import { cambioFormato } from '../Components/Date';
import { NavigationContext } from '@react-navigation/native';


const { width, height } = Dimensions.get('screen');

export default class RecordatoriosAddScreen extends Component {
  static contextType = NavigationContext;

  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    const navigation = this.context;

    // function RegistrarUsuario() {
    //   handleonSubmit('fabian');
    //   // console.log(this.usuarios)
    // }

    // const handleonSubmit = async (nombre) => {
    //   const usuario = { id: addUsuario(nombre), nombre: nombre};
    //   const updateUsuarios = await [...this.usuarios, usuario];
    //   setTasks(updateUsuarios);
    //   await AsyncStorage.setItem('usuarios', JSON.stringify(updateUsuarios));
    // }

    // const addUsuario = (nombreU) => {
    //   var xhttp = new XMLHttpRequest();
    //     xhttp.onreadystatechange = function() {
    //         if (this.readyState == 4 && this.status == 200) {
                
    //         }
    //     };
    //     xhttp.open("GET", 'https://dory69420.000webhostapp.com/usuarios.php?nombre=' + nombreU, true);
    //     xhttp.send();
    //     console.log('RESPUESTA: ' + xhttp.responseText);
    //     return(xhttp.responseText);
    // }

    const restaurarValores = () => {
      this.setState({nombre: '', etiqueta: 'null', materia: 0, textFecha: 'Selecciona la fecha de entrega',
      textHora: 'Selecciona la hora de entrega',descripcion: ''})
    }

    const registro = () => {
      let regex = new RegExp("^[a-zA-Z0-9_ ]+$");

      if(this.state.nombre == "" || this.state.etiqueta == "null" || this.state.materia == 0 || 
        this.state.textFecha == "Selecciona la fecha de entrega" || this.state.textHora == "Selecciona la hora de entrega"){
        Alert.alert("Campos vacíos", "Es necesario llenar todos los campos obligatorios", [
          {
              text:"ok", onPress: ()=> console.log("Campos Vacios")
          }
        ]);
      }
      
      else if(!regex.test(this.state.nombre)){
        Alert.alert("Error", "Nombre Inválido", [
          {
              text:"ok", onPress: ()=> console.log("Nombre Invalido")
          }
        ]);
      }

      else{
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {

          }
        };
        xhttp.open("GET", 'https://dory69420.000webhostapp.com/recordatorios.php?nombre=' + this.state.nombre
          + '&etiqueta=' + this.state.etiqueta + '&materia=' + this.state.materia + '&fecha=' + this.state.textFecha
          + '&hora=' + this.state.textHora + '&descripcion=' + this.state.descripcion + '&estado=' + this.state.estado, true);
        xhttp.send();

        console.log('nombre: '+ this.state.nombre + '  etiqueta: '+ this.state.etiqueta + '  materia: '+ this.state.materia + '  estado: ' + this.state.estado +
        '  fecha: ' + this.state.textFecha + '  hora: ' + this.state.textHora)
        restaurarValores();
        // navigation.navigate("Horario");
      }
    }

    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={[styles.title, { color: currentTheme.quaternaryColor }]}>Nuevo recordatorio</Text>

          <View style={{ borderBottomColor: currentTheme.quinaryColor, borderBottomWidth: 1, width: width }} />

          <TextInput placeholder="Título del recordatorio" keyboardType="default" style={[styles.inputs, { marginVertical: 5, paddingHorizontal: 10 }]}
            onChangeText={(value) => this.setState({ nombre: value })} value={this.state.nombre} maxLength={100}/>

          <View style={{ borderBottomColor: currentTheme.quinaryColor, borderBottomWidth: 1, width: width }} />

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

          <View style={{ borderBottomColor: currentTheme.quinaryColor, borderBottomWidth: 1, width: width }} />


          {/* ~~~~~~~~ Materia ~~~~~~~~ */}

          {this.state.etiqueta != 'otro' ? (
            <>
              <View style={styles.iconContainer}>
                <Icon name='book-open-page-variant' size={25} color='#A9A9A9' />
                <TextInput placeholder="Materia" keyboardType="default" style={styles.inputs}
                  onChangeText={(value) => this.setState({ materia: value })} />
              </View>
              <View style={{ borderBottomColor: currentTheme.quinaryColor, borderBottomWidth: 1, width: width }} />
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
              <Text style={styles.inputs}>{this.state.textHora}</Text>
            </TouchableOpacity>
          </View>

          <View style={{ borderBottomColor: currentTheme.quinaryColor, borderBottomWidth: 1, width: width }} />

          {/* ~~~~~~~~ Descripción ~~~~~~~~ */}

          <View style={styles.iconContainer}>
            <Icon name='pencil' size={25} color='#A9A9A9' />
            <TextInput multiline={true} numberOfLines={3} placeholder="Descripción" keyboardType="default" style={[styles.inputs, { width: width * 0.8 }]}
              onChangeText={(value) => this.setState({ descripcion: value })} value={this.state.descripcion} maxLength={280}/>
          </View>
          <View style={{ borderBottomColor: currentTheme.quinaryColor, borderBottomWidth: 1, width: width }} />


          {/* ~~~~~~~~ Notificar recordatorio ~~~~~~~~ */}

          <View style={[styles.iconContainer, { paddingTop: 10 }]}>
            <Icon name='bell' size={27} color={currentTheme.primaryColor} />
            <Text style={[styles.notificarText, { color: currentTheme.tertiaryColor }]}>Notificar recordatorio</Text>
          </View>


          {/* ~~~~~~~~ Opciones de notificar recordatorio ~~~~~~~~ */}

          <View style={styles.opcRecordatorioContainer}>
            <Text style={[styles.recordatoriosText, { color: currentTheme.tertiaryColor }]}>24 horas antes</Text>
            <Switch trackColor={{ false: "grey", true: "grey" }} />
          </View>

          <View style={styles.opcRecordatorioContainer}>
            <Text style={[styles.recordatoriosText, { color: currentTheme.tertiaryColor }]}>12 horas antes</Text>
            <Switch trackColor={{ false: "grey", true: "grey" }} />
          </View>

          <View style={styles.opcRecordatorioContainer}>
            <Text style={[styles.recordatoriosText, { color: currentTheme.tertiaryColor }]}>Seleccionar hora</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={registro} style={[styles.addButton, { backgroundColor: currentTheme.primaryColor }]}>
              <Text style={styles.buttonText}>GUARDAR</Text>
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
              this.setState({ textFecha: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() })
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
    fontSize: 14,
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

});