import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          TabAuth: {
            screens: {
              TabAuthScreen: 'auth',
            },
          },
          TabMain: {
            screens: {
              TabMainScreen: 'main',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};