/**
 * @jest-environment jsdom
 */
import React from 'react';
import { mount, shallow } from 'enzyme';
import { Text } from 'react-native';
import {CardSection} from './CardSection'; 
import { InputField} from './InputField';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() }); 

const setState = ({email})=> jest.fn((email) => {});

describe('Component tested with airbnb enzyme', () => {
  test('App mount with enzyme', () => {
    const wrapper = shallow(<CardSection><InputField
      placeholder='user@email.com'
      label="Email"
      value="123CrazyMan@gmail.com"
      onChangeText={email => setState({email})}
      /></CardSection>);

    expect(wrapper.find(InputField).to.have.label="Email");
    
  });
});