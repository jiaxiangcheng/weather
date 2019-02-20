import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, FlatList } from "react-native";
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'
import { setTaskName, addMission } from '../actions';

class TodoList extends React.Component {

    addTask = () => {
      this.props.addMission(this.props.taskName);
      this.textInput.clear();
    }

    listConent () {
      if (this.props.missions && this.props.missions.length > 0) {
        return (
          <View>
              <FlatList
                data={this.props.missions}
                renderItem={({item}) => <Text style={styles.rowItem}>{item.name}</Text>}
              />
          </View>
        );
      } else return null;
    }

    render() {
        return (
          <View style={styles.container}>
            <View style={styles.topControls}>
              <TextInput 
                ref={input => { this.textInput = input }}
                style={styles.cityTextInput} 
                onChangeText={(taskName) => {this.props.setTaskName(taskName)}}     
                placeholder='Enter any task'
              >
              </TextInput>
              <Button title='ADD' onPress={() => this.addTask()}></Button>
            </View>
            
            <View style={styles.content}>
              <Text style={{fontSize: 20}}>Task to do:</Text>
              {this.listConent()}
            </View>
            <View style={styles.bottomControls}>

            </View>
          </View>
        );
    }
}  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignContent: 'flex-start',
      backgroundColor: "#F5FCFF",
    },
    topControls : {
      alignSelf: 'flex-end',
      flexDirection: 'row',
      height: 50
    },
    content : {
      marginTop: 35
    },
    bottomControls: {

    },
    cityTextInput: {
      width: 150,
      height: 50,
      borderWidth: 1,
      marginBottom: 20
    },
    rowItem : {
      borderWidth: 1,
      height: 20
    }
});

const mapStateToProps = (state) => {
    return {
      missions: state.todoListReducer.missions,
      taskName: state.todoListReducer.taskName
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
        addMission: (newItem) => dispatch(addMission(newItem)),
        setTaskName: (taskName) => dispatch(setTaskName(taskName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
  