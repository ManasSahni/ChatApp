import {Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

const MainStyles = StyleSheet.create({
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  serverStateSignalOnline: {
    padding: 4,
    backgroundColor: '#70e336',
    borderRadius: 25,
    width: 5,
    height: 5,
    marginHorizontal: '2%',
  },
  serverStateSignalOffline: {
    padding: 4,
    backgroundColor: 'red',
    borderRadius: 25,
    width: 5,
    height: 5,
    marginHorizontal: '2%',
  },
});

export default MainStyles;
