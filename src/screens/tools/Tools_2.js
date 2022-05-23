import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const Tools_2 = () => {

    const text = `
    5.2 ¿Qué debemos hacer cuando una persona regresa a casa después de un intento suicida? 
    Tomar las recomendaciones dadas por los profesionales sanitarios. 
    No culpabilizar ni tomar represarías frente a lo ocurrido. 
    Identificar los medios que pueden generar riesgos para cometer de nuevo el acto. 
    Saber que esto es un proceso y que se requiere de paciencia para que la persona y sus familiares vuelvan a cobrar la confianza de su cotidianidad. 
    Proporcionar tareas en el hogar, universidad y trabajo para facilitar el proceso de adaptación social. 
    Acudir a psicoterapia y estar bajo control de profesionales de la salud mental. 
    Buscar grupos de apoyo desde sus propios intereses personales para retomar su día a día y que puedan contar con alguien para sentirse escuchado y no juzgado. 
    No subestimar el riesgo de la conducta suicida, pero tampoco estar pendiente de él, intentar y resignificar la vida y vivirla con mayor sentido. 
    El cuidador o las personas que están en un relacionamiento constante con la persona que cometió el acto, en lo posible tener espacios para recargar su energía vital o si es necesario buscar ayuda de un profesional, ya que esto genera tensión, desgaste físico y psicológico. 
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


export default Tools_2;