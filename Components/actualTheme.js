
import React, { Component, useState } from 'react';
import { blueTheme, pinkTheme } from "./themes";

var actualTheme;
var themeID = "";

if (themeID == "1") {
    actualTheme = blueTheme;
} 
else if (themeID == "2") {
    actualTheme = pinkTheme;
} 
else {
    actualTheme = blueTheme;
}

var theme = {
    primaryColor: actualTheme.colors.primary,
    secondaryColor: actualTheme.colors.secondary,
    tertiaryColor: actualTheme.colors.tertiary,
    quaternaryColor: actualTheme.colors.quaternary,
    quinaryColor: actualTheme.colors.quinary,
    backgroundColor: actualTheme.colors.background,
}

export default theme;