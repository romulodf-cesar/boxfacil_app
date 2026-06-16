import {Image, Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Box Fácil</Text>
      <Text style={styles.text}>Bem-vindo ao Box Fácil, a solução definitiva para sua logística!</Text>
      <Image source={require('./logo.png')} />
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
