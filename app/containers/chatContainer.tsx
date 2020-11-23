import React, { useState, useCallback, useEffect } from 'react';
import { Form, List, Content, Textarea, Button, Text, Icon } from 'native-base';
import { View, TouchableOpacity, Alert, BackHandler } from 'react-native';
import PureCompMessage from '../components/chatComponents/PureCompMessage'
import { getRoomRequest } from '../services/http-requests';
import axios from 'axios';
import config from '../config';

import { connect } from 'react-redux';
import { getUserSelector } from '../reducers/user-reducer';
import styles from './styles';

const ChatComponent = (props: Props): JSX.Element => {
  const { navigation, userInfo, resetError, login, isAuth, error } = props;
  const [message, setMessage] = useState('');
  const messages = [
    {
        username: 'Jeanne',
        message: 'Salut Jean',
        image: 'https://picsum.photos/seed/01/200/300',
        mine: false
    },
    {
        username: 'Jean',
        message: 'Salut Jeanne',
        image: 'https://i.imgur.com/SCI3502.jpg',
        mine: true
    },
    {
        username: 'Jeanne',
        message: 'Ca va bien ?',
        image: 'https://picsum.photos/seed/01/200/300',
        mine: false
    },
    {
        username: 'Jean',
        message: 'Très bien, tu peux me sucer ?',
        image: 'https://i.imgur.com/SCI3502.jpg',
        mine: true
    },
    {
        username: 'Jeanne',
        message: 'Demande a ta femme',
        image: 'https://picsum.photos/seed/01/200/300',
        mine: false
    },
    {
        username: 'Jean',
        message: 'Elle suce mal',
        image: 'https://i.imgur.com/SCI3502.jpg',
        mine: true
    },
    {
        username: 'Jeanne',
        message: 'Bon bah j\'arrive alors',
        image: 'https://picsum.photos/seed/01/200/300',
        mine: false
    },
    {
        username: 'Jean',
        message: 'Trop bien, je commence à la laver',
        image: 'https://i.imgur.com/SCI3502.jpg',
        mine: true
    },
    {
        username: 'Jeanne',
        message: 'Sllluuuurrrrp',
        image: 'https://picsum.photos/seed/01/200/300',
        mine: false
    },
    {
        username: 'Jean',
        message: 'Baaalaaaa',
        image: 'https://i.imgur.com/SCI3502.jpg',
        mine: true
    },
  ]


  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () =>
      navigation.navigate('ListChats'),
    );
    axios
    .get(
      `${config.API_URL}chat/get?game_id=chat4all&last_update=0&room_name=chat4all`,
      {
        headers: {
          Authorization: `: ${userInfo.token}`,
        },
      },
    )
    .then(res => {
      setMessage(res.data.data.posts)
      console.log(res.data.data.posts)
    })
    .catch(err => err);
    if (!isAuth) navigation.navigate('Login');
  }, [isAuth, navigation, userInfo, setMessage]);


  return (
    <View style={styles.container}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <List
            dataArray={messages}
            keyExtractor={(item, index) => index.toString()}
            renderRow={(message) =>
                <PureCompMessage message={message}/>
        }>
        </List>
      </View>
      <View style={{flex: 0.15, flexDirection: 'row', alignSelf:'center'}}>
        <Content padder>
          <Textarea rowSpan={2} bordered placeholder="Textarea"  />
        </Content>
        <Button transparent style={{alignSelf:'center'}}>
            <Icon name='send' />
        </Button>
      </View>
    </View>
  );
  };

const mapStateToProps = (state: Record<string, unknown>) =>
  getUserSelector(state);

const mapDispatchToProps = (
  dispatch: Dispatch<IGetAllAssets | ISetAllAssets>,
) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatComponent);
