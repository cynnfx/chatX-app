import React, { useCallback, useEffect, useState } from 'react';
import { Text, Input, Button, Form, Item, Icon } from 'native-base';
import {
  View,
  BackHandler,
  FlatList,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';

import { connect } from 'react-redux';
import { getUserSelector } from '../reducers/user-reducer';
import joinRoom from '../actions/room/joinroom';
import getRoomList from '../actions/room/getroomlist';
import styles from './styles';

const ListItem = ({ title, roomId, content, userInfo, navigation }) => (
  <TouchableHighlight
    onPress={() =>
      navigation.navigate('Chat', { roomId, userInfo, navigation })
    }
  >
    <View style={styles.chatItemView}>
      <Text style={styles.chatItemTitle}>{title}</Text>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 10 }}
      >
        <Text style={styles.chatItemSubTitle}>{content.length} </Text>
        <Icon active name="paper" />
      </View>
    </View>
  </TouchableHighlight>
);

const ListChatComponent = (props: Props): JSX.Element => {
  const { navigation, isAuth, userInfo, join, getRooms, rooms } = props;
  const [newRoomName, setnewRoomName] = useState('');

  const onCreateClick = useCallback(() => {
    join(
      `${Math.random().toString(36).substr(2, 9)}`,
      userInfo.token,
      newRoomName,
    );
  }, [join, userInfo, newRoomName]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
    if (!isAuth) navigation.navigate('Login');
    getRooms(userInfo.token);
    const interval = setInterval(() => {
      getRooms(userInfo.token);
    }, 1000);
    return () => clearInterval(interval);
  }, [getRooms, isAuth, userInfo, navigation]);

  const renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      roomId={item.game_id}
      content={item.game_id}
      userInfo={userInfo}
      navigation={navigation}
    />
  );

  return (
    <View style={styles.container}>
      <Form>
        <View style={{ ...styles.goToChatView }}>
          <Item
            style={{ ...styles.defaultElem, ...styles.defaultInput }}
            stackedLabel
          >
            <Input
              style={{ fontStyle: 'italic' }}
              placeholder="Rejoindre une Conversation"
              onChangeText={str => setnewRoomName(str)}
            />
          </Item>
          <Icon
            active
            name="arrow-forward"
            style={{ color: 'black' }}
            onPress={onCreateClick}
          />
        </View>
      </Form>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={rooms}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </SafeAreaView>
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
  getRooms: token => dispatch(getRoomList(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListChatComponent);
