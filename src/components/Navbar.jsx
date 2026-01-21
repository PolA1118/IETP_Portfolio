// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Group Portfolio</div>
      <ul className="navbar-links">
        <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/gallery" className={({ isActive }) => isActive ? 'active' : ''}>Gallery</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
      </ul>
    </nav>
  );
}
