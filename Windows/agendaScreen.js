import React, { useState }  from 'react';
import actualTheme from '../Components/actualTheme';

import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    FlatList,
  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function AgendaC() {
  
  //Almacen de contactos
  const [contactos, setContact] = useState([])

  // Variables para el estado del tag del recordatorio
  const [tag, setTag] = useState('todos');

  //Funcion para meter contactos a almacenamiento
  const handleOnSubmit = async (nombre, telefono, correo, etiqueta) => {
    const contacto = { id: nombre, nombre, telefono, correo, etiqueta};
    const actualizarContactos = await [...contactos, contacto];
    setContacts(actualizarContactos);
    await AsyncStorage.setItem('contactos', JSON.stringify(actualizarContactos));
  }

  //Añadir contacto
  function addContact(){
    handleOnSubmit('Cesar', '3318049956', 'cesarseigi@hotmail.com');
    //handleOnSubmit('Alexis', '1472583690', 'alexis@hotmail.com');
    //handleOnSubmit('Mariana', '3698521470', 'mariana@hotmail.com');
    //handleOnSubmit('Oliver', '1234567890', 'Oliver@hotmail.com');
    //handleOnSubmit('Tona', '1596324780', 'tona@hotmail.com');
    //handleOnSubmit('Osvaldo', '3216549870', 'osva@hotmail.com');
  }

  //Funcion de busqueda
  const findContact = async () => {
    const result = await AsyncStorage.getItem('contactos');
    console.log(result)
    if (result !== null) setContact(JSON.parse(result));
  }

  return (
         
    <View style={styles.wholeContainer}>
      {/*Seccion de barra de busqueda*/}
      <View>

        <TextInput style={styles.searchBoxFormat}
          placeholder='Buscar contacto'
          placeholderTextColor='#C4C4C4'
        />

      </View>

      {/*Botones de filtros*/}
      <View style={styles.buttonContainer}>

        <TouchableOpacity onPress={() => setTag('todos')}
          style={[styles.buttonFormat, tag == 'todos' ? {backgroundColor: actualTheme.quinary} : {}]}>
          <Text style={[styles.searchText, tag == 'todos' ? {color: actualTheme.tertiary} : {}]}>Todos</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setTag('compañero')}
          style={[styles.buttonFormat, tag == 'compañero' ? {backgroundColor: actualTheme.quinary} : {}]}>
          <Text style={[styles.searchText, tag == 'compañero' ? {color: actualTheme.tertiary} : {}]}>Compañero</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setTag('profesor')}
          style={[styles.buttonFormat, tag == 'profesor' ? {backgroundColor: actualTheme.quinary} : {}]}>
          <Text style={[styles.searchText, tag == 'profesor' ? {color: actualTheme.tertiary}: {}]}>Profesor</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setTag('admin')}
          style={[styles.buttonFormat, tag == 'admin' ? {backgroundColor: actualTheme.quinary} : {}]}>
          <Text style={[styles.searchText, tag == 'admin' ? {color: actualTheme.tertiary} : {}]}>Administrativos</Text>
        </TouchableOpacity>
        
      </View>

      {/*Area de scroll para ver contactos*/}
      {/* Validación para saber si hay contactos */}
      {!contactos.length ?
        ( //Si no los hay, muestra un mensaje
          <View style={[styles.emptyHeaderContainer, {backgroundColor: actualTheme.background}]}>
            <Text style={styles.emptyHeader}>
              Parece que no tienes ningun contacto añadido, ¡Empieza añadiendo uno!
            </Text>
          </View>
        ) : 
            ( // Si hay contactos los muestra
              <FlatList
                data={contactos}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Task item={item}/>} style={{ backgroundColor: actualTheme.background }}
              />
            ) 
      }
      
      {/*Botón para agregar contactos*/}
      <TouchableOpacity onPress={() => addContact()} style={styles.addIcon} >
        <Icon name='plus-circle' size={50} color={actualTheme.primary}/>
      </TouchableOpacity>

    </View>
  
  

  //Modal ventana
  /*
  <View style={styles.wholeContainer}>

    <View style={styles.moveButton}>
      <TouchableOpacity style={styles.formatButtonContainer}>
        <Text style={styles.editTextFormat}>Editar</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.contactContainer}>
      <Text style={styles.nameFormat}>Aqui va el nombre</Text>
      
      <Text>Aqui va imagen</Text>
      
      <Text style={styles.tagFormat}>Aqui va etiqueta</Text>
    </View>

    <View style={styles.contactContainer2}>
      <Text style={styles.styleHeader}>Telefono</Text>
      <Text style={styles.styleInfo}>#numero de telefono</Text>
      <Text style={styles.styleHeader}>Correo</Text>
      <Text style={styles.styleInfo}>#direccion de correo</Text>
      
    </View>

    <View style={styles.contactContainer}>
      <TouchableOpacity style={styles.closeButtonFormat}>
        <Text style={styles.closeButtonText}>CERRAR</Text>
      </TouchableOpacity>
    </View>
  </View>
  
  */

  

  
    );
}

const styles = StyleSheet.create({
    wholeContainer: {
      padding: 20,
      marginTop: 60,
      height: 530,
    },
    //Estilos para ver contactos
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 10,
    },
    buttonFormat: {
      backgroundColor: '#E5E5E5',
      padding: 5,
      paddingHorizontal: 10,
      borderRadius: 5,
      borderColor: '#E5E5E5',
    },
    searchBoxFormat: {
      backgroundColor: '#ffffff',
      borderRadius: 50,
      borderWidth: 3,
      borderColor: '#C4C4C4',
      padding: 3,
      fontSize: 15,
      textAlign: 'center',
      marginBottom: 20,
    },
    searchText: {
      fontFamily: 'Sen',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 12,
      color: '#ffffff',
      marginTop: 2,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
    },
    addIcon: {
      position: 'absolute',
      zIndex: 1,
      bottom: 10,
      right: 10,
    },
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

    //Estilos para ver contacto
    contactContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 10,
      marginTop: 10,
    },
    contactContainer2: {
      left: 50,
      marginTop: 10,
      marginBottom: 10,
    },
    moveButton: {
      alignItems: 'flex-end',
      marginBottom: 20,
    },
    formatButtonContainer: {
      backgroundColor: '#0E63F4',
      padding: 5,
      borderRadius: 20,
      width: 80,
      height: 40,
    },
    editTextFormat: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 18,
      color: '#ffffff',
      marginTop: 2,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
    },
    nameFormat: {
      fontFamily: 'Sen',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 25,
      color: '#00456e',
      marginBottom: 20,
    },
    tagFormat: {
      backgroundColor: '#c2e6ff',
      width: 130,
      height: 35,
      borderRadius: 8,
      fontFamily: 'Sen',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 15,
      display: 'flex',
      alignItems: 'center',
      color: '#000000',
      padding: 5,
      paddingLeft: 10,
      marginTop: 20,
      marginBottom: 20,
    },
    styleHeader: {
      color: 'rgba(0, 0, 0, 0.5)',
      fontFamily: 'Sen',
      fontWeight: '400',
      fontSize: 16,
      display: 'flex',
      alignItems: 'center',
    },
    styleInfo: {
      color: '#000000',
      fontFamily: 'Sen',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 18,
      display: 'flex',
      alignItems: 'center',
      marginBottom: 20,
    },
    closeButtonFormat: {
      backgroundColor: '#0E63F4',
      padding: 5,
      borderRadius: 20,
      width: 100,
      height: 40,
    },
    closeButtonText: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 18,
      color: '#ffffff',
      marginTop: 2,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
    },
  });
  