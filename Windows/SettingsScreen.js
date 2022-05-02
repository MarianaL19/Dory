import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TextInput, SafeAreaView, Dimensions, Image, Switch, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
const {width, height} = Dimensions.get("screen");

const Settings = () => {
  const [nombre, setNombre] = useState('usuario');

  return (
    <View style={styles.container}>
      <Text style={styles.TituloUsuario}>¡Hola, {nombre}!</Text>
      
      {/* Casilla de input para texto (nombre de usuario) */}
      <TextInput 
        style={styles.inputTexto}
        placeholder="nombre de usuario"
        onChangeText={(value)=>setNombre(value)}
        maxLength={20}
      />
      {/* La siguiente view es utilizada para crear una linea vertical */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginTop: 35, flex: 1, height: 1, backgroundColor: '#C2E6FF'}} />
      </View>

      {/* A partir de aqui es el apartado de notificaciones */}
      <Text style={styles.titulo2}>Habilitar nofiticaciones</Text>
      <Switch style={{marginTop: 15}}></Switch>

      {/* Aqui es la separación de Temas */}
      <View style={styles.Themes}>
        <Text style={{fontSize: 20, paddingLeft: 50, marginTop: 10, color: "#00456E", fontWeight: "600",}}>Temas</Text>
      </View>
  
      {/* Aqui se contendran los temas */}
      <View style={{marginTop: 25, flexDirection:"row", justifyContent: "space-between"}}>
        
        {/* Funcionalidad Tema 1 */}
        <TouchableOpacity style={styles.buttonTheme}>
          <Image></Image>
        </TouchableOpacity> 
        <Text>  </Text>

        {/* Funcionalidad Tema 2 */}
        <TouchableOpacity style={styles.buttonTheme}>
          <Image></Image>
        </TouchableOpacity>
        <Text>  </Text>

        {/* Funcionalidad Tema 3 */}
        <TouchableOpacity style={styles.buttonTheme}>
          <Image></Image>
        </TouchableOpacity>
        <Text>  </Text>

      </View>

      {/* Aqui son los botones cerrar y guardar */}
      <View style={{marginTop: 40, flexDirection: "row", justifyContent: "space-between"}}>
        
        {/* Boton Cerrar */}
        <TouchableOpacity style={styles.button}>
          <Text style={{color: "white", marginTop: 8, fontSize: 18}}>CERRAR</Text>
        </TouchableOpacity>
        <Text>     </Text>
        
        {/* Boton Guardar */}
        <TouchableOpacity style={styles.button}>
          <Text style={{color: "white", marginTop: 8, fontSize: 18}}>GUARDAR</Text>
        </TouchableOpacity>
      </View>
      

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    alignItems: "center",
  },

  TituloUsuario: {
    marginTop: 40,
    color: "#1B18F9",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 25,
    fontWeight: "600",
    
  },
  titulo2: {
    marginTop: 35,
    color: "#00456E",
    fontSize: 19,
    fontWeight: "600",
  },

  inputTexto: {
    backgroundColor: "#E7E7E7",
    marginTop: 15,
    alignContent: "center",
    borderRadius: 20,
    paddingLeft: 15,
    width: 250,
    height: 42,
  },
  Themes: {
    height: 50,
    width: width,
    marginTop: 35,
    backgroundColor: "white",
    shadowOpacity: 0.5,
    shadowRadius: 25,
    elevation: 12,
    shadowColor: "#000",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#1B18F9",
    width: 150,
    height: 42,
    borderRadius: 20,
  },
  buttonTheme: {
    alignItems: "center",
    backgroundColor: "#E7E7E7",
    width: 100,
    height: 100,
    borderRadius: 25,
    marginTop: 10,
  }

  /*Declaración de Colores:

  AZUL BRILLANTE  = 0E63F4
  AZUL REY        = 1B18F9
  DORY            = 00ADEF
  AZUL OSCURO     = 00456E
  CELESTE         = C2E6FF
  BEIGE           = FAF9F3

  */
});

export default Settings;