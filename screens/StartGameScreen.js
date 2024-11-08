import { useState } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TextInput,
  TextBase,
  Alert,
} from "react-native";

const StartGameScreen = (props) => {
  const [textInput, setTextInput] = useState("");

  const textInputHandler = (text) => {
    setTextInput(text);
  };

  const continueHandler = () => {
    num = Number(textInput);
    if (num > 100 || num < 1 || isNaN(num) || !Number.isInteger(num)) {
      Alert.alert("Invalid Number", "Please enter a whole number before 1-100.", [{text: 'Okay', style: 'destructive', onPress: resetHandler}])
      resetHandler();
    } else {
      props.addPickedNumber(num);
    }
  };

  const resetHandler = () => {
    setTextInput("");
  };

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
          <Pressable styles={styles.buttons} onPress={resetHandler}>
            <Text>Reset</Text>
          </Pressable>
        </View>
        <View style={styles.buttonView}>
          <Pressable styles={styles.buttons} onPress={continueHandler}>
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
    textAlign: "center",
    borderBottomWidth: 1,
    margin: 10,
  },
});
