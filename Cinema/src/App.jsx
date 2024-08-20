import React from 'react';

import "./global.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Registrar } from "./pages/Registrar"
import { Sessões } from "./pages/Sessões"
import { Filmes } from "./pages/Filmes"
import { FaleConosco } from "./pages/FaleConosco"
import { Checkout } from "./pages/Checkout"
Registrar
export function App() {

  return (
    <BrowserRouter>   
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registrar" element={<Registrar />}></Route>
        <Route path="/sessoes" element={<Sessões />}></Route>
        <Route path="/filmes" element={<Filmes />}></Route>
        <Route path="/faleconosco" element={<FaleConosco />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

