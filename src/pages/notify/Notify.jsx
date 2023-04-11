import { View, Text,StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Notice from '../../components/Notice'

export default function Notify({navigation}) {

  function newScreen(){
    navigation.navigate('info')
  }

  return (

    <View style={styles.container}>
      <Text style={styles.tchat}>Notificações</Text>
      <View style={styles.barra}></View>
      <Pressable onPress={newScreen}>
        <Notice nome='Central de Op'></Notice>
      </Pressable>
      <Pressable onPress={newScreen}>
        <Notice nome='Novo Pedido'></Notice>
      </Pressable>

    </View>
  )
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
    marginBottom: 35,
  },
  tchat: {
    fontSize: "26px",
    fontWeight: "bold",
    fontStyle: "italic",
    marginBottom:5,
  },
});