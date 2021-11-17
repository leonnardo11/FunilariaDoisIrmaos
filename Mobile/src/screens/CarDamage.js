import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function CarDamage(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danos a Lataria</Text>
      <Text style={styles.subtitle}>
        Envie uma foto do seu veículo para estimar o dano da área afetada
      </Text>
      <View style={styles.carImageStack}>
        <Image
          source={require("../assets/images/car.png")}
          resizeMode="contain"
          style={styles.carImage}
        ></Image>
        <IoniconsIcon name="ios-add" style={styles.iconeCima}></IoniconsIcon>
        <IoniconsIcon name="ios-add" style={styles.iconeDireita}></IoniconsIcon>
        <IoniconsIcon
          name="ios-add"
          style={styles.iconeEsquerda}
        ></IoniconsIcon>
        <IoniconsIcon name="ios-add" style={styles.iconeBaixo}></IoniconsIcon>
      </View>
      <TouchableOpacity style={styles.sendBTN}>
        <Text style={styles.btntitle}>Solicitar Orçamento</Text>
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
    fontSize: 30,
    marginTop: 64,
    marginLeft: 8
  },
  subtitle: {
    fontFamily: "nunito-700",
    color: "#121212",
    fontSize: 13,
    marginTop: 6,
    marginLeft: 10
  },
  carImage: {
    width: 221,
    height: 287,
    alignItems: "center",
    marginLeft: 25,
    marginTop: 10
  },
  iconeCima: {
    top: 0,
    left: 120,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  iconeDireita: {
    top: 133,
    left: 222,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  iconeEsquerda: {
    top: 133,
    left: 20,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  iconeBaixo: {
    top: 280,
    left: 111,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  carImageStack: {
    width: 242,
    height: 336,
    marginTop: 46,
    marginLeft: 36
  },
  sendBTN: {
    width: 314,
    height: 61,
    backgroundColor: "#282f66",
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 22
  },
  btntitle: {
    fontFamily: "Oxygen",
    fontSize: 20,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 30,
    color: "#FFFFFF",
    textAlign: "center",
    paddingTop: 15
  }
});

export default CarDamage;
