import React, {Component} from 'react';

import Menu from './Windows/Menu'
import { InicioMenu } from './Windows/Navegar';

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
    //<Menu/>
    <NavigationContainer>
      <InicioMenu/>
    </NavigationContainer>
    //<Recordatorios/>
  );
}
