import React from 'react';
import './header.css';

const Header = () => {
  return (
    <nav className="header">
      <div className="brand">
        StarWarsBestiary
      </div>
      <ul className="list">
        <li className="list-item">
          <a href="https://google.com">People</a>
        </li>
        <li className="list-item">
          <a href="https://google.com">Planets</a>
        </li>
        <li className="list-item">
          <a href="https://google.com">Starships</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
