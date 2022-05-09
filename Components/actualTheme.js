
import { blueTheme, pinkTheme } from "./themes";

const actualTheme = blueTheme;

 var theme = {
    primaryColor: actualTheme.colors.primary,
    secondaryColor: actualTheme.colors.secondary,
    tertiaryColor: actualTheme.colors.tertiary,
    quaternaryColor: actualTheme.colors.quaternary,
    quinaryColor: actualTheme.colors.quinary,
    backgroundColor: actualTheme.colors.background,

    get primary() {
        return this.primaryColor;
    },
    get secondary(){
        return this.secondaryColor;
    },
    get tertiary(){
        return this.tertiaryColor;
    },
    get quaternary(){
        return this.quaternaryColor;
    },
    get quinary(){
        return this.quinaryColor;
    },
    get background(){
        return this.backgroundColor;
    },
}

export default theme;