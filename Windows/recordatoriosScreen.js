import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.titulo}> Parece que no tienes </Text>
        <Text style = {styles.titulo}> ninguna materia añadida, </Text>
        <Text style = {styles.subTitle}> ¡empieza añadiendo una! </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 22,
    color: '#A0A5AE',
  },
  subTitle: {
    fontSize: 22,
    color: '#A0A5AE',
    fontWeight: 'bold',
  }
})