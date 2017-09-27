import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = (props) => {
return (
  <View style={HeaderStyle.HeaderWrapper}>
    <Text>{props.HeaderText}</Text>
  </View>
);
};
const HeaderStyle = StyleSheet.create({
  HeaderWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    elevation: 4,
    backgroundColor: '#F8F8F8',
    height: 60,
    alignSelf: 'stretch',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  }
});
export { Header };
