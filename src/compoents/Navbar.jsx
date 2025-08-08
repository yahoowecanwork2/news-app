import React, { useState } from 'react';
import '../components-css/navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ onSearch }) {
    const [input, setInput] = useState('');

    const handleSearch = () => {
        if (onSearch) {
            onSearch(input);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Trendy News</h1>
            </div>

            <ul className="navbar-links">
                <li><Link to="/">All News</Link></li>
                <li><Link to="/cards">Trending</Link></li>
            </ul>

            <div className="navbar-search">
                <input
                    type="text"
                    placeholder="Search..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSearch();
                    }}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
        </nav>
    );
}

export default Navbar;
