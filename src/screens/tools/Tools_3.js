import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const Tools_3 = () => {

    const text = `    
    5.3 ¿Qué debemos hacer para ayudar a un familiar o amigo a enfrentarse a la muerte de un ser querido debido al suicidio?
    Qué hacer
    
    No buscar culpables de lo sucedido ni hacer juicios de otras personas
    Hablar con la persona   como con cualquier otra que pierde a un ser querido
    Dejar que la persona se exprese y manifieste sus sentimientos y emociones 
    Hacerle saber que usted está preocupado y que está dispuesto a ayudar en lo que se requiera
    Dejar que hable cuando se sienta preparado para hacerlo
    Ofrecer apoyo en las actividades cotidianas, como compras, cuidado de niños, tramites, entre otros.
    Apoyar, con acciones simples como un abrazo, caminar juntos, dar un paseo, entre otros. 
    Continuar brindando apoyo a través del tiempo en fechas significativas, como cumpleaños, aniversarios, entre otras.
    Solicitar ayuda, si también usted siente que necesita apoyo, tanto con familia como con profesionales del área de la salud.
    Decir que lo siente tan pronto como sea posible.
    Hablar de la persona fallecida y de lo valiosa que era para usted.
    Evitar preguntas acerca de los detalles de la muerte.
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


export default Tools_3;