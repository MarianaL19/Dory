import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity,
        Dimensions, FlatList} from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";

import MenuBar from '../hotBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import currentTheme from '../Components/currentTheme';
import AddRecordatorios from './recordatoriosAddScreen';
import { NavigationContext } from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

export default class Recordatorios extends Component {

  static contextType = NavigationContext;

  constructor(props) {
    super(props);
    this.state = {
      //listaRecordatorios: [],
      nombreRecordatorio: '',
      etiquetaRecordatorio: '',
      materiaRecordatorio: '',
      estadoRecordatorio: '',
      fechaRecordatorio: '',
      horaRecordatorio: '',
      decripcionRecordatorio: '',
    };
  }

  recuperarDatos = () => {
    var xhttp = new XMLHttpRequest();
    let _this = this;       // Esto es para usar 'this' dentro de la función 
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var recordatorio = xhttp.responseText;
          
          var registros = recordatorio.split('¨');
          
          var datos = recordatorio.split('¬');
          _this.setState({nombreRecordatorio : datos[0]});
          _this.setState({etiquetaRecordatorio : datos[1]});
          _this.setState({materiaRecordatorio : datos[2]});
          _this.setState({estadoRecordatorio : datos[3]});
          _this.setState({fechaRecordatorio : datos[4]});
          _this.setState({horaRecordatorio : datos[5]});
          _this.setState({descripcionRecordatorio : datos[6]});

          //objetoRecordatorio = {nombreRecordatorio, etiquetaRecordatorio, materiaRecordatorio};
          //const nuevoArreglo = [...listaRecordatorios, objetoRecordatorio];
          //_this.setState({listaRecordatorios : nuevoArreglo});

          //console.log(listaRecordatorios);

        }
    };
    xhttp.open("GET", 'https://dory69420.000webhostapp.com/recuperarRecordatorios.php'
    , true);
    xhttp.send();
    }

  componentDidMount(){
    this.recuperarDatos();
  }

  render() {
    const navigation = this.context;

    return (
      <View>

        <View style={styles.nav}>
          <MenuBar/>
        </View>
        
        <View style={styles.filterButtonContainer}>
          
          <TouchableOpacity
          style={styles.filterButton}
          >
            <Text
            style={styles.filterText}
            >
              Todos
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
          style={styles.filterButton}
          >
            <Text
            style={styles.filterText}
            >
              Tareas
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
          style={styles.filterButton}
          >
            <Text
            style={styles.filterText}
            >
              Exámenes
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity
          style={styles.filterButton}
          >
            <Text
            style={styles.filterText}
            >
              Otros
            </Text>
          </TouchableOpacity>
        </View>

        <Collapse>
        <CollapseHeader>
          <Text style={styles.collapseTitle}>Completados</Text>
        </CollapseHeader>
        <CollapseBody>
          <Text> Hola! </Text>
        </CollapseBody>
        </Collapse>

        <Collapse>
        <CollapseHeader>
          <Text style={styles.collapseTitle}>Omitidos</Text>
        </CollapseHeader>
        <CollapseBody>
          <Text> Hola! </Text>
        </CollapseBody>
        </Collapse>

        <Collapse>
        <CollapseHeader>
          <Text style={styles.collapseTitle}>Pendientes</Text>
        </CollapseHeader>
        <CollapseBody>
          <FlatList
              data = {[
                {key: this.state.descripcionRecordatorio},
              ]}
              renderItem={({item}) => <TouchableOpacity><Text style={styles.collapseItems}>{item.key}</Text></TouchableOpacity>}
          />
        </CollapseBody>
        </Collapse>

              {/* Botón para agregar recordatorios */}
      <TouchableOpacity onPress={() => {navigation.navigate("Horario");}} style={styles.addIcon}>
        <Icon name='plus-circle' size={50} color={currentTheme.primaryColor}/>
      </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  nav:{
    width: width,
    height: 60,
  },
  filterButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
    marginTop: 20,
  },
  filterButton: {
    alignItems: 'center',
    backgroundColor: '#C2E6FF',
    borderRadius: 5,
    width: 80,
    padding: 3,
  },
  filterText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#00456E',
  },
  collapseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: currentTheme.tertiaryColor,
    marginHorizontal: 15,
    paddingBottom: 15,
  },
  collapseItems: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    color: currentTheme.tertiaryColor,
    backgroundColor: currentTheme.quinaryColor,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: currentTheme.secondaryColor,
    marginHorizontal: 30,
    padding: 10,
  },
});