import React from 'react';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles'

export default function App(){
  const navigation = useNavigation();

  function navigateToHome(){
    navigation.navigate('Home');
  }
  
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Como Jogar</Text>

        <Text style={styles.description}>
        Clique em uma das opções: pedra, papel ou tesoura. O computador ira sortear uma opção e ira comparar com a sua, após isso o resultado da partida aparecerá na tela!
        </Text>

        <Text style={[styles.description, {marginTop: 15}]}>
        O jogo funciona assim: a tesoura corta o papel, mas quebra com a pedra; o papel embrulha a pedra, mas é cortado pela tesoura e a pedra quebra a tesoura e é embrulhada pelo papel.
        </Text>

        <TouchableOpacity 
          style={styles.homeButton} 
          onPress={navigateToHome}
        >
          <Feather name="arrow-left" size={18} color="#fff" />
          <Text style={styles.homeButtonText}>Voltar para o inicio</Text>
      </TouchableOpacity>

    </View>
  )
}