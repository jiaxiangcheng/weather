import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";

export default class Test extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Second Screen</Text>
            </View>
        );
      };
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