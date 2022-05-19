import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import currentTheme from '../Components/currentTheme';
import MenuBar from '../hotBar';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContext } from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

export default class App extends Component {

  static contextType = NavigationContext;

  constructor(props) {
    super(props);
    this.state = {
      listaMaterias: [],
      isOpenLunes: false,
      isOpenMartes: false,
      isOpenMiercoles: false,
      isOpenJueves: false,
      isOpenViernes: false,
      isOpenSabado: false,
      isOpenDomingo: false,
    };
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
          let hora_inicioMateria = '';
          let hora_finMateria = '';
          let colorMateria = '';
          let idMateria = -1;

          var materia = xhttp.responseText;
          
          var registros = materia.split('|');

          var numeroRegistros = registros[0];

          for (let i=1; i<=numeroRegistros; i++){
            var datos = registros[i].split('¬');
            console.log('datos: ' + datos[0]);
            nombreMateria = datos[0];
            profesorMateria = datos[1];
            aulaMateria = datos[2];
            nrcMateria = datos[3];
            hora_inicioMateria = datos[4];
            hora_finMateria = datos[5];
            colorMateria = datos[6];
            idMateria = datos[7];

            const objetoMateria =
            {nombre: nombreMateria, profesor: profesorMateria,
             aula: aulaMateria, nrc: nrcMateria,
             hora_inicio: hora_inicioMateria, hora_fin: hora_finMateria,
             color: colorMateria, id: idMateria};

            const nuevoArreglo = [..._this.state.listaMaterias, objetoMateria];
            _this.setState({listaMaterias: nuevoArreglo});
            console.log(objetoMateria);
          }
          console.log(_this.state.listaMaterias);
        }
    };
    xhttp.open("GET", 'https://dory69420.000webhostapp.com/recuperarMaterias.php'
    , true);
    xhttp.send();
    }

  componentDidMount(){
    this.recuperarDatos();
  }

  render() {

    const navigation = this.context;

    return (
      <View style = {styles.container}>

      <View style={styles.nav}>
        <MenuBar/>
      </View>
        
        <ScrollView>

          {/* Lunes */}

          <Collapse
            onToggle={() => this.setState({ isOpenLunes: !this.state.isOpenLunes })}
          >
            <CollapseHeader
            >
            <View style={styles.iconContainer}>
              <Text 
                style={styles.collapseTitle}>Lunes
              </Text>
              <Icon name={this.state.isOpenLunes === true ? 'chevron-up' : 'chevron-down'} size={30} color={currentTheme.primaryColor}/> 
            </View> 
            </CollapseHeader>
            <CollapseBody>
              <FlatList
                data={this.state.listaMaterias}
                
                renderItem={({item}) => <TouchableOpacity><Text>{item.nombreMateria}</Text></TouchableOpacity>}
              />
            </CollapseBody>
          </Collapse>

          <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:2.5, width: width}}/>

      	  {/* Martes */}

          <Collapse
            onToggle={() => this.setState({ isOpenMartes: !this.state.isOpenMartes })}
          >
            <CollapseHeader
            >
            <View style={styles.iconContainer}>
              <Text 
                style={styles.collapseTitle}>Martes
              </Text>
              <Icon name={this.state.isOpenMartes === true ? 'chevron-up' : 'chevron-down'} size={30} color={currentTheme.primaryColor}/> 
            </View> 
            </CollapseHeader>
            <CollapseBody>
              <FlatList
                
              />
            </CollapseBody>
          </Collapse>

          <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:2.5, width: width}}/>

          {/* Miércoles */}

          <Collapse
            onToggle={() => this.setState({ isOpenMiercoles: !this.state.isOpenMiercoles })}
          >
            <CollapseHeader
            >
            <View style={styles.iconContainer}>
              <Text 
                style={styles.collapseTitle}>Miercoles
              </Text>
              <Icon name={this.state.isOpenMiercoles === true ? 'chevron-up' : 'chevron-down'} size={30} color={currentTheme.primaryColor}/> 
            </View> 
            </CollapseHeader>
            <CollapseBody>
              <FlatList
                
              />
            </CollapseBody>
          </Collapse>

          <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:2.5, width: width}}/>

          {/* Jueves */}

          <Collapse
            onToggle={() => this.setState({ isOpenJueves: !this.state.isOpenJueves })}
          >
            <CollapseHeader
            >
            <View style={styles.iconContainer}>
              <Text 
                style={styles.collapseTitle}>Jueves
              </Text>
              <Icon name={this.state.isOpenJueves === true ? 'chevron-up' : 'chevron-down'} size={30} color={currentTheme.primaryColor}/> 
            </View> 
            </CollapseHeader>
            <CollapseBody>
              <FlatList
                
              />
            </CollapseBody>
          </Collapse>

          <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:2.5, width: width}}/>

          {/* Viernes */}

          <Collapse
            onToggle={() => this.setState({ isOpenViernes: !this.state.isOpenViernes })}
          >
            <CollapseHeader
            >
            <View style={styles.iconContainer}>
              <Text 
                style={styles.collapseTitle}>Viernes
              </Text>
              <Icon name={this.state.isOpenViernes === true ? 'chevron-up' : 'chevron-down'} size={30} color={currentTheme.primaryColor}/> 
            </View> 
            </CollapseHeader>
            <CollapseBody>
              <FlatList
                
              />
            </CollapseBody>
          </Collapse>

          <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:2.5, width: width}}/>

          {/* Sábado */}

          <Collapse
            onToggle={() => this.setState({ isOpenSabado: !this.state.isOpenSabado })}
          >
            <CollapseHeader
            >
            <View style={styles.iconContainer}>
              <Text 
                style={styles.collapseTitle}>Sábado
              </Text>
              <Icon name={this.state.isOpenSabado === true ? 'chevron-up' : 'chevron-down'} size={30} color={currentTheme.primaryColor}/> 
            </View> 
            </CollapseHeader>
            <CollapseBody>
              <FlatList
                
              />
            </CollapseBody>
          </Collapse>

          <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:2.5, width: width}}/>

          {/* Domingo */}

          <Collapse
            onToggle={() => this.setState({ isOpenDomingo: !this.state.isOpenDomingo })}
          >
            <CollapseHeader
            >
            <View style={styles.iconContainer}>
              <Text 
                style={styles.collapseTitle}>Domingo
              </Text>
              <Icon name={this.state.isOpenDomingo === true ? 'chevron-up' : 'chevron-down'} size={30} color={currentTheme.primaryColor}/> 
            </View> 
            </CollapseHeader>
            <CollapseBody>
              <FlatList
                
              />
            </CollapseBody>
          </Collapse>

          <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:2.5, width: width}}/>

        </ScrollView>

        <TouchableOpacity onPress={() => {navigation.navigate("AddMateria");}} style={styles.addIcon}>
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
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 22,
    color: '#A0A5AE',
  },
  hora: {
    fontSize: 19,
    color: '#00456E',
    fontWeight: 'bold',
  },
  dia: {
    fontSize: 19,
    color: '#00456E',
    fontWeight: 'bold',

  },
  collapseTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: currentTheme.tertiaryColor,
    marginLeft: 15,
    marginTop: 10,
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
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  addIcon: {
    position: 'absolute',
    zIndex: 1,
    bottom: 10,
    right: 10,
  },
  titulo2: {
    fontSize: 22,
    color: '#A0A5AE',
  },
  subTitle2: {
    fontSize: 22,
    color: '#A0A5AE',
    fontWeight: 'bold',
  }
})