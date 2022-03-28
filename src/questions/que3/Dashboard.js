import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="db-container">
      <div className="widget-container">
        <div className="col1">
          <div className="widget1">
            <p>widget1</p>
          </div>
          <div className="widget4">
            <p>widget4</p>
          </div>
        </div>
        <div className="col2">
          <div className="widget2">
            <p>widget2</p>
          </div>
          <div className="widget5">
            <p>widget5</p>
          </div>
        </div>
        <div className="col3">
          <div className="widget3">
            <p>widget3</p>
          </div>
          <div className="widget6">
            <p>widget6</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
