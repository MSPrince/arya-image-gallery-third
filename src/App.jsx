
import React, { useEffect, useState } from 'react';
import { Gallery } from './Gallery';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const logoSrc = darkMode ? "/images/logo1.png" : "/images/logo2.png";

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logoSrc} alt="Logo" className="logo" />
        </div>
        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <a href="#" className="nav-link">First-Gallery</a>
          <a href="#" className="nav-link">Second-Gallery</a>
          <a href="#" className="nav-link">Third-Gallery</a>
        </div>
        <button className="toggle-button" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '🌞' : '🌙'}
        </button>
        <button className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <Gallery />
      <style>{`
        body.light {
          --bg: #f4f4f9;
          --text: #1a1a1a;
          --card: #ffffff;
          --shadow: rgba(0,0,0,0.08);
        }
        body.dark {
          --bg: #1e1e2f;
          --text: #ffffff;
          --card: #2e2e3e;
          --shadow: rgba(255,255,255,0.08);
        }
        body {
          background-color: var(--bg);
          color: var(--text);
          transition: all 0.3s ease;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 7px 28px 7px 28px;
          background-color: var(--card);
          box-shadow: 0 8px 16px var(--shadow);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          max-width: 1100px;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .navbar-links {
          display: flex;
          gap: 20px;
        }
        .nav-link {
          text-decoration: none;
          color: var(--text);
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: #007bff;
        }
        .logo {
          height: 60px;
          object-fit: contain;
          transition: transform 0.3s ease;
        }
        .logo:hover {
          transform: scale(1.05);
        }
        .toggle-button {
          padding: 5px 10px;
          font-size: 0.95rem;
          font-weight: 600;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          background-color: var(--text);
          color: var(--bg);
          transition: background 0.3s, transform 0.2s;
        }
        .toggle-button:hover {
          transform: translateY(-1px);
          opacity: 0.9;
        }
        .hamburger-menu {
          display: none;
          flex-direction: column;
          gap: 5px;
          background-color: transparent;
          border: none;
          cursor: pointer;
        }
        .hamburger-menu span {
          width: 25px;
          height: 3px;
          background-color: var(--text);
          border-radius: 2px;
        }
        @media (max-width: 768px) {
          .navbar-links {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            background-color: var(--card);
            padding: 20px;
            box-shadow: 0 8px 16px var(--shadow);
          }
          .navbar-links.open {
            display: flex;
          }
          .hamburger-menu {
            display: flex;
          }
        }
      `}</style>
    </>)}
