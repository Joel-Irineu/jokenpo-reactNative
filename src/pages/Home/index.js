import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles'

export default function App(){
  const navigation = useNavigation();

  function navigateToPlay(){
    navigation.navigate('Play');
  }

  function navigateToHow(){
    navigation.navigate('HowToPlay');
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>jokenpô</Text>

        <TouchableOpacity onPress={navigateToPlay} style={styles.option}>
          <Text style={styles.optionText}>Iniciar Jogo</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToHow} style={styles.option}>
          <Text style={styles.optionText}>Como jogar</Text>
        </TouchableOpacity>

    </View>
  )
}