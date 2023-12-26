import React, { useContext, useEffect, useState } from "react";
import "./ProductPage.css";
import { AppContext } from "../../App";
import { AppContextHome } from "../Home/Home";
import { AppContextCart } from "../Router/AllRoutes";
// import { AppContext } from "../../context/Context";

let data = [
  {
    img: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNoaXJ0fGVufDB8fDB8fHww",
    name: "Animal",
    price: "$18-$30",
    rate: "⭐⭐⭐⭐",
    of: "",
    type: "added",
    id: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hpcnR8ZW58MHx8MHx8fDA%3D",
    name: "dog",
    price: "$30",
    rate: "",
    of: "$10",
    type: "added",
    id: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNoaXJ0fGVufDB8fDB8fHww",
    name: "Eagle",
    price: "$28-$40",
    rate: "⭐",
    of: "",
    type: "added",
    id: 3,
  },
  {
    img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNoaXJ0fGVufDB8fDB8fHww",
    name: "Tiger",
    price: "$18-$30",
    rate: "⭐⭐⭐",
    of: "$10",
    type: "added",
    id: 4,
  },
  {
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
    name: "dog",
    price: "$30",
    rate: "",
    of: "$10",
    type: "added",
    id: 5,
  },
  {
    img: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNoaXJ0fGVufDB8fDB8fHww",
    name: "Eagle",
    price: "$28-$40",
    rate: "⭐",
    of: "",
    type: "added",
    id: 6,
  },
  {
    img: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNoaXJ0fGVufDB8fDB8fHww",
    name: "Eagle",
    price: "$28-$40",
    rate: "⭐",
    of: "",
    type: "added",
    id: 7,
  },
  {
    img: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hpcnR8ZW58MHx8MHx8fDA%3D",
    name: "dog",
    price: "$30",
    rate: "",
    of: "$10",
    type: "added",
    id: 8,
  },
];
function ProductPage({}) {
  const [count, setCount] = useState(0);
  const { incre, countFun, setIncre, countDecreFun } = useContext(AppContext);
  const {cartAdded,cart} = useContext(AppContextCart)

  const handleCart = (el, i) => {
    if (el) {
      // setCount((prev) => prev + 1);
      countFun((prev) => prev + 1);
    }
  };

  const handleButtonClick = (val, id) => {
    // console.log(val,val.type)

    if (val.type == "added") {
      data.forEach((el) => {
        if (el.id == id) {
          setIncre((prev) => prev + 1);
          return (el.type = "remove");
        }
      });
     

// if(val)

      cartAdded(val)
      // setCart([...cart, val]);
      // console.log(data)
    } else if (val.type == "remove") {
      data.forEach((el) => {
        if (el.id == id) {
          countDecreFun((prev) => prev - 1);
          return (el.type = "added");
        }
      });
   
    }
  };

  useEffect(() => {}, [count]);
  console.log(cart)

  // class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
  return (
    <div className="container product-container">
      <section className="py-4">
        <div className="row row-cols-2  px-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {data?.map((el, i) => {
            return (
              <div
                key={i}
                className="card border-dark-subtle col pb-10 p-0 position-relative  mb-4 justify-content-center col-sm-12 col-md-4 col-lg-3 cd"
              >
                <img src={el.img} className="w-100 h-60 img-card" alt="..." />
                <div className="card-body">
                  <h5 className="card-text m-0">{el.name}</h5>
                  {el.rate ? <p className="card-text m-0">{el.rate}</p> : null}

                  {el.of == "" ? (
                    <p className="card-text m-0">Price: {el.price}</p>
                  ) : (
                    <p className="card-text m-0 d-flex align-items-center justify-content-center ">
                      {" "}
                      <del className="text-muted">{el.of}</del>{" "}
                      <span className="p-1"></span>{" "}
                      <span className="ml-2">{el.of}</span>{" "}
                    </p>
                  )}

                  {el.of && (
                    <button className="btn btn-sm btn-dark position-absolute top-0 end-0 m-2">
                      Sale
                    </button>
                  )}

                  <div className="pb-10 m-0 btn-div">
                    <button
                      className={`btn btn-primary ${
                        el.type == "added" ? "btn-added" : "btn-remove"
                      }`}
                      onClick={() => handleButtonClick(el, el.id)}
                    >
                      {el.type == "added"
                        ? "Added to Cart"
                        : "Remove from Cart"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
