import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView } from 'react-native';
import currentTheme from '../Components/currentTheme';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.container}>

        <Text style = {[styles.dia,{color: currentTheme.tertiary}]}>                  Lun     Mar     Mié     Jue     Vie     Sab </Text>
        
        <ScrollView>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 10, flex: 1, height: 1, opacity: .3,backgroundColor: currentTheme.primary}} />
        </View>

        <Text style = {[styles.hora,{color: currentTheme.tertiary}]}> 07:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: currentTheme.primary}} />
        </View>

        <Text style = {[styles.hora,{color: currentTheme.tertiary}]}> 08:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: currentTheme.primary}} />
        </View>

        <Text style = {[styles.hora,{color: currentTheme.tertiary}]}> 09:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: currentTheme.primary}} />
        </View>

        <Text style = {[styles.hora,{color: currentTheme.tertiary}]}> 10:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: currentTheme.primary}} />
        </View>

        <Text style = {[styles.hora,{color: currentTheme.tertiary}]}> 11:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3 ,backgroundColor: currentTheme.primary}} />
        </View>

        <Text style = {[styles.hora,{color: currentTheme.tertiary}]}> 12:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3 ,backgroundColor: currentTheme.primary}} />
        </View>

        <Text style = {[styles.hora,{color: currentTheme.tertiary}]}> 13:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3 ,backgroundColor: currentTheme.primary}} />
        </View>

        <Text style = {[styles.hora,{color: currentTheme.tertiary}]}> 14:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3, backgroundColor: currentTheme.primary}} />
        </View>

        <Text style = {[styles.hora,{color: currentTheme.tertiary}]}> 15:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: currentTheme.primary}} />
        </View>

        <Text style = {[styles.hora,{color: currentTheme.tertiary}]}> 16:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: currentTheme.primary}} />
        </View>

        <Text style = {[styles.hora,{color: currentTheme.tertiary}]}> 17:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: currentTheme.primary}} />
        </View>

        <Text style = {[styles.hora,{color: currentTheme.tertiary}]}> 18:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: currentTheme.primary}} />
        </View>


        <Text style = {[styles.hora,{color: currentTheme.tertiary}]}> 19:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: currentTheme.primary}} />
        </View>

        <Text style = {[styles.hora,{color: currentTheme.tertiary}]}> 20:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: currentTheme.primary}} />
        </View>

        <Text style = {[styles.hora,{color: currentTheme.tertiary}]}> 21:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: currentTheme.primary}} />
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