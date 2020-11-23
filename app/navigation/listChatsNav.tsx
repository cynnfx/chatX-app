import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListChatComponent from '../containers/listChatsContainer';
import ChatComponent from '../containers/chatContainer';

const Stack = createStackNavigator();

const ListChatsNav = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListChats"
        options={{ headerShown: false }}
        component={ListChatComponent}
      />
      <Stack.Screen
        name="Chat"
        options={{ headerShown: false }}
        component={ChatComponent}
      />
    </Stack.Navigator>
  );
};
export default ListChatsNav;
