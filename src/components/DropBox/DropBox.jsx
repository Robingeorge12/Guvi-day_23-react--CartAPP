import React from 'react'
import "./DropBox.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function DropBox() {
  return (
    <div className="container mt-5 drope-box">
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Select an Option
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">
          Option 1
        </a>
        <a className="dropdown-item" href="#">
          Option 2
        </a>
        <a className="dropdown-item" href="#">
          Option 3
        </a>
        <a className="dropdown-item" href="#">
          Option 4
        </a>
        <a className="dropdown-item" href="#">
          Option 5
        </a>
        <a className="dropdown-item" href="#">
          Option 6
        </a>
      </div>
    </div>
  </div>
  )
}

export default DropBox