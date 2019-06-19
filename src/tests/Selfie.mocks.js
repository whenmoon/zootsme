import {StateContext} from '../containers/State';
import { mount, render } from 'enzyme';
import React from 'react';
import Selfie from '../components/Selfie'; 
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';


Enzyme.configure({ adapter: new Adapter() });
const newPhoto = {addPhoto: jest.fn()} 
export const mocks = {

  wrapper: mount(
    <StateContext.Provider value={newPhoto}>
        <Selfie/>
    </StateContext.Provider>
  ),
  addPhoto: jest.fn(),
  askAsync: () => Promise.resolve('granted'),

  

}

