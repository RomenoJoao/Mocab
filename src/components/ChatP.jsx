import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ChatP(props) {
  return (
    <View>
      <View style={styles.retangulo}>
            <View style={styles.circle}>

            </View>
            <Text style={styles.nome}>{props.nome}</Text>
            <Text style={styles.hora}>{props.hora}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  retangulo: {
    
    width: 330,
    height: 64,
    borderRadius: 12,
    backgroundColor: "white",
    shadowColor: "#838383",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.38,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop:20
  },
  circle: {
    width: 54,
    height: 54,
    backgroundColor: "#c4c4c4",
    borderRadius: 200,
  },
  nome: {
    fontSize: "17px",
    fontWeight: "bold",
  },
  hora: {
    fontSize: "11px",
  },
});