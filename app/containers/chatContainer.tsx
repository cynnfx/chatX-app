import React, { useState, useEffect, useCallback } from 'react';
import { List, Content, Button, Icon, Item, Input } from 'native-base';
import { View, BackHandler, LogBox } from 'react-native';
import BubbleChat from '../components/BubbleChat';
import { getRoomRequest, postPostRequest } from '../services/http-requests';

import styles from './styles';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const ChatComponent = (props: Props): JSX.Element => {
  const {
    route: {
      params: { navigation, userInfo, roomId },
    },
  } = props;
  const [message, setMessage] = useState('');
  const [userInput, setUserInput] = useState('');

  const onSendClick = useCallback(() => {
    postPostRequest(userInput, roomId, userInfo.token)
      .then(res => {
        setMessage(res.data.data.posts);
      })
      .catch(err => err);
    setUserInput('');
  }, [userInput, userInfo, roomId, setUserInput]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () =>
      navigation.navigate('ListChats'),
    );
    getRoomRequest(roomId, 0, userInfo.token, '')
      .then(res => {
        setMessage(res.data.data.posts);
      })
      .catch(err => err);
    const interval = setInterval(() => {
      getRoomRequest(roomId, 0, userInfo.token, '')
        .then(res => {
          setMessage(res.data.data.posts);
        })
        .catch(err => err);
    }, 1000);
    return () => clearInterval(interval);
  }, [navigation, userInfo, roomId, setMessage]);

  let listChat = null;
  if (message !== []) {
    listChat = (
      <List
        dataArray={message}
        keyExtractor={item => item.id.toString()}
        renderRow={msg => (
          <BubbleChat
            mine={userInfo.name === msg.username}
            sender={msg.username}
            text={msg.post}
          />
        )}
      />
    );
  }
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: 'column' }}>{listChat}</View>
      <View style={{ flex: 0.15, flexDirection: 'row', alignSelf: 'center' }}>
        <Content padder>
          <Item>
            <Input
              value={userInput}
              placeholder="..."
              onChangeText={str => setUserInput(str)}
            />
            <Button primary onPress={onSendClick}>
              <Icon name="send" />
            </Button>
          </Item>
        </Content>
      </View>
    </View>
  );
};

export default ChatComponent;
