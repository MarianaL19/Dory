import React, { useState } from 'react';
import { Alert, View, StyleSheet, Text, Dimensions, TouchableOpacity, Modal, Button } from "react-native";
import currentTheme from './currentTheme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { cambioFormato } from './Date';

const eliminarRecordatorio = (id_recordatorio) => {
    var xhttp = new XMLHttpRequest();
    let _this = this;       // Esto es para usar 'this' dentro de la función

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          }
    };
    xhttp.open("GET", 'https://dory69420.000webhostapp.com/eliminarRecordatorio.php?id=' + id_recordatorio, true);
    xhttp.send();

    // var newArray = myArray.filter((item) => item.id !== 1);
}

//Esta función principal se realiza por cada item
const RenderRecordatorio = ({ item }) => {
    //Variable para saber el estado del popUp (si se ve o no)
    const [modalVisible, setModalVisible] = useState(false);

    //Aún no descifro pa k es esto
    const { id, nombre, etiqueta, materia, fecha, hora, descripcion } = item;

    return (
        <>
            {/* PopUp donde se muestra la información del recordatorio */}
            <View style={{ alignItems: 'center' }}>
                {/* Estilo con el que se van a renderizar los recordatorios */}

                {/* Encapsulé todo el componente en un TouchableOpacity, donde al hacer click sobre el recordatorio
                    activa el evento que hace visible el popUp, este PopUp muestra información del elemento que se presionó,
                    -> !!!Se debe optimizar esta parte, haciendo al popUp un componente independiente de cada objeto Task
                */}

                <Modal
                    animationType='sliced'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    {/* Contenido del popUp del recordatorio */}

                    <View style={{ backgroundColor: '#000000aa', flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                        <View style={styles.modalContainer}>

                            {/* Apartado: Título del recordatorio */}
                            <Text style={[styles.modalTitle, { color: currentTheme.primaryColor }, materia != -1 ? {marginBottom: -6} : {}]}>{nombre}</Text>

                            {/* Apartado: Materia */}
                            {etiqueta !== 'otro' ? (
                                <Text style={[styles.modalMateriaText, { color: currentTheme.tertiaryColor, fontWeight: 'bold' }]}> Materia </Text>
                            ) : (null)}

                            {/* Apartado: Tipo de recordatorio */}
                            <Text style={[styles.modalRegularText, {fontWeight: 'bold' }]}> Tipo de recordatorio</Text>
                            <View style={{ flexDirection: 'row' }}>

                                {/* Agrega color a la etiqueta según el tipo de recordatorio */}
                                <View style={[styles.modalTagContainer, etiqueta == 'tarea' ? { backgroundColor: currentTheme.quinaryColor } : {}]}>
                                    <Text style={[styles.modalTagText, etiqueta == 'tarea' ? { color: currentTheme.tertiaryColor } : {}]}> Tarea</Text>
                                </View>
                                <View style={[styles.modalTagContainer, etiqueta == 'examen' ? { backgroundColor: currentTheme.quinaryColor } : {}]}>
                                    <Text style={[styles.modalTagText, etiqueta == 'examen' ? { color: currentTheme.tertiaryColor } : {}]}> Examen</Text>
                                </View>
                                <View style={[styles.modalTagContainer, etiqueta == 'otro' ? { backgroundColor: currentTheme.quinaryColor } : {}]}>
                                    <Text style={[styles.modalTagText, etiqueta == 'otro' ? { color: currentTheme.tertiaryColor } : {}]}> Otro</Text>
                                </View>
                            </View>
 

                            {/* Apartado: fecha y hora */}
                            <View style={{ flexDirection: 'row', marginBottom: 20, marginTop: 20 }}>
                                <Icon name='calendar-blank-outline' size={20} color='#A9A9A9' />
                                
                                {/* Cambia el formato de fecha yyyy-mm-dd a texto simple */}
                                <Text style={styles.modalDateText}> {cambioFormato(fecha)} </Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                                <Icon name='clock-time-four-outline' size={20} color='#A9A9A9' />

                                {/* Evalúa si existe el atributo hora, de ser así lo coloca, sino imprime el guión */}
                                <Text style={styles.modalDateText}> {[hora ? hora.substr(0,5) : '-']} </Text>
                            </View>

                            {/* Apartado: descripción */}
                            {/* La condicional evalúa si existe una descripción, si existe la coloca, sino lo omite,
                                la validación es útil para que no ocupe espacio la View si no existe descripción*/}
                            {descripcion ? (
                                <View style={{ marginBottom: 30, marginTop: 20 }}>
                                    <Text style={{ color: 'black' }}>{descripcion} </Text>
                                </View>
                            ) : null}

                            {/* Botón para salir del popUp */}
                            <Button color={currentTheme.primaryColor} title='Cerrar' onPress={() => setModalVisible(!modalVisible)}> </Button>
                        </View>
                    </View>
                </Modal> 

                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.container}>
                    {/* Título del recordatorio */}
                    <Text numberOfLines={2} style={styles.title}>{nombre}</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>                          
                        <Text numberOfLines={2} style={styles.materia}>Materia</Text>
                        <Icon name='delete-outline' size={24} color={currentTheme.primaryColor}/>
                    </View>

                    <View style={{ flexDirection: 'row'}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 25}}>
                            <Icon name='calendar-blank-outline' size={24} style={{paddingRight: 3}}/>
                            <Text numberOfLines={2} style={styles.fecha}>{fecha}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <Icon name='clock-time-four-outline' size={24} style={{paddingRight: 3}}/>
                            <Text numberOfLines={2} style={styles.fecha}>{hora.substr(0,5)}</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            </View>

        </>

    );
}

export default RenderRecordatorio;


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
        marginTop: 4,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#171717',
    },
    materia: {
        fontWeight: '600',
        fontSize: 12,
        justifyContent: 'center',
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