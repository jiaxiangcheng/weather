import React from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert,
    Platform, TouchableHighlight, Dimensions,
    TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import { connect } from 'react-redux';

var screen = Dimensions.get('window');

class EditTaskModal extends React.Component {

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
                onClosed={() => {
                    // alert("Modal closed");
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
                  // onChangeText={(taskName) => {this.props.setTaskName(taskName)}}     
                >
                </TextInput>
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
      height: 20,
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

    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTaskModal);
  