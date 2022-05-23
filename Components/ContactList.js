import React, { useState } from 'react';
import { Alert, View, StyleSheet, Text, Dimensions, TouchableOpacity, Modal, Button } from "react-native";
import currentTheme from './currentTheme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Funcion de eliminar
const eliminarContacto = (id_contacto) => {
    var xhttp = new XMLHttpRequest();
    let _this = this;

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            // ???
        }
    };
    xhttp.open("GET", 'https://dory69420.000webhostapp.com/eliminarContacto.php?id=' + id_contacto, true);
    xhttp.send();
}



const Contact = ({ item }) => {
    //Variable para saber el estado del popUp (si se ve o no)
    const [modalVisible, setModalVisible] = useState(false);

    //Aún no descifro pa k es esto
    const { ID_C, nombreC, ID_Usuario, telefonoC, correoC, etiquetaC } = item;

    function borraYcierra(id){
        eliminarContacto(id);
        setModalVisible(!modalVisible);
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
                    {/* Contenido del popUp del contacto */}

                    <View style={{ backgroundColor: '#000000aa', flex: 1, alignItems: 'center'}}>

                        <View style={styles.modalContainer}>

                            {/* Boton para editar contacto */}
                            <View style={styles.moveButton}>

                                    <TouchableOpacity>
                                        <Icon name='dots-vertical' size={40} color={'#c4c4c4'}/>
                                    </TouchableOpacity>

                            </View>

                            {/* Apartado: nombre del contacto */}
                            <Text style={[styles.modalTitle, { color: currentTheme.tertiaryColor }]}>{item.nombreC}</Text>

                            {/* Apartado: Tipo de contacto */}
                            {/* tipo de contacto */}
                            <View style={[styles.modalTagContainer, {backgroundColor: currentTheme.quinaryColor}]}>

                                <Text style={[styles.modalTagText]}>{item.etiquetaC}</Text>

                            </View>  

                            {/* Apartado: despliega la informacion */}
                            <View style={styles.contactContainer2}>
                                
                                {/* Iconos */}
                                <View style={styles.contactInconFormat}>

                                    <Icon name='phone' size={30} color={'#c4c4c4'}  />
                                    <View style={{marginBottom: 40}} />
                                    <Icon name='email-outline' size={30} color={'#c4c4c4'} />

                                </View>

                                {/* Informacion */}
                                <View style={styles.contactInconFormat}>
                                
                                    <Text style={styles.styleHeader}>Telefono</Text>
                                    <Text style={styles.styleInfo}>{item.telefonoC}</Text>
                                    <View style={{marginBottom: 40}} />
                                    <Text style={styles.styleHeader}>Correo</Text>
                                    <Text style={styles.styleInfo}>{item.correoC}</Text>

                                </View>

                            </View>

                            <View style={styles.contactContainer} >

                                {/* Boton para eliminar */}
                                <TouchableOpacity onPress={() => borraYcierra(ID_C)}
                                    style={[styles.closeButtonFormat, {backgroundColor: currentTheme.primaryColor}]}>
                                    <Text style={styles.closeButtonText}>Eliminar</Text>
                                </TouchableOpacity>

                                {/* Boton para salir */}
                                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}
                                    style={[styles.closeButtonFormat, {backgroundColor: currentTheme.primaryColor}]}>
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
                <TouchableOpacity onPress={() => setModalVisible(true)} style={[styles.container, {backgroundColor: currentTheme.quinaryColor}]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        
                        {/* nombre del contacto */}
                        <Text numberOfLines={2} style={[styles.title, {color: currentTheme.primaryColor}]}>{nombreC}</Text>

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
        //backgroundColor: '#ededed',
        width: width,
        height: 60,
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
        fontSize: 25,
        color: '#171717',
    },
    modalContainer: {
        backgroundColor: 'white',
        position: 'relative',
        margin: 50,
        padding: 30,
        borderRadius: 10,
        minWidth: 320,
        minHeight: 200,
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
        width: width / 3,
        paddingVertical: 6,
        justifyContent: 'center',
        borderRadius: 3,
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: 5,
        alignSelf: 'center',
    },
    modalTagText: {
        fontSize: 17,
        fontWeight: '400',
        color: '#000000'
    },
    modalDateText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#171717',
        paddingHorizontal: 10,
    },
    //Estilos para ver contacto (modal)
    contactContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 30,
      },
    contactContainer2: {
        marginTop: 20,
        marginBottom: 10,
        flexDirection: 'row',
    },
    contactInconFormat:{
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-evenly',
        alignContent: 'stretch',
        paddingRight: 15,
    },
    moveButton: {
        alignItems: 'flex-end',
        marginBottom: 20,
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
    },
    styleInfo: {
        color: '#000000',
        fontFamily: 'Sen',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
    },
    closeButtonFormat: {
        backgroundColor: '#0E63F4',
        padding: 5,
        borderRadius: 20,
        width: 140,
        height: 40,
        marginBottom: 20,
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