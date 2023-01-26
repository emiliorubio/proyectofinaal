import React from 'react'
import DivorcioMh  from "../../../images/divorcio-mh.jpg";
import Depresion  from "../../../images/depresion01.jpg";


export const Divorcio = () => {
  return (
    <div className='divorcio'>
      <div> 
        <h1> ¿Estas Sufriendo por el divorcio?</h1> 
        <h2> --- En esta seccion 
          te ayudaremos con tips y consejos para sobrellevarlo ---</h2>
      </div>
      <div className='ini-divorcio'>
        <div>
          <p>El matrimonio es una experiencia que puede ser extremadamente gratificante. 
            Sin embargo, las relaciones de pareja también son complejas. Es probable que 
            las cosas no funcionen y la relación finalmente termine en divorcio.</p>

          <p>En muchas ocasiones, esta ruptura ocasiona cuadros depresivos en alguno 
            de los miembros de la pareja, y hasta en ambos.</p>

          <p>Antes de entrar a valorar las posibles reacciones afectivas que pueden 
            surgir tras sufrir una ruptura amorosa en relaciones formales, cabe destacar, 
            en primer lugar, de qué estamos hablando cuando nos referimos a una depresión.</p>

          <p>Esto es necesario dado que a menudo se toma por depresión, las reacciones 
            normativas o incluso estados de ánimo en que abunda la tristeza, pero que no 
            cumplen los criterios para llegar a ser una verdadera depresión.</p>
        
        </div>
          
          <div>
            <img  className='img01' src={DivorcioMh} alt="" />
        </div>
      </div>
      <div className='info-divorcio'>
        <h2>¿Qué se debe hacer ante una depresión por divorcio?</h2>
          <p>La depresión tras el divorcio no se supera en un día, una cosa es un duelo 
            por separación y otra cuando ese duelo se convierte en depresión. Es fundamental 
            respetar tus tiempos y saber identificar qué estás sintiendo. No hay unos 
            tiempos adecuados establecidos; cada persona tiene sus circunstancias y debe 
            ir marcando sus tiempos para superar el dolor por una separación.</p>

        <h2>¿Cómo abordar el divorcio cuando hay hijos de por medio?</h2>
          <p>En caso de que el matrimonio contase con hijos dentro del núcleo familiar, 
            es primordial mantener a los niños ajenos a los conflictos y las discusiones 
            de los adultos, ya que no solo se les antepone en una situación de culpabilidad, 
            sino que también pueden sentir que deben elegir a qué bando pertenecer.</p>

          <p>Lo ideal es que cuando hay hijos, se debe comunicar el divorcio de la forma más 
            asertiva posible, desde el amor, explicándole que el hecho de que sus padres no 
            estén juntos no significa que dejarán de estar en todo momento para ellos.</p>

        <h2>Síntomas de la depresión tras el divorcio o ruptura amorosa</h2>
          <ul>
            <li>No poder dormir o dormir más de lo normal.</li>
            <li>Comer en exceso o falta de apetito.</li>
            <li>Fatiga excesiva.</li>
            <li>Dolores extraños e inusuales.</li>
            <li>Consumo excesivo de alcohol o drogas.</li>
            <li>Dificultad de concentración.</li>
            <li>Pensamientos negativos persistentes.</li>
            <li>Irritabilidad o enfado.</li>
            <li>Ansiedad o inquietud.</li>
            <li>Sentimiento de culpa o inutilidad.</li>
            <li>Pesimismo o indiferencia.</li>
            <li>Pérdida de interés en actividades que antes resultaban muy gratificantes para la persona</li>
            <li>Pensamientos recurrentes de muerte.</li>
            <li>Pensamientos suicidas (ayuda profesional inmediata).</li>
          </ul>
          <div className='ini-divorcio'>
          <img className='img02' src={Depresion} alt="" />
          <h3>“Durante este proceso, la persona debería contactar con un especialista si experimenta al 
            menos 4 de los síntomas anteriores en el día a día durante un periodo prolongado de tiempo”.</h3>
          </div>

          <div className='info-ayuda'>
          <h3>Si no tienes los recursos para un atencion privada, en chile contamos con un servicio gratis de atencion de emergencia psicologica.</h3>
          <p>Aca te dejo el link en el cual puedes agendar tu hora por videollamada o por telefono sin costo 
            <a href="https://www.gob.cl/saludablemente/ayudaprofesionales/">   "saludable mente"</a></p>
          
          <h2>¿Que otras atenciones realizan?</h2>
            <h3>A parte de atencion psicologica encontraras Fonos de ayuda como:</h3>
            <ul>
              <li>Salud Responde:<box-icon name='phone' type='solid' animation='tada' ></box-icon> 600 360 7777 (opción 1) 
              <p>Línea especial de atención psicológica y contención emocional.</p></li>
              
              <li>Fono Mayor:<box-icon name='phone' type='solid' animation='tada' ></box-icon> 800 4000 35 <p>
              Atención de especialistas en temáticas de personas mayores.</p></li>
              
              <li>Fono Orientación en Violencia contra la Mujer:<box-icon name='phone' type='solid' animation='tada' ></box-icon>1455 <p>
                  Atención de especialistas para quienes sufren o son testigos de maltrato físico y/o psicológico.</p></li>
              <li>Whatsapp Mujer <box-icon name='whatsapp' type='logo' animation='flashing' color='#2be057' ></box-icon> +569 9700 7000 <p>
              Orientación y contención emocional a mujeres violentadas en situación de confinamiento a través de whatsapp.</p></li>
              <li>Chat Hablemos de Todo:   <box-icon name='globe' animation='burst' color='#3b3fb3' ></box-icon><p>
              Conversemos sin estigmas ni prejuicios sobre los temas que más te preocupan. Injuv invita a jóvenes de entre 15 y 29 años.</p></li>
              <li>Whatsapp de Apoyo Emocional  <box-icon name='whatsapp' type='logo' animation='flashing' color='#2be057' ></box-icon> +569 3710 0023 <p>
              Fundación de las Familias y Primera Dama. Atención en línea de sicólogos a través de whatsapp.</p></li>
              <li>Línea Libre para niños, niñas y adolescentes.  <box-icon name='phone' type='solid' animation='tada' ></box-icon> 1515 <p>
              Fundación para la Confianza e Injuv. Orientación también descargando la app o visitando <a href="https://www.linealibre.cl/">www.linealibre.cl</a></p></li>
              <li>Apoyo a Víctimas de Violencia   <box-icon name='phone' type='solid' animation='tada' ></box-icon> 600 818 1000 <p>
              Orientación e información en salud mental y apoyo psicosocial.</p></li>
              

            </ul>
          </div>
          <div className='info-divorcio'>
            <h2>Algunas sugerencias que te pueden ayudar a hacer ese proceso más llevadero</h2>
              <p>No te compares con otras personas que han pasado por lo mismo que tú. Recuerda que cada situación es diferente y cada persona es diferente. 
                Además, la misma situación no nos afecta a todos por igual.</p>

              <p>No te aísles o vivas solo estas dificultades. Apóyate en tus familiares o amigos, pero debes escoger aquellas personas de tu entorno que 
                tengan buenas habilidades de escucha y que puedan respetar tus sentimientos y constituir una red de apoyo para ti.</p>

              <p>Cuida tu salud física. Come de forma sana, realiza el ejercicio físico que puedas e intenta dormir 
                lo suficiente para mantener buenos niveles de estrés y depresión.</p>

              <p>Planifica la realización de actividades donde conectes con el disfrute. Intenta hacer cosas que en el pasado 
                te resultaban muy gratificantes, aunque haya tristeza o depresión debes cumplir ese plan. No se trata de esperar 
                a estar bien para hacer cosas, sino de hacer cosas para empezar a estar bien.</p>

              <p>Permítete reconocer tus emociones (enfado, culpa, tristeza, soledad, etc.) y siéntelas. La forma de liberarte 
                de tus emociones es reconocer, aceptar lo que estás sintiendo y permitir sentirlas.</p>

            <h2>Recomendaciones psicológicas para sobrellevar la depresión tras el divorcio</h2>
              <p><b>1.- Acude a terapia psicológica.</b> En ocasiones, puede ser complejo superar el divorcio, 
              especialmente en los casos en los que existen disputas legales o hay niños por medio. En estas 
              situaciones, la ayuda de un profesional de la psicología es determinante para recuperar de nuevo 
              el equilibrio emocional.</p>
              <p>El divorcio puede ser una experiencia altamente estresante, algunos expertos hablan de un 
                “trauma post divorcio” debido a la agudeza y la alta intensidad de las reacciones emocionales 
                que la persona experimenta tras la separación.</p>

              <p><b>2.- Sal de la cama y realiza actividades que te brinden unos minutos de alegría.</b> 
              Uno de los síntomas importantes de la depresión es la incapacidad para disfrutar plenamente 
              de las actividades comunes, lo que lleva a la persona a la inactividad y a retroalimentar la 
              sensación de tristeza, por tanto el hacer actividades agradables te ayudará a mejorar y a 
              alcanzar cierta satisfacción y mejorará tu estado de ánimo.</p>

              <p><b>3.- Sé tolerante contigo mismo.</b> Ten en cuenta que el sentirte deprimido no es tu 
              culpa, por lo que no debes condenarte por ello. Centra tu atención en los logros que vas 
              haciendo en el día a día y prémiate por ellos.</p>

              <p><b>4.- Aprovecha el divorcio para crecer.</b> Aprovecha esta oportunidad para centrarte 
              en ti, pues ahora tendrás más tiempo para ello. El hecho de sentirte mal puede permitirte 
              empoderarte frente a la vida si sabes canalizar el dolor y gestionar tus emociones negativas.</p>

              <p><b>5.- Expresa tus emociones.</b> Las emociones forman parte de nuestra naturaleza humana 
              y nos ayudan a interpretar las situaciones. Sentir rabia, cólera, tristeza, entusiasmo, 
              impaciencia etc, es del todo normal y por tanto comunicarlas forma parte de la gestión de las mismas.</p>

              <p><b>6.- No te entregues a la autocompasión.</b> Posiblemente estés en un momento en el que no dejas de 
              darle vueltas a la cabeza preguntándote porque te pasa esto a ti.</p>
              <p>Con ello, lo único que consigues es retroalimentar tu depresión generando más pensamientos negativos 
                y predicciones pesimistas sobre el futuro, lo que hará que cada vez tengas menos percepción de control 
                sobre la situación.</p>
              
          </div>


      </div>
    </div>
  )
}

