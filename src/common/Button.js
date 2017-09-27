import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonstyles, buttonTextstyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonstyles}>
      <Text style={buttonTextstyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {

buttonstyles: {
  flex: 1,
  alignSelf: 'stretch',
  borderRadius: 4,
  borderColor: '#000',
  borderWidth: 1,
},
buttonTextstyle: {
  fontSize: 16,
  color: '#0088ca',
  paddingTop: 10,
  paddingBottom: 10,
  alignSelf: 'center',
  fontWeight: '600'
}

};

export { Button };
