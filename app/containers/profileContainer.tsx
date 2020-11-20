import React, { useCallback, useEffect } from 'react';
import { Text } from 'native-base';
import { View, TouchableOpacity, BackHandler } from 'react-native';

import { connect } from 'react-redux';
import { getUserSelector } from '../reducers/user-reducer';
import logoutUser from '../actions/user/logoutuser';

import styles from './styles';

const ProfileComponent = (props: Props): JSX.Element => {
  const { navigation, isAuth, userInfo, logout } = props;

  const onLogoutClick = useCallback(() => {
    logout(userInfo.token);
  }, [logout, userInfo]);
  // const navLogin = () => navigation.navigate('Login');
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
    if (!isAuth) navigation.navigate('Login');
  }, [isAuth, navigation]);

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.defaultElem, ...styles.centerElem }}>
        {userInfo.name}
      </Text>
      <Text style={{ ...styles.defaultElem, ...styles.centerElem }}>
        {userInfo.email}
      </Text>
      <Text style={{ ...styles.defaultElem, ...styles.centerElem }}>
        {userInfo.pass}
      </Text>
      <Text style={{ ...styles.defaultElem, ...styles.centerElem }}>
        {userInfo.token}
      </Text>
      <TouchableOpacity onPress={onLogoutClick}>
        <Text
          style={{
            ...styles.defaultElem,
            ...styles.centerElem,
            ...styles.title2,
          }}
        >
          Se deconnecter
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state: Record<string, unknown>) =>
  getUserSelector(state);

const mapDispatchToProps = (
  dispatch: Dispatch<IGetAllAssets | ISetAllAssets>,
) => ({
  logout: token => dispatch(logoutUser(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);
