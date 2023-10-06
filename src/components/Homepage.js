import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="center-content">
        <h1 className="heading">Train Schedules</h1>
        <Link to="/trains" className="start-button">Start</Link>
      </div>
    </div>
  );
};

export default HomePage;