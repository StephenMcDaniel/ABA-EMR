import React, { useState, useEffect, useContext } from "react";
import "bootstrap";

let Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light border rounded">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        ABA-EMR
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >
              Patient Search
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              SCHEDULE?
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">PLACEHOLDER</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;