import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Container, Button, Input, Footer } from 'native-base';
import PureCompChat from '../components/chatComponents/PureCompChat';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rightElem: {
    justifyContent: 'flex-end',
  },
  leftElem: {
    justifyContent: 'flex-start',
  },
  footer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  header: {
    backgroundColor: 'transparent',
  },
  messageBox: {
    width: '90%',
    borderColor: 'white',
    backgroundColor: '#EAEAEA',
    borderWidth: 1,
    borderRadius: 90,
    marginVertical: 6,
  },
  sendBtn: {
    backgroundColor: 'white',
    marginVertical: 6,
  },
});

export default function TabChatScreen(): JSX.Element {
  return (
    <Container style={styles.container}>
      <PureCompChat />
      <Footer style={styles.footer}>
        <Button style={styles.sendBtn} transparent>
          <Icon name="image" />
        </Button>
        <Input style={styles.messageBox} multiline />
        <Button style={styles.sendBtn} transparent>
          <Icon name="send" />
        </Button>
      </Footer>
    </Container>
  );
}
