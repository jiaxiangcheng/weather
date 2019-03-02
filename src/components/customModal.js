import React from 'react';
import {
    StyleSheet, Text, View,
    Platform, Dimensions, TouchableOpacity,
    TextInput, Button
} from 'react-native';
import Modal from 'react-native-modalbox';
import validator from '../utilities/validate_wrapper';

var screen = Dimensions.get('window');

export default class CustomModal extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        taskName: '',
        taskNameError: ''
      }
    }

    showModal = () => {
        console.log(this.refs.myModal);
        this.refs.myModal.open();
    }
    
    render() {
        return (
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 0,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 280
                }}
                position='center'
                backdrop={true}
                animationDuration={50}
                onClosed={() => {
                  this.props.updateTask();
                  console.log('modal closed');
                }}
            >
              <View>
                <Text style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 40
                }}>
                New task name:
                </Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                
                <TextInput 
                  ref={input => { this.textInput = input }}
                  style={styles.textInput} 
                  onChangeText={(changedText) => {this.props.onInputChanged(changedText); this.setState({taskName: changedText})}}
                  onEndEditing={() => {
                    this.setState({
                      taskNameError: validator('taskName', this.state.taskName)
                    });
                  }}
                ></TextInput>
                {this.state.taskNameError ? <Text style={{color: 'red'}}>{this.state.taskNameError}</Text> : null}

                <TextInput 
                  style={styles.textInput} 
                ></TextInput>

                <TouchableOpacity style={styles.button} onPress={() => this.refs.myModal.close()}>
                    <Text>Save</Text>
                </TouchableOpacity>
              </View>

            </Modal>
            
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
    textInput: {
      width: 150,
      height: 50,
      borderWidth: 1,
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