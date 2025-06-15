import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaBlog,
  FaEnvelope,
  FaImages // ✅ Add this
} from 'react-icons/fa';



export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <img src="/logo.png" alt="Logo" className="logo" />
        <span className="brand-name">JOFILATECH</span>
      </div>
    <nav className={`nav-links ${open ? 'open' : ''}`}>
  <Link to="/" onClick={() => setOpen(false)}>
    <FaHome className="nav-icon" /> Home
  </Link>
  <Link to="/about" onClick={() => setOpen(false)}>
    <FaUser className="nav-icon" /> About
  </Link>
  <Link to="/projects" onClick={() => setOpen(false)}>
    <FaProjectDiagram className="nav-icon" /> Projects
  </Link>
  <Link to="/blog" onClick={() => setOpen(false)}>
    <FaBlog className="nav-icon" /> Blog
  </Link>
  <Link to="/gallery" onClick={() => setOpen(false)}>
    <FaImages className="nav-icon" /> Gallery
  </Link>
    <Link to="/contact" onClick={() => setOpen(false)}>
    <FaEnvelope className="nav-icon" /> Contact
  </Link>
</nav>
    <div className="hamburger" onClick={() => setOpen(!open)}>
  {open ? (
    <FaTimes className="hamburger-icon" />
  ) : (
    <FaBars className="hamburger-icon" />
  )}
</div>

    </header>
  );
}
