import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

function Login(props) {
  return (
    <View style={styles.container}>
      <View style={styles.titleStack}>
        <Text style={styles.title}>Bem vindo de volta!</Text>
        <Text style={styles.subtitle}>
          Insira suas credenciais para entrar no Aplicativo
        </Text>
      </View>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={styles.Input}
      ></TextInput>
      <TextInput
        placeholder="Senha"
        secureTextEntry={true}
        disableFullscreenUI={true}
        style={styles.Input}
      ></TextInput>
      <TouchableOpacity
        Text="Entrar"
        onPress={() => props.navigation.navigate("Main")}
        style={styles.loginButton}
      >
      <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        Text="Teste"
        onPress={() => props.navigation.navigate("Recovery")}
        style={styles.forgetPassBtn}
      >
      <Text style={styles.esqueciMinhaSenha}>Esqueci minha Senha</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("CreateAccount")}
        style={styles.newAccountBTN}
      >
        <Text style={styles.criarUmaConta}>Criar uma conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "nunito-700",
    color: "rgba(40,47,102,1)",
    fontSize: 34
  },
  subtitle: {
    top: 42,
    left: 1,
    position: "absolute",
    fontFamily: "nunito-700",
    color: "#121212",
    fontSize: 15
  },
  titleStack: {
    width: 321,
    height: 82,
    marginTop: 120,
    marginBottom: 20,
    marginLeft: 26
  },
  Input: {
    fontFamily: "nunito-regular",
    color: "#121212",
    height: 60,
    width: 360,
    borderWidth: 2,
    borderColor: "rgba(40,47,102,1)",
    backgroundColor: "#F5F7F9",
    borderRadius: 5,
    borderStyle: "solid",
    marginTop:15,
    marginLeft: 22,
    paddingLeft: 20
  },
  loginButton: {
    width: 360,
    height: 61,
    backgroundColor: "rgba(40,47,102,1)",
    borderRadius: 5,
    marginTop: 17,
    marginLeft: 20
  },
  forgetPassBtn: {
    width: 184,
    height: 35,
    marginTop: 143,
    marginLeft: 96
  },
  esqueciMinhaSenha: {
    fontFamily: "nunito-700",
    color: "rgba(40,47,102,1)",
    marginTop: 8,
    marginLeft: 25
  },
  newAccountBTN: {
    width: 184,
    height: 35,
    marginTop: 11,
    marginLeft: 96
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
},
  criarUmaConta: {
    fontFamily: "nunito-700",
    color: "rgba(40,47,102,1)",
    marginTop: 8,
    marginLeft: 40
  }
});

export default Login;
