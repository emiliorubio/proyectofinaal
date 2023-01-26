import React, { useContext, useState } from "react";
import { Datacontext } from "../../context/Dataprovider";
import { Link } from "react-router-dom";

export const Item = ({ id, title, price, image, category, autor }) => {
  const value = useContext(Datacontext);
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total;
  const [counterProduct, setCounterProduct] = useState(0);

  const handleAddCantidad = () => {
    setCounterProduct(counterProduct + 1);
  };

  const handleSubtractCantidad = () => {
    if (counterProduct > 0) {
      setCounterProduct(counterProduct - 1);
    }
  };

  const addProducto = () => {
    const newProductToCart = {
      id: Math.random().toString(10),
      title,
      price,
      image,
      category,
      autor,
      cantidad: counterProduct < 1 ? 1 : counterProduct
    };
    console.log(newProductToCart);

    setCarrito([...carrito, newProductToCart]);
    setCounterProduct(0);
  };

  return (
    <div className="producto">
      <Link to={`../Producto/${id}`}>
        <div className="producto__img">
          <img src={image} alt={title} />
        </div>
      </Link>
      <div className="producto__footer">
        <h1>{title}</h1>
        <h4>{autor}</h4>
        <p>{category} </p>
        <p className="price">${price}</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button onClick={handleAddCantidad}>
            <box-icon name="up-arrow" type="solid"></box-icon>
          </button>
          <input
            style={{
              padding: 8,
              width: "30px",
              textAlign: "center",
              border: "none",
              outline: "none"
            }}
            type="number"
            value={counterProduct}
            onChange={handleAddCantidad}
          />
          <button onClick={handleSubtractCantidad}>
            <box-icon name="down-arrow" type="solid"></box-icon>
          </button>
        </div>
      </div>
      <div className="buttom">
        <button className="btn" onClick={() => addProducto()}>
          Añadir al carrito
        </button>
        <div className="bottom">
          <Link to={`/producto/${id}`} className="btn">
            Detalle
          </Link>
        </div>
      </div>
    </div>
  );
};
