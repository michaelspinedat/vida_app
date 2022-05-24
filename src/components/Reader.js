import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Tts from 'react-native-tts';

import React, { useState } from 'react'

const Reader = ({ text }) => {

    const [isPlaying, setIsPlaying] = useState(false);
    Tts.setDefaultLanguage("es-ES");

    const read = () => {
        if (isPlaying) {
            Tts.stop();
            setIsPlaying(false);
        } else {
            Tts.speak(text);
            setIsPlaying(true);
        }
    };

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={read}
        >
            <Text style={styles.buttonText}> {isPlaying ? "Detener" : "Leer"}  </Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#B5B5B5",
        padding: 10,
        marginBottom: 15
    },

    buttonText: {
        fontSize: 20
    }
});

export default Reader;