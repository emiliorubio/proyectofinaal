import React, { useState } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

export const Login = ({openModal}) => {
  const [isRegistrando, setIsRegistrando] = useState(false);


  function submitHandler(event) {
    event.preventDefault();

     const email = event.target.elements.email.value;
     const password = event.target.elements.password.value;
     const rol = event.target.elements.rol.value;

     if (isRegistrando) {
       // registrar
     } else {
       // login
       signInWithEmailAndPassword( email, password).then(resp=> {
        if(resp.user) {
           openModal(false)
           setTimeout(()=>{
             window.location.reload()
           },2000)
        }
       });
     }
  }

  const closeModal = ()=> {
    openModal(false)
  }

  return (
    <div className="container-form">
      <section className="form-content">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <h1>{isRegistrando ? "Regístrate" : "Inicia sesión"}</h1>
      <div style={{cursor:'pointer'}} onClick={closeModal}>
      <box-icon name="x"></box-icon>
      </div>


        </div>
      <form className="formulario" onSubmit={submitHandler}>

        <div className="form-group">
        <label>
          Correo electrónico:
        </label>
          <input type="email" id="email" />
        </div>

        <div className="form-group">
        <label>
          Contraseña:
        </label>
          <input type="password" id="password" />

        </div>

        <div className="form-group">
        <label>
          Rol:
        </label>
          <select id="rol">
            <option value="admin">Administrador</option>
            <option value="user">Usuario</option>
          </select>
        </div>
        <div className="container-actions">

        <input
          type="submit"
          value={isRegistrando ? "Registrar" : "Iniciar sesión"}
          />
      <button onClick={() => setIsRegistrando(!isRegistrando)}>
        {isRegistrando ? "Ya tengo una cuenta" : "Quiero registrarme"}
      </button>
          </div>
      </form>

      </section>
    </div>
  );
}

