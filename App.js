import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import StartGameScreen from "./screens/StartGameScreen";


export default function App() {

  const [pickedNumber, setPickedNumber] = useState();

  const addPickedNumber = (num) => {
    setPickedNumber(num);
  }

  let screen = (<StartGameScreen setPickedNumber={setPickedNumber} pickedNumber={pickedNumber} />);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeView}>
        <StatusBar style="auto" />
        <View style={styles.container}>
          {screen}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: 'grey'
  },
  container: {
    flex: 1,
    backgroundColor: "green",
  },
});
