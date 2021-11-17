import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

function Recovery(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Senha</Text>
      <Text style={styles.subtitle}>
        Esqueceu sua senha? Insira os dados abaixo para recuperar suas
        credenciais
      </Text>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        placeholderTextColor="rgba(0,0,0,1)"
        style={styles.emailInput}
      ></TextInput>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Main")}
        style={styles.loginButton}
      >
        <Text style={styles.textButton}>Recuperar Senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontFamily: "nunito-700",
    color: "rgba(40,47,102,1)",
    fontSize: 34,
    marginTop: 98,
    marginLeft: 22
  },
  subtitle: {
    fontFamily: "nunito-700",
    color: "#121212",
    fontSize: 15,
    marginTop: 1,
    marginLeft: 22
  },
  emailInput: {
    fontFamily: "nunito-regular",
    color: "#121212",
    height: 60,
    width: 314,
    borderWidth: 2,
    borderColor: "rgba(40,47,102,1)",
    backgroundColor: "#F5F7F9",
    borderRadius: 5,
    borderStyle: "solid",
    marginTop: 15,
    marginLeft: 22,
    paddingLeft: 20
  },
  loginButton: {
    width: 314,
    height: 61,
    backgroundColor: "rgba(40,47,102,1)",
    borderRadius: 5,
    marginTop: 12,
    marginLeft: 21
  },
  textButton: {
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

export default Recovery;
