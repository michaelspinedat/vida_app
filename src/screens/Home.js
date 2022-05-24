import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from "../assets/imgs/logo.png";

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Vida App</Text>
            <Image
                style={{ width: 100, height: 100, marginBottom: 15 }}
                source={logo}
            />
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        fontSize: 40
    }
});