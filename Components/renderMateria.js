import React, { useState } from 'react';
import { Alert, View, StyleSheet, Text, Dimensions, TouchableOpacity, Modal, Button } from "react-native";
import currentTheme from './currentTheme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const cambioDia = (dia) => {
    var day = 'pepe';

    switch(dia){
        case '0': day = 'Domingo'; break;
        case '1': day = 'Lunes'; break;
        case '2': day = 'Martes'; break;
        case '3': day = 'Miércoles'; break;
        case '4': day = 'Jueves'; break;
        case '5': day = 'Viernes'; break;
        case '6': day = 'Sábado'; break;
    }

    return day;
}

const eliminarMateria = (id_materia) => {
    var xhttp = new XMLHttpRequest();
    let _this = this;       // Esto es para usar 'this' dentro de la función

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          }
    };
    xhttp.open("GET", 'https://dory69420.000webhostapp.com/eliminarMateria.php?id='+ id_materia, true);
    xhttp.send();
}


//Esta función principal se realiza por cada item
const RenderMateria = ({ item }) => {

    const { id, nombre, profesor, aula, nrc, dia, hora_inicio, hora_fin} = item;

    //Variable para saber el estado del popUp (si se ve o no)
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <View style={{ alignItems: 'center' }}>
                
                {/* PopUp donde se muestra la información de la materia */}
                <Modal
                    animationType='sliced'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    {/* Contenido del popUp de la materia */}

                    <View style={{ backgroundColor: '#000000aa', flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                        <View style={styles.modalContainer}>

                        <Text style={[styles.modalTitle, { color: currentTheme.primaryColor }]}>{nombre}</Text>

                        {/* Apartado: dia, aula, nrc y horas */}
                            <Text style={styles.modalDayText}> {cambioDia(dia)} de {hora_inicio.substr(0,5)} a {hora_fin.substr(0,5)}</Text>

                            <View style={{ flexDirection: 'row', marginTop: 25}}>
                                <Icon name='map-marker' size={40} color={currentTheme.primaryColor}/>
                                
                                <View style={{ flexDirection: 'column'}}>
                                    <Text style = {{fontSize:20}}> Aula </Text>
                                    <Text style={[styles.modalDateText, {fontWeight: 'bold'}]}> {aula} </Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 25}}>
                                <Icon name='human-male-board' size={40} color={currentTheme.primaryColor}/>
                                
                                <View style={{ flexDirection: 'column'}}>
                                    <Text style = {{fontSize:20}}> Profesor </Text>
                                    <Text style={styles.modalDateText}> {profesor} </Text>
                                </View>
                            </View>

                            {nrc ? (
                                <View style={{ flexDirection: 'row', marginTop: 25}}>
                                <Icon name='magnify' size={40} color={currentTheme.primaryColor}/>
                                
                                <View style={{ flexDirection: 'column', marginBottom: 20}}>
                                    <Text style = {{fontSize:20}}> NRC </Text>
                                    <Text style={styles.modalDateText}> {nrc} </Text>
                                </View>
                            </View>
                            ) : null}

                            {/* Botón para salir del popUp */}
                            <View style = {{marginTop: 20}}>
                            <Button color={currentTheme.primaryColor} title='Cerrar' onPress={() => setModalVisible(!modalVisible)}> </Button>
                            </View>
                        </View>
                    </View>
                </Modal> 
                
            
                <TouchableOpacity style={[styles.container, {backgroundColor: '#BCA2BB'}]} onPress={() => setModalVisible(true)}>

                    <View style={{ flexDirection: 'row'}}>
                        <View style={{flex: 1}}>
                            <Text numberOfLines={2} style={styles.title}>{nombre}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', paddingTop: 8}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <Icon name='clock-time-four-outline' size={24} style={{paddingRight: 10, color: 'white', paddingLeft: 10}}/>
                                <Text numberOfLines={2} style={styles.fecha}>{hora_inicio.substr(0,5)}  -  {hora_fin.substr(0,5)}</Text>
                            </View>

                        </View>

                    </View>
                </TouchableOpacity>

            </View>

        </>

    );
}

export default RenderMateria;


const width = Dimensions.get('screen').width - 50;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: currentTheme.quinaryColor,
        width: width,
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'center',
        borderRadius: 10,
        textAlign: 'center',
        marginBottom: 4,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white',
    },
    profesor: {
        fontWeight: '600',
        fontSize: 12,
        justifyContent: 'center',
        marginVertical: 5,
    },
    fecha: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
    },
    modalContainer: {
        position: 'relative',
        margin: 50,
        padding: 30,
        minWidth: 320,
        minHeight: 200,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    modalTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
    },
    modalRegularText: {
        fontSize: 13,
        marginTop: 10,
        marginBottom: 10,
    },
    modalMateriaText: {
        fontSize: 15,
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
    },
    modalTagContainer: {
        backgroundColor: '#E5E5E5',
        width: width / 5,
        paddingVertical: 6,
        justifyContent: 'center',
        borderRadius: 3,
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: 5,
    },
    modalTagText: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#A9A9A9'
    },
    modalDateText: {
        fontSize: 20,
        color: '#171717',
    },
    modalDayText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#171717',
        textAlign: 'center',
        marginTop: 10,
    },
});