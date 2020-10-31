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
  Alert.alert('Erreure Inscription', message, [{ text: 'OK' }], {
    cancelable: false,
  });
};

class Register extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      ndpassword: '',
      email: '',
    };
  }

  apiRegister(): void {
    const { email, password, ndpassword, username } = this.state;

    if (email && password && ndpassword && username) {
      fetch('https://dealerg.api.cynnfx.fr/user/subscribe', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          username,
        }),
      })
        .then(response => response.json())
        .then(json => {
          if (json.status === 'fail') {
            warn(json.message);
          } else {
            // warn(json.Authorization);
          }
          // else enregistrer credientiels dans redux
        })
        .catch(() => {
          warn('verifiez les informations saisies');
          // console.log(error)
        });
      // .finally(() => setLoading(false));
    }
  }

  render(): JSX.Element {
    return (
      <View>
        <Text style={styles.title}>Creer un compte</Text>
        <Form>
          <Item stackedLabel>
            <Input
              placeholder="Username"
              onChangeText={str => this.setState({ username: str })}
            />
          </Item>
          <Item stackedLabel>
            <Input
              placeholder="Email"
              onChangeText={str => this.setState({ email: str })}
            />
          </Item>
          <Item stackedLabel>
            <Input
              placeholder="Password"
              onChangeText={str => this.setState({ password: str })}
            />
          </Item>
          <Item stackedLabel last>
            <Input
              placeholder="Password again"
              onChangeText={str => this.setState({ ndpassword: str })}
            />
          </Item>
          <Button iconLeft info onPress={() => this.apiRegister()}>
            <Icon name="people" />
            <Text>S&apos;enregistrer</Text>
          </Button>
        </Form>
      </View>
    );
  }
}

export default Register;
