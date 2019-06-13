import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Router from './src/Router';
import * as firebase from 'firebase';

export default class App extends React.Component {
  constructor(props){
    super(props)

    this.state = { loggedIn: null}
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyC_WAOptgcEK5KkfMJMo85kiwciz2cVVew",
      authDomain: "zutsme.firebaseapp.com",
      databaseURL: "https://zutsme.firebaseio.com",
      projectId: "zutsme",
      storageBucket: "zutsme.appspot.com",
      messagingSenderId: "737052347201"
    });

    // method for handling either signing in or out
    firebase.auth().onAuthStateChanged( (user) => {
      if (user) {
        this.setState({ loggedIn: true});
      }else {
        this.setState({ loggedIn: false });
      }
    })
  }

  render() {
    return (
      <Router />
    );
  }
}
