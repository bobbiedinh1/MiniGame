import { StyleSheet, TextInput, View, Text, Button } from "react-native";
import { useState } from "react";

const GameStartScreen = (props) => {

    const [inputNumber, setInputNumber] = useState();

    const inputHandler = (num) => {
        setInputNumber(num);
    }

    const buttonHandler = () => {
        props.addNumber(inputNumber);
    }

    return (
        <View>
            <Text>Add a number</Text>
            <TextInput onChangeText={inputHandler} placeholder="38"/>
            <Button onPress={buttonHandler} title="Next" />
        </View>
    );
}

export default GameStartScreen;

// const styles = StyleSheet({
//     container: {

//     },
// });