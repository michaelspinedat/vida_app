import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const Strategies = () => {

    const text = `
    6.1 Estrategias de afrontamiento: Hernández, Barbosa, Valdivies, Cruz Forero (2020) producto de la revisión bibliográfica realizada sobre los 7 artículos más relevantes sobre salud móvil, epidemiología, contexto social, necesidades de los pacientes con depresión y riesgo de suicidio; hallaron que aumentar la tolerancia a la angustia, al estrés, la regulación de las emociones, el empoderamiento, la proyección de vida y el fortalecimiento de la red de apoyo; posibilita desarrollar un proceso de prevención en la medida en que se fortalecen las estrategias de afrontamiento. Asimismo, O'Toole, Arendt, y Pedersen (2019), hacen énfasis en la necesidad de que las aplicaciones móviles de salud mental integren actividades y capacitación en habilidades o estrategias de afrontamiento, sin embargo, es necesario saber cuándo y cómo emplear estos métodos para la afirmación de la vida y la prevención de la conducta suicida.

    6.2 Reconocimiento de las emociones, ¿qué hacer frente a una crisis?: Para Bruen, Wall, Delmont, y Perkins (2020) el reconocimiento de las emociones y la calificación o monitoreo de su intensidad, además del reconocimiento de sus efecto en el estado de animo es u aspecto importante a tener en cuenta dentro de una aplicación móvil, que explore la ideación suicida en las personas de una comunidad. La opción de crear planes de seguridad a través de la construcción de un diario, donde el usuario pueda registrar sus actividades diarías, y calificar su estado de animo y sus emociones, favorece la agencia y gestión de las mismas. Para estos autores, lo anterior parece ser una estrategia potente que ayuda a detectar las emociones, su intesidad con el fin de realizar acciones para mitigarlas. Martinengo, Van Galen, Lum, Kowalski, Subramaniam y Car (2019), agregan que el seguimiento del estado de ánimo y su relación con el surgimiento de un pensamiento suicida, pueden llegar a determinar el riesgo en el cual se puede encontrar la persona
    
    6.3 Estrategias de anclaje a la vida: Marquez y Manjarres (2019) en su estudio sobre la  “Red Code aplicación para la prevención del suicidio en jóvenes de Santa Marta.” Plantean, la improtancia de emplear actividades o estrategias de anclaje a la vida, las cuales incluyen la posibilidad de almacenaje de fotos, audios, videos, y frases, que sirven para generar bienestar y que, además, funcionan como amarre a la vida. Ello puede contribuir a la reducción de la vulnerabilidad y a la generación de crisis emocionales.  
    
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


export default Strategies;