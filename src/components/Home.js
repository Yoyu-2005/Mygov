import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import CitizenIcon from '../assets/CitizenIcon';
import OfficialIcon from '../assets/OfficialIcon';

const Home = () => {
  return (
    <div className="home-container">
      <h1>NexGov Portal</h1>
      <p className="home-description">Welcome to the NexGov Portal, your gateway to government services.</p>
      <p className="about-us">At NexGov, we strive to provide seamless access to government services for citizens and officials alike. Our mission is to enhance transparency and efficiency in public service delivery.</p>
      <div className="cards-container">
        <Link to="/citizen-dashboard" className="card">
          <div className="card-content">
            <CitizenIcon />
            <h2>Citizen Login</h2>
            <p>Access government services as a citizen</p>
          </div>
        </Link>
        <Link to="/government-dashboard" className="card">
          <div className="card-content">
            <OfficialIcon />
            <h2>Government Official</h2>
            <p>Access portal as a government official</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home; 