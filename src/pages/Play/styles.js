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
  btn:{
    height: 90,
    backgroundColor: '#262626',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  btnMargin:{
    marginTop: 20,
  },
  btnText:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  images:{
    width: 50,
    height: 50,
  },
  homeButton:{
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#262626',
    borderRadius: 8,
    padding: 10,
    justifyContent: 'center'
  },
  homeButtonText:{
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
})