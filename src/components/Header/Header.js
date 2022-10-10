import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
      <div className="header">
        <div className="nav-bar">
          <div className='brand-name'>
            <h3>Quizzard</h3>
          </div>
          <nav className="link">
            <Link to="/">Topics</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/blog">Blog</Link>
          </nav>
        </div>
        
      </div>
    );
};

export default Header;