import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Image } from 'native-base';

export default class ChatHeader extends Component {
  render() {
    return (
      <Button iconLeft transparent>
        <Icon name='arrow-back' />
        <Text>Jeanne</Text>
      </Button>
  );
  }
}