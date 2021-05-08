import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 justify-content-between">
        <div className="navbar-nav">
          <Link className="link" to="/">
            <span className="nav-item nav-link navbar-brand mx-4">Menu</span>
          </Link>
          <Link className="link" to="/search">
            <span className="nav-item nav-link navbar-brand mx-4">Search</span>
          </Link>
        </div>
        <Link to="/cart">
          <button className="btn btn-outline-primary mx-4">
            <i className="fas fa-shopping-cart"></i>
            <span> Cart</span>
          </button>
        </Link>
      </nav>
      {props.children}
    </React.Fragment>
  );
};
