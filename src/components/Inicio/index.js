import React from 'react'
import { Item } from "../Item/Item";
import basta from "../../images/basta-de-amores-de-mierda.jpg";
import ahora from '../../images/ahora-te-toca-ser-feliz.png';
import aprende from "../../images/aprende-como-vencer-tus-miedos-de-forma-eficaz.jpg"


export const Inicio = () => {
    return (
        <div className='inicio'>
            <nav>
                <h1 className="namePage">A | P</h1>    
                <h3 className="slogan" > <strong> Amor Propio</strong></h3>
                <h5 className="subtitle">Eres todo lo que necesitas</h5>
            </nav>
            <nav className="proposite">
                <h2>En este blog volveras a encontrarte contigo mismo</h2>
            </nav>

            <div>
                <nav className="sub-title ">
                    <h3> ---La motivación no sirve de nada sin acción---</h3>
                    <p >Los temas de crecimiento personal tienen el potencial de transformarnos para bien siempre y cuando llevemos a la práctica este conocimiento. En esta sección te comparto una serie de materiales prácticos, didácticos y entretenidos que te acercarán a esa versión de ti que tienes como objetivo</p>
                </nav>
            </div>

            <div><h2>Te recomendamos estos libros...</h2></div>
            <div className="contenedor01">
                
        
                <div className="box01"><h3>¿Problemas de amor?</h3>
                    <Item
                    id={1}
                    title= "BASTA DE AMORES DE MIERDA II"
                    price= "10000"
                    image={basta}
                    autor= "Gonzalo Romero"
                    category="libro"
                    cantidad="1"
                    />
                </div>   
                <div className="box02"><h3>¿Problemas de autoestima?</h3>
                <Item
                    id={2}
                    title= "AHORA TE TOCA SER FELIZ"
                    price= "8990"
                    image={ahora}
                    autor= "Curro Cañete"
                    category="libro"
                    cantidad="1"
                    />
                </div>
                <div className="box03"><h3>¿Tienes Miedos?</h3>
                <Item
                    id={3}
                    title= "Aprende como vencer tus MIEDOS de forma eficaz"
                    price= "7000"
                    image={aprende}
                    autor= "Gamaliel Prince"
                    category="libro"
                    cantidad="1"
                    />
                </div>
            </div>
        </div>

    )
}
