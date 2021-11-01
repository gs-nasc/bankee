import React from "react";
import { StyleSheet, Text, Button, Pressable } from "react-native";

interface props {
    text: string;
    color: string;
    backgroundColor: string;
    onPress: () => void;
    customStyle: {};
}

const ButtonComponent = (props: props) => {
    const { onPress, color, backgroundColor, text, customStyle } = props;
    const [buttonStyle, setButtonStyle] = React.useState({
        paddingHorizontal: 30,
        marginHorizontal: 30,
        paddingVertical: 14,
        borderRadius: 10,
        opacity: 1
    });

    const onFocus = () => {
        setButtonStyle(styles.buttonFocus);
    }

    const onBlur = () => {
        setButtonStyle(styles.button);
    }
    return (
        <Pressable onPress={onPress} onPressIn={() => onFocus()} onPressOut={() => onBlur()} style={[buttonStyle, { backgroundColor: backgroundColor }, customStyle]}>
            <Text style={[styles.text, { color: color }]}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 30,
        marginHorizontal: 30,
        paddingVertical: 14,
        borderRadius: 10,
        opacity: 1
    },
    buttonFocus: {
        paddingHorizontal: 30,
        marginHorizontal: 30,
        paddingVertical: 14,
        borderRadius: 10,
        opacity: 0.9
    },
    text: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold",
    }
});

export default ButtonComponent;