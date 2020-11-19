import React, { useState, useCallback } from 'react';
import { Form, Item, Input, Button, Icon, Text } from 'native-base';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { getUserSelector } from '../reducers/user-reducer';
import logUser from '../actions/user/loguser';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  centerElem: {
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  defaultElem: {
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  defaultInput: {
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const RegisterComponent = (props: Props): JSX.Element => {
  const { navigation, login } = props;
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginClick = useCallback(() => {
    login(mail, password);
  }, [login, mail, password]);

  const navLogin = () => navigation.navigate('Login');

  return (
    <View style={styles.container}>
      <Form>
        <Text
          style={{
            ...styles.defaultElem,
            ...styles.centerElem,
            ...styles.title,
          }}
        >
          S&apos;inscrire
        </Text>
        <Item
          style={{ ...styles.defaultElem, ...styles.defaultInput }}
          stackedLabel
        >
          <Input placeholder="Email" onChangeText={str => setMail(str)} />
        </Item>
        <Item style={styles.defaultElem} stackedLabel last>
          <Input
            placeholder="Password"
            onChangeText={str => setPassword(str)}
          />
        </Item>
        <Button
          style={{ ...styles.defaultElem, ...styles.centerElem }}
          iconLeft
          primary
          onPress={onLoginClick}
        >
          <Icon name="people" />
          <Text>inscription</Text>
        </Button>
        <TouchableOpacity style={styles.button} onPress={navLogin}>
          <Text style={styles.centerElem}>Ou</Text>
          <Text
            style={{
              ...styles.defaultElem,
              ...styles.centerElem,
              ...styles.title,
            }}
          >
            Se connecter
          </Text>
        </TouchableOpacity>
      </Form>
    </View>
  );
};

const mapStateToProps = (state: Record<string, unknown>) =>
  getUserSelector(state);

const mapDispatchToProps = (
  dispatch: Dispatch<IGetAllAssets | ISetAllAssets>,
) => ({
  login: (email, password) => dispatch(logUser(email, password)),
  register: (email, password) => dispatch(logUser(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);
