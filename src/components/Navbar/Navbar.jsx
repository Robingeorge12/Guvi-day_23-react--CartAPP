import React from "react";
// import "./Navbar.css";

function Navbarr() {
  return (
    <nav
      class="navbar h-30 navbar-expand-lg navbar-light bg-light"
    >
      <div class="container-fluid align-items-center
        justify-content-around
        navbar-container navbar-subdiv">
       
        <div className="w-40 d-flex align-items-center justify-content-between narbar-box1">
          <div className="w-40 fs-4 d-flex justify-content-start navbar-icon">Start BootStrap</div>
          <div className="w-40 d-flex align-items-center justify-content-around navbar-heads">
            <div>Home</div>
            <div className="text-muted">About</div>
            <div className="text-muted">Shop</div>
          </div>
        </div>

     
    

        <div className="w-30 d-flex align-items-center justify-content-end narbar-box2">
          <button
            type="button"
      className="w-60 h- d-flex align-items-center justify-content-around navbar-cart"
          >
          
            <span class=""><i class="bi bi-cart-fill"></i></span>
            <span class="">Cart</span>
            <span class="d-flex align-items-center justify-content-center navbar-cart-count">{60}</span>

          </button>
        </div>
        <div className="navbar-menu">

        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbarr;
