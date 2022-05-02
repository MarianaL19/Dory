import React from 'react';
import actualTheme from '../Components/actualTheme';

import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    TextInput,
  } from 'react-native';


export default function AgendaC() {
    return (
         
    <View style={styles.wholeContainer}>
    <View>
      <TextInput style={styles.searchBoxFormat}
        placeholder='Buscar contacto'
        placeholderTextColor='#C4C4C4'
      />
    </View>

    <View style={styles.buttonContainer}>
      <TouchableOpacity style={[styles.buttonFormat,{backgroundColor: actualTheme.secondaryColor}]}>
        <Text>Todos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonFormat}>
        <Text>Compañero</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonFormat}>
        <Text>Profesor</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonFormat}>
        <Text>Administrativos</Text>
      </TouchableOpacity>
    </View>
    
    <View>
      <ScrollView>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
        <Text>Texto de prueba</Text>
      </ScrollView>
    </View>

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

  //importar imagen, o hacer lo de las letras de google con contenedor y letras gigantes

  /*
  <View style={styles.wholeContainer}>
    <View>
      <Text>Imagen</Text>
    </View>
    
    <View style={styles.inputFormat}>
      <TextInput style={styles.addInputFormat}
        placeholder='Nombre del contacto'
        placeholderTextColor='#C4C4C4'
      />
      <TextInput style={styles.addInputFormat}
        placeholder='Añadir número de teléfono'
        placeholderTextColor='#C4C4C4'
      />
      <TextInput style={styles.addInputFormat}
        placeholder='Añadir correo'
        placeholderTextColor='#C4C4C4'
      />
    </View>
    
    <View>
      <Text style={styles.tagFormat}>Etiqueta</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonFormat}>
          <Text>Compañero</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFormat}>
          <Text>Profesor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFormat}>
          <Text>Academico</Text>
        </TouchableOpacity>
      </View>
    </View>
    
    <View style={styles.addButtonContainer}>
      <TouchableOpacity style={styles.addButtonFormat}>
        <Text style={styles.addButtonText}>AÑADIR</Text>
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
    addContactButton: {
      position: 'absolute',
      zIndex: 1,
      bottom: 10,
      right: 10,
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
    //Estilos para formulario
    addButtonContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 10,
      marginTop: 10,
    },
    addButtonFormat: {
      backgroundColor: '#0E63F4',
      padding: 5,
      borderRadius: 20,
      width: 140,
      height: 60,
    },
    addButtonText: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 18,
      color: '#ffffff',
      marginTop: 10,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
    },
    inputFormat: {
      marginTop: 20,
      marginBottom: 20,
    },
    tagFormat: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 25,
      display: 'flex',
      alignItems: 'center',
      color: '#00456e',
      marginBottom: 15,
    },
    addInputFormat: {
      backgroundColor: '#ffffff',
      borderRadius: 0,
      borderWidth: 3,
      borderColor: '#c2e6ff',
      borderRightWidth: 0,
      borderLeftWidth: 0,
      padding: 10,
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 20,
    },
  });
  