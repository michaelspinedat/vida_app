import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const Strategies_2 = () => {

    const text = `
    6.2 Reconocimiento de las emociones, ¿qué hacer frente a una crisis?: Para Bruen, Wall, Delmont, y Perkins (2020) el reconocimiento de las emociones y la calificación o monitoreo de su intensidad, además del reconocimiento de sus efecto en el estado de animo es u aspecto importante a tener en cuenta dentro de una aplicación móvil, que explore la ideación suicida en las personas de una comunidad. La opción de crear planes de seguridad a través de la construcción de un diario, donde el usuario pueda registrar sus actividades diarías, y calificar su estado de animo y sus emociones, favorece la agencia y gestión de las mismas. Para estos autores, lo anterior parece ser una estrategia potente que ayuda a detectar las emociones, su intesidad con el fin de realizar acciones para mitigarlas. Martinengo, Van Galen, Lum, Kowalski, Subramaniam y Car (2019), agregan que el seguimiento del estado de ánimo y su relación con el surgimiento de un pensamiento suicida, pueden llegar a determinar el riesgo en el cual se puede encontrar la persona
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


export default Strategies_2;