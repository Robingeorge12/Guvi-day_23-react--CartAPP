import React, { useState } from "react";
import "./Header.css";
import { Dropdown } from "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useNavigate } from "react-router-dom";

// import Dropdown from "react-bootstrap/Dropdown";
// import DropBox from "../DropBox/DropBox";

function Header({incre,length}) {
  const [bol,setBol] = useState(!false)

  const navigate = useNavigate()

  const handleNavigate = ()=>{
    // navigate("/cart")
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      {/* d-flex align-items-center justify-content-around */}
      <div className="container-fluid d-flex align-items-center ">
        <Link to="/" className="navbar-brand header-link">
          Start BootStrap
        </Link>
        {/* menu */}
        <button
          className="navbar-toggler mn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={()=>setBol(bol)}
        >
          <span className="navbar-toggler-icon">
           {/* {bol && <DropBox />} */}
          </span>
        </button>

        {/* 3 div */}

        <div
        // d-md-none d-sm-none d-flex align-items-center justify-content-between
          className="collapse navbar-collapse "
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 header-ul">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <div className="btn-group header-li">
              <button
                type="button"
                className="btn dropdown-toggle no-outline header-shop"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                Shop
              </button>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                <li>
                  <button className="dropdown-item" type="button">
                    All Product
                  </button>
                </li>
                <hr style={{width:"100%", display:"flex"}} />
                <li>
                  <button className="dropdown-item" type="button">
                    Popular Items
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                  New Arrivals
                  </button>
                </li>
              </ul>
            </div>
          </ul>
          {/* align-items-center  d-flex align-items-center justify-content-between */}
          {/* <form className="d-flex mr-10 but" role="search">   */}
          <button
            className="btn btn-outline-dark btn-lg d-flex cart-div"
            type="submit"
            onClick={handleNavigate}
          >
            <span className="">
            <Link to="/cart" className="ico"><i className="bi bi-cart-fill px-2 fs-6 "></i></Link>
            </span>
            <span className="fs-6 px-2"><Link to="/cart" className="th">Cart</Link></span>
            <span className="badge bg-dark text-white ms-1 rounded-pill d-flex align-items-center justify-content-center navbarCount">
              {incre}
            </span>
          </button>
          {/* </form> */}
        </div>
      </div>
    </nav>
  );
}

export default Header;
