import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function NewVehicle(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Veículo</Text>
      <Text style={styles.subtitle}>
        Economize Tempo! Tire uma foto da placa de seu veículo que preencheremos
        as informações para você!
      </Text>
      <TouchableOpacity style={styles.scanBTN}>
        <Text style={styles.bTNTitle}>Escanear Placa</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("AddVehicleManual")}
        style={styles.manualAdd}
      >
        <Text style={styles.titleManual}>Prefiro Adicionar Manualmente</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(242,243,249,1)"
  },
  title: {
    fontFamily: "nunito-700",
    color: "#282f66",
    fontSize: 40,
    marginTop: 183,
    marginLeft: 19
  },
  subtitle: {
    fontFamily: "nunito-700",
    color: "#121212",
    fontSize: 12,
    marginLeft: 21
  },
  scanBTN: {
    width: 360,
    height: 61,
    backgroundColor: "#282f66",
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 21
  },
  bTNTitle: {
    fontFamily: "Oxygen",
    fontSize: 20,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 30,
    color: "#FFFFFF",
    textAlign: "center",
    paddingTop: 15
  },
  manualAdd: {
    width: 262,
    height: 25,
    marginTop: 20,
    marginLeft: 49
  },
  titleManual: {
    fontFamily: "nunito-700",
    color: "#121212",
    textAlign: "center",
    marginLeft: 40
  }
});

export default NewVehicle;
