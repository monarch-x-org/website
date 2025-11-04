import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "teams", label: "Teams", path: "/teams" },
    { id: "news", label: "News", path: "/news" },
    { id: "events", label: "Events", path: "/#events" },
    { id: "shop", label: "Shop", path: "/#shop" },
    { id: "about", label: "About", path: "/about" }
  ];

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img src="/images/MonarchX_1_2.png" alt="Monarch X" className="logo-img" />
          <h1>MONARCH-X</h1>
        </Link>
        
        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link 
                  to={item.path} 
                  className={location.pathname === item.path ? "active" : ""}
                  onClick={handleNavClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button className="cta-button">Join Us</button>
          <button 
            className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
