import React, { useContext } from "react";
import { Datacontext } from "../../context/Dataprovider";
import { Item } from "../Item/Item";

export const ItemListContainer = () => {
  const value = useContext(Datacontext);
  const [productos] = value.productos;
  const libro = productos.filter(producto => producto.category === "libro");

  return (
    <>
      <h1 className="title">Libros</h1>
      <div className="productos">
        {libro.map(producto => (
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
