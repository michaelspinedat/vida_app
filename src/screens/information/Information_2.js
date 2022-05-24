import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import Reader from '../../components/Reader';

const Information_2 = () => {

    const text = `
2.2 Mito y creencias sobre el suicidio.

El que se quiere matar no lo dice: criterio equivocado, pues conduce a no prestar atención a las personas que manifiestan sus ideas suicidas o amenazan con suicidarse. El criterio científico indica que de cada 10 personas que se suicidan, nueve de ellas manifestaron, claramente, sus propósitos y la otra dejo entre ver sus intenciones de acabar con su vida.

El que lo dice no lo hace: criterio equivocado, ya que conduce a minimizar las amenazas suicidas, que pueden considerarse erróneamente como chantaje, manipulaciones, alardes, entre otros. El criterio científico nos dice que todo el que se suicida expresó lo que ocurría con palabras, amenazas, gestos o cambios de conducta.

Si de verdad se hubiese querido matar, se hubiera tirado de un puente: criterio equivocado, que refleja la agresividad que genera estos individuos en aquellos que no están capacitados para abordarlos. El criterio científico indica que todo suicida se encuentra en una situación ambivalente, es decir, con deseos de vivir y de morir. El método elegido, no refleja los deseos de morir de quien lo utiliza y, proporcionarle, otro de mayor letalidad es calificado como un delito de auxilio suicida, penalizado por el código penal vigente.

El sujeto que se repone de una crisis suicida no corre peligro alguno de recaer: criterio equivocado, que conduce a disminuir las medidas de observación estricta del sujeto y la evolución sistematiza del riesgo suicida. Según el criterio científico casi la mitad de los que atravesaron por una crisis suicida y consumaron suicidio, lo llevaron a cabo después de los tres primeros intentos tras la crisis emocional, cuando todos creían que el peligro había pasado. Lo que ocurre es que cuando la persona mejora, sus movimientos se hacen más ágiles, están en condiciones de llevar varias vías de hecho, las ideas suicidas aún persisten antes, y debido a la inactividad o incapacidad de movimiento ágiles, no podía hacerlo.

Todo el que se suicida está deprimido: criterio equivocado que relaciona el suicidio como sinónimo de la depresión, lo cual no se ajusta a los estrictos hallazgos. El criterio científico indica que, aunque toda persona deprimida tiene posibilidades de realizar un intento de suicidio o suicidio, no todos lo que lo hacen presentan este trastorno; la persona puede padecer esquizofrenias, alcoholismo, trastornos de carácter entre otros.

Todo el que se suicida es un enfermo mental: criterio equivocado que intenta encasillar el suicidio como una enfermedad mental. Como criterio científico se encuentra que los enfermos mentales se suicidan con mayor frecuencia que la población en general, pero no necesariamente hay que padecer un trastorno mental para hacerlo. No cabe ninguna duda, todo suicida es una persona que sufre.

Al hablar de suicidio con una persona en riesgo, se le puede incitar a que lo realice: criterio equivocado que infunde temor para abordar la temática del suicidio en quienes están en riesgo de cometerlo. Criterio científico: está demostrado que hablar sobre el suicidio con una persona en tal riesgo, en vez de incitar, promover o inducir en su cabeza esa idea, reduce el peligro de cometerlo y puede será la única posibilidad que ofrezca el sujeto para el análisis de sus propósitos autodestructivos.

Al acercarse a una persona en crisis suicida sin la correspondiente preparación para ello, solo mediante el sentido común, es perjudicial y se pierde el tiempo para su abordaje adecuado: criterio equivocado que intenta limitar la participación de voluntarios en la prevención del suicidio. Criterio científico: si el sentido común hace que otros puedan asumir una postura paciente y atenta escucha, con reales deseos de ayudar al sujeto en crisis a encontrar otras soluciones que no sean el suicidio, se habrá iniciado una prevención.

El suicida desea morir: criterio equivocado que pretende justificar la muerte por suicidio de quienes lo comenten, y, por lo tanto, tarde o temprano lo llevará a cabo. Criterio científico: el suicida está en una posición ambivalente, es decir, desea morir si su vida continúa de la misma manera y desea vivir sin se produjeran pequeños cambios en ella; su se diagnóstica oportunamente esa ambivalencia, se pueden inclinar la balanza hacia la opción de vida.

El que intenta el suicidio es un cobarde: criterio equivocado que pretende evitar el suicidio equiparándolo con una cualidad negativa de la personalidad. Criterio científico: los que intentan el suicidio no son cobardes sino personas que sufren.

El que intenta el suicidio es un valiente: criterio equivocado que pretende equiparar el suicidio con una cualidad positiva de la personalidad, lo cual entorpece su prevención pues lo justifica haciéndolo sinónimo de un atributo imitable y que todos desean poseer. Criterio científico: los que intentan el suicidio no son valientes ni cobardes, pues la valentía y la cobardía son atributos de la personalidad que no se cuantifican o miden según la cantidad de veces que alguien se quita la vida o se la respeta.

Los medios de comunicación no pueden contribuir a la prevención del suicidio: criterio equivocado que pretende continuar emitiendo noticias sensacionalistas sólo para vender, sin tener en cuenta las consecuencias del mensaje emitido. Criterio científico, los medios de comunicación pueden convertirse en un valioso aliado en la prevención del suicidio, si enfocan correctamente la noticia sobre el tema y cumplen las sugerencias de los suicidólogos sobre cómo difundirlas.
    `;


    return (
        <ScrollView style={styles.body}>
            <Reader text={text.split(" ").slice(0, 60).join(" ")} />
            <Text style={styles.text}>
                {text}
            </Text>
        </ScrollView>
    )
}

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


export default Information_2;