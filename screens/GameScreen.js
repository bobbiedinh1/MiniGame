import { Pressable, StyleSheet, View, Text } from "react-native";
import { useEffect, useState } from "react";

const GameScreen = (props) => {
  const [maxi, setMax] = useState(100);
  const [mini, setMin] = useState(1);

const displayAlert = () => {
    alert("Please do not lie.");
}

  const higherHandler = () => {
    if (props.guessedNumber < props.pickedNumber) {
      setMin((prevMin) => {
        const newMin = props.guessedNumber + 1;
        props.addGuessedNumber(newMin, maxi); // Pass updated min
        return newMin; // Update state
      });
    } else {
        displayAlert();
    }
  };

  const lowerHandler = () => {
    if (props.guessedNumber > props.pickedNumber) {
      setMax((prevMax) => {
        const newMax = props.guessedNumber - 1;
        props.addGuessedNumber(mini, newMax); // Pass updated max
        return newMax; // Update state
      });
    } else {
        displayAlert();
    }
  };

  return (
    <View>
      <Text>{props.guessedNumberList}</Text>
      <Pressable onPress={higherHandler}>
        <Text>Higher</Text>
      </Pressable>
      <Pressable onPress={lowerHandler}>
        <Text>Lower</Text>
      </Pressable>
    </View>
  );
};

export default GameScreen;
