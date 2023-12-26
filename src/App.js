import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import ProductPage from "./components/ProductPage/ProductPage";
import { createContext, useContext, useEffect, useState } from "react";
import AllRoutes, { AppContextCart } from "../src/components/Router/AllRoutes";


export const AppContext = createContext(null);

function App() {
  // const {setCart,cart} = useContext(AppContextCart);
  // const {cart} = useContext(AppContextCart)


   
  const [incre, setIncre] = useState(0);

  const countFun = (count, el, i) => {
    setIncre(count);
  };

  const countDecreFun = (count,el) => {
    setIncre(count);
// let filterCart = cart.filter((e)=>{
// return e.id !== el.id

// })
// setCart(filterCart)



    // console.log(el)
  };

  // let len = cart.length

  useEffect(() => {}, [incre]);

  return (
    <AppContext.Provider
      value={{
        countFun: countFun,
        countDecreFun: countDecreFun,
        incre: incre,
        setIncre: setIncre,
      }}
    >
      <div className="App">
        <Header incre={incre} length={"len"} />
        <AllRoutes />
      </div>
    </AppContext.Provider>
  );
}

export default App;
