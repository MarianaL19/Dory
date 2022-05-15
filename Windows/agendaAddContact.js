import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Dimensions } from "react-native";
import currentTheme from '../Components/currentTheme';
import Contact from '../Components/ContactList';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class AgendaAddContact extends Component {
  // Variables para ingresar inforamcion de contactos
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      telefono: "",
      correo: "",
      etiqueta: "",
    };
  }

  render() {

    // Variables para el estado del tag del recordatorio
    const [tag, setTag] = useState('null');

    const registro = () => {
      var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                
            }
        };
        xhttp.open("GET", 'https://dory69420.000webhostapp.com/horario.php?nombre=' + nombre, true);
        xhttp.send();
    }

    return (
      //Contenedor general
      <View style={[styles.wholeContainer, {backgroundColor: currentTheme.backgroundColor}]}>
        
        {/* Contenedor general para los campos de input */}
        <View style={[styles.inputFormat, {backgroundColor: currentTheme.backgroundColor}]}>
          
          {/* Titulo de ventana */}
          <Text style={[styles.modalTitle, {color: currentTheme.primaryColor}]}>Ingrese nuevo contacto</Text>
          
          {/* Linea devisoria 1 */}
          <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:1, width: width}}/>
          
          {/* Contenedor de icono para campo de nombre */}
          <View style={styles.iconContainer}>
            
            {/* Icono de persona */}
            <Icon name='account-outline' size={40} color={'#E5E5E5'}/>

            {/* Campo de entrada de inforamacion, nombre del contacto */}
            <TextInput style={styles.addInputFormat}
                placeholder='Nombre del contacto'
                placeholderTextColor='#C4C4C4'
                maxLength={70}
                clearTextOnFocus={true}
                onChangeText = {nombre => this.setState({nombre})}
            />

          </View>

          {/* Linea divisoria 2 */}
          <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:1, width: width}}/>

          {/* Contenedor de icono para campo de telefono */}
          <View style={styles.iconContainer}>
            
            {/* Icono de telefono */}
            <Icon name='phone' size={40} color={'#E5E5E5'}/>

            {/* Campo de entrada de informacion, telefono */}
            <TextInput style={styles.addInputFormat}
                placeholder='Añadir número de teléfono'
                placeholderTextColor='#C4C4C4'
                keyboardType='number-pad'
                maxLength={10}
                clearTextOnFocus={true}
                onChangeText = {telefono => this.setState({telefono})}
            />

          </View>

          {/* Linea divisoria 3 */}
          <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:1, width: width}}/>

          {/* Contenedor de icono para campo de correo */}
          <View style={styles.iconContainer}>

            {/* Icono de correo */}
            <Icon name='email' size={40} color={'#E5E5E5'}/>

            {/* Campo de entrada de informacion, correo */}
            <TextInput style={styles.addInputFormat}
                placeholder='Añadir correo'
                placeholderTextColor='#C4C4C4'
                maxLength={64}
                clearTextOnFocus={true}
                onChangeText = {correo => this.setState({correo})}
            />

          </View>

          {/* Linea divisoria 4 */}
          <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:1, width: width}}/>

        </View>
        
        {/* Contenedot para botones de etiqueta */}
        <View style={{backgroundColor: currentTheme.backgroundColor, padding: 15}}>

          {/* Texto de titulo */}
          <Text style={styles.tagFormat}>Etiqueta</Text>

          {/* Contenedo de botones */}
          <View style={styles.buttonContainer}>

              {/* Boton de compañero */}
              <TouchableOpacity onPress={() => setTag('Compañero')}
                style={[styles.buttonFormat, tag == 'Compañero' ? {backgroundColor: currentTheme.quinaryColor} : {}]}>
                <Text style={[styles.searchText, tag == 'Compañero' ? {color: currentTheme.tertiaryColor} : {}]}>Compañero</Text>
              </TouchableOpacity>

              {/* Boton de profesor */}
              <TouchableOpacity onPress={() => setTag('Profesor')}
                style={[styles.buttonFormat, tag == 'Profesor' ? {backgroundColor: currentTheme.quinaryColor} : {}]}>
                <Text style={[styles.searchText, tag == 'Profesor' ? {color: currentTheme.tertiaryColor} : {}]}>Profesor</Text>
              </TouchableOpacity>

              {/* Boton de administrativo */}
              <TouchableOpacity onPress={() => setTag('Administrativo')}
                style={[styles.buttonFormat, tag == 'Administrativo' ? {backgroundColor: currentTheme.quinaryColor} : {}]}>
                <Text style={[styles.searchText, tag == 'Administrativo' ? {color: currentTheme.tertiaryColor} : {}]}>Administrativo</Text>
              </TouchableOpacity>

          </View>

        </View>
        
        {/* Contenedor de boton para agregar registro */}
        <View style={[styles.addButtonContainer, {backgroundColor: currentTheme.backgroundColor}]}>

          <TouchableOpacity
            style={[styles.addButtonFormat, {backgroundColor: currentTheme.primaryColor}]}
            onPress={registro}
          >
              <Text style={styles.addButtonText}>AÑADIR</Text>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

/*
import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Dimensions } from "react-native";
import currentTheme from '../Components/currentTheme';
import Contact from '../Components/ContactList';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
*/

/*
export default function AgendaAddContact() {

    // Variables para el estado del tag del recordatorio
    const [tag, setTag] = useState('null');

    const [nombre, setNombre] = useState('');

    const registro = () => {
      var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                
            }
        };
        xhttp.open("GET", 'https://dory69420.000webhostapp.com/horario.php?nombre=' + nombre, true);
        xhttp.send();
    }

    return (
        <View style={[styles.wholeContainer, {backgroundColor: currentTheme.backgroundColor}]}>
                        
            <View style={[styles.inputFormat, {backgroundColor: currentTheme.backgroundColor}]}>

              <Text style={[styles.modalTitle, {color: currentTheme.primaryColor}]}>Ingrese nuevo contacto</Text>

              <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:1, width: width}}/>

              <View style={styles.iconContainer}>

                <Icon name='account-outline' size={40} color={'#E5E5E5'}/>

                <TextInput style={styles.addInputFormat}
                    placeholder='Nombre del contacto'
                    placeholderTextColor='#C4C4C4'
                    // maxLength={70}
                    clearTextOnFocus={true}
                    onChangeText = {(value) => setNombre(value)}
                />

              </View>

              <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:1, width: width}}/>

              <View style={styles.iconContainer}>

                <Icon name='phone' size={40} color={'#E5E5E5'}/>

                <TextInput style={styles.addInputFormat}
                    placeholder='Añadir número de teléfono'
                    placeholderTextColor='#C4C4C4'
                    keyboardType='number-pad'
                    // maxLength={10}
                    clearTextOnFocus={true}
                />

              </View>

              <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:1, width: width}}/>

              <View style={styles.iconContainer}>

                <Icon name='email' size={40} color={'#E5E5E5'}/>

                <TextInput style={styles.addInputFormat}
                    placeholder='Añadir correo'
                    placeholderTextColor='#C4C4C4'
                    // maxLength={64}
                    clearTextOnFocus={true}
                />

              </View>

              <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:1, width: width}}/>

            </View>
            
            <View style={{backgroundColor: currentTheme.backgroundColor, padding: 15}}>

              <Text style={styles.tagFormat}>Etiqueta</Text>

              <View style={styles.buttonContainer}>

                  <TouchableOpacity onPress={() => setTag('Compañero')}
                    style={[styles.buttonFormat, tag == 'Compañero' ? {backgroundColor: currentTheme.quinaryColor} : {}]}>
                    <Text style={[styles.searchText, tag == 'Compañero' ? {color: currentTheme.tertiaryColor} : {}]}>Compañero</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => setTag('Profesor')}
                    style={[styles.buttonFormat, tag == 'Profesor' ? {backgroundColor: currentTheme.quinaryColor} : {}]}>
                    <Text style={[styles.searchText, tag == 'Profesor' ? {color: currentTheme.tertiaryColor} : {}]}>Profesor</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => setTag('Administrativo')}
                    style={[styles.buttonFormat, tag == 'Administrativo' ? {backgroundColor: currentTheme.quinaryColor} : {}]}>
                    <Text style={[styles.searchText, tag == 'Administrativo' ? {color: currentTheme.tertiaryColor} : {}]}>Administrativo</Text>
                  </TouchableOpacity>

              </View>

            </View>
            
            <View style={[styles.addButtonContainer, {backgroundColor: currentTheme.backgroundColor}]}>

              <TouchableOpacity
                style={[styles.addButtonFormat, {backgroundColor: currentTheme.primaryColor}]}
                onPress={registro}
              >
                  <Text style={styles.addButtonText}>AÑADIR</Text>
              </TouchableOpacity>

            </View>

        </View>
    );
}
*/
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    //Estilos para formulario
    wholeContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    iconContainer: {
      flexDirection: 'row',
      marginBottom: 10,
      marginTop: 10,
      alignItems:'center',
      marginLeft: 20,
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
      color: '#FFFFFF',
      marginTop: 10,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
    },
    inputFormat: {
      marginTop: 15,
      marginBottom: 15,
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
      textAlign: 'left',
      alignSelf: 'center',
      paddingLeft: 20,
    },
});