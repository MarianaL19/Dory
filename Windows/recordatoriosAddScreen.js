import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Switch, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import actualTheme from '../Components/actualTheme';
import DatePicker from 'react-native-date-picker';
import { cambioFormato } from '../Components/Date';
import sqlite from 'react-native-sqlite-storage';

const AddRecordatorios = () =>{

    // sqlite.openDatabase({
    //   name: 'bd_Dory.db',
    //   createFromLocation: 1,
    // });

    const {width, height} = Dimensions.get('screen');

    // Variables para el estado del tag del recordatorio
    const [tag, setTag] = useState('null');

    // Variables para el estado del DatePicker
    const [fecha, setFecha] = useState(new Date())
    const [fechaOpen, setFechaOpen] = useState(false)
    const [textFecha, setTextFecha] = useState('Selecciona la fecha de entrega')
    const [hora, setHora] = useState(new Date())
    const [horaOpen, setHoraOpen] = useState(false)
    const [textHora, setTextHora] = useState('Selecciona la hora de entrega')


    return (

      <View style={[styles.container, {backgroundColor: actualTheme.backgroundColor}]}>
        <ScrollView>
          <Text style={[styles.title,{color: actualTheme.primary}]}>Nuevo recordatorio</Text>

          <View style={{borderBottomColor: actualTheme.quinary, borderBottomWidth:1, width: width}}/>

          <TextInput placeholder="Título del recordatorio" keyboardType="default" style={styles.inputs}/>
          
          <View style={{borderBottomColor: actualTheme.quinary, borderBottomWidth:1, width: width}}/>
          
          <Text style={[styles.subtitle, {color: actualTheme.tertiary}]}>Tipo de recordatorio</Text>

          <View style={styles.filterButtonContainer}>
            <TouchableOpacity onPress={() => setTag('tarea')}
                    style={[styles.filterButton, tag == 'tarea' ? { backgroundColor: actualTheme.quinary } : {}]}>
              <Text style={[styles.filterText, tag == 'tarea' ? { color: actualTheme.primary } : {}]}>Tarea</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setTag('examen')}
                    style={[styles.filterButton, tag == 'examen' ? { backgroundColor: actualTheme.quinary } : {}]}>
              <Text style={[styles.filterText, tag == 'examen' ? { color: actualTheme.primary } : {}]}>Examen</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setTag('otro')}
                    style={[styles.filterButton, tag == 'otro' ? { backgroundColor: actualTheme.quinary } : {}]}>
              <Text style={[styles.filterText, tag == 'otro' ? { color: actualTheme.primary } : {}]}>Otro</Text>
            </TouchableOpacity>
          </View>

          <View style={{borderBottomColor: actualTheme.quinary, borderBottomWidth:1, width: width}}/>

          <View style={styles.iconContainer}>
            <Icon name='book-open-page-variant' size={25} color='#A9A9A9'/>
            <TextInput placeholder="Materia" keyboardType="default" style={styles.inputs}/>
          </View> 
          <View style={{borderBottomColor: actualTheme.quinary, borderBottomWidth:1, width: width}}/>

          {/* ~~~~~~~~ Seleccionar la fecha y hora de entrega ~~~~~~~~ */}

          <View style={styles.iconContainer}>
            <Icon name='calendar-blank-outline' size={25} color='#A9A9A9'/>
            <TouchableOpacity onPress={() => setFechaOpen(true)}>
              <Text style={styles.inputs}>{cambioFormato(textFecha)}</Text> 
            </TouchableOpacity>
          </View> 

          <View style={styles.iconContainer}>
            <Icon name='clock-time-four-outline' size={25} color='#A9A9A9'/>
            <TouchableOpacity onPress={() => setHoraOpen(true)}>
              <Text style={styles.inputs}>{textHora}</Text> 
            </TouchableOpacity>
          </View>

          <View style={{borderBottomColor: actualTheme.quinary, borderBottomWidth:1, width: width}}/>

          {/* ~~~~~~~~ Descripción ~~~~~~~~ */}

          <View style={styles.iconContainer}>
            <Icon name='pencil' size={25} color='#A9A9A9'/>
            <TextInput multiline={true} numberOfLines={3} placeholder="Descripción" keyboardType="default" style={[styles.inputs,{fontSize:13}]}/>
          </View> 
          <View style={{borderBottomColor: actualTheme.quinary, borderBottomWidth:1, width: width}}/>


          {/* ~~~~~~~~ Notificar recordatorio ~~~~~~~~ */}

          <Text style={[styles.subtitle,{color: actualTheme.tertiary}]}>Notificar recordatorio</Text>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.recordatoriosText}>24 horas antes</Text>
            <Switch trackColor={{false:"grey", true:"grey"}}/>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.recordatoriosText}>12 horas antes</Text>
            <Switch trackColor={{false:"grey", true:"grey"}}/>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.recordatoriosText}>Seleccionar hora</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.addButton,{backgroundColor: actualTheme.primary}]}>
              <Text style={styles.buttonText}>GUARDAR</Text>
            </TouchableOpacity>
          </View>

          {/* ~~~~~~~~ Dates pickers ~~~~~~~~ */}
          <DatePicker
            modal
            open={fechaOpen}
            date={fecha}
            locale={'es'}
            mode={'date'}
            onConfirm={(date) => {
              setFechaOpen(false)
              setFecha(date)
              setTextFecha(date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate())
            }}
            onCancel={() => {
              setFechaOpen(false)
            }}
          />
          
          
          <DatePicker
            modal
            open={horaOpen}
            date={hora}
            mode={'time'}
            onConfirm={(date) => {
              setHoraOpen(false)
              setHora(date)
              setTextHora(date.getHours() + ':' + (date.getMinutes() < 10 ? ('0' + date.getMinutes() ): date.getMinutes()))
            }}
            onCancel={() => {
              setHoraOpen(false)
            }}
          />

        </ScrollView>

      </View>
    );  
}

export default AddRecordatorios;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
    alignItems:'center',
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
  inputs:{
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
    marginHorizontal: 30,
    marginVertical: 7,
  },
  buttonText: {
    color: "#FAF9F3",
    fontSize: 18,
    fontWeight: "600",
    paddingHorizontal: 25,
    paddingVertical: 5,
  },
});