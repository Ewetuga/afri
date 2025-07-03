import './App.css'
import React, { useState } from 'react'

function Header() {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <div className={`main${navOpen ? ' open' : ''}`}>
      <h2>Hizo</h2>
      <button
        className="nav-toggle"
        aria-label="Toggle navigation"
        onClick={() => setNavOpen(v => !v)}
      >
        <span className="nav-toggle-bar"></span>
        <span className="nav-toggle-bar"></span>
        <span className="nav-toggle-bar"></span>
      </button>
      <div className={`header-container${navOpen ? ' open' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Support</li>
        </ul>
        <div className="use">Use Hizo</div>
      </div>
    </div>
  )
}

export default Header