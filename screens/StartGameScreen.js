import { useState } from "react";
import { StyleSheet, View, Pressable, Text, TextInput } from "react-native";

const StartGameScreen = (props) => {
  
    

    const showAlert = (num) => {
    if (num > 100 || num < 1 || isNaN(num) || !Number.isInteger(num)) {
      alert("error");
    }
  };

  const textInputHandler = (text) => {
    showAlert(text);
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter a number" />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonView}>
          <Pressable styles={styles.buttons}>
            <Text>Reset</Text>
          </Pressable>
        </View>
        <View style={styles.buttonView}>
          <Pressable styles={styles.buttons}>
            <Text>Continue</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
    gap: 10
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "purple",
    width: "100%",
    justifyContent: "center",
    gap: 10,
  },
  buttonView: {
    flex: 1,
    borderRadius: 25,
    backgroundColor: 'white',
    alignItems: 'center'
  },
});
