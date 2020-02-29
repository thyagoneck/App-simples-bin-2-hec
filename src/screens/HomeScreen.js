import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredNumber, setEnteredNumber] = useState(0);
  const [binary, setBinary] = useState(0);

  const convertNumberToBinary = value => {
    const decimalToBinary = parseInt(value, 2);
    return isNaN(decimalToBinary) ? 0 : decimalToBinary;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Digite um número: </Text>
      <TextInput
        style={styles.textInputStyle}
        autoCapitalize="none"
        keyboardType="numeric"
        value={enteredNumber.toString()}
        onChangeText={input => {
          if (/[2-9]/g.test(input)) {
            alert("Número inválido.\nNúmeros aceitos: 0 ou 1");
            return;
          }
          const sanitizedNumber = input.replace(/([^0-1])/g, "");
          setEnteredNumber(sanitizedNumber);
          const binaryNumber = convertNumberToBinary(sanitizedNumber);
          setBinary(binaryNumber);
        }}
      />
      <Text style={styles.resultStyle}>{binary}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffa000",
    alignItems: "center"
  },
  titleStyle: {
    marginTop: 40,
    fontSize: 30
  },
  textInputStyle: {
    height: 80,
    width: 200,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    fontSize: 50,
    textAlign: "center"
  },
  resultStyle: {
    fontSize: 50,
    fontWeight: "bold"
  }
});
