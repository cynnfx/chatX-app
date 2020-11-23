import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { ColorSchemeName } from 'react-native';
// import { connect } from 'react-redux';
// import { getUserSelector } from '../reducers/user-reducer';

import ProfileComponent from '../containers/profileContainer';
// import ListChatComponent from '../containers/listChatsContainer';
// import ChatComponent from '../containers/chatContainer';
import ShowComponent from '../containers/showContainer';
import ShowPictureComponent from '../containers/showPictureContainer';

import ListChatsNavNav from './listChatsNav';

const Drawer = createDrawerNavigator();

const MainNav = (): JSX.Element => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="ListChatsNav" component={ListChatsNavNav} />
      <Drawer.Screen name="Profile" component={ProfileComponent} />
      <Drawer.Screen name="Localisation" component={ShowComponent} />
      <Drawer.Screen name="Picture" component={ShowPictureComponent} />
    </Drawer.Navigator>
  );
};

export default MainNav;
