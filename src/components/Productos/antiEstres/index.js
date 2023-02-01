import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Datacontext } from "../../../context/Dataprovider";
import { Item } from "../../Item/Item";

export const AntiEstres = () => {
  const value = useContext(Datacontext);
  const [productos] = value.productos;
  const antiEstres = productos.filter(
    producto => producto.category === "antiestres"
  );

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
      <h1 className="title">Anti Estres</h1>
          {isLoading && <h1 style={{textAlign:'center'}}>Cargando...</h1>}

      <div className="productos">
        {products.filter(product => product.category === 'antiestres').map(producto => (
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
        ))}
      </div>
    </>
  );
};
