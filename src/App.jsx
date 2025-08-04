import React from 'react'
import NewsApp from './compoents/NewsApp';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NewsApp />} />
      </Routes>
    </div>
  )
}

export default App;