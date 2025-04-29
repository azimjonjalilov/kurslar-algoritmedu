import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/logo.png";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <nav className="navbar">
	  	<div className="Navbar_top">
		  <img src={logo} alt="Logo" className="logo" />
		<h2>Algoritm</h2>
		</div>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          &#9776;
        </div>

        <ul className={open ? "nav-links open" : "nav-links"}>
          <li><Link to="/">Bosh sahifa</Link></li>
          <li><Link to="/dasturlash">Dasturlash</Link></li>
          <li><Link to="/marketing">Marketing</Link></li>
          <li><Link to="/dizayn">Dizayn</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
