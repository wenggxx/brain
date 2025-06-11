import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Games from './pages/Games';
import Learn from './pages/Learn';
import News from './pages/News';
import About from './pages/About';
import ShowNews from './pages/ShowNews'; // Add this import

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: '1rem', background: '#f4f4f4', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem', margin: 0 }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/games">Games</Link></li>
            <li><Link to="/learn">Learn</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <div>
            <Link to="/login" style={{ textDecoration: 'none', color: '#333', padding: '0.5rem 1rem', border: '1px solid #ccc', borderRadius: '4px' }}>
              Login
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/news/:id" element={<ShowNews />} /> {/* Add this route for ShowNews */}
          <Route path="*" element={<div>404 Not Found</div>} /> {/* Catch-all route for 404 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;