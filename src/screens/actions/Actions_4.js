import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { styles } from '../../resources/global';

const Actions_4 = () => {
    const text = `4.4 ¿Qué puedo hacer si algún familiar o amigo esta en riesgo?
    Valora la situación seriamente. 
    Sé directo/a. Habla clara y abiertamente sobre el suicidio. 
    Exprésale tu preocupación. 
    Muéstrate dispuesto a escuchar. Deja que la persona hable de sus sentimientos. 
    Acepta sus sentimientos. No los juzgues. No cuestiones si el suicidio es o no correcto. No des sermones sobre el valor de la vida. 
    No desafíes a la persona a que lo haga. 
    Tranquiliza a la persona. 
    No te muestres espantado. Eso no hará́ sino poner distancia entre los dos. 
    Explica que hay alternativas disponibles pero no des consejos fáciles. 
    Busca ayuda profesional e informa de si existe algún antecedente familiar de suicidio. 
    
    `;

    return (
        <ScrollView style={styles.textContainer}>
            <Text style={styles.text}>{text}</Text>
        </ScrollView>
    )
};


export default Actions_4;