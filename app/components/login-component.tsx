import React from 'react';
import { Form, Item, Input, Button, Icon, Text } from 'native-base';

import { View } from 'react-native';
// import UserT from '../types';
// import styles from './styles';

type Props = {
  userInfo: Record<string, unknown>;
  isAuth: boolean;
  isLoading: boolean;
  error: boolean;
  logUser: Function;
};

// type Props = {
//   error: boolean,
//   isLoading: boolean,
//   weatherInfo: Object,
// }

// const getErrorMessage = () => (
//   <Text style={styles.errorText}>
//     An Error occured when fetching data
//   </Text>
// );
//
// const getWeatherInfo = (weatherInfo) => {
//   const { summary, temperature } = weatherInfo;
//   const info = temperature
//     ? `${Math.floor(temperature)} deg, ${summary}`
//     : 'No Weather Info Available. Make sure you provided a valid API key in the `config.js` file.';
//
//   return (
//     <Text style={styles.weatherInfoText}>
//       {info}
//     </Text>
//   );
// };

const LoginComponent = (props: Props): JSX.Element => {
  const { userInfo, isAuth, isLoading, error, logUser, updateCred } = props;
  // const hasWeatherData = Object.keys(weatherInfo).length;
  return (
    <View>
      <Form>
        <Text>Se Connecter</Text>
        <Item stackedLabel>
          <Input
            placeholder="Email"
            // onChangeText={str => this.setState({ email: str })}
            onChangeText={str => updateCred({ type: 'email', str })}
          />
        </Item>
        <Item stackedLabel last>
          <Input
            placeholder="Password"
            // onChangeText={str => this.setState({ password: str })}
            onChangeText={str => updateCred({ type: 'pass', str })}
          />
        </Item>
        <Button iconLeft primary onPress={logUser}>
          <Icon name="people" />
          <Text>Login</Text>
        </Button>
      </Form>
    </View>
  );
};

// <Button iconLeft primary onPress={() => this.apiLogin()}>
// <View style={styles.container}>
// {isLoading ? <ActivityIndicator /> : null}
// {error ? getErrorMessage() : null}
// {hasWeatherData ? getWeatherInfo(weatherInfo) : null}
// <Button
// onPress={fetchData}
// title='Load Data'
// />
// </View>

export default LoginComponent;
