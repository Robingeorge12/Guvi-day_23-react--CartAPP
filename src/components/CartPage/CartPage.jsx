import React, { useContext } from 'react'
import "./CartPage.css"
// import { AppContext } from '../../App';
// import { AppContextHome } from '../Home/Home';
import { AppContextCart } from '../Router/AllRoutes';
import { AppContext } from '../../App';

function CartPage() {
  const { cartAdded,setCart,cart} = useContext(AppContextCart);
  const { countDecreFun } = useContext(AppContext)

  
  console.log(cart)
  const handleButtonClick = (el,id)=>{

let FilterCart = cart.filter((e)=>{
  if(e){
    countDecreFun((prev)=>prev-1)
  }

 return e.id!==el.id

})
setCart(FilterCart)

  }
  return (
    <div className="container product-container">
      <section className="py-4">
        <div className="row row-cols-2  px-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {cart?.map((el, i) => {
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
  )
}

export default CartPage