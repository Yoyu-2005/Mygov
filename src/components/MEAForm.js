import React, { useState } from 'react';
import '../styles/MEAForm.css';

const MEAForm = () => {
  const [formData, setFormData] = useState({
    department: '',
    documentType: '',
    referenceNumber: '',
    description: '',
    attachments: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you'll add your blockchain integration logic
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="form-container">
      <h2>Government Service Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Department</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            <option value="Revenue Department">Revenue Department</option>
            <option value="hWater Board">Water Board</option>
            <option value="Electricity Department">Electricity Department</option>
            <option value="Municipality">Municipality</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="form-group">
          <label>Document Type</label>
          <select
            name="documentType"
            value={formData.documentType}
            onChange={handleChange}
            required
          >
            <option value="">Select Document Type</option>
            <option value="MOU">MOU</option>
            <option value="NOC">NOC</option>
            <option value="Agreement">Agreement</option>
            <option value="OTHERS">OTHERS</option>
          </select>
        </div>
        <div className="form-group">
          <label>Reference Number</label>
          <input
            type="text"
            name="referenceNumber"
            value={formData.referenceNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Attachments</label>
          <input
            type="file"
            name="attachments"
            onChange={(e) => setFormData(prev => ({
              ...prev,
              attachments: e.target.files[0]
            }))}
          />
        </div>
        <button type="submit" className="submit-btn">Submit to Blockchain</button>
      </form>
    </div>
  );
};

export default MEAForm; 