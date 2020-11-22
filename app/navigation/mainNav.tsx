import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { ColorSchemeName } from 'react-native';
// import { connect } from 'react-redux';
// import { getUserSelector } from '../reducers/user-reducer';

import ProfileComponent from '../containers/profileContainer';
import ListChatComponent from '../containers/listChatsContainer';
import ChatComponent from '../containers/chatContainer';

const Drawer = createDrawerNavigator();

const MainNav = (): JSX.Element => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="ListChats" component={ListChatComponent} />
      <Drawer.Screen name="Profile" component={ProfileComponent} />
      <Drawer.Screen name="Chat" component={ChatComponent} />
    </Drawer.Navigator>
  );
};

// const mapStateToProps = (state: Record<string, unknown>) =>
//   getUserSelector(state);
//
// const mapDispatchToProps = (
//   dispatch: Dispatch<IGetAllAssets | ISetAllAssets>,
// ) => ({
//   // login: (email, password) => dispatch(logUser(email, password)),
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(MainNav);
export default MainNav;
