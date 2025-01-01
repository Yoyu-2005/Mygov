import React, { useState } from 'react';
import '../styles/RequestForm.css';

const RequestForm = () => {
  const [requestData, setRequestData] = useState({
    citizenId: '',
    requestType: '',
    department: '',
    description: '',
    deadline: '',
    priority: 'normal'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you'll add your real-time update logic
    console.log('Request submitted:', requestData);
    alert('Request sent to citizen successfully!');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRequestData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="request-form-container">
      <h2>Send Request to Citizen</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Citizen ID/Aadhar Number</label>
          <input
            type="text"
            name="citizenId"
            value={requestData.citizenId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Request Type</label>
          <select
            name="requestType"
            value={requestData.requestType}
            onChange={handleChange}
            required
          >
            <option value="">Select Request Type</option>
            <option value="document">Document Submission</option>
            <option value="verification">Verification</option>
            <option value="approval">Approval Required</option>
          </select>
        </div>
        <div className="form-group">
          <label>Department</label>
          <select
            name="department"
            value={requestData.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            <option value="Revenue Department">Revenue Department</option>
            <option value="Water Board">Water Board</option>
            <option value="Electricity Department">Electricity Department</option>
            <option value="Municipality">Municipality</option>
          </select>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={requestData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Deadline</label>
          <input
            type="date"
            name="deadline"
            value={requestData.deadline}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Priority</label>
          <select
            name="priority"
            value={requestData.priority}
            onChange={handleChange}
            required
          >
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">Send Request</button>
      </form>
    </div>
  );
};

export default RequestForm; 