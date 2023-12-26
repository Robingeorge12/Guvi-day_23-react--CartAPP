import React from 'react'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import ProductPage from '../ProductPage/ProductPage'
import { createContext, useEffect, useState } from "react";


export const AppContextHome = createContext(null);
function Home() {
    const [incre, setIncre] = useState(0);
    const [cart, setCart] = useState([]);
  
    const countFun = (count, el, i) => {
      setIncre(count);
    };
  
    const countDecreFun = (count) => {
      setIncre(count);



    };
  // const cartAdded = (val)=>{
  
  //   setCart([...cart, val]);
  // }
  console.log(cart)
    useEffect(() => {}, [incre]);

    // cartAdded:cartAdded,cart:cart,
  return (
    <AppContextHome.Provider
    value={{setCart:setCart }}
  >
    <div>
        
        {/* <Header incre={incre} /> */}
        <Banner />
        <ProductPage />

    </div>
    </AppContextHome.Provider>
  )
}

export default Home