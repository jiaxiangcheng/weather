import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, FlatList, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { setPosts } from '../actions'


class Posts extends React.Component {

    addPost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 10
            })
        })
        .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData);
            this.props.setPosts(responseData);
        })
        .catch((err)=> {
        console.log('Some errors occured');
        console.log(err);
        });
    }

    getPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                this.props.setPosts(responseData);
            })
            .catch((err)=> {
            console.log('Some errors occured');
            console.log(err);
        });
    }

    listConent () {
        if (this.props.posts && this.props.posts.length > 0) {
            return (
            <View style={{flexDirection: 'column', marginTop: 20}}>
                <Text style={{fontSize: 14, color: 'red'}}>Remote posts:</Text>
                <FlatList
                    data={this.props.posts}
                    renderItem={({item, index}) => (
                    <View>
                        <View>
                            <Text style={styles.rowItem}>{index} Posts: Title => {item.title}</Text>
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
            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch',}}>
                <View style={{}}>
                    <TextInput 
                        style={styles.textInput} 
                        // onChangeText={(taskName) => {this.props.setTaskName(taskName)}}     
                        placeholder='Enter any post'
                    >
                    </TextInput>
                    <TouchableOpacity style={styles.button} onPress={() => this.addPost()}>
                        <Text>Add posts</Text>
                    </TouchableOpacity>
                </View>

                <View style={{marginTop: 20}}>
                    <TouchableOpacity style={styles.button} onPress={() => this.getPosts()}>
                        <Text>Get posts</Text>
                    </TouchableOpacity>
                </View>

                <View style={{maxHeight: 228, maxWidth: 400}}>
                        {this.listConent()}
                </View>
            </View>
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
    textInput: {
        height: 50,
        borderWidth: 1,
        marginBottom: 20
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
    rowItem: {
        height: 40,
        borderWidth: 2
    },
});
  
const mapStateToProps = (state) => {
    console.log(state);
    return {
        posts: state.postsReducer.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPosts: (postsList) => dispatch(setPosts(postsList)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);