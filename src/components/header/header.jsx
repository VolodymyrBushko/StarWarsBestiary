import React from 'react';
import './header.css';

import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <nav className="header">
      <div className="brand">
        StarWarsBestiary
      </div>
      <ul className="list">
        <li className="list-item">
          <Link to="/people">People</Link>
        </li>
        <li className="list-item">
          <Link to="/planets">Planets</Link>
        </li>
        <li className="list-item">
          <Link to="/starships">Starships</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
