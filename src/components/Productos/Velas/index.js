import React, {useContext} from 'react'
import { Datacontext } from '../../../context/Dataprovider';
import { Item } from '../../Item/Item';

export const Velas = () => {

  const value = useContext(Datacontext)
  const[productos] = value.productos
  const velas = productos.filter(producto =>
    producto.category==="vela")

  return (
    <>
    <h1 className='title'>Velas Aromaterapia</h1>
    <div className='productos'>
        {
            velas.map(producto =>(
                <Item
                    key={producto.id}
                    id={producto.id}
                    title={producto.title}
                    price={producto.price}
                    image={producto.image}
                    category={producto.category}
                    cantidad={producto.cantidad}
                    autor={producto.autor}
                    
                />
            ))
        }
    </div>
    </>
  );
};