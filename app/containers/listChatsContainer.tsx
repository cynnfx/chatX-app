import React, { useCallback, useEffect, useState } from 'react';
import { Text, Input, Button, Form, Item } from 'native-base';
import { View, BackHandler } from 'react-native';

import { connect } from 'react-redux';
import { getUserSelector } from '../reducers/user-reducer';
import joinRoom from '../actions/room/joinroom';

import styles from './styles';

const ListChatComponent = (props: Props): JSX.Element => {
  const { navigation, isAuth, userInfo, join } = props;
  // const [roomId, setRoomId] = useState(
  //   `_${Math.random().toString(36).substr(2, 9)}`,
  // );
  // const newRoomId = useState(`_${Math.random().toString(36).substr(2, 9)}`);
  const [newRoomName, setnewRoomName] = useState('');

  const onCreateClick = useCallback(() => {
    join(
      `${Math.random().toString(36).substr(2, 9)}`,
      userInfo.token,
      newRoomName,
    );
  }, [join, userInfo, newRoomName]);

  // const navLogin = () => navigation.navigate('Login');

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
    if (!isAuth) navigation.navigate('Login');
  }, [isAuth, navigation]);

  return (
    <View style={styles.container}>
      <Form>
        <Text style={{ ...styles.defaultElem, ...styles.centerElem }}>
          Create or join Conversations
        </Text>

        <Item
          style={{ ...styles.defaultElem, ...styles.defaultInput }}
          stackedLabel
        >
          <Input
            placeholder="Nom Conversation"
            onChangeText={str => setnewRoomName(str)}
          />
        </Item>

        <Button
          style={{ ...styles.defaultElem, ...styles.centerElem }}
          primary
          onPress={onCreateClick}
        >
          <Text>Go</Text>
        </Button>
      </Form>
    </View>
  );
};

const mapStateToProps = (state: Record<string, unknown>) =>
  getUserSelector(state);

const mapDispatchToProps = (
  dispatch: Dispatch<IGetAllAssets | ISetAllAssets>,
) => ({
  join: (roomId, token, roomName) =>
    dispatch(joinRoom(roomId, token, roomName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListChatComponent);
