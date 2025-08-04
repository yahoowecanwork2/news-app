import React from 'react'
import NewsApp from './compoents/NewsApp';
import { Routes, Route, Link } from 'react-router-dom';
import Cards from './compoents/Cards';

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<NewsApp />} />
        <Route path="/Cards" element={<Cards />} />
      </Routes>
    </div>
  )
}

export default App;