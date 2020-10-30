import * as React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Form,
  Item,
  Input,
  Label,
  Button,
  Icon,
  Text,
} from 'native-base';
import { View } from '../components/Themed';

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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default function TabAuthScreen(): JSX.Element {
  return (
    <Container style={styles.container}>
      <Text style={styles.title}>Se Connecter</Text>
      <Form>
        <Item stackedLabel>
          <Label>Username</Label>
          <Input />
        </Item>
        <Item stackedLabel last>
          <Label>Password</Label>
          <Input />
        </Item>
        <Button iconLeft primary>
          <Icon name="people" />
          <Text>Connection</Text>
        </Button>
      </Form>

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <Text style={styles.title}>Creer un compte</Text>
      <Form>
        <Item stackedLabel>
          <Label>Username</Label>
          <Input />
        </Item>
        <Item stackedLabel last>
          <Label>Password</Label>
          <Input />
        </Item>
        <Item stackedLabel last>
          <Label>Password again</Label>
          <Input />
        </Item>
        <Button iconLeft info>
          <Icon name="people" />
          <Text>S&apos;enregistrer</Text>
        </Button>
      </Form>
    </Container>
  );
}
