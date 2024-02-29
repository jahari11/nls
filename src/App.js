import React from "react";

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import { CartProvider } from "react-use-cart";
import Preloader from "./Component/Preloader";


function App() {
  return (
    <div className="app">
      <CartProvider>
      <BrowserRouter>
      <Preloader />
      <Routes>
      <Route index element ={<Home />} />
      <Route path="/home" element = {<Home />} />
      <Route path="/shop" element = {<Shop />} />
      <Route path = "/shop-item/:id" element = {<Product />} />
      <Route path = "/contact" element = {<Contact />} />
      <Route path = "/cart" element = {< Cart />}/>
      </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
