import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import bikeflag from "../../photes/Navbar logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <img src={bikeflag} alt="Logo" className="bikeflaglogo" />
      </div>

      <div className={`navbar-links ${open ? "open" : ""}`}>
        <ul>
          <li><NavLink exact="true" to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/planyourtrip" onClick={() => setOpen(false)}>Plan Your Trip</NavLink></li>
          <li><NavLink to="/traveldiaries" onClick={() => setOpen(false)}>Travel Diaries</NavLink></li>
          <li><NavLink to="/instructions" onClick={() => setOpen(false)}>Instructions</NavLink></li>
          <li><NavLink to="/inspired" onClick={() => setOpen(false)}>Inspired</NavLink></li>
        </ul>
      </div>

      <div className={`hamburger ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;