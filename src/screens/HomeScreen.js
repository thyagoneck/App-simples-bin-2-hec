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
      <Text>Digite um número: </Text>
      <TextInput
        style={styles.textInputStyle}
        autoCapitalize="none"
        keyboardType="numeric"
        maxLength={8}
        value={enteredNumber.toString()}
        onChangeText={input => {
          const sanitizedNumber = input.replace(/([^0-9])/g, "");
          setEnteredNumber(sanitizedNumber);
          const binaryNumber = convertNumberToBinary(sanitizedNumber);
          setBinary(binaryNumber);
        }}
      />
      <Text>{binary}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffa000",
    alignItems: "center",
    justifyContent: "center"
  },
  textInputStyle: {
    height: 80,
    width: 200,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    fontSize: 50,
    textAlign: "center"
  }
});
