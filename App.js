import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import StartGameScreen from "./screens/StartGameScreen";
import EndGameScreen from "./screens/EndGameScreen";
import GameScreen from "./screens/GameScreen";


export default function App() {

  const [pickedNumber, setPickedNumber] = useState();
  const [guessedNumber, setGuessNumber] = useState();
  const [guessedNumberList, setGuessedNumberList] = useState([]);

  const addPickedNumber = (num) => {
    setPickedNumber(num);
    addGuessedNumber(min=1, max=100);
  }

  const addGuessedNumber = (min, max) => {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    setGuessNumber(num);
    setGuessedNumberList((prevNumbers) => [
      ...prevNumbers, num
    ]);
  }

  const resetGame = () => {
      setGuessNumber();
      setGuessedNumberList([]);
      setPickedNumber();
  }

  let screen = (<StartGameScreen addPickedNumber={addPickedNumber} pickedNumber={pickedNumber} />);

  if (!guessedNumber){
    screen = (<StartGameScreen addPickedNumber={addPickedNumber} pickedNumber={pickedNumber} />);
  }
  else if (guessedNumber === pickedNumber) {
    screen = (<EndGameScreen guessedNumberList={guessedNumberList} resetGame={resetGame}/>);
  } else {
    screen = (<GameScreen guessedNumber={guessedNumber} addGuessedNumber={addGuessedNumber} guessedNumberList={guessedNumberList} pickedNumber={pickedNumber}/>);
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
    backgroundColor: "green",
  },
});
