import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { styles } from '../../resources/global';

const Actions_1 = () => {

    const text = `4.1 ¿Qué hacer si presento alguna ideación suicida?
    `;

    return (
        <ScrollView style={styles.textContainer}>
            <Text style={styles.text}>{text}</Text>
        </ScrollView>
    )
};

export default Actions_1;