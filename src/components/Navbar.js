import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        NexGov
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar; 