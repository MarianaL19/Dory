import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView } from 'react-native';
import actualTheme from '../Components/actualTheme';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.container}>

        <Text style = {[styles.dia,{color: actualTheme.tertiary}]}>                  Lun     Mar     Mié     Jue     Vie     Sab </Text>
        
        <ScrollView>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 10, flex: 1, height: 1, opacity: .3,backgroundColor: actualTheme.primary}} />
        </View>

        <Text style = {[styles.hora,{color: actualTheme.tertiary}]}> 07:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: actualTheme.primary}} />
        </View>

        <Text style = {[styles.hora,{color: actualTheme.tertiary}]}> 08:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: actualTheme.primary}} />
        </View>

        <Text style = {[styles.hora,{color: actualTheme.tertiary}]}> 09:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: actualTheme.primary}} />
        </View>

        <Text style = {[styles.hora,{color: actualTheme.tertiary}]}> 10:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: actualTheme.primary}} />
        </View>

        <Text style = {[styles.hora,{color: actualTheme.tertiary}]}> 11:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3 ,backgroundColor: actualTheme.primary}} />
        </View>

        <Text style = {[styles.hora,{color: actualTheme.tertiary}]}> 12:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3 ,backgroundColor: actualTheme.primary}} />
        </View>

        <Text style = {[styles.hora,{color: actualTheme.tertiary}]}> 13:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3 ,backgroundColor: actualTheme.primary}} />
        </View>

        <Text style = {[styles.hora,{color: actualTheme.tertiary}]}> 14:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3, backgroundColor: actualTheme.primary}} />
        </View>

        <Text style = {[styles.hora,{color: actualTheme.tertiary}]}> 15:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: actualTheme.primary}} />
        </View>

        <Text style = {[styles.hora,{color: actualTheme.tertiary}]}> 16:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: actualTheme.primary}} />
        </View>

        <Text style = {[styles.hora,{color: actualTheme.tertiary}]}> 17:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: actualTheme.primary}} />
        </View>

        <Text style = {[styles.hora,{color: actualTheme.tertiary}]}> 18:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: actualTheme.primary}} />
        </View>


        <Text style = {[styles.hora,{color: actualTheme.tertiary}]}> 19:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: actualTheme.primary}} />
        </View>

        <Text style = {[styles.hora,{color: actualTheme.tertiary}]}> 20:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: actualTheme.primary}} />
        </View>

        <Text style = {[styles.hora,{color: actualTheme.tertiary}]}> 21:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: actualTheme.primary}} />
        </View>

        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FFF',
    justifyContent: 'center',
    marginTop: 60,
  },
  titulo: {
    fontSize: 22,
    color: '#A0A5AE',
  },
  hora: {
    fontSize: 19,
    color: '#00456E',
    fontWeight: 'bold',
  },
  dia: {
    fontSize: 19,
    color: '#00456E',
    fontWeight: 'bold',
  },
})