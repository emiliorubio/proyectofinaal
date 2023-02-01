import React, {useState, createContext} from "react";

export const Datacontext = createContext();

export const DataProvider = (props) =>{
    const [productos, setProductos] = useState ([])
    const [menu, setMenu] = useState (false)
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)

    const addCart = (product) => {
		const idx = carrito.findIndex(prod => prod.id === product.id)

		if(idx !== -1){
			carrito[idx].cantidad += product.cantidad
			setCarrito([ ...carrito])
		}else{
			setCarrito([...carrito, product]);
		}
		
	}

    const totalPrice = () => carrito.reduce((contador, producto) => contador += (producto.price * producto.cantidad) , 0)

	const totalCant = () => carrito.reduce((contador, producto) => contador += producto.cantidad , 0)

	//Vaciar carro
    const emptyCart = () => {
        setCarrito([])
    }

    //Elimina por item
	const deleteItem = (id) => setCarrito(carrito.filter(prod => prod.id !== id))

    const value = {
        productos : [productos],
        total: [total, setTotal],
        menu,
        setMenu,
        carrito,
        setCarrito,
        addCart,
        totalPrice,
        totalCant,
        emptyCart,
        deleteItem
    }

    return (
        <Datacontext.Provider value = {value}>
            {props.children}
        </Datacontext.Provider>
    )
}