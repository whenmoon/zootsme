import React from 'react';
import {mocks} from './Selfie.mocks';
import {StateContext} from '../containers/State';
import { mount, render } from 'enzyme';
import Selfie from '../components/Selfie'; 
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';


Enzyme.configure({ adapter: new Adapter() });


describe('Selfie testing', () => {
  
  test('check that Selfie loads with default state', () => {
    const newPhoto = mocks.addPhoto;
    const wrapper = mount(
      <StateContext.Provider value={newPhoto}>
          <Selfie/>
      </StateContext.Provider>
    )
    wrapper.instance();
    expect(wrapper.state()).toEqual(mocks.statePermissionNotGranted)
  });


  test('check on zoom in button press the state is set to zoomin', () => {
    const newPhoto = mocks.addPhoto;
    const wrapper = mount(
      <StateContext.Provider value={newPhoto}>
          <Selfie/>
      </StateContext.Provider>
    )
    const wrapped = wrapper.instance();
    wrapped.setState(mocks.statePermissionNotGranted);
    wrapper.update() 
    expect(wrapper.find('Text').children().props().children).toBe('Camera permissions not granted - cannot open camera preview.')
  })


  test('check for Camera permssion error messages', () => {
    const newPhoto = mocks.addPhoto;
    const wrapper = mount(
      <StateContext.Provider value={newPhoto}>
          <Selfie/>
      </StateContext.Provider>
    )
    const wrapped = wrapper.instance();
    wrapped.setState(mocks.statePermissionNotGranted);
    wrapper.update() 
    expect(wrapper.find('Text').children().props().children).toBe('Camera permissions not granted - cannot open camera preview.')
  })

  test('check if camera renders if permission granted', () => {
    const newPhoto = mocks.addPhoto;
    const wrapper = mount(
      <StateContext.Provider value={newPhoto}>
          <Selfie/>
      </StateContext.Provider>
    )
    const wrapped = wrapper.instance();
    wrapped.setState(mocks.statePermissionGranted)
    wrapper.update() 
    expect(wrapper.find('Camera').exists()).toBe(true)
  })


  



})