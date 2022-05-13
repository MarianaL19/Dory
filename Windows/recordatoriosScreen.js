import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity,
        Dimensions} from 'react-native';

import MenuBar from '../hotBar';

const {width, height} = Dimensions.get('screen');

export default class Recordatorios extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.sectionContainer}>

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

        <View style={styles.tareas}>
          <TouchableOpacity
            style={styles.listingButton}
          >
            <Text
            style={styles.listingText}
            >
              Anteriores
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
          style={styles.listingButton}
          >
            <Text
            style={styles.listingText}
            >
              Hoy
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
          style={styles.listingButton}
          >
            <Text
            style={styles.listingText}
            >
              Más tarde
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  nav:{
    width: width,
    height: 60,
  },

  sectionContainer: {
    //marginTop: 32,
    //paddingHorizontal: 24,
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
    marginTop: 20,
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

  tareas:{
    marginLeft: 24,
    marginTop: 15,
  },
});