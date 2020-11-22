import React, { useState, useEffect } from 'react';
import { Text } from 'native-base';
import { View, BackHandler } from 'react-native';

import { connect } from 'react-redux';
import * as Location from 'expo-location';
import { getUserSelector } from '../reducers/user-reducer';

import styles from './styles';

const ShowComponent = (props: Props): JSX.Element => {
  const { navigation, isAuth } = props;

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      const locationtmp = await Location.getCurrentPositionAsync({});
      setLocation(locationtmp);
    })();
  }, []);

  let position = <Text>Calcul de la position..</Text>;
  if (errorMsg) {
    position = (
      <View>
        <Text>{errorMsg}</Text>
      </View>
    );
  } else if (location) {
    position = (
      <View>
        <Text>longitude: {location.coords.longitude}</Text>
        <Text>latitude: {location.coords.latitude}</Text>
        <Text>vitesse: {location.coords.speed}</Text>
        <Text>altitude: {location.coords.altitude}</Text>
        <Text />
        <Text>{JSON.stringify(location)}</Text>
      </View>
    );
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () =>
      navigation.navigate('ListChats'),
    );
    if (!isAuth) navigation.navigate('Login');
  }, [isAuth, navigation]);

  return (
    <View style={styles.container}>
      <Text>{'Juantu suce <3'}</Text>
      <Text>Position:</Text>
      <Text />
      {position}
    </View>
  );
};

const mapStateToProps = (state: Record<string, unknown>) =>
  getUserSelector(state);

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ShowComponent);
