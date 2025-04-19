import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.component.css'; // ✅ Added CSS import

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Fitness Tracker</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link nav-button">Exercises</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link nav-button">Create Exercise Log</Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link nav-button">Create User</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
