import React, { Component } from 'react';
import {Dimensions, Text, TextInput, StyleSheet, Image, View} from 'react-native'
import native from 'react-native-elements';
import { Container, TextPrimary,TextSecondary,TextTertiary, BasicText, BasicButton } from '../components';

const {width, height} = Dimensions.get('screen');

export default function View1() {
    const [number, onChangeText] = React.useState(null);

    return (
        <Container>

            <Image
                style={{ width: width, height: height/2.7, position:'absolute' }}
                source={require("../imagenes/encabezado.png")}
            />
            <Image
                style={{ height: 25, width:165, marginTop:50, position:'absolute' }}
                source={require("../imagenes/Dory_texto.png")}
            />


            <Text style={{top: height/3.8, paddingHorizontal: 0, position:'absolute'}}>
                <BasicText bold size={'70px'} largeSpacing>¡Hola!</BasicText>
            </Text>
            <Text style={{top: height/2.5, paddingHorizontal: 70, textAlign: 'center', position:'absolute'}}>
                <BasicText bold size={'34px'} mediumSpacing>Bienvenido  a Dory</BasicText>
            </Text>

            <BasicText size={'18px'}smallSpacing gray top={height/1.8+'px'} paddingHorizontal={'20px'}>Por favor ingresa tu nombre</BasicText>


            <BasicButton borderRadius={'20px'} top={height/1.35+'px'}>
                <BasicText white medium bold> Continuar</BasicText>
            </BasicButton>

            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={number}
                keyboardType='name-phone-pad'
            />

        </Container>
    );
}

const styles = StyleSheet.create({
    input: {
        top: height/1.65,
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: '#C6C6C6',
        width: width/1.5,
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        position: 'absolute',
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
  });