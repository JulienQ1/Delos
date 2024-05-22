import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const sports = ["Rugby", "Football", "Tennis", "Volley", "Cyclisme"];
  return (
    <div className="sidebar">
      {sports.map((sport) => (
        <Link key={sport} to={`/sport/${sport.toLowerCase()}`}>
          {sport}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
