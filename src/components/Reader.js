import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Tts from 'react-native-tts';

import React from 'react'

const Reader = ({ text }) => {
    Tts.setDefaultLanguage("es-ES");

    const read = () => {
        Tts.stop();
        Tts.speak(text);
    };

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={read}
        >
            <Text>Press Here</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
});

export default Reader;