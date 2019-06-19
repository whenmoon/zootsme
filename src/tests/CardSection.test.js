/**
 * @jest-environment jsdom
 */
import React from 'react';
import { mount, shallow } from 'enzyme';
import { Text } from 'react-native';
import {CardSection} from '../components/common/CardSection'; 
import { InputField} from '../components/common/InputField';
import Enzyme from 'enzyme';
import { View } from 'react-native';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() }); 

const setState = ({email})=> jest.fn((email) => {});

describe('Component tested with airbnb enzyme', () => {
  test('card section unit test', () => {
    const wrapper = mount(<CardSection></CardSection>);

    const props = <View>
      <Text>hello</Text>
      </View>
     
    wrapper.setProps({
        children: props
    })    
    expect(wrapper.find('Text').toBe="hello");
    
  });

  test('card section integration test', () => {
    const wrapper = mount(<CardSection></CardSection>);
    const setState = jest.fn(email => email);
  
    const props = <InputField
    placeholder='user@email.com'
    label="Email"
    value="123CrazyMan@gmail.com"
    onChangeText={email => setState(email)}
    />;

    wrapper.setProps({
      children: props
    })  
    
    expect(wrapper.find('InputField').children().find('Text').at(0).props().children).toBe('Email');
    expect(wrapper.find('InputField').children().find('TextInput').at(0).props().value).toBe('123CrazyMan@gmail.com');
  });


});