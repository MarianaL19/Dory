import React, { useState } from 'react';
import { Alert, View, StyleSheet, Text, Dimensions, TouchableOpacity, Modal, Button } from "react-native";
import actualTheme from './actualTheme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { cambioFormato } from './Date';

// Objeto para administrar los colores de los recordatorios
var lineColor = {
    color: 'white',
    get getColor() {
        return this.color;
    },
    set setColor(color) {
        this.color = color;
    }
}

//Esta función principal se realiza por cada item
const Task = ({ item }) => {
    //Variable para saber el estado del popUp (si se ve o no)
    const [modalVisible, setModalVisible] = useState(false);

    //Aún no descifro pa k es esto
    const { title, date, tag, hour, description } = item;

    // Determina qué tag tiene el recordatorio, y le asigna un color
    if (item.tag == 'Tarea') {
        lineColor.setColor = '#9066CA';
    } else if (item.tag == 'Examen') {
        lineColor.setColor = '#FF595E';
    } else {
        lineColor.setColor = '#FFD166';
    }

    return (
        <>
            {/* PopUp donde se muestra la información del recordatorio */}
            <View style={{ alignItems: 'center' }}>
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

                    <View style={{ backgroundColor: '#000000aa', flex: 1, alignItems: 'center' }}>
                        <View style={styles.modalContainer}>

                            {/* Apartado: Título del recordatorio */}
                            <Text style={[styles.modalTitle, { color: actualTheme.primary }]}>{item.title}</Text>

                            {/* Apartado: Tipo de recordatorio */}
                            <Text style={[styles.modalRegularText, { color: actualTheme.tertiary, fontWeight: 'bold' }]}> Tipo de recordatorio</Text>
                            <View style={{ flexDirection: 'row' }}>

                                {/* Agrega color a la etiqueta según el tipo de recordatorio */}
                                <View style={[styles.modalTagContainer, item.tag == 'Tarea' ? { backgroundColor: actualTheme.quinary } : {}]}>
                                    <Text style={[styles.modalTagText, item.tag == 'Tarea' ? { color: actualTheme.tertiary } : {}]}> Tarea</Text>
                                </View>
                                <View style={[styles.modalTagContainer, item.tag == 'Examen' ? { backgroundColor: actualTheme.quinary } : {}]}>
                                    <Text style={[styles.modalTagText, item.tag == 'Examen' ? { color: actualTheme.tertiary } : {}]}> Examen</Text>
                                </View>
                                <View style={[styles.modalTagContainer, item.tag == 'Otro' ? { backgroundColor: actualTheme.quinary } : {}]}>
                                    <Text style={[styles.modalTagText, item.tag == 'Otro' ? { color: actualTheme.tertiary } : {}]}> Otro</Text>
                                </View>
                            </View>

                            {/* Apartado: fecha y hora */}
                            <View style={{ flexDirection: 'row', marginBottom: 20, marginTop: 20 }}>
                                <Icon name='calendar-blank-outline' size={20} color='#A9A9A9' />
                                
                                {/* Cambia el formato de fecha yyyy-mm-dd a texto simple */}
                                <Text style={styles.modalDateText}> {cambioFormato(item.date)} </Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                                <Icon name='clock-time-four-outline' size={20} color='#A9A9A9' />

                                {/* Evalúa si existe el atributo hora, de ser así lo coloca, sino imprime el guión */}
                                <Text style={styles.modalDateText}> {[item.hour ? item.hour : '-']} </Text>
                            </View>

                            {/* Apartado: descripción */}
                            {/* La condicional evalúa si existe una descripción, si existe la coloca, sino lo omite,
                                la validación es útil para que no ocupe espacio la View si no existe descripción*/}
                            {item.description ? (
                                <View style={{ marginBottom: 30, marginTop: 20 }}>
                                    <Text style={{ color: 'black' }}>{item.description} </Text>
                                </View>
                            ) : null}

                            {/* Botón para salir del popUp */}
                            <Button color={actualTheme.primary} title='Cerrar' onPress={() => setModalVisible(!modalVisible)}> </Button>
                        </View>
                    </View>
                </Modal>

                {/* Estilo con el que se van a renderizar los recordatorios */}

                {/* Encapsulé todo el componente en un TouchableOpacity, donde al hacer click sobre el recordatorio
                    activa el evento que hace visible el popUp, este PopUp muestra información del elemento que se presionó,
                    -> !!!Se debe optimizar esta parte, haciendo al popUp un componente independiente de cada objeto Task
                */}
                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.container}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {/* Puntito de color que indica el tipo de recordatorio */}
                        <View style={{ backgroundColor: lineColor.getColor, height: 18, width: 18, borderRadius: 10, marginRight: 10 }} />
                        
                        {/* Título del recordatorio */}
                        <Text numberOfLines={2} style={styles.title}>{title}</Text>
                    </View>
                </TouchableOpacity>

            </View>

        </>

    );
}

export default Task;


const width = Dimensions.get('screen').width - 50;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ededed',
        width: width,
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'center',
        borderRadius: 10,
        textAlign: 'center',
        marginBottom: 7,
        marginTop: 7,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#171717',
    },
    modalContainer: {
        backgroundColor: 'white',
        height: 20,
        margin: 50,
        padding: 30,
        borderRadius: 10,
        flex: 1,
    },
    modalTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },
    modalRegularText: {
        fontSize: 13,
        color: '#171717',
        marginTop: 10,
        marginBottom: 10,
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