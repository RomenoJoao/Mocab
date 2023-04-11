import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Notice(props) {
  return (
    <View>
      <View style={styles.retangulo}>
        <View style={styles.circle}></View>
        <Text style={styles.nome}>{props.nome}</Text>
        <View style={styles.log}>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  retangulo: {
    width: 330,
    height: 64,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 4,
    borderBottomWidth: "1",
    borderBottomColor: "#c7c7c7",
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
  log: {
    width: 11,
    height: 11,
    backgroundColor: "#2E498E",
    borderRadius: 200,
    marginLeft: 100,
  },
});