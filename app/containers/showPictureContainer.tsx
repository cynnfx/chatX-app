import React, { useState, useEffect } from 'react';
import { Text } from 'native-base';
import { View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

import { connect } from 'react-redux';
import { getUserSelector } from '../reducers/user-reducer';

import styles from './styles';

const ShowPictureComponent = (props: Props): JSX.Element => {
  const { navigation, isAuth } = props;

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    // BackHandler.addEventListener('hardwareBackPress', () =>
    //   navigation.navigate('ListChats'),
    // );
    if (!isAuth) navigation.navigate('Login');
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, [isAuth, navigation]);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back,
              );
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
              {' '}
              Flip{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const mapStateToProps = (state: Record<string, unknown>) =>
  getUserSelector(state);

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShowPictureComponent);
