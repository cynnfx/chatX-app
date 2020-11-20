import React, { useState, useCallback, useEffect } from 'react';
import { Form, Item, Input, Button, Icon, Text } from 'native-base';
import { View, TouchableOpacity, BackHandler } from 'react-native';

import { connect } from 'react-redux';
import { getUserSelector } from '../reducers/user-reducer';
import logUser from '../actions/user/loguser';

import styles from './styles';

const LoginComponent = (props: Props): JSX.Element => {
  const { navigation, login, isAuth } = props;
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginClick = useCallback(() => {
    login(mail, password);
  }, [login, mail, password]);

  const navRegister = () => navigation.navigate('Register');

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
          <Text>Connection</Text>
        </Button>
        <TouchableOpacity onPress={navRegister}>
          <Text style={styles.centerElem}>Ou</Text>
          <Text
            style={{
              ...styles.defaultElem,
              ...styles.centerElem,
              ...styles.title2,
            }}
          >
            Créer un compte
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
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
