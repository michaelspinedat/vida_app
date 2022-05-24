import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { styles } from '../../resources/global';

const Actions_2 = () => {
    const text = `

4.2 Estrategias rápidas para afrontar mis pensamientos suicidas (primero auxilios psicológicos)
No estas sólo: Busca un amigo, un familiar, un terapeuta y trasládale tus inquietudes. No mantengas en secreto tus pensamientos sobre el suicidio. 
Los pensamientos suicidas normalmente están asociados con problemas que pueden resolverse: Si no se te ocurre ninguna solución, no significa que no haya soluciones sino que ahora no eres capaz de verlas. Los tratamientos psicoterapéuticos te ayudarán a encontrar y valorar las opciones adecuadas. 
Las crisis de suicidio suelen ser pasajeras: Aunque ahora sientas que tu abatimiento no va a terminar, es importante reconocer que las crisis no son permanentes. 
Los problemas rara vez son tan graves como parecen a primera vista: Las cosas que ahora te parecen insuperables (problemas financieros, perdida de un ser querido...) con el tiempo, sean seguramente menos graves y más controlables. 
Las razones para vivir ayudan a superar momentos difíciles: Piensa en las cosas que te han sostenido en los momentos difíciles tu familia, tus aficiones, tus proyectos para el futuro.

Mirar la ruta que se diseño para la UAM. (La va a revisar Jara-falta agregarla)
    `;

    return (
        <ScrollView style={styles.textContainer}>
            <Text style={styles.text}>{text}</Text>
        </ScrollView>
    )
};

export default Actions_2;