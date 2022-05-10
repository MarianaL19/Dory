import React, { useState } from 'react';
import { Alert, View, StyleSheet, Text, Dimensions, TouchableOpacity, Modal, Button } from "react-native";
import actualTheme from './actualTheme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//REvisar iconos

const Contact = ({ item }) => {
    //Variable para saber el estado del popUp (si se ve o no)
    const [modalVisible, setModalVisible] = useState(false);

    //Aún no descifro pa k es esto
    const { nombre, telefono, correo, etiqueta } = item;

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
                    {/* Contenido del popUp del contacto */}

                    <View style={{ backgroundColor: '#000000aa', flex: 1, alignItems: 'center'}}>
                        <View style={styles.modalContainer}>

                            <View style={styles.moveButton}>
                                    <TouchableOpacity style={styles.formatButtonContainer}>
                                        <Text style={styles.editTextFormat}>Editar</Text>
                                    </TouchableOpacity>
                            </View>

                            {/* Apartado: nombre del contacto */}
                            <Text style={[styles.modalTitle, { color: actualTheme.primary }]}>{item.nombre}</Text>

                            {/* Apartado: Tipo de contacto */}
                            <Text style={[styles.modalRegularText, { color: actualTheme.tertiary, fontWeight: 'bold' }]}> Tipo de contacto</Text>
                            <View style={{ flexDirection: 'row' }}>
                                {/* tipo de contacto */}
                                <View style={[styles.modalTagContainer, {backgroundColor: actualTheme.quinary}]}>
                                    <Text style={[styles.modalTagText, {color: actualTheme.tertiary}]}>{item.etiqueta}</Text>
                                </View>   
                            </View>
                            
                            {/* Seccion que despliega la informacion */}
                            <View style={styles.contactContainer2}>
                                <Text style={styles.styleHeader}>Telefono</Text>
                                <Text style={styles.styleInfo}>{item.telefono}</Text>
                                <Text style={styles.styleHeader}>Correo</Text>
                                <Text style={styles.styleInfo}>{item.correo}</Text>
                            </View>

                            <View style={styles.contactContainer} >
                                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}
                                    style={[styles.closeButtonFormat, {backgroundColor: actualTheme.primary}]}>
                                    <Text style={styles.closeButtonText}>CERRAR</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                    </View>
                </Modal>

                {/* Estilo con el que se van a renderizar el contacto */}

                {/* Encapsulé todo el componente en un TouchableOpacity, donde al hacer click sobre el recordatorio
                    activa el evento que hace visible el popUp, este PopUp muestra información del elemento que se presionó,
                    -> !!!Se debe optimizar esta parte, haciendo al popUp un componente independiente de cada objeto Task
                */}
                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.container}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        
                        {/* nombre del contacto */}
                        <Text numberOfLines={2} style={styles.title}>{nombre}</Text>
                    </View>
                </TouchableOpacity>

            </View>

        </>

    );
}

export default Contact;


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
        width: width * 0.85,
    },
    modalTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 20,
    },
    modalRegularText: {
        fontSize: 20,
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
        fontSize: 17,
        fontWeight: 'bold',
        color: '#A9A9A9'
    },
    modalDateText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#171717',
        paddingHorizontal: 10,
    },
    //Estilos para ver contacto
    contactContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 30,
      },
    contactContainer2: {
        marginTop: 20,
        marginBottom: 10,
    },
    moveButton: {
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    formatButtonContainer: {
        backgroundColor: '#0E63F4',
        padding: 5,
        borderRadius: 20,
        width: 80,
        height: 40,
    },
    editTextFormat: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 18,
        color: '#ffffff',
        marginTop: 2,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
    },
    nameFormat: {
        fontFamily: 'Sen',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 25,
        color: '#00456e',
        marginBottom: 20,
    },
    tagFormat: {
        backgroundColor: '#c2e6ff',
        width: 130,
        height: 35,
        borderRadius: 8,
        fontFamily: 'Sen',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        display: 'flex',
        alignItems: 'center',
        color: '#000000',
        padding: 5,
        paddingLeft: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    styleHeader: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontFamily: 'Sen',
        fontWeight: '400',
        fontSize: 16,
        display: 'flex',
        alignItems: 'center',
    },
    styleInfo: {
        color: '#000000',
        fontFamily: 'Sen',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        display: 'flex',
        alignItems: 'center',
        marginBottom: 20,
    },
    closeButtonFormat: {
        backgroundColor: '#0E63F4',
        padding: 5,
        borderRadius: 20,
        width: 100,
        height: 40,
    },
    closeButtonText: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#ffffff',
        marginTop: 2,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
    },
});