import React, { Component } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import PushNotification from "react-native-push-notification";

export default class prueba extends Component {
  constructor(props) {
    super(props);
    this.state = {
        pruebaTitle: 'gei',
        pruebaDia: 'de hoy',
    };
  }

createChannels = () => {
    PushNotification.createChannel({
        channelId: 'Prueba',
        channelName: 'Prueba de Not'
    })
};

componentDidMount(){
    this.createChannels();
}

  render() {

    const handleNotfication = (titulo, dia) => {
        // PushNotification.localNotification({
        //     channelId: 'Prueba',
        //     title: 'eres ' + titulo,
        //     message: 'el dia ' + dia,
        // });

        PushNotification.localNotificationSchedule({
            channelId: 'Prueba',
            title: 'eres ' + titulo,
            message: 'desde hace 5 segundos ',
            date: new Date(Date.now() + 5 * 1000),
            allowWhileIdle: true,
        });
    }

    return (
      <View>
          <TouchableOpacity
            onPress={() => {handleNotfication(this.state.pruebaTitle, this.state.pruebaDia)}}
          >
            <Text> prueba </Text>
          </TouchableOpacity>
      </View>
    );
  }
}
