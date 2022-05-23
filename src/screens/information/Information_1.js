import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'

const Information_1 = () => {

    const text = `
    
    2.1 ¿Qué es el suicidio? 
La Organización Mundial de la Salud define el suicidio como “un fenómeno multideterminado” (OMS, 2018). Los fenómenos multideterminados exigen que todas las ciencias, disciplinas y campos profesionales renuncien a sus pretensiones de brindar explicaciones e intervenciones totalizantes y nos invitan al diálogo interdisciplinario para comprender e intervenir los fenómenos. Decir que un fenómeno es multideterminado es también una orientación fundamental para la acción, en la medida en que nos permite tomar decisiones sobre cuáles son aquellas determinaciones sobre las que podemos incidir y cuáles están por fuera de nuestro campo de influencia. 
Es decir, si admitimos desde el comienzo las limitaciones de nuestros esfuerzos, podemos focalizar y maximizar el impacto de nuestra incidencia en alguna o algunas determinaciones específicas del fenómeno, renunciando, de antemano, a la ilusión de ser infalibles; con lo cual, estamos contribuyendo, desde una perspectiva científica y técnica, la comprensión e intervención del fenómeno, admitiendo, de antemano, que los alcances de nuestros esfuerzos tienen un límite y que, por lo tanto, no podemos tener una certeza plena del resultado de los mismos.
Es precisamente este carácter multideterminado del fenómeno del suicidio el que justifica que se haya creado, en los años setenta del siglo XX, un campo específico para su estudio e intervención que se llama la suicidología y que este se defina, precisamente, como un campo interdisciplinario en el que se dialoga desde la psicología con las demás disciplinas para la construcción de comprensiones e intervenciones pertinentes. La psicología sirve, por así decirlo, de enlace o puente para que se realice la interlocución de todas las demás disciplinas para la construcción de una.

Determinaciones sociológicas
De las múltiples determinaciones que contribuyen a la comprensión y prevención del suicidio, las que se refieren a las dinámicas sociales son aquellas en las que tenemos mayores posibilidades de incidir en la vida cotidiana desde casi cualquier rol social, profesión u oficio.
Una de las obras más importantes para la comprensión e intervención del fenómeno del suicidio la escribió el sociólogo francés Emile Durkeim a finales del Siglo XIX. Después de más de 120 años, podríamos decir que sigue siendo un referente fundamental para comprender el fenómeno y que muchas investigaciones empíricas contemporáneas confirman la validez de sus planteamientos. También podríamos decir, que en el campo de las ciencias sociales no hay todavía una obra que iguale su importancia en este tema. Algunos de los planteamientos que seguirán a continuación tienen su inspiración fundamental en esta obra, sin pretender hacer una síntesis de la misma, ni ceñirse exclusivamente a ella.
Podríamos decir que este es uno de los principios fundamentales que nos deja la obra de Durkeim, que un ser humano puede llegar al suicidio, tanto por la vía del aislamiento y el aflojamiento de sus vínculos con la comunidad como por la vía del exceso de vinculación con la misma. “Cuando el hombre está desligado de la sociedad se mata fácilmente; fácilmente, también, se mata cuando está con demasiada fuerza integrado a ella” (Durkeim, 2001, pág. 183). Este principio es fundamental para comprender los cuatro tipos de suicidas que nos propone el autor:
Suicida egoísta: resulta de una afirmación del yo individual, frente a la sociedad y en perjuicio de esta. Hay individualidades desmesuradas, que rompiendo todo vinculo de solidaridad se desintegran del tipo social a que pertenecen. Esa separación suele producirse, no por falta de aptitud social, sino por oposición a lo social; no por asocialidad, sino por antisocialidad. Así́ como el suicidio egoísta es un caso de desintegración de determinado tipo social, el altruista es un exceso de integración (Durkhiem, 1928, pág.9)
Suicida altruista: Se produce por una superación de la conducta media social : lo mismo que los hechos honrosos y heroicos que faltan por encima de cierta línea media de conducta. Dos formas le señala Durkheim : la del suicidio-deber y la del suicidio facultativo, producido por exceso de valor o por sobra de fe. En ellas el suicida se elimina de la lucha por la vida obedeciendo a un móvil de debilidad, típicamente desintegrativo. (Durkhiem, 1928, pág.9-10-12)
Suicida anómico: al que carece de regla y de principio y halla su origen en bruscos trastornas del cuerpo social, que rompen su equilibrio y producen en él hondas crisis. Por eso es frecuente su presencia en aquellos tipos sociales que carecen de cohesión, como el mundo mercantil e industrial, que no tiene, como el familiar, el político, el religioso, el corporativo, un elemento aglutinante, de 'suficiente fuerza unitiva. También, por desintegración de los grupos, producida por condiciones de ambiente y por profundas crisis morales, ha sido frecuente el suicidio anómico durante la guerra y subsiste después de ella (…) (Durkhiem, 1928, pág. 10)
Teniendo en cuenta lo antes planteado, para Durkheim (1928), se aprecia una relación del suicidio con hechos biológicos y psíquicos, que son latentes con ciertos estados de determinismo social (pág. 13). Por lo tanto, el suicidio, es un fenómeno social y suceso moral, que halla su basa en el egoísmo o en el altruismo. Cabe señalar, que ciertos factores sociales e individuales forman una red compleja en la etiología del suicidio.	
Dos principios para la intervención
De estos planteamientos podemos derivar un principio fundamental para la prevención de la conducta suicida, podríamos formularlo de esta manera: todo lo que está del lado de la exclusión social, está del lado de los factores de riesgo de suicidio y, todo los que está del lado de la inclusión, está del lado de los factores protectores. Con base en este principio podemos diseñar programas de prevención, contextualizados en todos los escenarios sociales mediante un diagnóstico colectivo de los factores de exclusión más importantes que se presentan allí y el diseño de estrategias participativas para transformar las dinámicas de exclusión y favorecer la inclusión de las personas excluidas.
También nos queda una reflexión crítica sobre el riesgo que representan las comunidades que desarrollan dinámicas totalitarias que pretenden uniformar radicalmente a sus integrantes y borrar las particularidades y las ideas o manifestaciones que difieren de la doctrina que rige al conjunto; igualmente, queda la reflexión sobre el riesgo de llevar a los seres humanos a situaciones límite en que se sientan acorralados.
    `;


    return (
        <ScrollView style={styles.body}>
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


export default Information_1;