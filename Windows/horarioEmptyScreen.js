import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Dimensions } from 'react-native';
import MenuBar from '../hotBar';

const {width, height} = Dimensions.get('screen');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.container}>

        <View style={styles.nav}>
          <MenuBar/>
        </View>

        <Text style = {styles.titulo2}> Parece que no tienes </Text>
        <Text style = {styles.titulo2}> ninguna materia añadida, </Text>
        <Text style = {styles.subTitle2}> ¡empieza añadiendo una! </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  nav:{
    width: width,
    height: 60,
    marginBottom:250,
  },
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo2: {
    fontSize: 22,
    color: '#A0A5AE',
  },
  subTitle2: {
    fontSize: 22,
    color: '#A0A5AE',
    fontWeight: 'bold',
  }
})