import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>MyGov Portal</h1>
      <div className="cards-container">
        <Link to="/mea-form" className="card">
          <div className="card-content">
            <h2>Citizen Login</h2>
            <p>Access government services as a citizen</p>
          </div>
        </Link>
        <Link to="/mea-form" className="card">
          <div className="card-content">
            <h2>Government Official</h2>
            <p>Access portal as a government official</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home; 