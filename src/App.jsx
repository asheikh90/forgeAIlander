import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import FollowUpPage from './components/FollowUpPage'

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/welcome" element={<FollowUpPage />} />
      </Routes>
    </div>
  )
}

export default App
