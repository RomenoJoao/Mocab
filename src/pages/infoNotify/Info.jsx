import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native';

export default function Info({navigation}) {
    function back(){
        navigation.navigate('Notify')
    }
  return (
    <View style={styles.container}>
      <View style={styles.tBotn}>
         <Button title='voltar' onPress={back}></Button>
         <Text style={styles.tchat}>Central de Op</Text>
      </View>
      <View style={styles.barra}></View>
      <View>
        <Text style={styles.informer}>
          Presado estafeta, tem a obrigação de comparecer na central hoje pelas
          15h, para acertar as suas contas e receber o restante das encomendas
          para entregar.
        </Text>
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
    marginBottom: 45,
  },
  tchat: {
    fontSize: "26px",
    fontWeight: "bold",
    fontStyle: "italic",
    marginBottom: 5,
  },
  informer: {

    width: 240,
    minHeight: 220,
    left:39,
    fontSize:19,
    justifyContent:'center'
  },
  tBotn:{
        display:'flex',
        flexDirection:'row',
  }
});