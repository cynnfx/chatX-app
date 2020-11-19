import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
// import { ColorSchemeName } from 'react-native';
// import NotFoundScreen from '../screens/NotFoundScreen';
// import { RootStackParamList } from '../types';
// import BottomTabNavigator from './BottomTabNavigator';
// import LinkingConfiguration from './LinkingConfiguration';

import LoginComponent from '../containers/loginContainer';
import RegisterComponent from '../containers/registerContainer';

// // A root stack navigator is often used for displaying modals on top of all other content
// // Read more here: https://reactnavigation.org/docs/modal
// const Stack = createStackNavigator<RootStackParamList>();
//
// function RootNavigator() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Root" component={BottomTabNavigator} />
//       <Stack.Screen
//         name="NotFound"
//         component={NotFoundScreen}
//         options={{ title: 'Oops!' }}
//       />
//     </Stack.Navigator>
//   );
// }
//
// // If you are not familiar with React Navigation, we recommend going through the
// // "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
// export default function Navigation({
//   colorScheme,
// }: {
//   colorScheme: ColorSchemeName;
// }): JSX.Element {
//   return (
//     <NavigationContainer
//       linking={LinkingConfiguration}
//       theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
//     >
//       <RootNavigator />
//     </NavigationContainer>
//   );
// }

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
