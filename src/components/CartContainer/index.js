
import React, { useContext } from "react";
import { addDoc, collection, getFirestore, } from "firebase/firestore";
import { Datacontext } from "../../context/Dataprovider";
import { useState } from "react"
import { Link } from "react-router-dom";

const CartContainer =()=> {
	const [dataForm, setFormData] = useState({
		name: '',
		email: '',
		phone: ''
	})

	const [orderId, setOrderId] = useState(null);
	const [showOrden, setShowOrden] = useState({displayOrder: false, orderCost: 0})
	const [errorOrden, setErrorOrden] =useState(false)

	const { carrito, emptyCart, totalPrice, deleteItem } = useContext(Datacontext);

	//Formulario
	const addOrder = (e) => {
		e.preventDefault()

		const order = {}
		order.buyer = { name: '', phone: '', email: '' }
		order.price = totalPrice()
		order.items = carrito.map(product => ({ id: product.id, price: product.price, title: product.title }))

		console.log(order.items)

		const db = getFirestore()
		const queryCollection = collection(db, 'orders')

		addDoc(queryCollection, order)
			.then(resp => {
				setOrderId(resp.id)
				console.log(orderId)
				setShowOrden({displayOrder:true, orderCost:order.price})
				emptyCart()
			})
			.catch(err => {console.log(err)
				setErrorOrden(true)})

	}
	const handleOnChange = (e) => {
		setFormData({
			...dataForm,
			[e.target.name]: e.target.value
		})
	}

	const noValido = !(dataForm.name.length && dataForm.email.length && dataForm.phone.length > 0)


	return (
		<div>
			{carrito.length !== 0 ?
                
				<>{!showOrden.displayOrder && <>
					{carrito.map(prod => {
                        console.log(prod)
                        return (
                        <div key={prod.id}>
                                <div className="w-50">
							<img src={prod.image} alt="Foto del Producto." className="w-25" />
						</div>

						<h2>Categoría: {prod.category}</h2>
						<h3>Nombre: {prod.title}</h3>
						<h3>Precio: ${prod.price}</h3>
						<h2>cantidad: {prod.cantidad}</h2>
						<br />
						<button onClick={() => deleteItem(prod.id)} className="btn btn-danger"> X </button>
                        </div>
                        )
                    }
					)}

					<h4>El precio total es: {totalPrice()}</h4>

					<form onSubmit={addOrder} >
						<div className="form-field  mt-3">

							<input required type="text" onChange={handleOnChange} name='name' value={dataForm.name}
								placeholder="Ingrese el nombre" /></div>
						<div className="form-field  mt-3">
							<input required type="tel" onChange={handleOnChange} name='phone'
								value={dataForm.phone} placeholder="Ingrese el telefono" /></div>
						<div className="form-field  mt-3">
							<input required type="text" onChange={handleOnChange} name='email'
								value={dataForm.email} placeholder="Ingrese el email" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" /></div>
						<button disabled={noValido} className="btnFinish mt-3">Terminar compra</button>
					</form>
					<button className="btnEmpty mt-3" onClick={emptyCart}> Vaciar Carrito</button></>}
				</>
				:
				<>
					{showOrden.displayOrder && <>
						<h2 className="Orden">Nombre: {dataForm.name}</h2>
						<h2 className="Orden">Telefono:{dataForm.phone}</h2>
						<h2 className="Orden">Correo: {dataForm.email}</h2>
						<br />
						<h2 className="OrdenTotal">Total de la compra: ${showOrden.orderCost}</h2>
						<br />
						<h3>Para hacer seguimiento de tu compra, utiliza el siguiente codigo:</h3>
						<h2 className="Id">ID de compra: {orderId}</h2>
					</>}

					{errorOrden && <h1>Hubo un error en su pedido.</h1>
					}

					<h2 className="mt-5">Compren algo a su Michi.</h2>
					<Link to='/' ><img src="https://media.tenor.com/uneqmK1ERo8AAAAj/tkthao219-bubududu.gif" /></Link>
				</>
			}
		</div>
	);
}

export default CartContainer;