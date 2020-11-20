import React, { useState, useCallback, useEffect } from 'react';
import { Form, Item, Input, Button, Icon, Text } from 'native-base';
import { View, TouchableOpacity, BackHandler } from 'react-native';

import { connect } from 'react-redux';
import { getUserSelector } from '../reducers/user-reducer';
import regUser from '../actions/user/reguser';

import styles from './styles';

const RegisterComponent = (props: Props): JSX.Element => {
  const { navigation, register, isAuth } = props;
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginClick = useCallback(() => {
    register(name, mail, password);
  }, [register, name, mail, password]);

  const navLogin = () => navigation.navigate('Login');

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
    if (isAuth) navigation.navigate('Profile');
  }, [isAuth, navigation]);

  return (
    <View style={styles.container}>
      <Form>
        <Item
          style={{ ...styles.defaultElem, ...styles.defaultInput }}
          stackedLabel
        >
          <Input placeholder="Name" onChangeText={str => setName(str)} />
        </Item>
        <Item
          style={{ ...styles.defaultElem, ...styles.defaultInput }}
          stackedLabel
        >
          <Input placeholder="Email" onChangeText={str => setMail(str)} />
        </Item>
        <Item style={styles.defaultElem} stackedLabel last>
          <Input
            placeholder="Password"
            secureTextEntry
            onChangeText={str => setPassword(str)}
          />
        </Item>
        <Button
          style={{ ...styles.defaultElem, ...styles.centerElem }}
          iconLeft
          success
          onPress={onLoginClick}
        >
          <Icon name="people" />
          <Text>inscription</Text>
        </Button>
        <TouchableOpacity onPress={navLogin}>
          <Text style={styles.centerElem}>Ou</Text>
          <Text
            style={{
              ...styles.defaultElem,
              ...styles.centerElem,
              ...styles.title2,
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
  // login: (email, password) => dispatch(logUser(email, password)),
  register: (name, email, password) => dispatch(regUser(name, email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);
