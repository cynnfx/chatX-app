import React, { useState, useCallback } from 'react';
import { Form, Item, Input, Button, Icon, Text } from 'native-base';
import { View } from 'react-native';

import { connect } from 'react-redux';
import { getUserSelector } from '../reducers/user-reducer';
import logUser from '../actions/user/loguser';
// import LoginComponent from '../components/login-component';
// import updateCred from '../actions/user/updatecred';

const LoginComponent = (props: Props): JSX.Element => {
  const { login } = props;
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginClick = useCallback(() => {
    login(mail, password);
  }, [login, mail, password]);

  return (
    <View>
      <Form>
        <Text>Se Connecter</Text>
        <Item stackedLabel>
          <Input placeholder="Email" onChangeText={str => setMail(str)} />
        </Item>
        <Item stackedLabel last>
          <Input
            placeholder="Password"
            onChangeText={str => setPassword(str)}
          />
        </Item>
        <Button iconLeft primary onPress={onLoginClick}>
          <Icon name="people" />
          <Text>Login</Text>
        </Button>
      </Form>
    </View>
  );
};

const mapStateToProps = (state: Record<string, unknown>) =>
  getUserSelector(state);

const mapDispatchToProps = (
  dispatch: Dispatch<IGetAllAssets | ISetAllAssets>,
) => ({
  login: (email, password) => dispatch(logUser(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
