import { View, Text , StyleSheet,TextInput, Button } from 'react-native'
import React from 'react'
import Mensagem from '../../components/Mensagem';
export default function Conversa() {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Button title="voltar"></Button>
        <View style={styles.imagem}></View>
        <Text style={styles.tpessoa}>Luis Alexandre</Text>

        <View style={styles.botao}>
          <Button title="Denunciar" color={"white"}></Button>
        </View>
      </View>
      <View style={styles.barra}></View>

  <Mensagem msg={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Mensagem>
  <Mensagem msg={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Mensagem>
  <Mensagem msg={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Mensagem>


      <View style={styles.barra1}></View>

      <View style={styles.caixaInpt}>
        <View style={styles.btenviar}>
          <Text
            style={{
              color: "white",
              marginLeft: 10,
              marginTop: 2,
              fontWeight: "bold",
              fontSize:'20px'
            }}
          >
            +
          </Text>
        </View>
        <TextInput placeholder="Escreva aqui.." style={styles.msg}></TextInput>

        <View style={styles.btenviar}>
          <Button title=""></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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