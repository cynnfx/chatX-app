import * as React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import {
  Text,
  Right,
  List,
  ListItem,
  Left,
  Thumbnail,
  Body,
  Icon,
} from 'native-base';
import { View } from '../components/Themed';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  log_container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  list_container: {
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

const DATA = [
  {
    username: "Main dishes",
    message: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  }
];
const ChatBox = (username: string, message: string) => {
  return (
    <ListItem avatar>
      <Left>
        <Thumbnail source={{ uri: 'https://picsum.photos/seed/01/200/300' }} />
      </Left>
      <Body>
        <Text>{username}</Text>
        <Text note>{message}</Text>
      </Body>
      <Right>
        <Text note>3:43 pm</Text>
      </Right>
    </ListItem>
  );
};

export default function TabMainScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.log_container}>
          <Image
            style={{ width: 160, height: 160, borderRadius: 400 / 2 }}
            source={{ uri: 'https://i.imgur.com/SCI3502.jpg' }}
          />
          <Text>You&apos;re name</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="add" />
            <Text style={{ color: 'grey' }}>
              &nbsp;&nbsp;&nbsp;&nbsp;start new chat
            </Text>
          </View>
        </View>
        <List>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{ uri: 'https://picsum.photos/seed/01/200/300' }}
              />
            </Left>
            <Body>
              <Text>Kumar Pratik</Text>
              <Text note>
                Doing what you like will always keep you happy . .
              </Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>

          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{ uri: 'https://picsum.photos/seed/1/200/300' }}
              />
            </Left>
            <Body>
              <Text>Kumar Pratik</Text>
              <Text note>
                Doing what you like will always keep you happy . .
              </Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>

          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{ uri: 'https://picsum.photos/seed/12/200/300' }}
              />
            </Left>
            <Body>
              <Text>Kumar Pratik</Text>
              <Text note>
                Doing what you like will always keep you happy . .
              </Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>

          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{ uri: 'https://picsum.photos/seed/13/200/300' }}
              />
            </Left>
            <Body>
              <Text>Kumar Pratik</Text>
              <Text note>
                Doing what you like will always keep you happy . .
              </Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>

          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{ uri: 'https://picsum.photos/seed/14/200/300' }}
              />
            </Left>
            <Body>
              <Text>Kumar Pratik</Text>
              <Text note>
                Doing what you like will always keep you happy . .
              </Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>

          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{ uri: 'https://picsum.photos/seed/15/200/300' }}
              />
            </Left>
            <Body>
              <Text>Kumar Pratik</Text>
              <Text note>
                Doing what you like will always keep you happy . .
              </Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>

          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{ uri: 'https://picsum.photos/seed/16/200/300' }}
              />
            </Left>
            <Body>
              <Text>Kumar Pratik</Text>
              <Text note>
                Doing what you like will always keep you happy . .
              </Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>

          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{ uri: 'https://picsum.photos/seed/17/200/300' }}
              />
            </Left>
            <Body>
              <Text>Kumar Pratik</Text>
              <Text note>
                Doing what you like will always keep you happy . .
              </Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>

          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{ uri: 'https://picsum.photos/seed/18/200/300' }}
              />
            </Left>
            <Body>
              <Text>Kumar Pratik</Text>
              <Text note>
                Doing what you like will always keep you happy . .
              </Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
        </List>
      </ScrollView>
    </View>
  );
}
