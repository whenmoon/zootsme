import {StateContext} from '../containers/State';
import { mount, render } from 'enzyme';
import React from 'react';
import LoginForm from '../components/LoginForm'; 
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';


Enzyme.configure({ adapter: new Adapter() }); 

export const mocks = {
  
  wrapper: mount(
    <StateContext.Provider value={{ setEmailOnLogin }}>
      <LoginForm />
    </StateContext.Provider>
  ),
  main: jest.fn(),
  setEmailOnLogin: jest.fn(),
  signIn: {
    signInWithEmailAndPassword: jest.fn().mockImplementation((email, password) => new Promise((_, reject) => reject())),
    createUserWithEmailAndPassword: jest.fn().mockImplementation((email, password) => new Promise((resolve, reject) => {}))
  }





}

const setEmailOnLogin = jest.fn()
