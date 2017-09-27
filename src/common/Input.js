import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { containerStyle, labelStyle, inputStyle } = Styles;
  return (
    <View style={containerStyle}>
    <Text style={labelStyle}>{label}</Text>
    <TextInput
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      autoCorrect={false}
      style={inputStyle}
      value={value}
      onChangeText={onChangeText}
    />
    </View>
  );
};

const Styles = {

  containerStyle: {
    height: 40,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 2,
    paddingLeft: 5,
    paddingRight: 5,
    lineHeight: 23,
    color: '#000',
    fontSize: 18
  },
  labelStyle: {
    fontSize: 18,
    flex: 1,
    paddingLeft: 20
  }
};

export { Input };
