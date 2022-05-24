import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { styles } from '../../resources/global';

const Strategies_1 = () => {

    const text = `6.1 Estrategias de afrontamiento: Hernández, Barbosa, Valdivies, Cruz Forero (2020) producto de la revisión bibliográfica realizada sobre los 7 artículos más relevantes sobre salud móvil, epidemiología, contexto social, necesidades de los pacientes con depresión y riesgo de suicidio; hallaron que aumentar la tolerancia a la angustia, al estrés, la regulación de las emociones, el empoderamiento, la proyección de vida y el fortalecimiento de la red de apoyo; posibilita desarrollar un proceso de prevención en la medida en que se fortalecen las estrategias de afrontamiento. Asimismo, O'Toole, Arendt, y Pedersen (2019), hacen énfasis en la necesidad de que las aplicaciones móviles de salud mental integren actividades y capacitación en habilidades o estrategias de afrontamiento, sin embargo, es necesario saber cuándo y cómo emplear estos métodos para la afirmación de la vida y la prevención de la conducta suicida.
    `;

    return (
        <ScrollView style={styles.textContainer}>
            <Text style={styles.text}>
                {text}
            </Text>
        </ScrollView>
    );
};

export default Strategies_1;