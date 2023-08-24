import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../components/register";
import Products from "../components/Products"

export const AppRouter=()=>
( <Routes>
  <Route path="/" element={<Register />} />
  <Route path="/products" element={<Products />} />
</Routes>)


 function App() {
  return (
    <BrowserRouter>
     <AppRouter/>
    </BrowserRouter>
  );
}

export default App