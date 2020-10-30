import * as React from 'react';
import { StyleSheet, Alert } from 'react-native';
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

const warn = (message: string) => {
  Alert.alert('Erreure Login', message, [{ text: 'OK' }], {
    cancelable: false,
  });
};

class Login extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      password: '',
      email: '',
    };
  }

  apiLogin(): void {
    const { email, password } = this.state;

    fetch('https://dealerg.api.cynnfx.fr/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(response => response.json())
      .then(json => {
        if (json.status === 'fail') {
          warn(json.message);
        } else {
          warn(json.Authorization);
        }
        // else enregistrer credientiels dans redux
      })
      .catch(() => {
        warn('Serveur non joiniable');
      });
    // .finally(() => setLoading(false));
  }

  render(): JSX.Element {
    return (
      <View>
        <Text style={styles.title}>Se Connecter</Text>
        <Form>
          <Item stackedLabel>
            <Input
              placeholder="Email"
              onChangeText={str => this.setState({ email: str })}
            />
          </Item>
          <Item stackedLabel last>
            <Input
              placeholder="Password"
              onChangeText={str => this.setState({ password: str })}
            />
          </Item>
          <Button iconLeft primary onPress={() => this.apiLogin()}>
            <Icon name="people" />
            <Text>Connection</Text>
          </Button>
        </Form>
      </View>
    );
  }
}

export default Login;
