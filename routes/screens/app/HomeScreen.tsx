import React from "react";
import { ScrollView, StyleSheet, Text, View, StatusBar } from "react-native";
import Send from "../../../assets/send.svg";
import Bank from "../../../assets/bank.svg";
import Chart from "../../../assets/chart.svg";

const Home = () => {
    return (
        <View style={styles.fullArea}>
            <ScrollView>
                <View style={styles.purpleArea}>
                    <View style={styles.balanceArea}>
                        <Text style={styles.balanceAreaBalance}>R$ 7.426,00</Text>
                        <Text style={styles.balanceAreaText}>Saldo disponível</Text>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.cardSection}>
                            <Text style={styles.cardLabel}>Ganhos</Text>
                            <Text style={Object.assign({ color: '#00a349' }, styles.cardValue)}>R$ 10.520,00</Text>
                        </View>
                        <View style={styles.cardSection}>
                            <Text style={styles.cardLabel}>Gastos</Text>
                            <Text style={Object.assign({ color: '#eb261e' }, styles.cardValue)}>R$ 3.095,00</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.container}>
                    <Text style={styles.subTitle}>Atividade</Text>
                    <View style={styles.rowThree}>
                        <View style={styles.cardThree}>
                            <Send height={38} width={38} fill="#7165e3" />
                            <Text>Transação</Text>
                        </View>
                        <View style={styles.cardThree}>
                            <Bank height={38} width={38} fill="#7165e3" />
                            <Text>Bancos</Text>
                        </View>
                        <View style={styles.cardThree}>
                            <Chart height={38} width={38} fill="#7165e3" />
                            <Text>Relatórios</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    rowThree: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        paddingRight: 25
    },
    cardThree: {
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingVertical: 25,
        paddingHorizontal: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.02,
        shadowRadius: 5,
        elevation: 5,
        width: '33.33%',
        marginHorizontal: 5,
        marginTop: 15,
        alignItems: 'center',
    },
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 35,
        marginTop: 75
    },
    purpleArea: {
        width: '100%',
        backgroundColor: '#7165e3',
        flex: 0,
        paddingHorizontal: 35,
        paddingBottom: 50,
        paddingTop: 20
    },
    fullArea: {
        flex: 1,
        backgroundColor: '#eeeef0',
        minHeight: '100%',
        minWidth: '100%',
    },
    balanceArea: {
        marginTop: 75,
    },
    balanceAreaBalance: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white'
    },
    balanceAreaText: {
        fontSize: 16,
        color: 'white',
        opacity: 0.6,
        marginBottom: 30
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 20,
        padding: 30,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: -70,
        right: 0,
        left: 0,
        marginLeft: 35,
        marginRight: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    cardSection: {
        width: '50%'
    },
    cardLabel: {
        fontSize: 14,
        opacity: 0.6,
    },
    cardValue: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 22,
        fontWeight: 'bold',
    }
});