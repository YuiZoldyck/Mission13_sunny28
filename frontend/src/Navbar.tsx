import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md p-2">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/podcast" className="nav-link">
            Podcasts
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/movies" className="nav-link">
            Movie Collection
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
