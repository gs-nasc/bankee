import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface props {
    text: string;
    subtitle: Array<string>;
}

const Header = (props: props) => {
    const { headerStyle, subTitleStyle } = styles;
    const { text, subtitle } = props;
    return (
        <View>
            <Text style={headerStyle}>{text}</Text>
            {subtitle.map((sub: string, index: number) => { 
                if((index + 1) === subtitle.length) {
                    return (
                        <Text key={index} style={Object.assign({marginBottom: 30}, subTitleStyle)}>{sub}</Text>
                    )
                }else{
                    return (
                        <Text key={index} style={subTitleStyle}>{sub}</Text>
                    )
                }
            } )}
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        marginBottom: 30
    },
    subTitleStyle: {
        fontSize: 16,
        fontWeight: "normal",
        color: "#8e8e8e",
        textAlign: "center"
    }
});