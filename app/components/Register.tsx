import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Form, Item, Input, Button, Icon, Text } from 'native-base';
import { View } from './Themed';

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

export default function Register(): JSX.Element {
  return (
    <View>
      <Text style={styles.title}>Creer un compte</Text>
      <Form>
        <Item stackedLabel>
          <Input placeholder="Username" />
        </Item>
        <Item stackedLabel>
          <Input placeholder="Password" />
        </Item>
        <Item stackedLabel last>
          <Input placeholder="Password again" />
        </Item>
        <Button iconLeft info>
          <Icon name="people" />
          <Text>S&apos;enregistrer</Text>
        </Button>
      </Form>
    </View>
  );
}
