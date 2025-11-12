import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

import Nav from "./PageComps/Nav.jsx";
import Home from "./PageComps/Home.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stitched from "./PageComps/Stitched.jsx";
import Marque from "./PageComps/Marque.jsx";
import Footer from "./PageComps/Footer.jsx";
import Product from "./PageComps/Product.jsx";
import Cart from "./PageComps/Cart.jsx";
import Checkout from "./PageComps/Checkout.jsx";

function App() {

 const [selimg,setSelimg]= useState('/images/41_5edcd110-6571-42b6-97e1-2f911aaa87de.webp');
  return (
    <>
      <Marque />

      <Router>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stitched" element={<Stitched onlyimg={setSelimg} />} />
          <Route path="/product" element={<Product onimg = {selimg}  setonimg={setSelimg}/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </Router>
   
    </>
  );
}

export default App;
