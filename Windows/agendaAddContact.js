import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Dimensions } from "react-native";
import currentTheme from '../Components/currentTheme';
import Contact from '../Components/ContactList';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


//Pedir ayuda para las lineas y terminar de comentar, tambien iconos

export default function AgendaAddContact() {

    // Variables para el estado del tag del recordatorio
    const [tag, setTag] = useState('null');

    return (
        <View style={[styles.wholeContainer, {backgroundColor: currentTheme.background}]}>
                        
            <View style={[styles.inputFormat, {backgroundColor: currentTheme.background}]}>

              <Text style={[styles.modalTitle, {color: currentTheme.primary}]}>Ingrese nuevo contacto</Text>

              <View style={{borderBottomColor: currentTheme.quinary, borderBottomWidth:1, width: width}}/>

              <TextInput style={styles.addInputFormat}
                  placeholder='Nombre del contacto'
                  placeholderTextColor='#C4C4C4'
              />

              <View style={{borderBottomColor: currentTheme.quinary, borderBottomWidth:1, width: width}}/>

              <TextInput style={styles.addInputFormat}
                  placeholder='Añadir número de teléfono'
                  placeholderTextColor='#C4C4C4'
              />

              <View style={{borderBottomColor: currentTheme.quinary, borderBottomWidth:1, width: width}}/>

              <TextInput style={styles.addInputFormat}
                  placeholder='Añadir correo'
                  placeholderTextColor='#C4C4C4'
              />

              <View style={{borderBottomColor: currentTheme.quinary, borderBottomWidth:1, width: width}}/>

            </View>
            
            <View style={{backgroundColor: currentTheme.background}}>

              <Text style={styles.tagFormat}>Etiqueta</Text>

              <View style={styles.buttonContainer}>

                  <TouchableOpacity onPress={() => setTag('Compañero')}
                    style={[styles.buttonFormat, tag == 'Compañero' ? {backgroundColor: currentTheme.quinary} : {}]}>
                    <Text style={[styles.searchText, tag == 'Compañero' ? {color: currentTheme.tertiary} : {}]}>Compañero</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => setTag('Profesor')}
                    style={[styles.buttonFormat, tag == 'Profesor' ? {backgroundColor: currentTheme.quinary} : {}]}>
                    <Text style={[styles.searchText, tag == 'Profesor' ? {color: currentTheme.tertiary} : {}]}>Profesor</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => setTag('Administrativo')}
                    style={[styles.buttonFormat, tag == 'Administrativo' ? {backgroundColor: currentTheme.quinary} : {}]}>
                    <Text style={[styles.searchText, tag == 'Administrativo' ? {color: currentTheme.tertiary} : {}]}>Administrativo</Text>
                  </TouchableOpacity>

              </View>

            </View>
            
            <View style={[styles.addButtonContainer, {backgroundColor: currentTheme.background}]}>

              <TouchableOpacity style={styles.addButtonFormat}>
                  <Text style={styles.addButtonText}>AÑADIR</Text>
              </TouchableOpacity>

            </View>

        </View>
    );
}

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    //Estilos para formulario
    wholeContainer: {
      padding: 20,
      marginTop: 60,
      height: 530,
      backgroundColor: currentTheme.background,
    },
    modalTitle: {
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: 'center',
      marginBottom: 20,
    },
    searchText: {
      fontFamily: 'Sen',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 18,
      color: '#A9A9A9',
      marginTop: 2,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
    },
    addButtonContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 40,
    },
    addButtonFormat: {
      backgroundColor: '#0E63F4',
      padding: 5,
      borderRadius: 20,
      width: 140,
      height: 60,
    },
    buttonFormat: {
      backgroundColor: '#E5E5E5',
      padding: 5,
      paddingHorizontal: 10,
      borderRadius: 5,
      borderColor: '#E5E5E5',
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
      justifyContent: 'center',
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
      marginTop: 40,
    },
    addInputFormat: {
      fontSize: 18,
      textAlign: 'center',
    },
});