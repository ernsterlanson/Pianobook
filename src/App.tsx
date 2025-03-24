import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Songs from './pages/Songs'
import SongLevel from './pages/SongLevel'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/song/:id" element={<SongLevel />} />
      </Routes>
    </Router>
  )
}

export default App 