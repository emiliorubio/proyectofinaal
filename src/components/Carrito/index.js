import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Datacontext } from "../../context/Dataprovider";

export const Carrito = () => {
  const navigate = useNavigate()
  const {totalPrice,carrito, setCarrito,menu, setMenu} = useContext(Datacontext);

  const tooglefalse = () => {
    setMenu(false);
  };


  const show1 = menu ? "carritos show" : "carritos";
  const show2 = menu ? "carrito show" : "carrito";

  const removeProducto = id => {
    if (window.confirm("¿quieres eliminar el producto")) {
      carrito.forEach((item, index) => {
        if (item.id === id) {
          item.cantidad = 1;
          carrito.splice(index, 1);
        }
      });
      setCarrito([...carrito]);
    }
  };

  const handleDeleteCarrito = () => {
    setCarrito([]);
  };

  return (
    <div className={show1}>
      <div className={show2}>
        <div className="carrito__close" onClick={tooglefalse}>
          <box-icon name="x"></box-icon>
        </div>
        <h2>Su carrito</h2>

        <div className="carrito__center">
          {carrito.length === 0 ? (
            <h2
              style={{
                textAlign: "center",
                fontSize: "3rem"
              }}
            >
              Carrito Vacio
            </h2>
          ) : (
            <>
              {carrito.map(producto => {
                console.log(producto)
                return (

                  <div className="carrito__item" >
                  <img src={producto.image} alt="Imagen producto" />
                  <div>
                    <h3>{producto.title}</h3>
                    <p className="price">${producto.price}</p>
                  </div>
                  <div>
                    <p className="cantidad">{producto.cantidad}</p>
                  </div>
                  <div
                    className="remove__item"
                    onClick={() => removeProducto(producto.id)}
                    >
                    <box-icon name="trash"></box-icon>
                  </div>
                </div>
                    )
})}
            </>
          )}
        </div>
        <div className="carrito__footer">
          <h3>Total: ${totalPrice()}</h3>
          {carrito.length > 0 && (
            <button
              style={{
                color: "#fff",
                backgroundColor: "darkred",
                border: "none",
                borderRadius: 5,
                padding: 10,
                cursor: "pointer"
              }}
              onClick={handleDeleteCarrito}
            >
              Vaciar Carrito
            </button>
          )}

          {carrito.length > 0 && (
            <button
              style={{
                marginLeft: 5,
                color: "#fff",
                backgroundColor: "darkgreen",
                border: "none",
                borderRadius: 5,
                padding: 10,
                cursor: "pointer"
              }}
              onClick={ ()=> navigate('/cart')}
            >
              Pagar
            </button>
          )}

          {carrito.length <= 0 && (
            <button
              style={{
                marginLeft: 5,
                color: "#fff",
                backgroundColor: "black",
                border: "none",
                borderRadius: 5,
                padding: 10,
                cursor: "pointer"
              }}
              onClick={tooglefalse}
            >
              volver a la tienda
            </button>
          )}


        </div>
      </div>
    </div>
  );
};
