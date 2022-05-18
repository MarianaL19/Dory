import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import currentTheme from '../Components/currentTheme';
import { getCurrentDate, cambioFormato } from '../Components/Date';


export default class CalendarioScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaRecordatorios: [],
        };
    }

    recuperarDatos = () => {
        var xhttp = new XMLHttpRequest();
        let _this = this;       // Esto es para usar 'this' dentro de la función

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let nombreRecordatorio = '';
                let etiquetaRecordatorio = '';
                let materiaRecordatorio = '';
                let estadoRecordatorio = '';
                let fechaRecordatorio = '';
                let horaRecordatorio = '';
                let descripcionRecordatorio = '';
                let idRecordatorio = -1;

                var recordatorio = xhttp.responseText;

                var registros = recordatorio.split('|');

                var numeroRegistros = registros[0];

                for (let i = 1; i <= numeroRegistros; i++) {
                    var datos = registros[i].split('¬');
                    console.log('datos: ' + datos[0]);
                    nombreRecordatorio = datos[0];
                    etiquetaRecordatorio = datos[1];
                    materiaRecordatorio = datos[2];
                    estadoRecordatorio = datos[3];
                    fechaRecordatorio = datos[4];
                    horaRecordatorio = datos[5];
                    descripcionRecordatorio = datos[6];
                    idRecordatorio = datos[7];

                    const objetoRecordatorio =
                    {
                        nombre: nombreRecordatorio, etiqueta: etiquetaRecordatorio,
                        materia: materiaRecordatorio, estado: estadoRecordatorio,
                        fecha: fechaRecordatorio, hora: horaRecordatorio,
                        descripcion: descripcionRecordatorio, id: idRecordatorio
                    };

                    const nuevoArreglo = [..._this.state.listaRecordatorios, objetoRecordatorio];
                    _this.setState({ listaRecordatorios: nuevoArreglo });
                }
                console.log(_this.state.listaRecordatorios);
            }
        };
        xhttp.open("GET", 'https://dory69420.000webhostapp.com/recuperarRecordatorios.php'
            , true);
        xhttp.send();
    }

    componentDidMount() {
        this.recuperarDatos();
    }

    fechas(){
        return(", '2022-05-17': { selected: false, marked: true, selectedColor: currentTheme.primaryColor }");
    }

    render() {
        //Configuración local para personalizar los nombres dentro del Calendario
        LocaleConfig.locales['cf'] = {
            monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            monthNamesShort: ["Ene.", "Feb.", "Mar.", "Abr.", "May.", "Jun.", "Jul.", "Ago.", "Sep.", "Oct.", "Nov.", "Dic."],
            today: "Hoy",
            dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            dayNamesShort: ["Dom.", "Lun.", "Mar.", "Mier.", "Jue.", "Vie.", "Sáb."],
        }
        LocaleConfig.defaultLocale = "cf"


        return (
            <>
                {/* Calendario */}
                <View style={{ backgroundColor: currentTheme.backgroundColor }}>
                    <View style={styles.calendarWrapper}>
                        <Calendar
                            style={{ backgroundColor: currentTheme.quinaryColor, marginBottom: 30 }}
                            // Defino los parámetros del Calendario
                            minDate={'2021-02-05'}
                            maxDate={'2023-04-23'}
                            firstDay={1}
                            onDayPress={(e) => {
                                console.log(`e`, e)
                            }}
                            enableSwipeMonths
                            markingType="dot"

                            // fechas de ejemplo para ver algunas marcaciones en el calendario
                            markedDates={{
                                [getCurrentDate()]: { selected: true },
                                '2022-04-16': { selected: false, marked: true, selectedColor: currentTheme.primaryColor },
                                '2022-04-17': { marked: true },
                                '2022-04-18': { marked: true, dotColor: currentTheme.secondaryColor, activeOpacity: 0 }
                            }}
                        />
                    </View>

                    {/* Fecha que aparece abajo del calendario según el día señalado. Utilizo la misma función
            para cambiar el formato yyyy-mm-dd a texto simple, pero no he podido implementar los días de la semana */}
                    <Text style={[styles.dateText, { color: currentTheme.tertiaryColor }]}> {cambioFormato(getCurrentDate())} </Text>
                </View>

                <View>
                    <Text> calendarioScreen </Text>
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    calendarWrapper: {
        height: 360,
    },
    dateText: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 10,
        marginBottom: 5,
        marginTop: 5,
    },
});