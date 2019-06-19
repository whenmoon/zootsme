/**
 * @jest-environment jsdom
 */

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';
Enzyme.configure({ adapter: new Adapter() }); 
import {mocks} from './LoginForm.mock';



describe('Login form testing', () => {
  test('check that initial state is blank with loading false', () => {
    mocks.wrapper.instance();
    expect(mocks.wrapper.state()).toEqual({
      email: '',
      password: '',
      error: '',
      loading: false
    })
  });

  test('should set state to authentication failed on Login Fail state', () => {
    const wrapped = mocks.wrapper.instance()
    wrapped.setState({
      loading: true,
      error: 'help'
    });
    wrapped.onLoginFail();
    expect(mocks.wrapper.state()).toEqual({
      email: '',
      error: 'Authentication failed',
      password: '',
      loading: false
    })
  });

  test('unit test should clear login details on Login success', () => {
    const wrapped = mocks.wrapper.instance();
    wrapped.setState({
      email: 'crazymonkey.com',
      password: '123',
      loading: true,
      error: 'help'
    });
    Actions.main = mocks.main;
    wrapped.onLoginSuccess();
    expect(mocks.wrapper.state()).toEqual({
      email: '',
      error: '',
      password: '',
      loading: false
    })
    expect(Actions.main).toHaveBeenCalled();
  });

  test('should navigate to main on Login Success', () => {
    const wrapped = mocks.wrapper.instance();
    Actions.main = mocks.main;
    wrapped.onLoginSuccess();
    expect(Actions.main).toHaveBeenCalled();
  })

  // // to do list 
  test('button pressed should create a user and sign in', () => {
    
    firebase.auth = () => mocks.signIn;
    const wrapped = mocks.wrapper.instance();
    wrapped.setState({
      email: 'crazymonkey.com',
      password: '123'
    });
    mocks.wrapper.update()
    wrapped.onButtonPress(() => mocks.setEmailOnLogIn);
    expect(mocks.signIn.signInWithEmailAndPassword).toHaveBeenCalledWith('crazymonkey.com', '123');
  });

  test('button pressed should create a user and sign in', () => {
   
    firebase.auth = () => mocks.signIn;
    const wrapped = mocks.wrapper.instance();
    wrapped.setState({
      email: 'evil',
      password: '123'
    });
    wrapped.onButtonPress(() => mocks.setEmailOnLogIn);
    mocks.wrapper.update()
    expect(mocks.signIn.createUserWithEmailAndPassword).toHaveBeenCalled();
  })

  test('spinner if loading', () => {
    const wrapped = mocks.wrapper.instance();
    wrapped.setState({
      loading: true
    })
    wrapped.renderButton();
    mocks.wrapper.update()
    expect(mocks.wrapper.find('Spinner').exists()).toBe(true)
  })

  test('Button is rendered', () => {
    const wrapped = mocks.wrapper.instance();
    wrapped.setState({
      loading: false
    })
    wrapped.renderButton();
    mocks.wrapper.update();
    expect(mocks.wrapper.find('Button').exists()).toBe(true)
  })

  test('Check if error is rendered', () => {
    const wrapped = mocks.wrapper.instance();
    wrapped.setState({
      error: 'bad result'
    })
    mocks.wrapper.update()
    expect(mocks.wrapper.find('Text').at(4).props().children).toBe('bad result')
  })

});