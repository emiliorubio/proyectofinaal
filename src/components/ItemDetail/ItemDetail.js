import React, { useContext, useEffect, useState } from "react";
import { Datacontext } from "../../context/Dataprovider";
import { useParams } from "react-router-dom";
import { Item } from "../Item/Item";

export const ItemDetail = () => {
  const value = useContext(Datacontext);
  const addCarrito = value.addCarrito;
  const [productos] = value.productos;
  const [detalle, setDetalle] = useState([]);
  const params = useParams();
  let item = 0;

  useEffect(() => {
    productos.forEach(producto => {
      if (producto.id === parseInt(params.id)) {
        setDetalle(producto);
      }
    });
  }, [params.id, productos]);

  return (
    <>
      {
        <div className="detalles">
          <div className="detalle-left">
            <img src={detalle.image} alt={detalle.title} />
          </div>
          <div className="detalle-rigth">
            <div>
              <h1>{detalle.title}</h1>
              <p className="price">${detalle.price}</p>
              <p>Edicion Limitada</p>
              <div className="buttom">
                <button className="btn" onClick={() => addCarrito(detalle.id)}>
                  Añadir al carrito
                </button>
              </div>
            </div>
            <div>
              <h2>"Aprovecha esta oferta por tiempo limitado"</h2>
              <p>
                <b>Descripcion: </b>
                {detalle.description}
              </p>
            </div>
          </div>
        </div>
      }

      <h2 className="relacionados">Productos relacionado</h2>
      <div className="productos">
        {productos.map(producto => {
          if (item < 6 && detalle.category === producto.category) {
            item++;
            return (
              <Item
                key={producto.id}
                id={producto.id}
                title={producto.title}
                price={producto.price}
                image={producto.image}
                autor={producto.autor}
                category={producto.category}
                description={producto.description}
              />
            );
          }
        })}
      </div>
    </>
  );
};
