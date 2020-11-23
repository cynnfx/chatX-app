import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  // DefaultTheme,
  // DarkTheme,
} from '@react-navigation/native';

import LoginComponent from '../containers/loginContainer';
import RegisterComponent from '../containers/registerContainer';
import MainNav from './mainNav';

const headerOpts = (title: string) => ({
  // headerShown: false,
  title,
  headerLeft: null,
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

const Stack = createStackNavigator();

const MainStack = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={headerOpts('Se Connecter')}
          component={LoginComponent}
        />
        <Stack.Screen
          name="Register"
          options={headerOpts("S'inscrire")}
          component={RegisterComponent}
        />
        <Stack.Screen
          name="withauth"
          options={headerOpts('ChatX')}
          component={MainNav}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
