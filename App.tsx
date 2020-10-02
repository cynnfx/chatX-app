import React from 'react';
import { StyleSheet, View } from 'react-native';
import Txt from './src/components/Simpletxt.tsx';


const App = () => (
  <View style={styles.container}>
    <Txt
      text="Open up App.js to start working on your app!"
      color="#000"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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
