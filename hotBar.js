import { Text, View, StyleSheet,
        Dimensions, Image} from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from './config.json';
import colores from './Components/currentTheme';

const Icon2 = createIconSetFromFontello(fontelloConfig);

const {width, height} = Dimensions.get('screen');

export default function MenuBar() {
  

    return(
        <View style={styles.menu}>

                {/* Logo */}
            <View style={styles.menuUno}>
              <Icon2
                name='dory'
                color={colores.quaternaryColor}
                size={20}
              />
            </View>

              {/* Espacio */}
            <View style={styles.menuDos}>
                
            </View>

                {/* Botón Ajustes */}
            <View style={styles.menuTres}>
                <Icon    
                name='cog'
                //onPress={moverse}
                color={colores.quaternaryColor}
                size={35}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    menu: {
      width: width,
      height: 60,
      backgroundColor: 'white',
      flexDirection: 'row',
      position: 'absolute',
      borderBottomWidth: 0,
      borderColor: 'black',
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 3,
      shadowColor: '#000',
    },

    menuUno: {
      width: 60,
      height: 60,
      //backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
    },

    Icono: {
      width: 60,
      height: 60,
    },

    menuDos: {
      width: width-120,
      height: 60,
      //backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    menuTres: {
      width: 60,
      height: 60,
      //backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })