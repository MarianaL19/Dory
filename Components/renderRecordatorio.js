import React, { useState } from 'react';
import { Alert, View, StyleSheet, Text, Dimensions, TouchableOpacity, Modal, Button } from "react-native";
import currentTheme from './currentTheme';
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
const RenderRecordatorio = ({ item }) => {
    //Variable para saber el estado del popUp (si se ve o no)
    const [modalVisible, setModalVisible] = useState(false);

    //Aún no descifro pa k es esto
    const { nombre, etiqueta, fecha, hora } = item;

    return (
        <>
            {/* PopUp donde se muestra la información del recordatorio */}
            <View style={{ alignItems: 'center' }}>
                {/* Estilo con el que se van a renderizar los recordatorios */}

                {/* Encapsulé todo el componente en un TouchableOpacity, donde al hacer click sobre el recordatorio
                    activa el evento que hace visible el popUp, este PopUp muestra información del elemento que se presionó,
                    -> !!!Se debe optimizar esta parte, haciendo al popUp un componente independiente de cada objeto Task
                */}
                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.container}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {/* Puntito de color que indica el tipo de recordatorio */}
                        <View style={{ height: 18, width: 18, borderRadius: 10, marginRight: 10 }} />
                        
                        {/* Título del recordatorio */}
                        <Text numberOfLines={2} style={styles.title}>{nombre}</Text>
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
        marginBottom: 3,
        marginTop: 3,
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