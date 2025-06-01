import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Games from './pages/Games';
import Learn from './pages/Learn';
import News from './pages/News';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: '1rem', background: '#f4f4f4' }}>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/games">Games</Link></li>
            <li><Link to="/learn">Learn</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;