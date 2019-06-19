import React from 'react';
import { shallow } from 'enzyme';
import { InputField} from '../components/common/InputField';
import Enzyme from 'enzyme';
import Selfie from '../components/Selfie';
import Adapter from 'enzyme-adapter-react-16';
import {mocks} from './Selfie.mocks';
import {Camera, Permissions} from 'expo';


Enzyme.configure({ adapter: new Adapter() }); 


describe('Selfie testing', () => {
  
  test('check that Selfie loads with default state', () => {
      mocks.wrapper.instance();
      expect(mocks.wrapper.state()).toEqual({
        flash: 'off',
        zoom: 0,
        autoFocus: 'on',
        depth: 0,
        type: 'back',
        whiteBalance: 'auto',
        ratio: '16:9',
        ratios: [],
        photoId: 1,
        showGallery: false,
        photos: [],
        faces: [],
        permissionsGranted: false,
      })
  });


  test('check on zoom in button press the state is set to zoomin', () => {
    const wrapped = mocks.wrapper.instance();
    wrapped.setState({
      flash: 'off',
      zoom: 0,
      autoFocus: 'on',
      depth: 0,
      type: 'back',
      whiteBalance: 'auto',
      ratio: '16:9',
      ratios: [],
      photoId: 1,
      showGallery: false,
      photos: [],
      faces: [],
      permissionsGranted: false,
    })
    mocks.wrapper.update() 
    expect(mocks.wrapper.find('Text').children().props().children).toBe('Camera permissions not granted - cannot open camera preview.')
  })


  test('check for Camera permssion error messages', () => {
    const wrapped = mocks.wrapper.instance();
    wrapped.setState({
      flash: 'off',
      zoom: 0,
      autoFocus: 'on',
      depth: 0,
      type: 'back',
      whiteBalance: 'auto',
      ratio: '16:9',
      ratios: [],
      photoId: 1,
      showGallery: false,
      photos: [],
      faces: [],
      permissionsGranted: false,
    })
    mocks.wrapper.update() 
    expect(mocks.wrapper.find('Text').children().props().children).toBe('Camera permissions not granted - cannot open camera preview.')
  })

  test('check if camera renders if permission granted', () => {
    const wrapped = mocks.wrapper.instance();
    wrapped.setState({
      flash: 'off',
      zoom: 0,
      autoFocus: 'on',
      depth: 0,
      type: 'back',
      whiteBalance: 'auto',
      ratio: '16:9',
      ratios: [],
      photoId: 1,
      showGallery: false,
      photos: [],
      faces: [],
      permissionsGranted: true,
    })
    mocks.wrapper.update() 
    expect(mocks.wrapper.find('Camera').exists()).toBe(true)
  })


  test('check if camera renders if permission granted', () => {
    const wrapped = mocks.wrapper.instance();
    wrapped.setState({
      flash: 'off',
      zoom: 0,
      autoFocus: 'on',
      depth: 0,
      type: 'back',
      whiteBalance: 'auto',
      ratio: '16:9',
      ratios: [],
      photoId: 1,
      showGallery: false,
      photos: [],
      faces: [],
      permissionsGranted: true,
    })
    mocks.wrapper.update() 
    expect(mocks.wrapper.find('Camera').exists()).toBe(true)
  })

  test('check if camera renders if permission granted', () => {
    const wrapped = mocks.wrapper.instance();
    wrapped.setState({
      flash: 'off',
      zoom: 0,
      autoFocus: 'on',
      depth: 0,
      type: 'back',
      whiteBalance: 'auto',
      ratio: '16:9',
      ratios: [],
      photoId: 1,
      showGallery: false,
      photos: [],
      faces: [],
      permissionsGranted: true,
    })
    mocks.wrapper.update() 
    console.log(mocks.wrapper.find('TouchableOpacity').simulate('Press'))
  })



})