/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import { setMainInfo, setSearchCityName } from './src/actions'
import { connect } from 'react-redux';

class App extends React.Component {

  getWeather() {
      // console.log('city to be consult: ' + this.props.searchCityName);
      // console.log('basicInfo: ' + this.props.basicTempInfo);
      fetch('http://api.openweathermap.org/data/2.5/weather?q=' + this.props.searchCityName + '&units=metric' + '&appid=53c1655ff71ff1a77a97842459d3e10e', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then((responseData) => {
          // console.log(responseData);
          this.props.setMainInfo(responseData.main);
      })
      .catch((err)=> {
        console.log('Some errors occured');
        console.log(err);
      });
  }
  renderElement () {
    if (this.props.basicTempInfo != null) {
      return (
        <View>
          <Text>Humidity: {this.props.searchCityName == null? '' : this.props.basicTempInfo.humidity}</Text>
          <Text>Pressure: {this.props.searchCityName == null? '' : this.props.basicTempInfo.pressure}</Text>
          <Text>Current Temp: {this.props.searchCityName == null? '' : this.props.basicTempInfo.temp + ' C'}</Text>
          <Text>Max Temp: {this.props.searchCityName == null? '' : this.props.basicTempInfo.temp_max + ' C'}</Text>
          <Text>Min Temp: {this.props.searchCityName == null? '' : this.props.basicTempInfo.temp_min + ' C'}</Text>
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
          onChangeText={(cityName) => this.props.setSearchCityName(cityName)} 
          value={this.props.searchCityName}
          placeholder='Enter the city name'
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

const mapStateToProps = (state) => {
  return {
    basicTempInfo: state.basicTempInfo,
    searchCityName: state.searchCityName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMainInfo: (mainInfo) => dispatch(setMainInfo(mainInfo)),
    setSearchCityName: (cityName) => dispatch(setSearchCityName(cityName)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);