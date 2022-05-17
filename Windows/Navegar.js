import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Inicio from './Inicio'
import AddRecordatorio from './recordatoriosAddScreen'
import Menu from './Menu'
import Settings from './SettingsScreeen';

const Stack = createNativeStackNavigator();

const InicioMenu = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>

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
  
