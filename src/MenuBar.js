import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css';

function MenuBar() {
  return (
    <div className="nav-container">
      <div className="nav-links">
        <Link className="nav-link" to="/que1">
          <p className="lk-que">Question1 </p>
        </Link>
        <Link className="nav-link" to="/que2">
          <p className="lk-que">Question2 </p>
        </Link>
        <Link className="nav-link" to="/que3">
          <p className="lk-que">Question3 </p>
        </Link>
        <Link className="nav-link" to="/que4">
          <p className="lk-que">Question4 </p>
        </Link>
        <Link className="nav-link" to="/que810">
          <p className="lk-que">Question8 and 10 </p>
        </Link>
      </div>
    </div>
  );
}

export default MenuBar;
