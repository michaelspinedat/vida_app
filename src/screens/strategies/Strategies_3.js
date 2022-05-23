import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const Strategies_3 = () => {

    const text = `
    6.3 Estrategias de anclaje a la vida: Marquez y Manjarres (2019) en su estudio sobre la  “Red Code aplicación para la prevención del suicidio en jóvenes de Santa Marta.” Plantean, la improtancia de emplear actividades o estrategias de anclaje a la vida, las cuales incluyen la posibilidad de almacenaje de fotos, audios, videos, y frases, que sirven para generar bienestar y que, además, funcionan como amarre a la vida. Ello puede contribuir a la reducción de la vulnerabilidad y a la generación de crisis emocionales.
    `;

    return (
        <ScrollView style={styles.body}>
            <Text style={styles.text}>
                {text}
            </Text>
        </ScrollView>
    );
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


export default Strategies_3;