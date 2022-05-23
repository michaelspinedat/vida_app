import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const Tools_1 = () => {

    const text = `
    5.1 ¿Qué debemos hacer cuando la persona se encuentra en la clínica después de un intento de suicidio?

    Facilitar toda la información posible a los profesionales que están atendiendo el caso, sin ocultar datos importantes que puedan ayudar a evaluar los motivos de la conducta suicida. Esta información puede ser: intentos previos de suicidios, antecedentes familiares frente a esta conducta de suicida, trastornos mentales y tratamiento actuales, información sobre las circunstancias que posiblemente llegaron al intento suicida, etc. 
    Reconocer, aceptar y no culpabilizar a la persona por haber realizado esta conducta, mantener una actitud empática y de escucha hacia la persona. 
    Mantenerse tranquilos para no dramatizar el problema, buscar soluciones prácticas para la prevención de una posible repetición del acto. 
    Sacar provecho de la hospitalización para analizar en familia las posibles causas, soluciones y roles de los integrantes de la familia para mitigar una posible repetición del acto. 
    
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
        // alignItems: "center",
        // justifyContent: "center",
        padding: 35
    },

    text: {
        fontSize: 25,
        textAlign: "justify"
    }
});


export default Tools_1;