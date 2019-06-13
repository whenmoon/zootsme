import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, InputField, Spinner} from './common';
import { Actions } from 'react-native-router-flux'

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false };
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });


    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        // this.onLoginSuccess.bind(this)
        this.setState({
          email: '',
          password: '',
          loading: false,
          error: ''
        })
        console.log('AFTER ON LOGIN SUCCESS', this.state);
        Actions.main();
      })
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication failed',
      loading: false
    })
  }

  onLoginSuccess() {
    console.log('INSIDE ONLOGIN SUCCESS',this.state)
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    },()=> console.log(this.state))

    //comes from key in scenes
    Actions.main();

  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small"/>
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    )
  }

  render() {
    return (
      <Card>
        <CardSection>
          <InputField
          placeholder='user@email.com'
          label="Email"
          value={this.state.email}
          onChangeText={email => this.setState({email})}
          />
        </CardSection>

        <CardSection>
          <InputField
          secureTextEntry
          placeholder='password'
          label="Password"
          value={this.state.password}
          onChangeText={password => this.setState({password})}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;