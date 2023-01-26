import React from "react";
import ReactPlayer from 'react-player'


export const Duelo = () => {
  return (
    <div className="duelo">
        
        <div className="proposite-duelo">
            <h2>
            En esta seccion te ayudaremos a canalizar tus emociones o ayudar a un
            tercero a vivir estas distintas situaciones cuando perdimos un ser querido
            </h2>
        </div>
        <div className="content-duelo">
            <h2> ¿Perdiste a un ser querido?</h2>
            <p>    
            No por inevitable es menos dolorosa una pérdida. El fallecimiento de
            un ser querido genera una situación estresante, pero el duelo es un
            proceso normal y muy necesario dentro de la función adaptativa que
            permitirá al doliente reconstruir su vida. Saber cómo animar a alguien
            que ha perdido un ser querido puede facilitar ese proceso de duelo. El
            acompañamiento lo hace más llevadero porque alivia y reconforta, así
            que si alguien que te importa está pasando por unos momentos duros,
            debes estar intentar hacerte presente de una manera efectiva.
            Consideramos importante abordar este punto porque es habitual sentir
            que se está invadiendo el espacio de la otra persona o tener temor a
            decir algo inapropiado. Pero es mejor estar que no estar, y no podemos
            pretender tener las respuestas o los consejos apropiados para momentos
            como este. Nadie los tiene.
            </p>

            <h3>Formas de animar a alguien tras la muerte de un ser querido</h3>
            
            <p>Es mucho lo que puedes hacer por esa persona que te importa y que acaba
                de perder a uno de sus seres queridos, así que lo vemos paso a paso.</p>
            
            <div className="listas">
                <ol>
                    <li><b>1. Entiende el proceso de duelo</b></li>
                        
                        <p>Lo primero que te debe quedar claro es que cada persona vive el 
                        duelo a su modo, y no hay dos procesos exactamente iguales.<b>Trata
                        de acercarte sin juzgar sus emociones ni cuestionar el tiempo que la
                        otra persona necesita.</b></p>
                        
                        <p>El doliente va a experimentar emociones muy intensas como el enfado,
                        la ira o la desesperación, y todas ellas son normales. No solo se trata
                        de que no juzgues, sino de evitar que él/ella lo haga consigo mismo/a.
                        Explícale que lo que siente es normal.</p>
                    
                    
                    <li><b>2. Más escuchar que decir</b></li>
                        
                        <p>En la mayoría de ocasiones, la mejor manera de animar a alguien que ha
                            perdido a un ser querido es escuchando. Y esto, que parece fácil en 
                            comparación con encontrar las palabras adecuadas, puede resultar muy 
                            difícil.</p>
                        
                        <p>Hay personas que sienten incomodidad ante la mención de un fallecido,
                            por eso evitan hablar sobre él/ella. Trata de superar esa sensación 
                            desagradable para poder acercarte de verdad a la otra persona y, si 
                            es el propio doliente el que se siente así,<b> hazle ver que 
                            no tiene nada de terrible hablar sobre la persona que se ha ido.</b></p>
                        
                        <p>Habrá días en la que la otra persona quiera sentarse en silencio, 
                            otros en los que no quiera recibir visitas, otros en los que quiera 
                            llorar sin parar y algunos en los que necesite hablar sobre lo que pasó. 
                            En cualquier situación, siéntate a escuchar con compasión y comprensión.</p>
                    
                    
                    <li><b>3. Ofrece ayuda práctica</b></li>
                        <p>Ofrecer pequeñas ayudas para afrontar el día a día también es una manera muy 
                            útil de hacerse presente, más aún si tenemos en cuenta que<b> muchas personas 
                            no la solicitan por la sensación de culpa.</b> No les gusta sentirse necesitados 
                            ni que demandan demasiada atención de los demás</p>
                        
                        <p>Decir <b>“Estoy aquí para lo que necesites”</b> es muy habitual, aunque cabe preguntarse 
                            por la profundidad y la sinceridad de ese mensaje. Si la persona que ha perdido 
                            a tu ser querido es muy cercana a ti, puedes probar con algo más concreto.</p>
                        
                        <p>Hablamos de preguntarle si necesita algo cuando vas al supermercado, de acercarle algo 
                            de comida, de ayudarle con los detalles del funeral y otros trámites, de <b>cuidar a sus 
                            hijos/as</b>, de acompañarle a algún lugar al que necesite es o de invitarle a cenar. 
                            También puedes ofrecerle hacer algo que le permita desconectar, como dar un paseo, 
                            practicar ejercicio o ver una película.</p>

                    
                    <li><b>4. Hazte presente más allá del funeral</b></li>

                        <p>La mayoría de las personas desaparecen casi por completo después del funeral. 
                            Puede que tuvieran más relación con la persona que falleció que con sus seres queridos, 
                            que no sea alguien muy cercano o que quiera evitar sentir incomodidad.<b> Pero precisamente 
                            cuando termina el funeral es cuando más intenso se vuelve el duelo.</b></p>

                        <p>Si la otra persona te importa, mantén el contacto con ella. Hazle una visita de vez 
                            en cuando o <b>envíale un mensaje para que vea que la tienes en tus pensamientos y sigues 
                            en disposición de ayudar.</b> Es importante que seas sensible a su dolor y no esperes que lo 
                            supere, sino ayudarle en ese proceso de aprender a vivir sin su ser querido.</p>

                        <p>Ese aprendizaje adaptativo puede durar más o menos, pero debes prestar atención a ciertas 
                            <b>señales que te indiquen que el doliente podría necesitar la ayuda de un especialista.</b> 
                            Si no hay una evolución lógica de emociones o el duelo empeora, asesórate y pide ayuda.</p>

                        <p>Algunos hábitos que ofrecen pistas prácticamente inequívocas son el aislamiento total, el 
                            constante sentimiento de desesperanza, el abuso del alcohol y drogas o incluso las 
                            alucinaciones, además del recurrente tema de la muerte o incluso del suicidio.</p>

                </ol>
            </div>
            <div>
                <h2 className=" title-vid-duelo">
                    A continuacion te dejo algunos videos con tips para vivir el duelo de una manera mas amena con ayuda
                    de profesionales y una reflexion sobre el duelo
                </h2>
            </div>

            <div className="cont-vid-duelo">
                <div className="vid-01">
                <ReactPlayer
                url='https://www.youtube.com/watch?v=nsfRd7miATs'
                className='react-player'
                controls
                width='100%'
                height='100%'
                />
                </div>   
                <div className="vid-02">
                <ReactPlayer
                url='https://www.youtube.com/watch?v=ldtgpBJA4fE'
                className='react-player'
                controls
                width='100%'
                height='100%'
                />
                </div>
                <div className="vid-03">
                <ReactPlayer
                url='https://www.youtube.com/watch?v=DiXQy877H3w'
                className='react-player'
                controls
                width='100%'
                height='100%'
                />
                </div>
            </div>
        </div>
    </div>
    );
};
