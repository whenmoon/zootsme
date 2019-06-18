/**
 * @jest-environment jsdom
 */
import React from 'react';
import { mount, render } from 'enzyme';
import { Text } from 'react-native';
import LoginForm from '../components/LoginForm'; 
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';
import {StateContext} from '../containers/State';
Enzyme.configure({ adapter: new Adapter() }); 


describe('Login form testing', () => {

  

  test('check that initial state is blank with loading false', () => {
    const setEmailOnLogIn = jest.fn()
    const wrapper = mount(
      <StateContext.Provider value={{ setEmailOnLogIn }}>
        <LoginForm />
      </StateContext.Provider>
    )
    wrapper.instance();
    expect(wrapper.state()).toEqual({email: '',
    password: '',
    error: '',
    loading: false})
  });

  test('should set state to authentication failed on Login Fail state', () => {
    const setEmailOnLogIn = jest.fn()
    const wrapper = mount(
      <StateContext.Provider value={{ setEmailOnLogIn }}>
        <LoginForm />
      </StateContext.Provider>
    )
    const wrapped = wrapper.instance()
    wrapped.setState({ loading: true, error:'help' });
    wrapped.onLoginFail();
    expect(wrapper.state()).toEqual({email: '',
    error: 'Authentication failed',
    password: '',
    loading: false})
  });

  test('unit test should clear login details on Login success', () => {
        const setEmailOnLogIn = jest.fn()
        const wrapper = mount(
          <StateContext.Provider value={{ setEmailOnLogIn }}>
            <LoginForm />
          </StateContext.Provider>
        )
      const main = jest.fn();
      wrapped.setState({ email:'crazymonkey.com', password:'123',loading: true, error:'help' });
      Actions.main = main;
      wrapped.onLoginSuccess();
      expect(wrapper.state()).toEqual({email: '',
      error: '',
      password: '',
      loading: false})
      expect(Actions.main).toHaveBeenCalled();
  });

  test('should navigate to main on Login Success', () => {
    const setEmailOnLogIn = jest.fn()
    const wrapper = mount(
      <StateContext.Provider value={{ setEmailOnLogIn }}>
        <LoginForm />
      </StateContext.Provider>
    )
    const main = jest.fn();
    Actions.main = main;
    const wrapped = wrapper.instance();
    wrapped.onLoginSuccess();
    expect(Actions.main).toHaveBeenCalled();
  })

  // // to do list 
  test('button pressed should create a user and sign in' ,() => {
    const signIn = {
      signInWithEmailAndPassword:  jest.fn((email,password)=> new Promise((resolve,reject)=>{})),
      createUserWithEmailAndPassword: jest.fn((email,password)=> new Promise((resolve,reject)=>{}))
    } 
    firebase.auth = () => signIn;
    const setEmailOnLogIn = jest.fn()
    const loginComponent = mount(
      <StateContext.Provider value={{ setEmailOnLogIn }}>
        <LoginForm />
      </StateContext.Provider>
    )
    const LoggedComponent = loginComponent.instance();
    LoggedComponent.setState({ email:'crazymonkey.com', password:'123'});
    LoggedComponent.onButtonPress();
    expect(signIn.signInWithEmailAndPassword).toHaveBeenCalledWith('crazymonkey.com','123');
  });

  test('button pressed should create a user and sign in', () => {
    const signIn = {
      signInWithEmailAndPassword: jest.fn((email,password) => {
        console.log('hello');
        return new Promise((resolve,reject) => 
      { console.log('hello');
        if (email==='evil') return reject(true)})
      }),
      createUserWithEmailAndPassword: jest.fn((email,password)=>{})
    } 
    firebase.auth = () => signIn;
    const setEmailOnLogIn = jest.fn()
    const loginComponent = mount(
      <StateContext.Provider value={{ setEmailOnLogIn }}>
        <LoginForm />
      </StateContext.Provider>
    )
    const LoggedComponent = loginComponent.instance();
    LoggedComponent.setState({ email:'evil', password:'123'});
    loginComponent.update()
    LoggedComponent.onButtonPress();
    expect(signIn.signInWithEmailAndPassword).toHaveBeenCalled();
    expect(signIn.createUserWithEmailAndPassword).toHaveBeenCalled();
  })

  test('spinner if loading', () => {
    const setEmailOnLogIn = jest.fn()
    const loginComponent = mount(
      <StateContext.Provider value={{ setEmailOnLogIn }}>
        <LoginForm />
      </StateContext.Provider>
    )
    const LoggedComponent = loginComponent.instance();
    LoggedComponent.setState({loading:true})
    LoggedComponent.renderButton();
    loginComponent.update()
    expect(loginComponent.find('Card').at(0).find('CardSection').at(2).find('Spinner').exists()).toBe(true)
  })

  test('Button is rendered', () => {
    const setEmailOnLogIn = jest.fn()
    const loginComponent = mount(
      <StateContext.Provider value={{ setEmailOnLogIn }}>
        <LoginForm />
      </StateContext.Provider>
    )
    const LoggedComponent = loginComponent.instance();
    LoggedComponent.setState({loading:false})
    LoggedComponent.renderButton();
    loginComponent.update();
    LoggedComponent.renderButton();
    expect(loginComponent.find('Card').at(0).find('CardSection').at(2).find('Button').exists()).toBe(true)
  })

  test('Check if error is rendered', () => {
    const setEmailOnLogIn = jest.fn()
    const loginComponent = mount(
      <StateContext.Provider value={{ setEmailOnLogIn }}>
        <LoginForm />
      </StateContext.Provider>
    )
    const LoggedComponent = loginComponent.instance();
    LoggedComponent.setState({error:'bad result'})
    loginComponent.update()
    expect(loginComponent.find('Card').at(0).find('Text').at(4).props().children).toBe('bad result')
  }) 

  





}); 