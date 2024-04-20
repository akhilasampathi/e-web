import React from 'react';
import './Categorie.css';
import { Link } from 'react-router-dom';
const Categorie = () => {
  return (
    <div className="categorie">
      <ul className="style">
        <li><Link to="/Filter">PHONES</Link></li>
        <li><Link to="/Computer">LAPTOP</Link></li>
        <li>TABS</li>
        <li>TVS</li>
        <li>SPEAKERS</li>
        <li>GAMES</li>
      </ul>
    </div>
  );
};
export default Categorie;
