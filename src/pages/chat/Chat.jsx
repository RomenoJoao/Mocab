import React from 'react';
import { View, Text, StyleSheet,TextInput,Button, Pressable } from 'react-native';
import ChatP from '../../components/ChatP';
export default function Chat({ navigation }) {
  function open() {
    navigation.navigate("Conversa");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.tchat}>CHAT</Text>
      <View style={styles.barra}></View>
        <TextInput style={styles.inpt}>Pesquisar...</TextInput>
        <Pressable onPress={open}>
          <ChatP nome="Luis Alexandre" hora="22:58"></ChatP>
        </Pressable>
        <ChatP nome="Romeno João" hora="17:51"></ChatP>
        <ChatP nome="Leandro da Costa" hora="13:08"></ChatP>
        <ChatP nome="Euclides Mfumu" hora="12:01"></ChatP>
        <ChatP nome="João Bernardo" hora="06:34"></ChatP>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 80,
    left: 42,
  },
  barra: {
    width: 330,
    height: 3,
    backgroundColor: "#2E498E",
    marginBottom: 0,
  },
  tchat: {
    fontSize: "26px",
    fontWeight: "bold",
    fontStyle: "italic",
    marginBottom: 5,
  },
  inpt: {
    marginTop: 20,
    width: 330,
    height: 43,
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    marginBottom: 10,
  },
});