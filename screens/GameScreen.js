import { StyleSheet, View, Text, Button } from "react-native";
import { useEffect, useReducer, useState } from "react";

const GameScreen = (props) => {

const [min, setMin] = useState(1);
const [max, setMax] = useState(100);
const [guessNumbers, setGuessNumbers] = useState([]);
const [currentGuess, setCurrentGuess] = useState();
  

const pickedNumber = Number(props.pickedNumber);

    function getRandomInt() {
        let mini = Math.ceil(min); // Round up to the nearest integer
        let maxi = Math.floor(max); // Round down to the nearest integer
        return Math.floor(Math.random() * (maxi - mini + 1)) + mini; // Return a random integer between min and max
    }

    const guessNumber = () => {
        const n = getRandomInt();
        if (props.pickedNumber !== n) {
            setCurrentGuess(n);
            addToGuessNumbers(n);
        }
        else {
            console.log("winner");
        }
      }
      
      const addToGuessNumbers = (n) => {
        setGuessNumbers((prevNumbers)=> [
            ...prevNumbers, n
        ]);
      }

    useEffect(()=>{
        guessNumber();
    }, []);

    useEffect(()=>{
        console.log(props.pickedNumber);
        console.log(guessNumbers);
    }, [guessNumbers]);

    const higherButtonHandler = () => {
        if (props.pickedNumber > currentGuess){
            setMin(currentGuess+1);
            guessNumber()
        }
    }

    const lowerButtonHandler = () => {
        if (props.pickedNumber < currentGuess){
            setMax(currentGuess-1);
            guessNumber()
        }
    }

    return (
        <View>
            <Text>GameScreen</Text>
            <Button title="Higher"onPress={higherButtonHandler} />
            <Button title="Lower" onPress={lowerButtonHandler}/>
        </View>
    );
}

export default GameScreen;