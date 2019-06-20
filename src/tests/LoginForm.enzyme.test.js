/**
 * @jest-environment jsdom
 */
import { mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Actions } from 'react-native-router-flux';
import {StateContext} from '../containers/State';
import * as firebase from 'firebase';
import {mocks} from './LoginForm.mock';
import React from 'react';
import LoginForm from '../components/LoginForm'; 


Enzyme.configure({ adapter: new Adapter() }); 


describe('Login form testing', () => {
  test('check that initial state is blank with loading false', () => {
    const setEmailOnLogin = mocks.setEmailOnLogIn;
    const wrapper = mount(
      <StateContext.Provider value={{ setEmailOnLogin }}>
        <LoginForm />
      </StateContext.Provider>
    );
    wrapper.instance();
    expect(wrapper.state()).toEqual(mocks.initialState);
  });

  test('should set state to authentication failed on Login Fail state', () => {
    const setEmailOnLogin = mocks.setEmailOnLogIn;
    const wrapper = mount(
      <StateContext.Provider value={{ setEmailOnLogin }}>
        <LoginForm />
      </StateContext.Provider>);
    
    const wrapped = wrapper.instance()
    wrapped.setState(mocks.loadWithErrorState);
    wrapped.onLoginFail();
    expect(wrapper.state()).toEqual(mocks.authFailedState);
  
  });

  test('unit test should clear login details on Login success', () => {
    const setEmailOnLogin = mocks.setEmailOnLogIn;
    const wrapper = mount(
      <StateContext.Provider value={{ setEmailOnLogin }}>
        <LoginForm />
      </StateContext.Provider>);
    const wrapped = wrapper.instance();
    Actions.main = mocks.main;
    wrapped.setState(mocks.fakeUserLoadingState);
    wrapped.onLoginSuccess();
    expect(wrapper.state()).toEqual(mocks.initialState)
     
  });

  test('should navigate to main on Login Success', () => {
    const setEmailOnLogin = mocks.setEmailOnLogIn;
    const wrapper = mount(
      <StateContext.Provider value={{ setEmailOnLogin }}>
        <LoginForm />
      </StateContext.Provider>
    )
    const wrapped = wrapper.instance();
    Actions.main = mocks.main;
    wrapped.onLoginSuccess();
    expect(Actions.main).toHaveBeenCalled();
  })

  // // to do list 
  test('button pressed should create a user and sign in', () => {
    const setEmailOnLogin = mocks.setEmailOnLogIn;
    const wrapper = mount(
      <StateContext.Provider value={{ setEmailOnLogin }}>
        <LoginForm />
      </StateContext.Provider>
    )
    firebase.auth = () => mocks.signIn;
    const wrapped = wrapper.instance();
    wrapped.setState(mocks.fakeUserState);
    wrapper.update()
    wrapped.onButtonPress(() => mocks.setEmailOnLogIn);
    expect(mocks.signIn.signInWithEmailAndPassword).toHaveBeenCalledWith('crazymonkey.com', '123');
  });


  test('spinner if loading', () => {
    const setEmailOnLogin = mocks.setEmailOnLogIn;
    const wrapper = mount(
      <StateContext.Provider value={{ setEmailOnLogin }}>
        <LoginForm />
      </StateContext.Provider>
    )
    const wrapped = wrapper.instance();
    wrapped.setState(mocks.loadingTrueState)
    wrapped.renderButton();
    wrapper.update()
    expect(wrapper.find('Spinner').exists()).toBe(true)
  })

  test('Button is rendered', () => {
    const setEmailOnLogin = mocks.setEmailOnLogIn;
    const wrapper = mount(
      <StateContext.Provider value={{ setEmailOnLogin }}>
        <LoginForm />
      </StateContext.Provider>
    )
    const wrapped = wrapper.instance();
    wrapped.setState({
      loading: false
    })
    wrapped.renderButton();
    wrapper.update();
    expect(wrapper.find('Button').exists()).toBe(true)
  })

  test('Check if error is rendered', () => {
    const setEmailOnLogin = mocks.setEmailOnLogIn;
    const wrapper = mount(
      <StateContext.Provider value={{ setEmailOnLogin }}>
        <LoginForm />
      </StateContext.Provider>
    )
    const wrapped = wrapper.instance();
    wrapped.setState(mocks.badResultState)
    wrapper.update()
    expect(wrapper.find('Text').at(4).props().children).toBe('bad result')
  })

});