import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TextInput, SafeAreaView, Dimensions, Image, Switch, TouchableOpacity} from 'react-native';
import { act } from 'react-test-renderer';
import currentTheme from '../Components/currentTheme';
import { blueTheme, pinkTheme } from "../Components/themes";

const {width, height} = Dimensions.get("screen");
const UserID = 1;

const Settings = () => {

  const [username, setUsername] = useState('usuario');
  const [nombre, setNombre] = useState('usuario');

  const cambiarUsername = () => {
    if (nombre == "") {
      setUsername(username)
    } else {
      setUsername(nombre);
    }
  }

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const Tema1 = () => {
    
  }
  const Tema2 = () => {
    
  }
  const Tema3 = () => {
    
  }

  const GUARDAR = () => {
    var NombreUsuario = username;
  }
  const CERRAR = () => {

  }

  return (
    <View style={styles.container}>
      <Text style={styles.TituloUsuario}>¡Hola, {username}!</Text>

      <View style={{flexDirection:"row", justifyContent: "space-around"}}>
        {/* Casilla de input para texto (nombre de usuario) */}
        <TextInput 
          style={styles.inputTexto}
          placeholder="nombre de usuario"
          onChangeText={(value)=>setNombre(value)}
          maxLength={20}
        />
        <TouchableOpacity style={{
          alignItems: "center",
          backgroundColor: "#E7E7E7",
          width: 42,
          height: 42,
          borderRadius: 25,
          marginTop: 15,}}
          onPress={cambiarUsername}
        >
        </TouchableOpacity>
      </View>
      {/* La siguiente view es utilizada para crear una linea vertical */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginTop: 35, flex: 1, height: 1, backgroundColor: currentTheme.quinaryColor}} />
      </View>

      {/* A partir de aqui es el apartado de notificaciones */}
      <Text style={styles.titulo2}>Habilitar nofiticaciones</Text>
      <Switch 
        style={{marginTop: 15}}
        trackColor={{ false: "#767577", true: currentTheme.secondaryColor }}
        thumbColor={isEnabled ? currentTheme.quinaryColor : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
        ></Switch>

      {/* Aqui es la separación de Temas */}
      <View style={styles.Themes}>
        <Text style={{fontSize: 20, paddingLeft: 50, marginTop: 10, color: currentTheme.tertiaryColor, fontWeight: "600",}}>Temas</Text>
      </View>
  
      {/* Aqui se contendran los temas */}
      <View style={{marginTop: 25, flexDirection:"row", justifyContent: "space-between"}}>
        
        {/* Funcionalidad Tema 1 */}
        <TouchableOpacity style={styles.buttonTheme} onPress={Tema1}>
          <Image></Image>
        </TouchableOpacity> 

        {/* Funcionalidad Tema 2 */}
        <TouchableOpacity style={styles.buttonTheme} onPress={Tema2}>
          <Image></Image>
        </TouchableOpacity>

        {/* Funcionalidad Tema 3 */}
        <TouchableOpacity style={styles.buttonTheme} onPress={Tema3}>
          <Image></Image>
        </TouchableOpacity>

      </View>

      {/* Aqui son los botones cerrar y guardar */}
      <View style={{marginTop: 40, flexDirection: "row", justifyContent: "space-between"}}>
        
        {/* Boton Cerrar */}
        <TouchableOpacity 
          style={styles.button}
          onPress={CERRAR}
          >
          <Text style={{color: "white", marginTop: 8, fontSize: 18}}>CERRAR</Text>
        </TouchableOpacity>
        
        {/* Boton Guardar */}
        <TouchableOpacity 
          style={styles.button}
          onPress={GUARDAR}
          >
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
    color: currentTheme.quaternaryColor,
    textAlign: "center",
    justifyContent: "center",
    fontSize: 25,
    fontWeight: "600",
    
  },
  titulo2: {
    marginTop: 35,
    color: currentTheme.tertiaryColor,
    fontSize: 19,
    fontWeight: "600",
  },

  inputTexto: {
    backgroundColor: "#E7E7E7",
    marginTop: 15,
    alignContent: "center",
    borderRadius: 20,
    paddingLeft: 15,
    marginHorizontal: 5,
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
    backgroundColor: currentTheme.quaternaryColor,
    width: 150,
    height: 42,
    borderRadius: 20,
    marginHorizontal: 15,
  },
  buttonTheme: {
    alignItems: "center",
    backgroundColor: "#E7E7E7",
    width: 100,
    height: 100,
    borderRadius: 25,
    marginHorizontal: 10,
    marginTop: 10,
  }
});

export default Settings;