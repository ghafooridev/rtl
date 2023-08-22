import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../components/register";
import Products from "../components/Products"

 function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App