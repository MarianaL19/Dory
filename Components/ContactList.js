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

                    <View style={{ backgroundColor: '#000000aa', flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                        <View style={styles.modalContainer}>

                            {/* Boton para editar contacto */}
                            {/* <View style={styles.moveButton}>

                                    <TouchableOpacity>
                                        <Icon name='dots-vertical' size={40} color={'#c4c4c4'}/>
                                    </TouchableOpacity>

                            </View> */}

                            {/* Apartado: nombre del contacto */}
                            <Text style={[styles.modalTitle, { color: currentTheme.tertiaryColor }]}>{item.nombreC}</Text>
                            
                            {/* ícono con la inicial del contacto */}
                            <View style={styles.foto}>
                                <Text style={styles.inicialFoto}>{item.nombreC[0]}</Text>
                            </View>

                            {/* Apartado: Tipo de contacto */}
                            {/* tipo de contacto */}
                            <View style={[styles.modalTagContainer, {backgroundColor: currentTheme.quinaryColor}]}>

                                <Text style={styles.modalTagText}>{item.etiquetaC}</Text>

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
                                
                                    <Text style={[styles.styleHeader,{paddingBottom: 7}]}>Telefono</Text>
                                    <Text style={styles.styleInfo}>{item.telefonoC}</Text>
                                    <View style={{marginBottom: 40}} />
                                    <Text style={styles.styleHeader}>Correo</Text>
                                    <Text style={styles.styleInfo}>{item.correoC}</Text>

                                </View>

                            </View>

                            <View style={styles.contactContainer} >

                                {/* Boton para eliminar */}
                                {/* <TouchableOpacity onPress={() => borraYcierra(ID_C)}
                                    style={[styles.closeButtonFormat, {backgroundColor: currentTheme.primaryColor}]}>
                                    <Text style={styles.closeButtonText}>Eliminar</Text>
                                </TouchableOpacity> */}

                                {/* Boton para salir */}
                                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}
                                    style={[styles.closeButtonFormat, {backgroundColor: currentTheme.primaryColor}]}>
                                    <Text style={styles.closeButtonText}>CERRAR</Text>
                                </TouchableOpacity>

                                <View style={{ flexDirection: 'row'}}>
                                    <TouchableOpacity style={styles.editContainer} onPress={() => {borraYcierra(ID_C)}}>
                                        <Text style={styles.editText}>Eliminar</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.editContainer} onPress={() => {}}>
                                        <Text style={styles.editText}>Editar</Text>
                                    </TouchableOpacity>
                                </View>

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
                        <View style={styles.renderFoto}>
                            <Text style={styles.renderFotoText}>{nombreC[0]}</Text>
                        </View>
                        {/* nombre del contacto */}
                        <Text numberOfLines={2} style={[styles.renderNombre, {color: currentTheme.tertiaryColor}]}>{nombreC}</Text>

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
        position: 'relative',
        backgroundColor: 'white',
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
        marginBottom: 10,
    },
    modalRegularText: {
        fontSize: 20,
        color: '#171717',
        marginTop: 10,
        marginBottom: 10,
    },
    foto: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: currentTheme.secondaryColor,
        width: 100,
        height: 100,
        borderRadius: 80,
        marginBottom: 20,
    },
    inicialFoto: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
    },
    modalTagContainer: {
        alignSelf: 'center',
        backgroundColor: '#E5E5E5',
        paddingVertical: 6,
        justifyContent: 'center',
        borderRadius: 3,
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 5,
    },
    modalTagText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
        paddingHorizontal: 15,
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
        borderRadius: 4,
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
    editText: {
        fontSize: 14,
        fontWeight: '600',
        textDecorationLine: 'underline',
        paddingHorizontal: 22,
    },
    renderNombre: {
        fontSize: 20,
        fontWeight: '500',
    },
    renderFoto: {
        height: 50,
        width: 50,
        borderRadius: 40,
        backgroundColor: currentTheme.secondaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    renderFotoText: {
        fontSize: 25,
        fontWeight: '600',
        color: 'white',
    }
});