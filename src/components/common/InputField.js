import React from 'react'
import {TextInput, View, Text} from 'react-native';

const InputField = ({label, value, onChangeText, placeholder, secureTextEntry
}) => {
  const { inputStyle, containerStyle, lableStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={lableStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
      />
    </View>
  )

};

const styles = {
  inputStyle: {
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

export {InputField};
