import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from './Themed';

const styles = StyleSheet.create({
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

const Separator = (): JSX.Element => {
  return (
    <View
      style={styles.separator}
      lightColor="#eee"
      darkColor="rgba(255,255,255,0.1)"
    />
  );
};

export default Separator;
