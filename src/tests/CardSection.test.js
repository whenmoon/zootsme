/**
 * @jest-environment jsdom
 */
import React from 'react';
import { mount} from 'enzyme';
import { Text } from 'react-native';
import {CardSection} from '../components/common/CardSection'; 
import { InputField} from '../components/common/InputField';
import Enzyme from 'enzyme';
import { View } from 'react-native';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() }); 


describe('Card Section testing', () => {
  test('check if card section text children are appropriately rendered', async() => {
    const wrapper = mount(<CardSection></CardSection>);
    const props = <View>
      <Text>hello</Text>
      </View>    
    wrapper.setProps({
        children: props
    })    
    expect(wrapper.find('Text').toBe="hello"); 
  });

  test('check if card section input field children are appropriately rendered', async() => {
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