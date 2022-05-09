import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class agendaAddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        //importar imagen, o hacer lo de las letras de google con contenedor y letras gigantes
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
    
    );
  }
}

const styles = StyleSheet.create({
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