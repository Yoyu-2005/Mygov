import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CitizenDashboard from './components/CitizenDashboard';
import GovernmentDashboard from './components/GovernmentDashboard';
import RequestForm from './components/RequestForm';
import ApprovalStatus from './components/ApprovalStatus';
import MEAForm from './components/MEAForm';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/citizen-dashboard" element={<CitizenDashboard />} />
          <Route path="/government-dashboard" element={<GovernmentDashboard />} />
          <Route path="/request-form" element={<RequestForm />} />
          <Route path="/approval-status" element={<ApprovalStatus />} />
          <Route path="/form" element={<MEAForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 