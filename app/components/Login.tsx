import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Form, Item, Input, Button, Icon, Text } from 'native-base';
import { View } from './Themed';

const HelloWorldApp = () => {
  return fetch(`0.0.0.0`)
    .then(response => Promise.all([response, response.json()]))
    .then(([response, responseObj]) => {
      // fetching = false;
      return [response, responseObj];
    })
    .catch(err => {
      console.log('error catch search:', err.message);
      // fetching = false;
      // Choose one, depends what you need.
      return false; // If you want to ignore the error and do something in a chained .then()
      return Promise.reject(err); // If you want to handle the error in a chained .catch()
    });
};

function apiLogin(): any {
  return fetch(`0.0.0.0`)
    .then(response => Promise.all([response, response.json()]))
    .then(([response, responseObj]) => {
      // fetching = false;
      return [response, responseObj];
    })
    .catch(err => {
      console.log('error catch search:', err.message);
      // fetching = false;
      // Choose one, depends what you need.
      return false; // If you want to ignore the error and do something in a chained .then()
      return Promise.reject(err); // If you want to handle the error in a chained .catch()
    });
}

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

export default function Login(): JSX.Element {
  // state = { username = '', password = '' }
  return (
    <View>
      <Text style={styles.title}>Se Connecter</Text>
      <Form>
        <Item stackedLabel>
          <Input placeholder="Username" />
        </Item>
        <Item stackedLabel last>
          <Input placeholder="Password" />
          <Input />
        </Item>
        <Button iconLeft primary>
          <Icon name="people" />
          <Text>Connection</Text>
        </Button>
      </Form>
    </View>
  );
}
