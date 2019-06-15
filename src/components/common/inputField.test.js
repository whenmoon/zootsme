/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';
import { InputField} from './InputField';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() }); 



describe('texting the input field component', () => {
  test('texting inputs into the input field', () => {
  const setState = jest.fn(email => email);

  const wrapper = shallow(<InputField
  placeholder='user@email.com'
  label="Email"
  value="123CrazyMan@gmail.com"
  onChangeText={email => setState(email)}>
  </InputField>)
  const val = wrapper.find('TextInput').props().value; 
  const label = wrapper.find('Text').props().children;
  const placeholder = wrapper.find('TextInput').props().placeholder; 
  
  expect(label).toBe('Email');
  expect(val).toBe('123CrazyMan@gmail.com');
  expect(placeholder).toBe('user@email.com');
  wrapper.find('TextInput').simulate('ChangeText','hello');
  expect(setState).toHaveBeenCalled();
  expect(setState).toHaveBeenCalledWith('hello');
  })
  
  test('check styles', ()=> {
  
  const styles = {inputStyle: {
      color: '#000',
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 18,
      lineHeight: 23,
      flex: 2
    },
    lableStyle: {
      fontSize: 18,
      paddingLeft: 20,
      flex: 1
    },
    containerStyle: {
      height: 40,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
    }
  }
  const wrapper = shallow(<InputField
    placeholder='user@email.com'
    label="Email"
    value="123CrazyMan@gmail.com"
    onChangeText={email => setState(email)}>
    </InputField>)
  expect(wrapper.find('View').props().style).toStrictEqual(styles.containerStyle); 
  expect(wrapper.find('Text').props().style).toStrictEqual(styles.lableStyle); 
  expect(wrapper.find('TextInput').props().style).toStrictEqual(styles.inputStyle); 

  
  })




})