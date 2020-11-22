import React, { useState, useCallback, useEffect } from 'react';
import { Form, Item, Input, Button, Icon, Text } from 'native-base';
import { View, TouchableOpacity, Alert, BackHandler } from 'react-native';

import { connect } from 'react-redux';
import { getUserSelector } from '../reducers/user-reducer';
// import logUser from '../actions/user/loguser';
// import resetErr from '../actions/user/reseterr';

import styles from './styles';

const ChatComponent = (props: Props): JSX.Element => {
  const { navigation, resetError, login, isAuth, error } = props;

  // const onLoginClick = useCallback(() => {
  //   login(mail, password);
  // }, [login, mail, password]);
  //
  // const navRegister = () => {
  //   resetError();
  //   navigation.navigate('Register');
  // };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () =>
      navigation.navigate('ListChats'),
    );
    if (!isAuth) navigation.navigate('Login');
  }, [isAuth, navigation]);

  return (
    <View style={styles.container}>
      <Text>{'Juantu suce <3'}</Text>
    </View>
  );
};

const mapStateToProps = (state: Record<string, unknown>) =>
  getUserSelector(state);

const mapDispatchToProps = (
  dispatch: Dispatch<IGetAllAssets | ISetAllAssets>,
) => ({
  // login: (email, password) => dispatch(logUser(email, password)),
  // resetError: () => dispatch(resetErr()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatComponent);
