import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AudioPlayer from '../components/AudioPlayer';

const Factors = () => {
    const text = `
    Señales de alarma
Me siento triste constantemente (depresión).
Consumo o abuso de ciertas sustancias.
Me siento ansioso sin saber el porqué, no hay una razón aparente.
Tengo dificultad para conectarme emocionalmente con mis familiares, pares, amigos o con la pareja sentimental
Siento que no rindo en el colegio o en la Universidad tanto como desearía y eso me hace sentir desmotivado.
Me siento cómodo aislándome de los entornos sociales.
He intentado suicidarme y soy conciente de ello.
He me herido a mí mismo.
No veo nada bueno en mí.
 Me frustra mi situación de discapacidad y eso me hace sentir mal.
No veo una razón aparente a mi existencia, no le encuentro sentido a mi vida.
Siento que depende de los demás para sentirme bien conmigo mismo.
La pérdida de mi familiar, amigo o mascota me ha afectado demasiado.
La situación económica de mi entorno es a veces compleja y eso me hace sentir mal.

Factores de riesgo –Familiares 
Señales de alarma
La violencia constante en mi entorno familiar me afecta.
La separación de mis padres me generó dolor y tristeza.
Siento que mis padres no me quieren. 
La situación mental de uno de mis familiares afecta mis estados de ánimo.
Siento que en mi casa no cuento con alguien que me ayude, oriente o escuche cuando tengo un inconveniente.
El hecho de haber tenido que salir de mi casa e irme a estudiar o a trabajar a otra ciudad ha afectado mi estado de ánimo.

Factores de riesgo –Sociales
Señales de alarma
Soy victima constante de Bullying y no sé qué hacer.
Siento que a mi alrededor me rechazan y juzgan por mi orientación sexual.
No soy conciente que estar inmerso en las redes sociales afecta mi estado de ánimo y la relación conmigo mismo.
Soy conciente que estar inmerso en las redes sociales afecta mi estado de ánimo y la relación conmigo mismo.
Me siento mal o triste de no poder acceder a la carrera que deseo o anhelo estudiar.
Siento que en la zona en donde vivo no hay oportunidades ni laborales ni académicas ni mucho menos hay algún tipo de apoyo del estado.
El hecho de haber vivido en un entorno marca por la guerra y la violencia me afecto emocionalmente a mi y a mi familia.

    `;

    return (
        <ScrollView style={styles.body}>
            <AudioPlayer audioPath={"factores.mp3"} />
            <Text style={styles.text}>{text}</Text>
        </ScrollView>
    )
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


export default Factors;