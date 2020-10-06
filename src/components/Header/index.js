import React from 'react';
import './index.css'

function Header() {
    return (<>     
    <nav className="navbar-container-1">
        <div className="logo-navbar">review-G</div>
        <div className="signUp-navbar">Sign up</div>
        <div className="signIn-navbar">Sign in</div>
    </nav>
    <nav className="navbar-container-2">
        <div className="categories-container">
          <div className="list-categories">Home</div>
          <div className="list-categories">Action</div>
          <div className="list-categories">Adventure</div>
          <div className="list-categories">RPG</div>
          <div className="list-categories">Simulation</div>
          <div className="list-categories">Strategy</div>
          <div className="list-categories">Sport</div>
        </div>
      </nav>
    </>
    )
}

export default Header;