import React, {useContext, useState,useEffect} from 'react'
import { getDocs, getFirestore, query, where,collection } from 'firebase/firestore';

import { Datacontext } from '../../../context/Dataprovider';
import { Item } from '../../Item/Item';

export const Velas = () => {

  const value = useContext(Datacontext)
  const[productos] = value.productos
  const velas = productos.filter(producto =>
    producto.category==="vela")

  const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect( () => {
        setIsLoading(true)
        const db = getFirestore()
        const queryCollection = collection (db, 'productos')

        getDocs(queryCollection)
        .then(data => setProducts(data.docs.map(product => ({id:product.id, ...product.data()}))))
        .catch(err => console.log(err))
        .finally(()=> setIsLoading(false))

    }, []);

  return (
    <>
    <h1 className='title'>Velas Aromaterapia</h1>
        {isLoading && <h1 style={{textAlign:'center'}}>Cargando...</h1>}

    <div className='productos'>
        {
            products.filter(product => product.category === 'vela').map(producto =>(
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
