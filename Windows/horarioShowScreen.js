import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, Dimensions, FlatList } from 'react-native';
import currentTheme from '../Components/currentTheme';
import MenuBar from '../hotBar';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('screen');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenLunes: false,
      isOpenMartes: false,
      isOpenMiercoles: false,
      isOpenJueves: false,
      isOpenViernes: false,
      isOpenSabado: false,
      isOpenDomingo: false,
    };
  }

  render() {
    return (
      <View style = {styles.container}>

      <View style={styles.nav}>
        <MenuBar/>
      </View>
        
        <ScrollView>

          <Collapse
            onToggle={() => this.setState({ isOpenLunes: !this.state.isOpenLunes })}
          >
            <CollapseHeader
            >
            <View style={styles.iconContainer}>
              <Text 
                style={styles.collapseTitle}>Lunes
              </Text>
              <Icon name={this.state.isOpenLunes === true ? 'chevron-up' : 'chevron-down'} size={30} color={currentTheme.primaryColor}/> 
            </View> 
            </CollapseHeader>
            <CollapseBody>
              <FlatList
                    
              />
            </CollapseBody>
          </Collapse>

          <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:2.5, width: width}}/>

          <Collapse
            onToggle={() => this.setState({ isOpenMartes: !this.state.isOpenMartes })}
          >
            <CollapseHeader
            >
            <View style={styles.iconContainer}>
              <Text 
                style={styles.collapseTitle}>Martes
              </Text>
              <Icon name={this.state.isOpenMartes === true ? 'chevron-up' : 'chevron-down'} size={30} color={currentTheme.primaryColor}/> 
            </View> 
            </CollapseHeader>
            <CollapseBody>
              <FlatList
                    
              />
            </CollapseBody>
          </Collapse>

          <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:2.5, width: width}}/>

          <Collapse
            onToggle={() => this.setState({ isOpenMiercoles: !this.state.isOpenMiercoles })}
          >
            <CollapseHeader
            >
            <View style={styles.iconContainer}>
              <Text 
                style={styles.collapseTitle}>Miercoles
              </Text>
              <Icon name={this.state.isOpenMiercoles === true ? 'chevron-up' : 'chevron-down'} size={30} color={currentTheme.primaryColor}/> 
            </View> 
            </CollapseHeader>
            <CollapseBody>
              <FlatList
                    
              />
            </CollapseBody>
          </Collapse>

          <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:2.5, width: width}}/>

          <Collapse
            onToggle={() => this.setState({ isOpenJueves: !this.state.isOpenJueves })}
          >
            <CollapseHeader
            >
            <View style={styles.iconContainer}>
              <Text 
                style={styles.collapseTitle}>Jueves
              </Text>
              <Icon name={this.state.isOpenJueves === true ? 'chevron-up' : 'chevron-down'} size={30} color={currentTheme.primaryColor}/> 
            </View> 
            </CollapseHeader>
            <CollapseBody>
              <FlatList
                    
              />
            </CollapseBody>
          </Collapse>

          <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:2.5, width: width}}/>

          <Collapse
            onToggle={() => this.setState({ isOpenViernes: !this.state.isOpenViernes })}
          >
            <CollapseHeader
            >
            <View style={styles.iconContainer}>
              <Text 
                style={styles.collapseTitle}>Viernes
              </Text>
              <Icon name={this.state.isOpenViernes === true ? 'chevron-up' : 'chevron-down'} size={30} color={currentTheme.primaryColor}/> 
            </View> 
            </CollapseHeader>
            <CollapseBody>
              <FlatList
                    
              />
            </CollapseBody>
          </Collapse>

          <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:2.5, width: width}}/>

          <Collapse
            onToggle={() => this.setState({ isOpenSabado: !this.state.isOpenSabado })}
          >
            <CollapseHeader
            >
            <View style={styles.iconContainer}>
              <Text 
                style={styles.collapseTitle}>Sábado
              </Text>
              <Icon name={this.state.isOpenSabado === true ? 'chevron-up' : 'chevron-down'} size={30} color={currentTheme.primaryColor}/> 
            </View> 
            </CollapseHeader>
            <CollapseBody>
              <FlatList
                    
              />
            </CollapseBody>
          </Collapse>

          <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:2.5, width: width}}/>

          <Collapse
            onToggle={() => this.setState({ isOpenDomingo: !this.state.isOpenDomingo })}
          >
            <CollapseHeader
            >
            <View style={styles.iconContainer}>
              <Text 
                style={styles.collapseTitle}>Domingo
              </Text>
              <Icon name={this.state.isOpenDomingo === true ? 'chevron-up' : 'chevron-down'} size={30} color={currentTheme.primaryColor}/> 
            </View> 
            </CollapseHeader>
            <CollapseBody>
              <FlatList
                    
              />
            </CollapseBody>
          </Collapse>

          <View style={{borderBottomColor: currentTheme.quinaryColor, borderBottomWidth:2.5, width: width}}/>

        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  nav:{
    width: width,
    height: 60,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 22,
    color: '#A0A5AE',
  },
  hora: {
    fontSize: 19,
    color: '#00456E',
    fontWeight: 'bold',
  },
  dia: {
    fontSize: 19,
    color: '#00456E',
    fontWeight: 'bold',

  },
  collapseTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: currentTheme.tertiaryColor,
    marginLeft: 15,
    marginTop: 10,
    paddingBottom: 15,
  },
  collapseItems: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    color: currentTheme.tertiaryColor,
    backgroundColor: currentTheme.quinaryColor,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: currentTheme.secondaryColor,
    marginHorizontal: 30,
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
  },
})