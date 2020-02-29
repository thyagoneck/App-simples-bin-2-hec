import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

export default function App() {
  const [number, setNumber] = useState(0);
  const [numberBinary, setBinary] = useState(0);

  const convertNumberToBinary = value => {
    return (value >>> 0).toString(2);
  };

  return (
    <View style={styles.container}>
      <Text>Digite um número: </Text>
      <TextInput
        style={styles.textInputStyle}
        autoCapitalize="none"
        keyboardType="numeric"
        onChangeText={input => {
          const sanitizedNumber = input.replace(/([^0-9])/g, "");
          setNumber(sanitizedNumber);
          const binaryNumber = convertNumberToBinary(sanitizedNumber);
          setBinary(binaryNumber);
        }}
        value={number.toString()}
      />
      <Text>{numberBinary}</Text>
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
