import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native';
import Task from '../Components/TasksList';
import currentTheme from '../Components/currentTheme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getCurrentDate, cambioFormato } from '../Components/Date';

//Configuración local para personalizar los nombres dentro del Calendario
LocaleConfig.locales['cf'] = {
  monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
  monthNamesShort: ["Ene.", "Feb.", "Mar.", "Abr.", "May.", "Jun.", "Jul.", "Ago.", "Sep.", "Oct.", "Nov.", "Dic."],
  today: "Hoy",
  dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
  dayNamesShort: ["Dom.", "Lun.", "Mar.", "Mier.", "Jue.", "Vie.", "Sáb."],
}
LocaleConfig.defaultLocale = "cf"

//Función principal, la que genera la Screen
export default function Schedule() {

  //Función para añadir recordatorios manualmente
  function addTasks() {
    //  handleonSubmit('Tarea de Hipermedia', '2022-04-25', 'Tarea','Elaborar el primer escenario para nuestro juego en Unity','11:59');
    handleonSubmit('Conferencia violencia de género', '2022-05-01', 'Otro','Conferencia que ofrece la escuela','15:00');
    // handleonSubmit('Examen Servidores', '2022-04-20', 'Examen','Examen de las unidades 2 y 3, tipos de Sistemas Operativos y algo más');
    // handleonSubmit('Examen Bases de Datos', '2022-04-20', 'Examen','Vendrán preguntas de todas las unidades de aprendizaje, preguntas cerradas','09:00');
    // handleonSubmit('Investigación Unidades Teóricas', '2022-01-07', 'Tarea','No la puedo acabar, ayuda');
    // handleonSubmit('No tiene descripción', '2022-01-07', 'Otro');
  }

  //Arreglo que nos permite almacenar los recordatorios
  const [tasks, setTasks] = useState([]);

  //Esta no la necesitamos, pero no me animo a borrar, en un futuro vemos, vemos
  const findTasks = async () => {
    const result = await AsyncStorage.getItem('tasks');
    console.log(result)
    if (result !== null) setTasks(JSON.parse(result));
  }

  //Función que almacena los recordatorios en el celular, es poquito back xd
  const handleonSubmit = async (title, date, tag, description, hour) => {
    const task = { id: Date.now(), title, date, tag, description, hour };
    const updatedTasks = await [...tasks, task];
    setTasks(updatedTasks);
    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  return (
    <>
    {/* Calendario */}
      <View style={{ backgroundColor: currentTheme.background }}>
        <View style={styles.calendarWrapper}>
          <Calendar
            style={{ backgroundColor: currentTheme.quinary, marginBottom: 30 }}
          // Defino los parámetros del Calendario
            minDate={'2021-02-05'}
            maxDate={'2023-04-23'}
            firstDay={1}
            onDayPress={(e) => {
              console.log(`e`, e)
              //,findTasks();
            }}
            enableSwipeMonths
            markingType="dot"

            // fechas de ejemplo para ver algunas marcaciones en el calendario
            markedDates={{
              [getCurrentDate()]: { selected: true },
              '2022-04-16': { selected: false, marked: true, selectedColor: currentTheme.primary },
              '2022-04-17': { marked: true },
              '2022-04-18': { marked: true, dotColor: currentTheme.secondary, activeOpacity: 0 },
            }}
          />
        </View>
        {/* Fecha que aparece abajo del calendario según el día señalado. Utilizo la misma función
        para cambiar el formato yyyy-mm-dd a texto simple, pero no he podido implementar los días de la semana */}
        <Text style={[styles.dateText, { color: currentTheme.tertiary }]}> {cambioFormato(getCurrentDate())} </Text>
      </View>


      {/* Validación para saber si hay o no recordatorios ese día" */}
      {!tasks.length ?
        ( //Si no los hay, muestra un mensaje
          <View style={[styles.emptyHeaderContainer, {backgroundColor: currentTheme.background}]}>
            <Text style={styles.emptyHeader}>Sin nada k hacer</Text>
          </View>
        ) : 
          ( // Si sí existen recordatorios, muestra la lista de recordatorios
          <FlatList data={tasks} keyExtractor={item => item.id.toString()} renderItem={({ item }) => <Task item={item} />} style={{ backgroundColor: currentTheme.background }} />
          ) }


      {/* Botón para agregar recordatorios */}
      <TouchableOpacity onPress={() => addTasks()} style={styles.addIcon} >
        <Icon name='plus-circle' size={50} color={currentTheme.primary}/>
      </TouchableOpacity>

      {/* Botón para cambiar de pantalla a la lista de recordatorios */}
      <TouchableOpacity onPress={() => {}} style={styles.clipIcon}>
        <Icon name='clipboard-text-outline' size={50} color={currentTheme.primary}  />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  emptyHeaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  emptyHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    opacity: 0.5,
    bottom: 30,
  },
  calendarWrapper: {
    height: 360,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
    marginBottom: 5,
    marginTop: 5,
  },
  addIcon: {
    position: 'absolute',
    zIndex: 1,
    bottom: 10,
    right: 10,
  },
  clipIcon: {
    position: 'absolute',
    zIndex: 1,
    bottom: 10,
    left: 10,
  },
});