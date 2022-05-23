import React, { useState } from 'react';
import { Alert, View, StyleSheet, Text, Dimensions, TouchableOpacity, Modal, Button } from "react-native";
import currentTheme from './currentTheme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { cambioFormato } from './Date';
import { NavigationContext } from '@react-navigation/native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import AsyncStorage from '@react-native-async-storage/async-storage';

const eliminarRecordatorio = (id_recordatorio) => {
    var xhttp = new XMLHttpRequest();
    let _this = this;       // Esto es para usar 'this' dentro de la función

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          }
    };
    xhttp.open("GET", 'https://dory69420.000webhostapp.com/eliminarRecordatorio.php?id='+ id_recordatorio, true);
    xhttp.send();
}

// Marcar como completado (o no)
const checkRecordatorio = (id_recordatorio, estado_recordatorio, check_recordatorio) => {
    var xhttp = new XMLHttpRequest();
    let _this = this;       // Esto es para usar 'this' dentro de la función
    let estado = estado_recordatorio;
    // let marcado = (check == 0 ? 1 : 0);
    let marcado;
    // check_recordatorio = !check_recordatorio;
    {check_recordatorio == false ? marcado = 1 : marcado = 0};

    if(estado === 'pendiente'){
        estado = 'completado';
    }else if (estado === 'completado'){
        estado = 'pendiente';
    }else if (estado === 'omitido'){
        estado = 'completado';
    }

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          }
    };
    xhttp.open("GET", 'https://dory69420.000webhostapp.com/checkRecordatorio.php?id=' + id_recordatorio +
    '&estado=' + estado + '&marcado=' + marcado, true);
    xhttp.send();
}

const guardarID = (id_recordatorio) => {
    AsyncStorage.setItem('Actualizar', JSON.stringify([id_recordatorio]));
}

const recuperarMateria = (id_materia, setEstado) => {
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", 'https://dory69420.000webhostapp.com/recuperarNombreMateria.php?id=' + id_materia, true);
    xhttp.onload = function() {
        setEstado(xhttp.responseText);
    };
    xhttp.send();
}

//Esta función principal se realiza por cada item
const RenderRecordatorio = ({ item }) => {
    const { id, nombre, etiqueta, materia, fecha, hora, descripcion, estado, check } = item;
    const [nombreMateria, setNombreMateria] = useState('');

    //Variable para saber el estado del popUp (si se ve o no)
    const [modalVisible, setModalVisible] = useState(false);
    // const [checkState, setCheckState] = useState(check === 1 ? true : false);
    const navigation = React.useContext(NavigationContext);


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
                    {/* Contenido del popUp del recordatorio */}

                    <View style={{ backgroundColor: '#000000aa', flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                        <View style={styles.modalContainer}>

                            {/* Apartado: Título del recordatorio */}
                            <Text style={[styles.modalTitle, { color: currentTheme.primaryColor }, materia != -1 ? {marginBottom: -6} : {}]}>{nombre}</Text>

                            {/* Apartado: Materia */}
                            {etiqueta !== 'otro' ? (
                                <Text style={styles.modalMateriaText}> {recuperarMateria(materia, setNombreMateria)}{nombreMateria} </Text>
                            ) : (null)}

                            {/* Apartado: Tipo de recordatorio */}
                            {etiqueta == 'tarea' ? (
                                <View style={[styles.modalTagContainer, etiqueta == 'tarea' ? { backgroundColor: currentTheme.quinaryColor } : {}]}>
                                    <Text style={[styles.modalTagText, etiqueta == 'tarea' ? { color: currentTheme.tertiaryColor } : {}]}> Tarea</Text>
                                </View>
                            ) : (null)}

                            {etiqueta == 'examen' ? (
                                <View style={[styles.modalTagContainer, etiqueta == 'examen' ? { backgroundColor: currentTheme.quinaryColor } : {}]}>
                                    <Text style={[styles.modalTagText, etiqueta == 'examen' ? { color: currentTheme.tertiaryColor } : {}]}> Examen</Text>
                                </View>
                            ) : (null)}

                            {etiqueta == 'otro' ? (
                                <View style={[styles.modalTagContainer, etiqueta == 'otro' ? { backgroundColor: currentTheme.quinaryColor } : {}]}>
                                    <Text style={[styles.modalTagText, etiqueta == 'otro' ? { color: currentTheme.tertiaryColor } : {}]}> Otro</Text>
                                </View>
                            ) : (null)}

                            {/* Apartado: fecha y hora */}
                            <View style={{ flexDirection: 'row', marginBottom: 20, marginTop: 20 }}>
                                <Icon name='calendar-blank-outline' size={25} color='#A9A9A9' />
                                
                                {/* Cambia el formato de fecha yyyy-mm-dd a texto simple */}
                                <Text style={styles.modalDateText}> {cambioFormato(fecha)} </Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                                <Icon name='clock-time-four-outline' size={27} color='#A9A9A9' />

                                {/* Evalúa si existe el atributo hora, de ser así lo coloca, sino imprime el guión */}
                                <Text style={styles.modalDateText}> {[hora ? hora.substr(0,5) : '-']} </Text>
                            </View>

                            {/* Apartado: descripción */}
                            {/* La condicional evalúa si existe una descripción, si existe la coloca, sino lo omite,
                                la validación es útil para que no ocupe espacio la View si no existe descripción*/}
                            {descripcion ? (
                                <View style={{ marginBottom: 30, marginTop: 20 }}>
                                    <Text style={{ color: 'black', fontSize:16 }}>{descripcion} </Text>
                                </View>
                            ) : null}

                            {/* Botón para salir del popUp */}
                            <Button color={currentTheme.primaryColor} title='Cerrar' onPress={() => setModalVisible(!modalVisible)}> </Button>

                            <TouchableOpacity style={styles.editContainer} onPress={() => {setModalVisible(false); guardarID(id); navigation.push('UpdateRecordatorio')}}>
                                <Text style={styles.editText}>Editar</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </Modal> 
                
                {/* Estilo con el que se van a renderizar los recordatorios */}
                <View style={[styles.container, estado === 'completado' ? {backgroundColor:'#ebf6fc'} : {}]}>

                    {/* Título del recordatorio */}
                    <View style={{ flexDirection: 'row'}}>
                        <BouncyCheckbox
                            isChecked={check}
                            onPress={(isChecked = check) => {checkRecordatorio(id, estado, check)}}
                            fillColor={currentTheme.primaryColor}
                        />
                        <TouchableOpacity style={{flex: 1}} onPress={() => setModalVisible(true)}>
                            <Text numberOfLines={2} style={[styles.title, estado == 'completado' ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid'} : {}]}>{nombre}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>                          
                                    {materia != -1 ?
                                    (<Text numberOfLines={2} style={styles.materia}>{recuperarMateria(materia, setNombreMateria)}{nombreMateria}</Text>)
                                    : (null)}
                                </View>
                    
                                <View style={{ flexDirection: 'row', marginTop: 2}}> 
                                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 25}}>
                                        <Icon name='calendar-blank-outline' size={24} style={{paddingRight: 3}}/>
                                        <Text numberOfLines={2} style={[styles.fecha, estado == 'omitido' ? {color: '#9E0000'} : {} ]}>{fecha}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                        <Icon name='clock-time-four-outline' size={24} style={{paddingRight: 3}}/>
                                        <Text numberOfLines={2} style={[styles.fecha, estado == 'omitido' ? {color: '#9E0000'} : {} ]}>{hora.substr(0,5)}</Text>
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
        marginBottom: 2,
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
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
    },
    modalRegularText: {
        fontSize: 14,
        marginTop: 10,
        marginBottom: 10,
    },
    modalMateriaText: {
        fontSize: 15,
        marginTop: 13,
        marginBottom: 13,
        textAlign: 'center',
        color: currentTheme.tertiaryColor,
        fontWeight: 'bold'
    },
    modalTagContainer: {
        alignSelf: 'center',
        backgroundColor: '#E5E5E5',
        width: width / 4,
        paddingVertical: 6,
        justifyContent: 'center',
        borderRadius: 3,
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 5,
    },
    modalTagText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#A9A9A9'
    },
    modalDateText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#171717',
        paddingHorizontal: 10,
    },
    editContainer: {
        alignItems: 'center',
        paddingTop: 12,
    },
    editText: {
        fontSize: 15,
        fontWeight: '600',
        textDecorationLine: 'underline',
    }
});