import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Input from '../../../components/form/Input';
import ButtonComponent from '../../../components/utils/Button';
import Header from '../../../components/utils/Header';

const Signup = ({ navigation }) => {
    const { viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Header text='Bem Vindo!' subtitle={["Por favor preencha os", "seguintes dados para lhe criarmos uma conta"]} />
            <Input secureTextEntry={false} placeholder='Nome Completo' />
            <Input secureTextEntry={false} placeholder='Endereço de Email' />
            <Input secureTextEntry={true} placeholder='Senha' />
            <ButtonComponent text='Cadastrar' color='#fff' onPress={() => navigation.navigate('home')} backgroundColor='#7165e3' customStyle={{ marginTop: 30 }} />
            <View style={styles.container}>
                <Text style={styles.textPart1}>
                    Já tem uma conta? -&nbsp;
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                    <Text style={styles.textPart2}>
                        Entre
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#fff',
        minHeight: '100%',
        minWidth: '100%',
        flex: 1,
        justifyContent: 'center'
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 10,
    },
    textPart1: {
        fontSize: 16,
        color: '#8e8e8e',
    },
    textPart2: {
        fontSize: 16,
        color: '#111',
    },
});

export default Signup;