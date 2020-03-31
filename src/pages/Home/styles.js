import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#ddd',
  },
  title:{
    fontSize: 30,
    marginBottom: 30,
    marginTop: 48,
    color: '#13131a',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  option:{
    backgroundColor: '#262626',
    borderRadius: 8,
    height: 100,
    width: '100%',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText:{
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  },
})