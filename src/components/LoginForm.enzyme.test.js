/**
 * @jest-environment jsdom
 */
import React from 'react';
import { mount } from 'enzyme';
import { Text } from 'react-native';
import LoginForm from './LoginForm'; 
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';
import { resolve } from 'path';
Enzyme.configure({ adapter: new Adapter() }); 


describe('Login form testing', () => {
  test('check that initial state is blank with loading false', () => {
    const wrapper = mount(<LoginForm></LoginForm>);
    wrapper.instance();
    expect(wrapper.state()).toEqual({email: '',
    password: '',
    error: '',
    loading: false})
  });

  test('should set state to authentication failed on Login Fail state', () => {
    const wrapper = mount(<LoginForm></LoginForm>);
    const wrapped = wrapper.instance()
    wrapped.setState({ loading: true, error:'help' });
    wrapped.onLoginFail();
    expect(wrapper.state()).toEqual({email: '',
    error: 'Authentication failed',
    password: '',
    loading: false})
  });

  test('unit test should clear login details on Login success', () => {
    const wrapper = mount(<LoginForm></LoginForm>);
    const wrapped = wrapper.instance();
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
    const wrapper = mount(<LoginForm></LoginForm>);
    const main = jest.fn();
    Actions.main = main;
    const wrapped = wrapper.instance();
    wrapped.onLoginSuccess();
    expect(Actions.main).toHaveBeenCalled();
  })

  // to do list 
  test('button pressed should create a user and sign in' ,() => {
    const signIn = {
      signInWithEmailAndPassword:  jest.fn((email,password)=> new Promise((resolve,reject)=>{})),
      createUserWithEmailAndPassword: jest.fn((email,password)=> new Promise((resolve,reject)=>{}))
    } 
    firebase.auth = () => signIn;
    const loginComponent = mount(<LoginForm></LoginForm>);
    const LoggedComponent = loginComponent.instance();
    LoggedComponent.setState({ email:'crazymonkey.com', password:'123'});
    LoggedComponent.onButtonPress();
    expect(signIn.signInWithEmailAndPassword).toHaveBeenCalledWith('crazymonkey.com','123');
  });

  test('button pressed should create a user and sign in', () => {
    const signIn = {
      signInWithEmailAndPassword: jest.fn((email,password) => new Promise((resolve,reject) => 
      {if (email==='evil') return reject(true)}
      )),
      createUserWithEmailAndPassword: jest.fn((email,password)=>{})
    } 
    firebase.auth = () => signIn;
    const loginComponent = mount(<LoginForm></LoginForm>);
    const LoggedComponent = loginComponent.instance();
    LoggedComponent.setState({ email:'evil', password:'123'});
    LoggedComponent.onButtonPress();
    expect(signIn.createUserWithEmailAndPassword).toHaveBeenCalled();
  })

  test('render button', () => {
    const loginComponent = mount(<LoginForm></LoginForm>);
    const LoggedComponent = loginComponent.instance();
    LoggedComponent.setState({loading: true})
    
  })

});