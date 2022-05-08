import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';

export default class AddRecordatorios extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.popUpContainer}>
        <Text style={styles.popUpTitle}>
          Nuevo recordatorio
        </Text>
        
        <TextInput
          placeholder="Título del recordatorio"
          keyboardType="default"
        />
        
        <Text style={styles.popUpSubtitle}>
          Tipo de recordatorio
        </Text>

        <View style={styles.filterButtonContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>
              Tarea
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>
              Examen
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>
              Otro
            </Text>
          </TouchableOpacity>
        </View>

        <TextInput
          placeholder="Materia"
          keyboardType="default"
        />

        <TextInput
          placeholder="Seleccione la fecha de entrega"
          keyboardType="default"
        />

        <TextInput
          placeholder="Seleccione la hora de entrega"
          keyboardType="default"
        />

        <TextInput
          placeholder="Descripción"
          keyboardType="default"
        />

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.popUpText}>
            Notificar recordatorio  
          </Text>
          
          <Switch
            trackColor={{false:"grey", true:"grey"}} 
          />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.popUpText}>
            24 horas antes 
          </Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.popUpText}>
            12 horas antes 
          </Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.popUpText}>
            Seleccionar hora
          </Text>
        </View>

        <TouchableOpacity style={styles.popUpButton}>
            <Text style={styles.popUpTButtonText}>
              AÑADIR
            </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  popUpContainer: {
    marginTop: 50,
    marginHorizontal: 50,
    paddingHorizontal: 24,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: "white",
  },
  filterButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
  },
  popUpButton: {
    alignItems: 'center',
    backgroundColor: '#0E63F4',
    borderRadius: 5,
    padding: 3,
  },
  filterButton: {
    alignItems: 'center',
    backgroundColor: '#C2E6FF',
    borderRadius: 5,
    width: 80,
    padding: 3,
  },
  popUpTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    padding: 10,
  },
  popUpSubtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00456E',
    padding: 5,
  },
  popUpText: {
    color: "#00456E",
    fontSize: 14,
    padding: 5,
  },
  popUpTButtonText: {
    color: "#FAF9F3",
    fontSize: 18,
    fontWeight: "600",
    padding: 5,
  },
  filterText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#00456E',
  },
  listingButton: {
    padding: 5,
  },
  listingText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#00456E',
  },
});