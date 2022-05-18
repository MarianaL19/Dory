
import React, { Component, useState } from 'react';
import { blueTheme, pinkTheme, greenTheme } from "./themes";
import AsyncStorage from '@react-native-async-storage/async-storage';

const recuperarTema = async() => {
    const jsonValue = await AsyncStorage.getItem('Theme');
    var data = JSON.parse(jsonValue);

    var ID = data[0];
    console.log(ID);
    return ID;
  }

var currentTheme;
//var themeID = JSON.stringify(recuperarTema());

var themeID = "2";

const validar = () => {
    console.log(themeID);
}

validar();

if (themeID == "1") {
    currentTheme = blueTheme;
} 
else if (themeID == "2") {
    currentTheme = pinkTheme;
} 
else if (themeID == "3"){
    currentTheme = greenTheme;
}
else {
    currentTheme = blueTheme;
}

var theme = {
    primaryColor: currentTheme.colors.primary,
    secondaryColor: currentTheme.colors.secondary,
    tertiaryColor: currentTheme.colors.tertiary,
    quaternaryColor: currentTheme.colors.quaternary,
    quinaryColor: currentTheme.colors.quinary,
    backgroundColor: currentTheme.colors.background,
}

export default theme;