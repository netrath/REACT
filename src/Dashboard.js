import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1>Overview</h1>
      <div className="status-container">
        <div className="status-box total-packages">
          <i className="fas fa-box"></i>
          <h3>Total Packages</h3>
          <p>20</p>
        </div>
        <div className="status-box completed-builds">
          <i className="fas fa-check-circle"></i>
          <h3>Completed Builds</h3>
          <p>15</p>
        </div>
        <div className="status-box failed-builds">
          <i className="fas fa-times-circle"></i>
          <h3>Failed Builds</h3>
          <p>3</p>
        </div>
        <div className="status-box in-progress">
          <i className="fas fa-spinner"></i>
          <h3>In Progress</h3>
          <p>2</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
