import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import { setMainInfo, setSearchCityName, setCurrentLocation } from '../actions'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'

class Weather extends React.Component {
    getWeather (isCurrentLocation) {
        var url;
        if (isCurrentLocation) {
          // Geolocation to promise wrap
          var getPosition = function (options) {
            return new Promise(function (resolve, reject) {
              navigator.geolocation.getCurrentPosition(resolve, reject, options);
            });
          }
          getPosition()
            .then((position) => {
              // console.log(position);
              this.props.setCurrentLocation(position.coords);
              // console.log(this.props.currentLocation);
              url = 'http://api.openweathermap.org/data/2.5/weather?lat=' 
              + this.props.currentLocation.latitude + '&lon=' + this.props.currentLocation.longitude + 
              '&units=metric' + '&appid=53c1655ff71ff1a77a97842459d3e10e';
              fetch(url, {
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                }
              })
              .then((response) => response.json())
              .then((responseData) => {
                  this.props.setMainInfo(responseData.main);
              })
              .catch((err)=> {
                console.log('Some errors occured');
                console.log(err);
              });
            })
            .catch((err) => {
              console.error(err.message);
            });
        } else {
          url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.props.searchCityName + 
          '&units=metric' + '&appid=53c1655ff71ff1a77a97842459d3e10e';
          fetch(url, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
          .then((response) => response.json())
          .then((responseData) => {
              this.props.setMainInfo(responseData.main);
          })
          .catch((err)=> {
            console.log('Some errors occured');
            console.log(err);
          });
        };
    }

    weatherInfo () {
      if (this.props.basicTempInfo != null) {
        return (
          <View>
            <Text>Humidity: {this.props.basicTempInfo.humidity}</Text>
            <Text>Pressure: {this.props.basicTempInfo.pressure}</Text>
            <Text>Current Temp: {this.props.basicTempInfo.temp + ' C'}</Text>
            <Text>Max Temp: {this.props.basicTempInfo.temp_max + ' C'}</Text>
            <Text>Min Temp: {this.props.basicTempInfo.temp_min + ' C'}</Text>
          </View>
        );
      } else return null;
    }

    render() {
      return (
        <View style={styles.container}>
        <Image
          style={{width: 100, height: 100, resizeMode : 'stretch', marginBottom: 20 }}
          source={require('../../images/icon.png')}  
        /> 
          <TextInput 
            style={styles.cityTextInput} 
            onChangeText={(cityName) => this.props.setSearchCityName(cityName)} 
            value={this.props.searchCityName}
            placeholder='Enter the city name'
          ></TextInput>
          {this.weatherInfo()}
          <Button title="Get the weather" onPress={() => this.getWeather(false)}></Button>
          <Button title="Current location weather" onPress={() => this.getWeather(true)}></Button>
          <Button title="Go to the second screen" onPress={() => Actions.test()}></Button>
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
      searchCityName: state.searchCityName,
      currentLocation: state.currentLocation
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      setMainInfo: (mainInfo) => dispatch(setMainInfo(mainInfo)),
      setSearchCityName: (cityName) => dispatch(setSearchCityName(cityName)),
      setCurrentLocation: (location) => dispatch(setCurrentLocation(location))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Weather);