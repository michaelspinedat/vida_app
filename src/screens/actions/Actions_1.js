import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const Actions_1 = () => {
    const text = `
    4.1 ¿Qué hacer si presento alguna ideación suicida?
    `;


    return (
        <ScrollView style={styles.body}>
            <Text style={styles.text}>{text}</Text>
        </ScrollView>
    )
};

const styles = StyleSheet.create({

    body: {
        flex: 1,
        padding: 35
    },

    text: {
        fontSize: 25,
        textAlign: "justify"
    }
});

export default Actions_1;