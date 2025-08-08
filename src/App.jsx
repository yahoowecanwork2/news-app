import React, { useState } from 'react';
import NewsApp from './components/NewsApp';
import { Routes, Route } from 'react-router-dom';
import Cards from './components/Cards';
import Navbar from './components/Navbar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<NewsApp search={searchTerm} />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </div>
  );
}

export default App;
