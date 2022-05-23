import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const Strategies_4 = () => {

    const text = `
    6.4 Fortalecer la red de apoyo: Larsen, Nicholas y Christensen (2016) producto de la revisión sistemática que realizaron para examinaron el contenido de la aplicación y de las estrategias para la prevención del suicidio encontraron que: de las 123 aplicaciones que se refieren al suicidio, 49 de ellas contenían al menos una función interactiva de prevención del suicidio. Esta función interactiva tenía como propósito obtener apoyo de amigos y familiares para así planificación planes o estrategias de seguridad; aspecto que, sin duda, debe tenerse en cuenta en aquellas apps que propendan por la prevención del suicidio. Martinengo et al., (2019) señalan, que la red de apoyo se puede realizar a través de una lista estructurada y estandarizada de 6 pasos, donde se identifican las personas que hacen parte de su red de apoyo. Agregan los autores que esta red de apoyo permite guardar información de familiares o redes de atención primaria en salud.
    
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


export default Strategies_4;