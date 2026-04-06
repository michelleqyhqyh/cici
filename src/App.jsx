import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
import About from './pages/About'
import Design from './pages/Design'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="logo">
              <div className="logo-text">
                <span className="logo-title">Bamboo</span>
                <span className="logo-subtitle">Tales</span>
              </div>
            </Link>
            <div className="nav-menu">
              <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                公司介绍
              </NavLink>
              <NavLink to="/design" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                设计您的衣服
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                联系我们
              </NavLink>
            </div>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/design" element={<Design />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; 2026 Bamboo Tales. 专注儿童竹纤面料服装</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
