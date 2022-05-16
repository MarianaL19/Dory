import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Button} from 'react-native-elements'
import { NavigationContext } from '@react-navigation/native';

export default class Inicio extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const navigation = this.context;
    return (
      <View>
        <Text> Inicio </Text>
        <Button title={"ENTRAR"}
            onPress={() => navigation.push('Menu')}
        />
      </View>
    );
  }
}
