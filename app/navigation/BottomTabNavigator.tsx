import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabAuthScreen from '../screens/TabAuthScreen';
import TabMainScreen from '../screens/TabMainScreen';
import TabChatScreen from '../screens/TabChatScreen';
import ChatHeader from '../components/chatComponents/ChatHeader';
import {
  BottomTabParamList,
  TabOneParamList,
  TabTwoParamList,
  TabMainParamList,
  TabChatParamList,
} from '../types';

import LoginComponent from '../containers/login-container';

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="LoginComponent"
        component={LoginComponent}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabAuthStack = createStackNavigator<TabAuthParamList>();

function TabAuthNavigator() {
  return (
    <TabAuthStack.Navigator>
      <TabAuthStack.Screen
        name="TabAuthScreen"
        component={TabAuthScreen}
        options={{ headerTitle: 'Tab Auth Title' }}
      />
    </TabAuthStack.Navigator>
  );
}

const TabMainStack = createStackNavigator<TabMainParamList>();

function TabMainNavigator() {
  return (
    <TabMainStack.Navigator>
      <TabMainStack.Screen
        name="TabMainScreen"
        component={TabMainScreen}
        options={{ headerTitle: 'Conversations' }}
      />
    </TabMainStack.Navigator>
  );
}

const TabChatStack = createStackNavigator<TabChatParamList>();

function TabChatNavigator() {
  return (
    <TabChatStack.Navigator>
      <TabChatStack.Screen
        name="TabChatScreen"
        component={TabChatScreen}
        options={{ headerTitle: props => <ChatHeader {...props} /> }}
      />
    </TabChatStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator(): JSX.Element {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Authenticate"
        component={TabAuthNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Chats"
        component={TabMainNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Chat"
        component={TabChatNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
