import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';
import Separator from '../components/Separator';
import Login from '../components/Login';
import Register from '../components/Register';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default function TabAuthScreen(): JSX.Element {
  return (
    <Container style={styles.container}>
      <Login />

      <Separator />

      <Register />
    </Container>
  );
}
