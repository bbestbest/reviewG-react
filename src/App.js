import React from "react";
import "./main.css";

function App() {
  return (
    <>
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

      <div className="body">  
        <div className="frontCover-container">
          <div className="item-frontCover">Action</div>
        </div>
      </div>
      <div className="bb">
      </div>
      <footer className="footer-container">
        © 2020 GamingDose All Rights Reserved
      </footer>
    </>
  );
}

export default App;
