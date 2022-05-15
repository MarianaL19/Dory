import React, { useState }  from 'react';
import currentTheme from '../Components/currentTheme';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    FlatList,
  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Contact from '../Components/ContactList';


export default function AgendaC() {
  
  //Almacen de contactos
  const [contactos, setContacts] = useState([])

  // Variables para el estado del tag del recordatorio
  const [tag, setTag] = useState('Todos');

  //Funcion para meter contactos a almacenamiento
  const handleOnSubmit = async (nombre, telefono, correo, etiqueta) => {
    const contacto = { id: nombre, nombre, telefono, correo, etiqueta};
    const actualizarContactos = await [...contactos, contacto];
    setContacts(actualizarContactos);
    await AsyncStorage.setItem('contactos', JSON.stringify(actualizarContactos));
  }

  //Añadir contacto
  function addContact(){
    handleOnSubmit('Cesar', '3318049956', 'cesarseigi@hotmail.com', 'Profesor');
    handleOnSubmit('Alexis', '1472583690', 'alexis@hotmail.com', 'Compañero');
    handleOnSubmit('Mariana', '3698521470', 'mariana@hotmail.com', 'Administrativo');
    handleOnSubmit('Oliver', '1234567890', 'Oliver@hotmail.com', 'Administrativo');
    handleOnSubmit('Tona', '1596324780', 'tona@hotmail.com', 'Compañero');
    handleOnSubmit('Osvaldo', '3216549870', 'osva@hotmail.com', 'Profesor');
  }

  //Funcion de busqueda
  const findContact = async () => {
    const result = await AsyncStorage.getItem('contactos');
    console.log(result)
    if (result !== null) setContact(JSON.parse(result));
  }

  return (
         
    <View style={[styles.wholeContainer, {backgroundColor: currentTheme.backgroundColor}]}>
      
      {/*Seccion de barra de busqueda*/}
      <View>

        <TextInput style={styles.searchBoxFormat}
          placeholder='Buscar contacto'
          placeholderTextColor='#C4C4C4'
        />

      </View>

      {/*Botones de filtros*/}
      <View style={styles.buttonContainer}>

        {/* Boton para ver Todos los contactos */}
        <TouchableOpacity onPress={() => setTag('Todos')}
          style={[styles.buttonFormat, tag == 'Todos' ? {backgroundColor: currentTheme.quinaryColor} : {}]}>
          <Text style={[styles.searchText, tag == 'Todos' ? {color: currentTheme.tertiaryColor} : {}]}>Todos</Text>
        </TouchableOpacity>

        {/* Boton para ver solo Compañeros */}
        <TouchableOpacity onPress={() => setTag('Compañero')}
          style={[styles.buttonFormat, tag == 'Compañero' ? {backgroundColor: currentTheme.quinaryColor} : {}]}>
          <Text style={[styles.searchText, tag == 'Compañero' ? {color: currentTheme.tertiaryColor} : {}]}>Compañero</Text>
        </TouchableOpacity>

        {/* Boton para ver solo profesor */}
        <TouchableOpacity onPress={() => setTag('profesor')}
          style={[styles.buttonFormat, tag == 'profesor' ? {backgroundColor: currentTheme.quinaryColor} : {}]}>
          <Text style={[styles.searchText, tag == 'profesor' ? {color: currentTheme.tertiaryColor}: {}]}>Profesor</Text>
        </TouchableOpacity>

        {/* Boton para ver solo Administrativo */}
        <TouchableOpacity onPress={() => setTag('Administrativo')}
          style={[styles.buttonFormat, tag == 'Administrativo' ? {backgroundColor: currentTheme.quinaryColor} : {}]}>
          <Text style={[styles.searchText, tag == 'Administrativo' ? {color: currentTheme.tertiaryColor} : {}]}>Administrativo</Text>
        </TouchableOpacity>
        
      </View>

      {/*Area de scroll para ver contactos*/}
      {/* Validación para saber si hay contactos */}
      {!contactos.length ?
        ( //Si no los hay, muestra un mensaje
          <View style={[styles.emptyHeaderContainer, {backgroundColor: currentTheme.backgroundColor}]}>
            <Text style={styles.emptyHeader}>
              Parece que no tienes ningun contacto añadido, ¡Empieza añadiendo uno!
            </Text>
          </View>
        ) : 
            ( // Si hay contactos los muestra
              <FlatList
                data={contactos}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Contact item={item}/>} style={{ backgroundColor: currentTheme.backgroundColor }}
              />
            ) 
      }
      
      {/*Botón para agregar contactos*/}
      <TouchableOpacity onPress={() => addContact()} style={styles.addIcon} >
        <Icon name='plus-circle' size={50} color={currentTheme.primaryColor}/>
      </TouchableOpacity>

    </View>
    //Modal para ver contacto esta en ContactList.js
    //Esta aparece al seleccionar un contacto
  );
}

const styles = StyleSheet.create({
    wholeContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    //Estilos para ver contactos
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 10,
      paddingHorizontal: 20,
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
      marginTop: 15,
    },
    searchText: {
      fontFamily: 'Sen',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 14,
      color: '#A9A9A9',
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
      padding: 35,
    },
    emptyHeader: {
      fontSize: 30,
      fontWeight: 'bold',
      opacity: 0.5,
      bottom: 30,
    },
},);
  