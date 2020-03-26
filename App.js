import React, {Component} from  'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Jokenpô</Text>
          <TouchableOpacity onPress={() => pedra()} style={styles.btn}>
            <Image source={{uri: 'https://bit.ly/3bthtKf'}} style={styles.images}/>
            <Text style={styles.btnText}>Pedra</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => papel()} style={styles.btn}>
            <Image source={{uri: 'https://bit.ly/2vOi6Po'}} style={styles.images}/>
            <Text style={styles.btnText}>Papel</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => tesoura()} style={styles.btn}>
            <Image source={{uri: 'https://bit.ly/3bthtKf'}} style={styles.images}/>
            <Text style={styles.btnText}>Tesoura</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
    fontSize: 40,
    color: '#262626',
    textAlign: 'center',
    margin: 30,
  },
  btn:{
    height: 120,
    backgroundColor: '#262626',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    margin: 10,
  },
  btnText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
    },
  images:{
    width: 80,
    height: 80,
  }
});

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

export default App;
