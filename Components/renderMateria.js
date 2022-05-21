import React, { useState } from 'react';
import { Alert, View, StyleSheet, Text, Dimensions, TouchableOpacity, Modal, Button } from "react-native";
import currentTheme from './currentTheme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const cambioHora = (dia) => {
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
                
                {/* PopUp donde se muestra la información del recordatorio */}
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
                            <View style={{ flexDirection: 'row', marginBottom: 20, marginTop: 20 }}>
                                <Icon name='calendar-blank-outline' size={20} color='#A9A9A9' />
                                <Text style={styles.modalDateText}> {cambioHora(dia)} </Text>

                                <Icon name='human-male-board' size={20} color='#A9A9A9' />
                                <Text style={styles.modalDateText}> {profesor} </Text>

                                
                            </View>

                            <View style={{ flexDirection: 'row', marginBottom: 20, marginTop: 20 }}>
                                <Icon name='map-marker' size={20} color='#A9A9A9' />
                                <Text style={styles.modalDateText}> {aula} </Text>

                                <Icon name='clock-outline' size={20} color='#A9A9A9' />
                                <Text style={styles.modalDateText}> {hora_inicio.substr(0,5)} - {hora_fin.substr(0,5)} </Text>
                            </View>
                            
                            {/* Botón para salir del popUp */}
                            <Button color={currentTheme.primaryColor} title='Cerrar' onPress={() => setModalVisible(!modalVisible)}> </Button>
                        </View>
                    </View>
                </Modal> 
                
                {/* Estilo con el que se van a renderizar los recordatorios */}
                <View style={styles.container}>

                    {/* Título del recordatorio */}
                    <View style={{ flexDirection: 'row'}}>
                        <TouchableOpacity style={{flex: 1}} onPress={() => setModalVisible(true)}>
                            <Text numberOfLines={2} style={styles.title}>{nombre}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>                          
                                    <Text numberOfLines={2} style={styles.profesor}>{profesor}</Text>
                                </View>
                    
                                <View style={{ flexDirection: 'row'}}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                        <Icon name='clock-time-four-outline' size={24} style={{paddingRight: 3}}/>
                                        <Text numberOfLines={2} style={styles.fecha}>{hora_inicio.substr(0,5)} - {hora_fin.substr(0,5)}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                        <Icon name='map-marker' size={20} style={{paddingLeft: 10}}/>
                                        <Text numberOfLines={2} style={styles.fecha}>{aula.substr(0,5)}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                        <Icon name='magnify' size={20} style={{paddingLeft: 10}}/>
                                        <Text numberOfLines={2} style={styles.fecha}>NRC: {nrc.substr(0,5)}</Text>
                                    </View>
                                </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{justifyContent: 'center'}} onPress={() => eliminarRecordatorio(id)}>
                            <Icon name='delete-outline' size={24} color={currentTheme.primaryColor}/>
                        </TouchableOpacity>
                    </View> 
                </View>

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
        fontSize: 16,
        color: '#171717',
    },
    profesor: {
        fontWeight: '600',
        fontSize: 12,
        justifyContent: 'center',
        marginVertical: 5,
    },
    fecha: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#171717',
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
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
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
        fontSize: 14,
        fontWeight: 'bold',
        color: '#171717',
        paddingHorizontal: 10,
    },
});