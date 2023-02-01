import React from "react";
import { Routes, Route } from "react-router-dom";
import { Duelo } from "./Productos/Duelo";
import { Problemas } from "./Productos/Problemas";
import { Divorcio } from "./Productos/Divorcio";
import { AntiEstres } from "./Productos/antiEstres/index";
import { Velas } from "./Productos/Velas";
import { Piedras } from "./Productos/Piedras";
import { Podcast } from "./Podcast";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header";
import { Inicio } from "./Inicio/index";
import { ItemListContainer } from "./ItemListContainer/ItemListContainer";
import { ItemDetail } from "./ItemDetail/ItemDetail";
import Checkout from "./Carrito/Ckeckout";
import CartContainer from "./CartContainer";

export const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/Duelo" element={<Duelo />} />
        <Route path="/Problemas" element={<Problemas />} />
        <Route path="/Divorcio" element={<Divorcio />} />
        <Route path="/antiEstres" element={<AntiEstres />} />
        <Route path="/Velas" element={<Velas />} />
        <Route path="/piedras" element={<Piedras />} />
        <Route path="/Podcast" element={<Podcast />} />
        <Route path="/Producto/:id" element={<ItemDetail />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/cart" element={<CartContainer />} />

      </Routes>
      <Footer />
    </>
  );
};
