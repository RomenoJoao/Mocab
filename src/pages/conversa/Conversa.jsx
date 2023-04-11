import { View, Text, TouchableOpacity, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import Mensagem from '../../components/Mensagem';
import { io } from 'socket.io-client';

export default function Conversa({navigation}) {
  const [chatMessage, setChatMessage] = useState('');
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const newSocket = io("http://192.168.1.7:3000");
    setSocket(newSocket);
    newSocket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  function goBack(){
    navigation.navigate('Chat');
  }

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Button title="voltar"  onPress={goBack}/>
        <View style={styles.imagem} />
        <Text style={styles.tpessoa}>Luis Alexandre</Text>

        <View style={styles.botao}>
          <Button title="Denunciar" color={"white"} />
        </View>
      </View>
      <View style={styles.barra} />

      <View>
        {messages.map((message, index) => (
          <View key={index}>
           
            <Mensagem msg={message} />
          </View>
        ))}
      </View>

      <View style={styles.barra1} />

      <View style={styles.caixaInpt}>
        <View style={styles.btenviar}>
          <Text
            style={{
              color: "white",
              marginLeft: 10,
              marginTop: 2,
              fontWeight: "bold",
              fontSize: '20px'
            }}
          ></Text>
        </View>
        <TextInput
          placeholder="Escreva aqui.."
          style={styles.msg}
          onChangeText={chatMessage => {
            setChatMessage(chatMessage);
          }}
          value={chatMessage}
        />

        <View style={styles.btenviar}>
          <TouchableOpacity
            style={{ height: 40, backgroundColor: 'blue', paddingHorizontal: 20, justifyContent: 'center' }}
            onPress={() => {
              alert("entrei")
              if (socket) {
                socket.emit("message", chatMessage);
                setChatMessage('');
              }
            }}
          >
            <Text style={{ color: '#fff' }}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    marginBottom: 10,
  },
  barra1: {
    right:43,
    bottom: 170,
    width: 430,
    height: 2,
    backgroundColor: "#c4c4c4",
    position:'absolute'
  },
  tpessoa: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  imagem: {
    width: 56,
    height: 56,
    backgroundColor: "#c4c4c4",
    borderRadius: 1200,
  },

  head: {
    width: 320,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
    position: "fixed",
  },
  botao: {
    backgroundColor: "#E73030",
    borderRadius: 11,
    width: 90,
    height: 40,
  },
  caixaInpt: {
    top:745,
    width: 320,
    
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    position:'absolute',
    

  },
  btenviar: {
    width: 33,
    height: 33,
    backgroundColor: "#2E498E",
    borderRadius:42,
  },
  msg: {
    width:240,
    height:39,
    backgroundColor:'#c4c4c4',
    borderRadius:17,
    marginLeft:12,
    marginRight:12,
  },
});