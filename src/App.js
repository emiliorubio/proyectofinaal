import React, { useState } from "react";
import { AppRouter } from "./components/AppRouter";
import { DataProvider } from "./context/Dataprovider";
import { Carrito } from "./components/Carrito";
import "boxicons";

function App() {
  const [user, setUser] = useState(null);
  // const [closeModal, setCloseModal] = useState(false)

  async function getRol(uid) {
    return uid
  }

  function setUserWithFirebaseAndRol(usuarioFirebase) {
    getRol(usuarioFirebase.uid).then(rol => {
      const userData = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        rol: rol
      };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    });
  }

  return (
    <DataProvider>
      <div className="App">
        <Carrito />
        <AppRouter />
      </div>
    </DataProvider>
  );
}

export default App;
