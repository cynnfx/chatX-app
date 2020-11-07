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
import BubbleChat from '../components/BubbleChat';

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
        <BubbleChat
          mine
          sender="moi"
          text="Slt ca va?"
          image={{ uri: 'https://i.imgur.com/SCI3502.jpg' }}
        />
        <BubbleChat
          mine={false}
          sender="juanLaBiatch"
          text="m Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently "
          image={{ uri: 'https://picsum.photos/seed/01/200/300' }}
        />
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
