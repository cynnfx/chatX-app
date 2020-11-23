import React, { useState, useEffect } from 'react';
import { List, Content, Textarea, Button, Icon } from 'native-base';
import { View, BackHandler, LogBox } from 'react-native';
import BubbleChat from '../components/BubbleChat';
import { getRoomRequest } from '../services/http-requests';
import styles from './styles';

LogBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);
const ChatComponent = (props: Props): JSX.Element => {
  const {
    route: {
      params: { navigation, userInfo, roomId },
    },
  } = props;
  const [message, setMessage] = useState('');

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () =>
      navigation.navigate('ListChats'),
    );
    getRoomRequest(roomId, 0, userInfo.token, '')
      .then(res => {
        setMessage(res.data.data.posts);
      })
      .catch(err => err);
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
          <Textarea rowSpan={2} bordered placeholder="Textarea" />
        </Content>
        <Button transparent style={{ alignSelf: 'center' }}>
          <Icon name="send" />
        </Button>
      </View>
    </View>
  );
};

export default ChatComponent;
