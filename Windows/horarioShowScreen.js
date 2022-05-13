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

        <Text style = {[styles.dia,{color: currentTheme.tertiaryColor}]}>                  Lun     Mar     Mié     Jue     Vie     Sab </Text>
        
        <ScrollView>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 10, flex: 1, height: 1, opacity: .3,backgroundColor: currentTheme.primaryColor}} />
        </View>

        <Text style = {[styles.hora,{color: currentTheme.tertiaryColor}]}> 07:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: currentTheme.primaryColor}} />
        </View>

        <Text style = {[styles.hora,{color: currentTheme.tertiaryColor}]}> 08:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: currentTheme.primaryColor}} />
        </View>

        <Text style = {[styles.hora,{color: currentTheme.tertiaryColor}]}> 09:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: currentTheme.primaryColor}} />
        </View>

        <Text style = {[styles.hora,{color: currentTheme.tertiaryColor}]}> 10:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: currentTheme.primaryColor}} />
        </View>

        <Text style = {[styles.hora,{color: currentTheme.tertiaryColor}]}> 11:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3 ,backgroundColor: currentTheme.primaryColor}} />
        </View>

        <Text style = {[styles.hora,{color: currentTheme.tertiaryColor}]}> 12:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3 ,backgroundColor: currentTheme.primaryColor}} />
        </View>

        <Text style = {[styles.hora,{color: currentTheme.tertiaryColor}]}> 13:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3 ,backgroundColor: currentTheme.primaryColor}} />
        </View>

        <Text style = {[styles.hora,{color: currentTheme.tertiaryColor}]}> 14:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3, backgroundColor: currentTheme.primaryColor}} />
        </View>

        <Text style = {[styles.hora,{color: currentTheme.tertiaryColor}]}> 15:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: currentTheme.primaryColor}} />
        </View>

        <Text style = {[styles.hora,{color: currentTheme.tertiaryColor}]}> 16:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: currentTheme.primaryColor}} />
        </View>

        <Text style = {[styles.hora,{color: currentTheme.tertiaryColor}]}> 17:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: currentTheme.primaryColor}} />
        </View>

        <Text style = {[styles.hora,{color: currentTheme.tertiaryColor}]}> 18:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: currentTheme.primaryColor}} />
        </View>


        <Text style = {[styles.hora,{color: currentTheme.tertiaryColor}]}> 19:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: currentTheme.primaryColor}} />
        </View>

        <Text style = {[styles.hora,{color: currentTheme.tertiaryColor}]}> 20:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: currentTheme.primaryColor}} />
        </View>

        <Text style = {[styles.hora,{color: currentTheme.tertiaryColor}]}> 21:00 </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginTop: 30, flex: 1, height: 1, opacity: .3,backgroundColor: currentTheme.primaryColor}} />
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