import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'

class TodoList extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <Text>To do list</Text>
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
    cityTextInput: {
      width: 150,
      height: 50,
      borderWidth: 1,
      marginBottom: 20
    }
});

const mapStateToProps = (state) => {
    return {
      missions: state.todoListReducer.missions
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
        addMission: (newItem) => dispatch(addMission(newItem)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
  