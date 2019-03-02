import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, FlatList, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { setTaskName, addMission, deleteTaskByIndex, editTaskByIndex, setIndex } from '../actions';
import CustomModal from './customModal';

class TodoList extends React.Component {

    constructor(props) {
      super(props);            
    }

    addTask = () => {
      this.props.addMission(this.props.taskName);
      this.textInput.clear();
    }

    editSelectTask = (index) => {
      this.props.setIndex(index);
      this.refs.editModal.showModal();
    }

    updateTask = () => {
      this.props.editTaskByIndex(this.props.index, this.props.taskName);
    }

    deleteSelectTask = (index) => {
      this.props.deleteTaskByIndex(index);
    }

    onInputChanged = (changedText) => {
      this.props.setTaskName(changedText);
    }

    listConent () {
      if (this.props.missions && this.props.missions.length > 0) {
        return (
          <View>
              <FlatList
                data={this.props.missions}
                renderItem={({item, index}) => (
                  <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 10}}>
                      <Text style={styles.rowItem}>{item.name}</Text>
                    </View>
                    <View style={{flex: 2}}>
                      <TouchableOpacity style={styles.button} onPress={() => this.editSelectTask(index)}>
                          <Text>Edit</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{flex: 1}}>
                      <TouchableOpacity style={styles.button} onPress={() => this.deleteSelectTask(index)}>
                          <Text>X</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
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
              <Button style={{ flex: 1 }} title='ADD' onPress={() => this.addTask()}></Button>
            </View>
            
            <View style={styles.content}>
              <Text style={{fontSize: 25, color: 'red'}}>Task to do:</Text>
              {this.listConent()}
            </View>

           
            <CustomModal ref={'editModal'} onInputChanged={this.onInputChanged} updateTask={this.updateTask}>
            </CustomModal>

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
      flexDirection: 'row',
      height: 50
    },
    content : {
      marginTop: 25
    },
    bottomControls: {

    },
    cityTextInput: {
      width: 150,
      height: 50,
      borderWidth: 1,
      marginBottom: 20,
      flex: 10
    },
    rowItem : {
      borderWidth: 1,
      height: 40,
      padding: 10
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10
    }
});

const mapStateToProps = (state) => {
    return {
      missions: state.todoListReducer.missions,
      taskName: state.todoListReducer.taskName,
      index: state.todoListReducer.index
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
        addMission: (newItem) => dispatch(addMission(newItem)),
        setTaskName: (taskName) => dispatch(setTaskName(taskName)),
        deleteTaskByIndex: (index) => dispatch(deleteTaskByIndex(index)),
        editTaskByIndex: (index, name) => dispatch(editTaskByIndex(index, name)),
        setIndex: (index) => dispatch(setIndex(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
  