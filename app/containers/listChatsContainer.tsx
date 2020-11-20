import React, { useCallback, useEffect } from 'react';
import { Text, Input, Button } from 'native-base';
import { View, BackHandler } from 'react-native';

import { connect } from 'react-redux';
import { getUserSelector } from '../reducers/user-reducer';
import joinRoom from '../actions/room/joinroom';

import styles from './styles';

const ListChatComponent = (props: Props): JSX.Element => {
  const { navigation, isAuth, userInfo, join } = props;
  const [roomId, setRoomId] = useState('');

  const onJoinClick = useCallback(() => {
    join(roomId, userInfo.token);
  }, [join, roomId, userInfo]);

  // const navLogin = () => navigation.navigate('Login');

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
    if (!isAuth) navigation.navigate('Login');
  }, [isAuth, navigation]);

  return (
    <View style={styles.container}>
      <View>
        <Text>Create or join Conversations</Text>
        <Input
          placeholder="ID Conversation"
          onChangeText={str => setRoomId(str)}
        />
        <Button
          style={{ ...styles.defaultElem, ...styles.centerElem }}
          primary
          onPress={onJoinClick}
        >
          <Text>Go</Text>
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
  join: (roomId, token) => dispatch(joinRoom(roomId, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListChatComponent);
