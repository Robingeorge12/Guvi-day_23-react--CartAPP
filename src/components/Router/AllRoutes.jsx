import React from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "../CartPage/CartPage";
import Home from "../Home/Home";

import { createContext, useEffect, useState } from "react";


export const AppContextCart = createContext(null);

function AllRoutes() {
  const [cart, setCart] = useState([]);

  const cartAdded = (val)=>{
  
    setCart([...cart, val]);
  }
console.log(cart)

  return (
    <AppContextCart.Provider
    value={{cartAdded:cartAdded,cart:cart,setCart:setCart }}
  > 
    <div>
      <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/cart" element = {<CartPage />} /> 
       
      </Routes>
    </div>
    </AppContextCart.Provider>
  );
}

export default AllRoutes;
