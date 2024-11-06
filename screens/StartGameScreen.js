import { useState } from "react";
import { StyleSheet, View, Pressable, Text, TextInput, TextBase } from "react-native";

const StartGameScreen = (props) => {
  const [textInput, setTextInput] = useState("");

  const textInputHandler = (text) => {
    setTextInput(text);
  }

  const continueHandler = (num) => {
    num = Number(num);
    if (num > 100 || num < 1 || isNaN(num) || !Number.isInteger(num)) {
      alert("error");
      resetHandler();
    } else {
      alert("gj");
      props.setPickedNumber(num);
    }
  }

  const resetHandler = () => {
    setTextInput("");
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputView}
        onChangeText={textInputHandler}
        value={textInput}
        maxLength={3}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonView}>
          <Pressable styles={styles.buttons}>
            <Text>Reset</Text>
          </Pressable>
        </View>
        <View style={styles.buttonView}>
          <Pressable
            styles={styles.buttons}
            onPress={continueHandler.bind(this, textInput)}
          >
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
    gap: 10,
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
    backgroundColor: "white",
    alignItems: "center",
  },
  textInputView: {
    textAlign: 'center',
    borderBottomWidth: 1,
    margin: 10
  }
});
