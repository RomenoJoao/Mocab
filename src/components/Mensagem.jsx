import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Mensagem(props) {
  return (
    <View style={styles.corpo}>

      <Text style={styles.texto} >{props.msg}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  corpo: {
    width: 220,
    minHeight:42,
    backgroundColor: "#09999E",
    borderRadius:35,
    justifyContent:'space-around',
    left:112,
    marginBottom:18,
    
  },
  texto:{
    color:'white',
    marginLeft:15
    ,marginTop:15,
    marginBottom:15
  }
});