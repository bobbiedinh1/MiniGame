import { Pressable, Animated, Text, View, StyleSheet } from "react-native";
import { useRef } from "react";

const CustomButton = (props) => {

    const animatedScale = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
      Animated.spring(animatedScale, {
        toValue: 0.95,
        useNativeDriver: true,
      }).start();
    };
  
    const handlePressOut = () => {
      Animated.spring(animatedScale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    };
    return (
        <Pressable 
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={props.customButtonHandler} 
            style={styles.pressable}
        >
            <Animated.View style={[styles.textView, { transform: [{ scale: animatedScale }], backgroundColor: props.color}]}>
                <Text>{props.customButtonText}</Text>
            </Animated.View>
                
        </Pressable>
    );
}

export default CustomButton;

const styles = StyleSheet.create({
    pressable: {
        backgroundColor: "red"
    },
    textView: {
        borderRadius: 7,
        padding: 10,
    },
})