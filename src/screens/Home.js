import React from "react";

import AdminView from "../components/AdminView/AdminView";
import UserView from "../components/UserView/UserView";

import firebaseApp from "../Firebase/Credenciales";
import { getAuth, signOut } from "firebase/auth";


const auth = getAuth(firebaseApp);

function Home({ user }) {
  return (
    <div>
      <button onClick={() => signOut(auth)}> Cerrar sesión</button>
      {user.rol === "admin" ? <AdminView /> : <UserView />}
    </div>
  );
}

export default Home;