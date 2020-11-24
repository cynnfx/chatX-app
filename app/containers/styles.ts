import { Right, Row } from 'native-base';
import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  centerElem: {
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  defaultElem: {
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  defaultInput: {
    marginBottom: 15,
  },
  title1: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  chatItemView: {
    height: 50,
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: 'white',
  },
  chatItemTitle: {
    fontWeight: '600',
    fontSize: 18,
  },
  chatItemSubTitle: {
    color: 'grey'
  },
  goToChatView: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  
  }
});

export default styles;
