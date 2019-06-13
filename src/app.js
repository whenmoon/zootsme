import * as firebase from 'firebase';
import React, { Component} from 'react';
import { View, Text} from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import Router from './Router'

class App extends Component {
  constructor(props){
    super(props)

    this.state = { loggedIn: null}
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyB6sjVazk7007XyU13HectS6lWH9jc1HNo",
      authDomain: "zootsme9999.firebaseapp.com",
      databaseURL: "https://zootsme9999.firebaseio.com",
      projectId: "zootsme9999",
      storageBucket: "zootsme9999.appspot.com",
      messagingSenderId: "760466397370",
      appId: "1:760466397370:web:f3860e31d37f59de"
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

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
         <Button onPress={() => firebase.auth().signOut()}>
         Log Out
         </Button>
      )
      case false:
      return <LoginForm />
      default:
      //wrap view tag to place spinner in center
      return <Spinner size="large" />
    }


    // if (this.state.loggedIn) {
    //   return (
    //     <Button>
    //       Log Out
    //     </Button>
    //   );
    // }
    // return <LoginForm />;
  }

  render() {
    return (
        <Router />
    );
  }
}

export default App;