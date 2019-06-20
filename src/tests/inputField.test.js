/**
 * @jest-environment jsdom
 */

import {mocks} from './inputField.mocks'
import { InputField} from '../components/common/InputField';
import { shallow } from 'enzyme';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() }); 


/* unit tests */

describe('texting the input field component', () => {
  test('checks if text changes on input', () => {
    const setState = jest.fn(email => email);
    const wrapper = shallow(<InputField
      placeholder={mocks.placeholder}
      label={mocks.label}
      value={mocks.value}
      onChangeText={email => setState(email)}>
    </InputField>)
    wrapper.find('TextInput').simulate('ChangeText','hello');
    expect(setState).toHaveBeenCalled();
    expect(setState).toHaveBeenCalledWith('hello');
  })
  
  




})