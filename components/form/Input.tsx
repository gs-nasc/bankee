import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface props {
    value?: string;
    onChangeText?: ((text: string) => void) | undefined;
    placeholder: string;
    secureTextEntry: boolean;
}

const Input = (props: props) => {

    const [inputStyle, setInputStyle] = useState({
        color: '#000',
        backgroundColor: '#f7f7f7',
        paddingHorizontal: 30,
        paddingVertical: 15,
        fontSize: 16,
        marginHorizontal: 30,
        marginVertical: 5,
        borderRadius: 10,
        borderColor: '#f7f7f7',
        borderWidth: 1
    });

    // setInputStyle(styles.inputStyle);
    // const { inputStyle } = styles;

    const onFocus = () => {
        setInputStyle(styles.inputStyleFocus);
    }

    const onBlur = () => {
        setInputStyle(styles.inputStyle);
    }

    return (
        <View>
            <TextInput
                secureTextEntry={props.secureTextEntry}
                placeholder={props.placeholder}
                autoCorrect={false}
                style={inputStyle}
                value={props.value}
                placeholderTextColor={'black'}
                onFocus={() => onFocus()}
                onBlur={() => onBlur()}
                onChangeText={props.onChangeText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        color: '#000',
        backgroundColor: '#f7f7f7',
        paddingHorizontal: 30,
        paddingVertical: 14,
        fontSize: 16,
        marginHorizontal: 30,
        marginVertical: 5,
        borderRadius: 10,
        borderColor: '#f7f7f7',
        borderWidth: 2,
    },
    inputStyleFocus: {
        color: '#000',
        backgroundColor: '#e4e0f9',
        paddingHorizontal: 30,
        paddingVertical: 14,
        fontSize: 16,
        marginHorizontal: 30,
        marginVertical: 5,
        borderRadius: 10,
        borderColor: '#b4aaf2',
        borderWidth: 2
    }
});

export default Input;