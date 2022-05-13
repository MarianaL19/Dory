import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

{/*Importamos la ventana dentro de la variable*/}
//import HOME from './Home.js';
//import {HoraAjus, RecorAjus} from './Navegar'
import Recordatorios from './recordatoriosScreen';
import Agenda from './agendaScreen'
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
        <NavigationContainer>
            <Tab.Navigator
              screenOptions={ ({ route }) => ({
              tabBarIcon: ({color}) => screenOptions(route, color),
              tabBarInactiveTintColor: 'gray',
              tabBarActiveTintColor: '#0E63F4',
              headerShown: false,
                })
              }  
            >
                {/*Se agrega uno por ventana
                Dentro de componente va la variable donde se almacena la ventana*/}
                <Tab.Screen name="Horario" component={Horario} />
                <Tab.Screen name="Recordatorios" component={Recordatorios} />
                <Tab.Screen name="Agenda" component={Agenda} />
            </Tab.Navigator>

        </NavigationContainer>
    )
  }
}