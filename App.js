import React, {Component} from 'react';

import Menu from './Windows/Menu'

import Schedule from './Windows/scheduleScreen';
import AgendaC from './Windows/agendaScreen';
import AgendaAddContact from './Windows/agendaAddContact';
import HorarioAdd from './Windows/horarioAddScreen';
import HorarioEmpty from './Windows/horarioEmptyScreen';
import HorarioShow from './Windows/horarioShowScreen';
import Settings from './Windows/SettingsScreen';
import RecordatoriosAdd from './Windows/recordatoriosAddScreen';
import Recordatorios from './Windows/recordatoriosScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App(){

  return (
    //<Schedule/>
    //<AgendaC/>
    //<AgendaAddContact/>
    //<HorarioAdd/>
    //<HorarioEmpty/>
    //<HorarioShow/>
    //<Settings/>
    //<RecordatoriosAdd/>
    //<Recordatorios/>    

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
      >

      <Stack.Screen 
          name="Settings"
          component={Settings}>
      </Stack.Screen>

      <Stack.Screen 
          name="Schedule"
          component={Schedule}>
      </Stack.Screen>

      <Stack.Screen 
          name="HomeScreen"
          component={HorarioEmpty}>
      </Stack.Screen>

      <Stack.Screen 
          name="HorarioAdd"
          component={HorarioShow}>
      </Stack.Screen>

      <Stack.Screen 
          name="HorarioShow"
          component={HorarioShow}>
      </Stack.Screen>

      <Stack.Screen 
          name="AgendaC"
          component={AgendaC}>
      </Stack.Screen>

      <Stack.Screen 
          name="AgendaAdd"
          component={AgendaAddContact}>
      </Stack.Screen>

      <Stack.Screen 
          name="Recordatorios"
          component={Recordatorios}>
      </Stack.Screen>

      <Stack.Screen 
          name="RecordatoriosAdd"
          component={RecordatoriosAdd}>
      </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
