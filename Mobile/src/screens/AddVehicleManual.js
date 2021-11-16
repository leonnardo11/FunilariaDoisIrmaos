import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";

function AddVehicleMnual(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Adicionar Veículo</Text>
            <Text style={styles.subtitle}>
            Adicione Manualmente as Informações de seu Veículo
            </Text>
            <TextInput
                placeholder="Insira o Modelo do seu Veículo"
                keyboardType="default"
                placeholderTextColor="rgba(0,0,0,1)"
                style={styles.Input}
            ></TextInput>
            <TextInput
                placeholder="Marca"
                placeholderTextColor="rgba(0,0,0,1)"
                style={styles.Input}
            ></TextInput>
            <TextInput
                placeholder="Ano"
                placeholderTextColor="rgba(0,0,0,1)"
                style={styles.Input}
            ></TextInput>
          
            <TextInput
                placeholder="Cor"
                
                placeholderTextColor="rgba(0,0,0,1)"
                style={styles.Input}
            ></TextInput>
            <TextInput
                placeholder="Placa"
                secureTextEntry={false}
                placeholderTextColor="rgba(0,0,0,1)"
                disableFullscreenUI={true}
                keyboardType="name-phone-pad"
                style={styles.Input}
            ></TextInput>

            <TouchableOpacity
                onPress={() => props.navigation.navigate("Main")}
                style={styles.button}
            >
                <Text style={styles.textButton}>Salvar Veículo</Text>

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
        fontSize: 30,
        marginTop: 120,
        textAlign: "center"
    },
    subtitle: {
        fontFamily: "nunito-700",
        color: "#121212",
        fontSize: 10,
        textAlign: "center",
        paddingBottom: 20
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
        marginTop: 15,
        marginLeft: 22,
        paddingLeft: 20
    },
    button: {
        width: 360,
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

export default AddVehicleMnual;
