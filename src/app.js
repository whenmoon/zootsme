import * as firebase from 'firebase';
import React, { Component} from 'react';
import { View, Text} from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import Router from './Router'
import config  from './config/config'

class App extends Component {
  constructor(props){
    super(props)
    this.state = { loggedIn: null}
  }

  componentWillMount() {
    firebase.initializeApp(config);

    //method for handling either signing in or out
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