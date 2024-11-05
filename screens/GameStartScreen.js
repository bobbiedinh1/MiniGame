import { StyleSheet, TextInput, View, Text, Button } from "react-native";
import { useState } from "react";

const GameStartScreen = (props) => {

    const [number, setNumber] = useState();

    return (
        <View>
            <Text>Add a number</Text>
            <TextInput placeholder="38"/>
            <Button title="Next" />
        </View>
    );
}

export default GameStartScreen;

// const styles = StyleSheet({
//     container: {

//     },
// });