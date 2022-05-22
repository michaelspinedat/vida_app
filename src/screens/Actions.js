import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const Actions = () => {
    const text = `
    4.1 ¿Qué hacer si presento alguna ideación suicida?

4.2 Estrategias rápidas para afrontar mis pensamientos suicidas (primero auxilios psicológicos)
No estas sólo: Busca un amigo, un familiar, un terapeuta y trasládale tus inquietudes. No mantengas en secreto tus pensamientos sobre el suicidio. 
Los pensamientos suicidas normalmente están asociados con problemas que pueden resolverse: Si no se te ocurre ninguna solución, no significa que no haya soluciones sino que ahora no eres capaz de verlas. Los tratamientos psicoterapéuticos te ayudarán a encontrar y valorar las opciones adecuadas. 
Las crisis de suicidio suelen ser pasajeras: Aunque ahora sientas que tu abatimiento no va a terminar, es importante reconocer que las crisis no son permanentes. 
Los problemas rara vez son tan graves como parecen a primera vista: Las cosas que ahora te parecen insuperables (problemas financieros, perdida de un ser querido...) con el tiempo, sean seguramente menos graves y más controlables. 
Las razones para vivir ayudan a superar momentos difíciles: Piensa en las cosas que te han sostenido en los momentos difíciles tu familia, tus aficiones, tus proyectos para el futuro.

Mirar la ruta que se diseño para la UAM. (La va a revisar Jara-falta agregarla)

4.3 ¿Qué puedo hacer? Consejos ante un pensamiento suicida

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

4.4 ¿Qué puedo hacer si algún familiar o amigo esta en riesgo?
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
        <ScrollView style={styles.body}>
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

export default Actions;