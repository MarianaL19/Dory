import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colores from '../Components/currentTheme';

{/*Importamos la ventana dentro de la variable*/}
//import HOME from './Home.js';
import {InicioMenu} from './Navegar'
import Recordatorios from './recordatoriosScreen';
import Agenda from './agendaAddContact';
import Horario from './horarioAddScreen';

export default class Menu extends Component {
  render() {
    const Tab = createBottomTabNavigator();

    const screenOptions = (route, color) =>{
      let icono
      switch (route.name) { 
        case 'Horario':
          icono = "calendar-clock"
          break;
      
        case 'Agenda':
            icono = "account"
            break;

        case 'Recordatorios':
          icono = "calendar-month"
          break;
        
        default:
          break;
      }

      return(
        <Icon
          name={icono}
          color={color}
          size={35}
        />
      )
    }
    return (
            <Tab.Navigator
              screenOptions={ ({ route }) => ({
              tabBarIcon: ({color}) => screenOptions(route, color),
              tabBarInactiveTintColor: 'gray',
              tabBarActiveTintColor: colores.quaternaryColor,
              headerShown: false,
                })
              }  
            >
                {/*Se agrega uno por ventana
                Dentro de componente va la variable donde se almacena la ventana*/}
                <Tab.Screen name="Horario" component={Horario} />
                <Tab.Screen name="Recordatorios" component={Recordatorios} />
                <Tab.Screen name="Agenda" component={Agenda}
                tabBarVisible={false}/>
            </Tab.Navigator>

    )
  }
}