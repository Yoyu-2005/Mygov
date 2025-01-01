import React from 'react';
import '../styles/ApprovalStatus.css';

const ApprovalStatus = () => {
  // Simulate an empty requests array
  const requests = []; // This would normally come from your state or props

  return (
    <div className="approval-container">
      <h1>Approval Status</h1>
      <div className="status-list">
        {requests.length === 0 ? (
          <p>No requests are there for approval.</p>
        ) : (
          requests.map((request, index) => (
            <div className="status-item" key={index}>
              <h3>Request #{request.id}</h3>
              <p>Type: {request.type}</p>
              <p>Department: {request.department}</p>
              <p>Status: {request.status}</p>
              <p>Submitted: {request.submittedDate}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ApprovalStatus; 