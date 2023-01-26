import React, { useState } from "react";
import { AppRouter } from "./components/AppRouter";
import { DataProvider } from "./context/Dataprovider";
import { Carrito } from "./components/Carrito";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseApp from "./Firebase/Credenciales";
import "boxicons";

function App() {
  const [user, setUser] = useState(null);
  // const [closeModal, setCloseModal] = useState(false)
  const auth = getAuth(firebaseApp);
  const firestore = getFirestore(firebaseApp);

  async function getRol(uid) {
    const docuRef = doc(firestore, `usuarios/${uid}`);
    const docuCifrada = await getDoc(docuRef);
    const infoFinal = docuCifrada.data().rol;
    return infoFinal;
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

  onAuthStateChanged(auth, usuarioFirebase => {
    if (usuarioFirebase) {
      //funcion final
      if (!user) {
        setUserWithFirebaseAndRol(usuarioFirebase);
      }
    } else {
      setUser(null);
    }
  });

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
