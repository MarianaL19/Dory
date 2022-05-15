
import React, { Component, useState } from 'react';
import { blueTheme, pinkTheme, greenTheme } from "./themes";

var currentTheme;
var themeID = "1";

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