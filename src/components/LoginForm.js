import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Text } from 'react-native';
<<<<<<< HEAD
import { Button, Card, CardSection, InputField, Spinner} from './common';
import { Actions } from 'react-native-router-flux';
=======
import { Button, Card, CardSection, InputField, Spinner } from './common';
import { Actions } from 'react-native-router-flux';
import { StateContext } from '../containers/State';
>>>>>>> 24bb44db50ad11dee62a02dfadc2cb1f29010bc8

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    };
  }

<<<<<<< HEAD


  onButtonPress() {
    const { email, password } = this.state;

    
=======
  onButtonPress(setEmailOnLogIn) {

    const { email, password } = this.state;

>>>>>>> 24bb44db50ad11dee62a02dfadc2cb1f29010bc8
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
        console.log('help');
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
    setEmailOnLogIn(this.state.email)
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication failed',
      loading: false
    })
  }

  onLoginSuccess() {
    console.log('INSIDE ONLOGIN SUCCESS', this.state)
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    }, () => console.log(this.state))

    //comes from key in scenes
    Actions.main();

  }

  renderButton(setEmailOnLogIn) {
    if (this.state.loading) {
      return <Spinner size="small" />
    }

    return (
      <Button onPress={this.onButtonPress.bind(this, setEmailOnLogIn)}>
        Log in
      </Button>
    )
  }

  render() {
    return (
      <Card>
        <StateContext.Consumer>
          {({ setEmailOnLogIn }) => (
            <>
              <CardSection>
                <InputField
                  placeholder='user@email.com'
                  label="Email"
                  value={this.state.email}
                  onChangeText={email => this.setState({ email })}
                />
              </CardSection>

              <CardSection>
                <InputField
                  secureTextEntry
                  placeholder='password'
                  label="Password"
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })}
                />
              </CardSection>

              <Text style={styles.errorTextStyle}>
                {this.state.error}
              </Text>

              <CardSection>
                {this.renderButton(setEmailOnLogIn)}
              </CardSection>
            </>
          )}
        </StateContext.Consumer>
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