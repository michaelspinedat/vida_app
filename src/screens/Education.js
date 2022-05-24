import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'
import Reader from '../components/Reader';

const Education = () => {

    const text = `
    La salud como producto social que se construye a partir de los aportes individuales y colectivos que responde a factores históricos, sociales, económico, políticos, ambientales entre otros, han hecho que ésta se tenga que abordar de manera integral, al tratar de comprender los fenómenos que la movilizan, delimitan y determinan. Es por esto que, son varias las estrategias que hoy en día resultan útiles para lograr una salud integral, como son las estrategias de promoción de la salud pero del mismo modo desde la prevención de la enfermedad, que por un lado necesitan estar direccionados a comprender dichos fenómenos sociales relacionados con la salud; para tratar de encontrar las posibles intervenciones e interacciones con la comunidad que permitan aumentar las capacidades institucionales, sociales, comunitarias, familiares y personales para afrontar la vida. Es así como desde la Salud Pública, se han implementado estrategias educativas y comunicativas basadas en los procesos de intercambio de saberes denominadas actualmente como: “Estrategias de Educación y Comunicación para la Salud”. (Ministerio de Salud y Protección Social. La ruta de la educación y comunicación para la salud, orientaciones para su aplicación estratégica (2014).

A partir de lo que el Ministerios de Salud y Protección Social de Colombia plantea, la educación y comunicación para la salud, indica que, “un proceso de construcción del conocimiento y aprendizaje mediante el dialogo de saberes, orientado al desarrollo y fortalecimiento del potencial y las potencialidades de las personas, las familias, las comunidades, las organizaciones y las redes para la promoción de la salud individual y colectiva, la gestión del riesgo y la transformación positiva de los diferentes entornos” (Ministerio de Salud y Protección Social (2016)), se hace necesario el identificar los actores que en materia de salud interactúan, incluyendo a la comunidad, el personal sanitario y de otros sectores de la sociedad.  

Para contextualizar esta estrategia se parte de su definición: “La educación y comunicación para la salud - ECpS son acciones que se realizan para contribuir a la salud integral de las personas; donde ellas desarrollan su potencial y sus capacidades para actuar de manera consciente en el cuidado integral de su propia salud y de las condiciones del entorno físico y socio – cultural al que pertenecen, en el marco del ejercicio político que les corresponde como ciudadanos. La estrategia ECpS se basa en el encuentro de saberes, el diálogo, una comprensión holística de la persona y la búsqueda de sentido; que lleve a las personas a desarrollar un saber (tener razones), comprender (concebir la esencia), sentir (desear) y actuar (tener las habilidades); es decir que queda impregnada su cabeza, su corazón y sus manos”. Ministerio de Salud y Protección Social. La ruta de la educación y comunicación para la salud, orientaciones para su aplicación estratégica (2014).
Con esto, es importante diferenciar lo que es educación para la salud y educación en salud. La primera hace referencia a cualquier actividad de difusión de información, que no tiene un foco poblacional dirigido e intencionado, es decir, información general que carece de contexto y propósito, basado en modelos transmisionistas, en las que el objetivo es entregar información específica, pero en la que los procesos de entendimiento y diálogo no se dan. Por el contrario, cuando se hace se realizan procesos de educación en salud, se hace uso de las intencionalidades y propósitos bien definidos, como herramienta para facilitar el desarrollo de las capacidades cognitivas, valorativas y prácticas, que logren transformaciones y cambios en las poblaciones y sus realidades a partir de las motivaciones, experiencia y vivencia de las personas, más no en formas de difusión masiva que no faciliten estas trasformaciones. 

Esta estrategia de educación en salud, se define como: “un conjunto de actividades relacionadas, que parten del reconocimiento de la realidad (hechos sociales, históricos, políticos, culturales psicosociales, ambientales, etc.), de la identificación de los diversos factores que la afectan a fin de aportar a la comprensión cómo tales hechos determinan sus vidas y, en consecuencia, a la construcción de saberes, valores y prácticas que le apunten al mejoramiento de la salud y de la calidad de vida de los pobladores que habitan los territorios”. Ministerio de Salud y Protección Social (2016).

Sin embargo, para lograr estas transformaciones es imprescindible llegar a un buen entendimiento de las dinámicas demográficas y territoriales, sus patrones de morbilidad, mortalidad, factores de riesgo y patrones de comportamiento, para que, a partir de acciones pedagógicas bien intencionadas y dirigidas, logran articular el conocimiento técnico de profesionales de áreas sociales y de la salud, así como del conocimiento y los aprendizajes de las personas y las comunidades como agentes de cambio y trasformación, fundamentados en la realidad social, cultural, económica y política de las comunidades particulares a las que se dirige la educación para la salud. 

    `;

    return (
        <ScrollView style={styles.body}>
            <Reader text={text.split(" ").slice(0, 60).join(" ")} />
            <Text style={styles.text}>
                {text}
            </Text>
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



export default Education