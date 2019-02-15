/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from "react";
import { Platform, StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
// import { setMainInfo } from './src/actions'

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cityName: null,
      data: null
    };    
  }

  componentDidMount() {
    
  }

  async getWeather() {
    try {
      console.log('city to be consult: ' + this.state.cityName);
      let response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + this.state.cityName + '&units=metric' + '&appid=53c1655ff71ff1a77a97842459d3e10e');
      let responseJson = await response.json();
      let mainInfo = await responseJson.main;
      console.log(mainInfo);
      await this.setState({
        data: mainInfo
      })
    } catch(error) {
      console.error(error);
    };

  }
  renderElement () {
    if (this.state.data != null) {
      return (
        <View>
          <Text>Humidity: {this.state.cityName == null? '' : this.state.data.humidity}</Text>
          <Text>Pressure: {this.state.cityName == null? '' : this.state.data.pressure}</Text>
          <Text>Current Temp: {this.state.cityName == null? '' : this.state.data.temp + ' C'}</Text>
          <Text>Max Temp: {this.state.cityName == null? '' : this.state.data.temp_max + ' C'}</Text>
          <Text>Min Temp: {this.state.cityName == null? '' : this.state.data.temp_min + ' C'}</Text>
        </View>
      );
    } else return null;
  }
  

  render() {
    return (
      <View style={styles.container}>
      <Image
        style={{width: 100, height: 100, resizeMode : 'stretch', marginBottom: 20 }}
        source={require('./images/icon.png')}  
      /> 
        <TextInput 
          style={styles.cityTextInput} 
          onChangeText={(cityName) => this.setState({cityName})} 
          value={this.state.username}
          placeholder='City name'
        ></TextInput>
        {this.renderElement()}
        <Button title="Get the weather" onPress={this.getWeather.bind(this)}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  title: {
    fontSize: 20,
    color: 'blue',
    padding: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  cityTextInput: {
    width: 150,
    height: 50,
    borderWidth: 1,
    marginBottom: 10
  }
});

function mapStateToProps(state) {
  return {
    basicTempInfo: state.basicTempInfo
  }
}

export default connect(mapStateToProps, { setMainInfo })(App);