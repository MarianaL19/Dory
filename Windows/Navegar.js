import React, { Component, useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AsyncStorage from '@react-native-async-storage/async-storage';

import Inicio from './Inicio'
import AddRecordatorio from './recordatoriosAddScreen'
import Menu from './Menu'
import Settings from './SettingsScreeen';

const Stack = createNativeStackNavigator();

const InicioMenu = () => {
    const [input, setInput] = useState('');

    const readData = async () => {
      try {
        const value = await AsyncStorage.getItem('dataStorage2');
    
        if (value !== null) {
          //console.log(value);
          if(value == '["Menu"]'){
            setInput('Menu');
            //console.log(input);
          }
        }
      } catch (e) {
        
      }
    };

    useEffect(() => {
      readData();
    }, []);

    return (
      <Stack.Navigator screenOptions={{headerShown: false}}
        initialRouteName={input}
      >

        <Stack.Screen name="Inicio"
        component={Inicio}/>
  
        <Stack.Screen name="Menu"
        component={Menu}/>

        <Stack.Screen name="Conf"
        component={Settings}/>

        <Stack.Screen name="AddRecordatorio"
        component={AddRecordatorio}/>
  
      </Stack.Navigator>
    )
  }
  
  export {InicioMenu}
  
