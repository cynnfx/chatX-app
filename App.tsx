import React from 'react';
import { StyleSheet, View } from 'react-native';
import Txt from './src/components/Simpletxt';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 

const initialState = {
};

const reducer = () => {
};

const store = createStore(reducer);

const App = () => (
  <View style={styles.container}>
    <Provider store={store}>
      <Txt
        text="Open up App.js to start working on your app!"
        color="#000"
      />
    </Provider>
  </View>
);

export default App;

// Error ESLINT-AIRBNB
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <HelloText
//           text="Open up App.js to start working on your app!"
//           color="#000"
//         />
//       </View>
//     );
//   }
// }
