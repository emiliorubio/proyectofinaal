import React, { useContext } from "react";
import { Datacontext } from "../../../context/Dataprovider";
import { Item } from "../../Item/Item";

export const AntiEstres = () => {
  const value = useContext(Datacontext);
  const [productos] = value.productos;
  const antiEstres = productos.filter(
    producto => producto.category === "antiestres"
  );

  return (
    <>
      <h1 className="title">Anti Estres</h1>
      <div className="productos">
        {antiEstres.map(producto => (
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
