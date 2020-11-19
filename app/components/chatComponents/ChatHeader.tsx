import React, { PureComponent } from 'react';
import { Button, Icon, Text } from 'native-base';

export default class ChatHeader extends PureComponent {
  render(): JSX.Element {
    return (
      <Button iconLeft transparent>
        <Icon name="arrow-back" />
        <Text>Jeanne</Text>
      </Button>
    );
  }
}
