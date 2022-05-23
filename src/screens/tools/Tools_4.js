import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const Tools_4 = () => {

    const text = `
    5.4 ¿Qué debemos hacer para ayudar a la familia después de que un ser querido ha  tenido un intento de suicidio?
    Se debe generar un entorno de seguridad y confianza por parte de la familia, para que la persona se sienta apoyada y acogida en el seno familiar
    Fomentar las habilidades de comunicación familiar.
    Disminuir las situaciones que generen estrés y sobrecarga familiar.
    Ayudar a la solución de problemas en el seno familiar.
    Estimular la restauración de los roles sociales y familiares.
    Romper el aislamiento social y el estigma de las familias de personas con enfermedad mental.
    Se pueden crear en la ciudad escuelas de familia que responda a las necesidades de formación, información apoyo a las familias, amigos y allegados.
    También se pueden generar grupos de ayuda que contribuyan a:
    Brindar orientación a familiares de cómo afrontar los problemas de convivencia diaria y las situaciones de crisis. 
    Desarrollar conductas y actitudes positivas.
    Incrementar las redes de apoyo social.
    Vincular a los integrantes de la familia a programas de respiro familiar que se orientan al apoyo y respiro de la familia.
    
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


export default Tools_4;