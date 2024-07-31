import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Report from './Report';
import Recipe from './Recipe';
import Search from './Search';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <div className="sidebar">
          <h2><Link to="/">Dashboard</Link></h2>
          <ul>
            <li><Link to="/report">Report</Link></li>
            <li><Link to="/recipe">Recipe</Link></li>
            <li><Link to="/search">Search</Link></li>
          </ul>
          <Link to="/logout">Logout</Link>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/report" element={<Report />} />
            <Route path="/recipe" element={<Recipe />} />
            <Route path="/search" element={<Search />} />
            <Route path="/logout" element={<h1>Logout</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
