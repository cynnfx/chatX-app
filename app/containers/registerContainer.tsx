import React, { useState, useCallback, useEffect } from 'react';
import { Form, Item, Input, Button, Icon, Text } from 'native-base';
import { View, TouchableOpacity, Alert, BackHandler } from 'react-native';

import { connect } from 'react-redux';
import { getUserSelector } from '../reducers/user-reducer';
import regUser from '../actions/user/reguser';
import resetErr from '../actions/user/reseterr';

import styles from './styles';

const RegisterComponent = (props: Props): JSX.Element => {
  const { navigation, resetError, register, isAuth, error } = props;
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const registerAlert = () =>
    Alert.alert(
      'Erreur inscription',
      'Vérifiez les informations entrées',
      [{ text: 'OK' }],
      {
        cancelable: false,
      },
    );

  const onRegisterClick = useCallback(() => {
    register(name, mail, password);
  }, [register, name, mail, password]);

  const navLogin = () => {
    navigation.navigate('Login');
    resetError();
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
    if (isAuth) navigation.navigate('ListChats');
    if (error === 'err_register') registerAlert();
  }, [isAuth, error, navigation]);

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
            style={{ marginLeft: -15 }}
            placeholder="Password"
            secureTextEntry
            onChangeText={str => setPassword(str)}
          />
        </Item>
        <Button
          style={{ ...styles.defaultElem, ...styles.centerElem }}
          iconLeft
          success
          onPress={onRegisterClick}
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
  register: (name, email, password) => dispatch(regUser(name, email, password)),
  resetError: () => dispatch(resetErr()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);
