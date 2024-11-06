import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import GameStartScreen from "./screens/GameStartScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {

  const [number, setNumber] = useState();

  const addNumber = (num) => {
    setNumber(num);
  }

  let screen = (<GameStartScreen addNumber={addNumber}/>);

  if (number === undefined) {
    console.log(number);
  } else if (!isNaN(number) && (Number.isInteger(Number(number))) && Number(number) !== 0 ) {
    screen = (<GameScreen pickedNumber={number}/>);
  } else {
    console.log(number);
  }

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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
