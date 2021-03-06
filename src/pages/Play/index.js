import React from  'react';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

import imgPedra from '../../assets/pedra.png';
import imgPapel from '../../assets/papel.png';
import imgTesoura from '../../assets/tesoura.png';


export default function Play(){
  const navigation = useNavigation();

  function navigateToHome(){
    navigation.navigate('Home');
  }
  
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Jokenpô</Text>
          <TouchableOpacity onPress={() => pedra()} style={styles.btn}>
            <Image source={imgPedra} style={styles.images}/>
            <Text style={styles.btnText}>Pedra</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => papel()} style={[styles.btn, styles.btnMargin]}>
            <Image source={imgPapel} style={styles.images}/>
            <Text style={styles.btnText}>Papel</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => tesoura()} style={[styles.btn, styles.btnMargin]}>
            <Image source={imgTesoura} style={styles.images}/>
            <Text style={styles.btnText}>Tesoura</Text>
          </TouchableOpacity>

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

//Declaração de variaveis
const pd = 'pedra'
const pp = 'papel'
const ts = 'tesoura'
var pc
// Sorteio do valor do PC
function sortear(){
  var x = Math.floor((Math.random() * 3) + 1)

  if(x == 1){
    pc = pp
  }else if(x == 2){
    pc = pd
  }else if(x == 3){
    pc = ts
  }
}
//Funções que ativam a logica
function pedra(){
  var player = pd
  jogar(player)
}
function papel(){
  var player = pp
  jogar(player)
}
function tesoura(){
  var player = ts
  jogar(player)
}
// Logica do Jogo
function jogar(player){
  sortear();   

  if(player == pc){
    alert("EMPATOU!!!")
  }else if(player == pd && pc == ts){
    alert(`O COMPUTADOR ESCOLHEU TESOURA, PEDRA QUEBRA TESOURA, VC VENCEU!`)
  }else if(player == pp && pc == pd){
    alert("O COMPUTADOR ESCOLHEU PEDRA, PAPEL COBRE PEDRA, VC VENCEU!")
  }else if(player == ts && pc == pp){
    alert("O COMPUTADOR ESCOLHEU PAPEL, TESOURA CORTA PAPEL, VC VENCEU!")
  }else if(pc == pd && player == ts){
    alert("O COMPUTADOR ESCOLHEU PEDRA, PEDRA QUEBRA TESOURA, VC PERDEU!")
  }else if(pc == pp && player == pd){
    alert("O COMPUTADOR ESCOLHEU PAPEL, PAPEL COBRE PEDRA, VC PERDEU!")
  }else if(pc == ts && player == pp){
    alert("O COMPUTADOR ESCOLHEU TESOURA, TESOURA CORTA PAPEL, VC PERDEU!")
  }
}
