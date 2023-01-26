import React, {useContext} from 'react'
import { Datacontext } from '../../../context/Dataprovider';
import { Item } from '../../Item/Item';

export const Piedras = () => {

  const value = useContext(Datacontext)
  const[productos] = value.productos
  const piedras = productos.filter(producto =>
    producto.category==="piedra")

  return (
    <>
    <h1 className='title'>Piedras Energeticas</h1>
    <div className='productos'>
        {
            piedras.map(producto =>(
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
