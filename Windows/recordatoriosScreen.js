import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity,
        Dimensions, FlatList} from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";

import MenuBar from '../hotBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import currentTheme from '../Components/currentTheme';
import AddRecordatorios from './recordatoriosAddScreen';
import { NavigationContext } from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

export default class Recordatorios extends Component {

  static contextType = NavigationContext;

  constructor(props) {
    super(props);
    this.state = {
      nombreRecordatorio: 'aaa mi pichula',
    };
  }

  render() {
    const navigation = this.context;

    return (
      <View>

        <View style={styles.nav}>
          <MenuBar/>
        </View>
        
        <View style={styles.filterButtonContainer}>
          
          <TouchableOpacity
          style={styles.filterButton}
          >
            <Text
            style={styles.filterText}
            >
              Todos
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
          style={styles.filterButton}
          >
            <Text
            style={styles.filterText}
            >
              Tareas
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
          style={styles.filterButton}
          >
            <Text
            style={styles.filterText}
            >
              Exámenes
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity
          style={styles.filterButton}
          >
            <Text
            style={styles.filterText}
            >
              Otros
            </Text>
          </TouchableOpacity>
        </View>

        <Collapse>
        <CollapseHeader>
          <Text style={styles.collapseTitle}>Completados</Text>
        </CollapseHeader>
        <CollapseBody>
          <Text> Hola! </Text>
        </CollapseBody>
        </Collapse>

        <Collapse>
        <CollapseHeader>
          <Text style={styles.collapseTitle}>Omitidos</Text>
        </CollapseHeader>
        <CollapseBody>
          <Text> Hola! </Text>
        </CollapseBody>
        </Collapse>

        <Collapse>
        <CollapseHeader>
          <Text style={styles.collapseTitle}>Pendientes</Text>
        </CollapseHeader>
        <CollapseBody>
          <FlatList
              data = {[
                {key: this.state.nombreRecordatorio},
                {key: 'Recordatorio 2'},
                {key: 'Recordatorio 3'},
              ]}
              renderItem={({item}) => <TouchableOpacity><Text style={styles.collapseItems}>{item.key}</Text></TouchableOpacity>}
          />
        </CollapseBody>
        </Collapse>

              {/* Botón para agregar recordatorios */}
      <TouchableOpacity onPress={() => {navigation.navigate("Horario");}} style={styles.addIcon}>
        <Icon name='plus-circle' size={50} color={currentTheme.primary}/>
      </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  nav:{
    width: width,
    height: 60,
  },
  filterButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
    marginTop: 20,
  },
  filterButton: {
    alignItems: 'center',
    backgroundColor: '#C2E6FF',
    borderRadius: 5,
    width: 80,
    padding: 3,
  },
  filterText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#00456E',
  },
  collapseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: currentTheme.tertiaryColor,
    marginHorizontal: 15,
    paddingBottom: 15,
  },
  collapseItems: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    color: currentTheme.tertiaryColor,
    backgroundColor: currentTheme.quinaryColor,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: currentTheme.secondaryColor,
    marginHorizontal: 30,
    padding: 10,
  },
});