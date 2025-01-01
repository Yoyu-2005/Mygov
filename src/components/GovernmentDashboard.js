import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/GovernmentDashboard.css';

const GovernmentDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Government Official Dashboard</h1>
      <div className="cards-container">
        <Link to="/request-form" className="card">
          <div className="card-content">
            <h2>Request Window</h2>
            <p>Send requests to citizens</p>
          </div>
        </Link>
        <Link to="/form" className="card">
          <div className="card-content">
            <h2>Submit Documents</h2>
            <p>Submit a new service request</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default GovernmentDashboard;