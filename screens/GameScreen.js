import { StyleSheet, View, Text, Button } from "react-native";
import { useState } from "react";

const GameScreen = (props) => {

    const pickedNumber = Number(props.pickedNumber);

    function getRandomInt(min, max) {
        min = Math.ceil(min); // Round up to the nearest integer
        max = Math.floor(max); // Round down to the nearest integer
        return Math.floor(Math.random() * (max - min + 1)) + min; // Return a random integer between min and max
    }

    return (
        <View>
            <Text>GameScreen</Text>
            <Button title="Higher" />
            <Button title="Lower" />
        </View>
    );
}

export default GameScreen;