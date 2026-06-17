import React,{useState,useEffect} from "react";

import {Image, Text, TextInput ,View, StyleSheet } from "react-native";

export default function Index() {
  // Variáveis de estado para armazenar o nome e número do box
  const [nome, setNome] = useState('');
  const [numero,setNumero] = useState('');
  // useEffect para buscar os dados de uma API Django DRF
  useEffect(()=>{
      fetch('http://127.0.0.1:8000/boxes/3/')
        .then(response => response.json())
        .then(data => {
          setNome(data.nome);
          setNumero(data.numero);
       })
       .catch(erro => console.log('Erro ao buscar dados:', erro));
  },[]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Box Fácil</Text>
      <Text style={styles.text}>Bem-vindo ao Box Fácil, a solução definitiva para sua logística!</Text>
      <Image source={require('./logo.png')} />
      <Text style={styles.text}>Nome do Box: {nome}</Text>
      <Text style={styles.text}>Número do Box: {numero}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'#021123',
  },
  text:{
    color:'#fff',
  }
});
