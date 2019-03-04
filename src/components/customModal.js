import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Platform,
	Dimensions,
	TouchableOpacity,
	TextInput,
	Button,
	Alert
} from 'react-native';
import Modal from 'react-native-modalbox';
import validator from '../utilities/validate_wrapper';

var screen = Dimensions.get('window');

export default class CustomModal extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			taskNameError: ''
		}
	}

	showModal = () => {
		console.log(this.refs.myModal);
		this.refs.myModal.open();
	}

	isValidForm() {
		return this.state.taskNameError == null;
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
                backdropPressToClose={false}
                onClosed={() => {
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
                  onChangeText={(changedText) => {
                    this.props.onInputChanged(changedText); 
                    this.setState({
                      taskNameError: validator('taskName', changedText)
                    });
                  }}
                />

                {this.state.taskNameError ? 
				<Text style={{color: 'red', textAlign: 'center',}}>{this.state.taskNameError}</Text>
				: null}

                <View style={{flexDirection: 'row', marginTop: 20}}>
                  <TouchableOpacity style={styles.saveButton} onPress={() => {
                    if (this.isValidForm()) {
                      this.props.updateTask();
                      this.refs.myModal.close();
                    }
                    else {
                      Alert.alert('Invalid form, please try again!');
                    }
                  }}>
                      <Text>Save</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.cancelButton} onPress={() => this.refs.myModal.close()}>
                      <Text>Cancel</Text>
                  </TouchableOpacity>
                </View>

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
	topControls: {
		flexDirection: 'row',
		height: 50
	},
	content: {
		marginTop: 25
	},
	bottomControls: {

	},
	textInput: {
		width: 150,
		height: 50,
		borderWidth: 1,
	},
	rowItem: {
		borderWidth: 1,
		height: 40,
		padding: 10
	},
	saveButton: {
		alignItems: 'center',
		backgroundColor: 'green',
		padding: 10,
	},
	cancelButton: {
		alignItems: 'center',
		backgroundColor: 'grey',
		padding: 10
	}
});