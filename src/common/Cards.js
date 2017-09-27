import React from 'react';
import { View } from 'react-native';

const Cards = (props) => {
  return (
    <View style={styles.cardviewstyle}>
      {props.children}
    </View>
  );
};

const styles = {
  cardviewstyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};
export { Cards };
