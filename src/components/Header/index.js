import React from 'react';
import './index.css';
import { Link } from "react-router-dom";

function Header() {
    return (<>     
    <nav className="navbar-container-1">
        <Link to="/home" className="logo-navbar">review-G</Link>
        <Link to="/signUp" className="signUp-navbar">Sign up</Link>
        <Link to="/signIn" className="signIn-navbar">Sign in</Link>
    </nav>
    <nav className="navbar-container-2">
        <div className="categories-container">
          <Link to="/home" className="list-categories">Home</Link>
          <Link to="/action" className="list-categories">Action</Link>
          <Link to="/adventure" className="list-categories">Adventure</Link>
          <Link to="/rpg" className="list-categories">RPG</Link>
          <Link to="/simulation" className="list-categories">Simulation</Link>
          <Link to="/strategy" className="list-categories">Strategy</Link>
          <Link to="/sport" className="list-categories">Sport</Link>
        </div>
      </nav>
    </>
    )
}

export default Header;