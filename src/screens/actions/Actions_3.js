import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { styles } from '../../resources/global';

const Actions_3 = () => {
    const text = `4.3 ¿Qué puedo hacer? Consejos ante un pensamiento suicida

    No decidas nada ahora, tomate un tiempo 
    Las cosas cambian ha si tu no lo creas, todo es transitorio y temporal. 
    No consumas alcohol o drogas 
    Aléjate de cualquier cosa que pueda causarte daño 
    Busca compañía, busca en tus contactos personas que te puedan escuchar 
    Recuerda que no es beneficioso actuar de forma impulsiva, con el tiempo el pensamiento del suicidio desaparecerá.
    Elabora un listado de servicios 24 horas que atiendan estas situaciones. 
    Lo más importante es abrirse a los demás y comunicar tus pensamientos a alguien en quien confíes, o a algún profesional de la salud. 
    Dale a tu terapeuta los datos de un amigo, familiar u otra persona que pueda ayudar. 
    Si sigues un tratamiento por enfermedad mental has de hablar con tu médico. 
    En caso de autolesionarte, o sentir un peligro inminente de hacerlo, dirígete al Servicio de Urgencias del Hospital o del Centro de Salud más próximo o llama al 123 (o podemos acá incluir el número de angel UAM o de las lineas de atención de la territorial de salud).
    
    `;

    return (
        <ScrollView style={styles.textContainer}>
            <Text style={styles.text}>{text}</Text>
        </ScrollView>
    )
};

export default Actions_3;