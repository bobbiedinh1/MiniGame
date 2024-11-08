import { StyleSheet, View, Text, Pressable } from "react-native";

const EndGameScreen = (props) => {

    const count = props.guessedNumberList.length;
    return(
        <View>
            <Text>
                {count}
            </Text>
            <Pressable onPress={props.resetGame}>
                <Text>Play again</Text>
            </Pressable>
        </View>
    );
}

export default EndGameScreen;