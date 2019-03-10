import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import { Actions } from "react-native-router-flux";

export default class Test extends React.Component {

    render() {
      return (
        <View style={styles.container}>
            <View style={{marginBottom: 20}}>
              <Button title='WEATHER' onPress={() => Actions.weather()}></Button>
            </View>
            <View style={{marginBottom: 20}}>
              <Button title='TODOLIST' onPress={() => Actions.todoList()}></Button>
            </View>
            <View style={{marginBottom: 20}}>
              <Button title='NOTIFICATION' onPress={() => Actions.notification()}></Button>
            </View>
            <View>
              <Button title='POSTS' onPress={() => Actions.posts()}></Button>
            </View>
        </View>
      );
    };
}


// 934113055381-1i5fhbaqrsuq5h7qe3q18j8dtgh15nlj.apps.googleusercontent.com

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