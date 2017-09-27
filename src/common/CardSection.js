import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.cardsectionstyle}>
      {props.children}
    </View>
  );
};

const styles = {
cardsectionstyle: {
  borderBottomWidth: 1,
  backgroundColor: '#FFF',
  borderColor: '#ddd',
  justifyContent: 'flex-start',
  flexDirection: 'row',
  padding: 5,
  position: 'relative',
}
};

export { CardSection };
