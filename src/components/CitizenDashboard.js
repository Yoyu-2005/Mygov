import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CitizenDashboard.css';

const CitizenDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Citizen Dashboard</h1>
      <div className="cards-container">
        <Link to="/approval-status" className="card">
          <div className="card-content">
            <h2>Approval Window</h2>
            <p>Check status of requests awaiting approval</p>
          </div>
        </Link>
        <Link to="/form" className="card">
          <div className="card-content">
            <h2>Submit Document</h2>
            <p>Submit a new document</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CitizenDashboard; 