import React, { useContext, useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import dataBase from '../../Firebase/Credenciales'
import { Datacontext } from "../../context/Dataprovider";
import Modal from "./Modal";
import OrderForm from "./OrderForm";
import {getDatabase,ref,set} from 'firebase/database'



const Checkout = () => {
    const [orderId, setOrderId] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [showModal, setShowModal] = useState(false);
    const { productos, total } = useContext(Datacontext);

    
    
    const createOrder = (e) => {
        e.preventDefault()

        const order = {};
        order.buyer = { name, email, phone };
        order.total = total;
        order.items = productos.map(CartItem => {
            const id = CartItem.id;
            const nombre = CartItem.nombre;
            const precio = CartItem.precio;
            const cantidad = CartItem.quantity;
            return { id, nombre, precio, cantidad };
        })
        
        const db = getDatabase();
        set(ref(db,'orders/' + Math.random().toString(12).replace('.','0')), {
            ...order
        })
        
        // const orderCollection = collection(db, 'orders');
        // addDoc(orderCollection, order)     
        //     .then((docRef) => {
        //         setOrderId(docRef.id);
        //         setShowModal(true)
        //     })
        //     .catch(err => console.log('ERROR AL GENERAL LA ORDEN', err))
        //     .finally()
    }


    const notValid = !(name.length && email.length && phone.length > 0);


    return (
        <div className="checkout-container">
            <h2 className="checkout-title">Completá tus datos</h2>
            <p className="checkout-p">Esto nos permitirá confirmar la compra</p>
            
            <OrderForm 
            createOrder={createOrder}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            notValid={notValid}
            phone={phone}
            setPhone={setPhone}
            setShowModal={setShowModal} />

            {showModal &&<Modal
            showModal={showModal}
            setShowModal={setShowModal}
            orderId={orderId} />}
        </div>
    )

}

export default Checkout;