import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

function EditPass(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alterar Senha</Text>
      <TextInput
        placeholder="Senha Atual"
        secureTextEntry={true}
        disableFullscreenUI={true}
        style={styles.input}
      ></TextInput>
      <TextInput
        placeholder="Nova Senha"
        secureTextEntry={true}
        disableFullscreenUI={true}
        style={styles.input}
      ></TextInput>
       <TextInput
        placeholder="Digite a Nova Senha"
        secureTextEntry={true}
        disableFullscreenUI={true}
        style={styles.input}
      ></TextInput>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Login")}
        style={styles.button}
      >
        <Text style={styles.alterarInformacoes}>Alterar Informações</Text>
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
    textAlign: "center",
    marginBottom: 30
  },
 
  input: {
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
  button: {
    width: 360,
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

export default EditPass;
