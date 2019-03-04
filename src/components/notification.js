import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, Alert } from "react-native";
import { connect } from 'react-redux';
import PubNubReact from 'pubnub-react';
var PushNotification = require('react-native-push-notification');

class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.pubnub = new PubNubReact({
            publishKey: 'pub-c-4e54a9de-9a3f-4c32-8bf3-b1ef5921ccb0',
            subscribeKey: 'sub-c-e8388830-3e84-11e9-b55d-e290e0e91732'
        });
        this.pubnub.init(this);
        PushNotification.configure({
          // Called when Token is generated.
          onRegister: function(token) {
              console.log( 'TOKEN:', token );
              if (token.os == "ios") {
                this.pubnub.push.addChannels(
                {
                  channels: ['notifications'],
                  device: token.token,
                  pushGateway: 'apns'
                });
                // Send iOS Notification from debug console: {"pn_apns":{"aps":{"alert":"Hello World."}}}
              } else if (token.os == "android"){
                this.pubnub.push.addChannels(
                {
                  channels: ['notifications'],
                  device: token.token,
                  pushGateway: 'gcm' // apns, gcm, mpns
                });
                // Send Android Notification from debug console: {"pn_gcm":{"data":{"message":"Hello World."}}}
              }  
          }.bind(this),
          // Something not working?
          // See: https://support.pubnub.com/support/solutions/articles/14000043605-how-can-i-troubleshoot-my-push-notification-issues-
          // Called when a remote or local notification is opened or received.
          onNotification: function(notification) {
            console.log( 'NOTIFICATION:', notification );
            Alert.alert('Hello' + notification.message);
            // Do something with the notification.
            // Required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
            // notification.finish(PushNotificationIOS.FetchResult.NoData);
          },
          // ANDROID: GCM or FCM Sender ID
          senderID: "734316750363",
      });
    }

    render() {
        return (
          <View style={styles.container}>
            <Text>Notification</Text>
            
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
      width: 150,
      height: 50,
      borderWidth: 1,
      marginBottom: 20
    }
  });
  
  const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {

    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Notification);