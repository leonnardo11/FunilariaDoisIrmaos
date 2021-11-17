import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

function EditProfile(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Perfil</Text>
      <Text style={styles.subtitle}>Edite suas Informações Pessoais</Text>
      <TextInput placeholder="Nome" style={styles.input}></TextInput>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={styles.input}
      ></TextInput>
      <TextInput
        placeholder="Telefone"
        keyboardType="numeric"
        style={styles.input}
      ></TextInput>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Login")}
        style={styles.button}
      >
        <Text style={styles.alterarInformacoes} onPress={() => props.navigation.navigate("EditPass")}>Alterar Informações</Text>
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
    color: "rgba(40,47,102,1)",
    fontSize: 34,
    marginTop: 80,
    textAlign: "center"
  },
  subtitle: {
    fontFamily: "nunito-700",
    color: "#121212",
    fontSize: 16,
    marginTop: 6,
    marginBottom: 30,
    textAlign: "center"
  },
  input: {
    fontFamily: "nunito-regular",
    color: "#121212",
    height: 60,
    width: 314,
    borderWidth: 2,
    borderColor: "rgba(40,47,102,1)",
    backgroundColor: "#F5F7F9",
    borderRadius: 5,
    borderStyle: "solid",
    marginTop:15,
    marginLeft: 22,
    paddingLeft: 20
  },
  button: {
    width: 314,
    height: 61,
    backgroundColor: "#282f66",
    borderRadius: 5,
    marginTop: 23,
    marginLeft: 20,
  },
  alterarInformacoes: {
    fontFamily: "nunito-600",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 16,
   textAlign: "center"
  }
});

export default EditProfile;
