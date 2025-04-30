import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/logo.png";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  // Tashqariga bosilganda menyuni yopish
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="header">
      <nav className="navbar" ref={navRef}>
        <div className="Navbar_top">
          <img src={logo} alt="Logo" className="logo" />
          <h2>Algoritm</h2>
        </div>

        <div
          className={`hamburger ${open ? "hamburger--open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </div>

        <ul className={open ? "nav-links open" : "nav-links"}>
          <li><Link to="/" onClick={() => setOpen(false)}>Bosh sahifa</Link></li>
          <li><Link to="/dasturlash" onClick={() => setOpen(false)}>Dasturlash</Link></li>
          <li><Link to="/marketing" onClick={() => setOpen(false)}>Marketing</Link></li>
          <li><Link to="/dizayn" onClick={() => setOpen(false)}>Dizayn</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
