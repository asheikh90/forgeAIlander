import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticleField from './components/ParticleField'
import HomePage from './pages/HomePage'
import ResellerPage from './pages/ResellerPage'
import ComparisonPage from './pages/ComparisonPage'
import PricingPage from './pages/PricingPage'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <Router>
      <div className={`min-h-screen transition-all duration-1000 relative overflow-hidden ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
          : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50'
      }`}>
        {/* Neural Grid Background */}
        <div className="fixed inset-0 neural-grid opacity-30 pointer-events-none" />
        
        {/* Particle Field */}
        <ParticleField />
        
        {/* Mouse Glow Effect */}
        <div 
          className="fixed w-96 h-96 pointer-events-none z-0 transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
          }}
        />
        
        <div className="relative z-10">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/reseller" element={<ResellerPage />} />
              <Route path="/comparison" element={<ComparisonPage />} />
              <Route path="/pricing" element={<PricingPage />} />
            </Routes>
          </AnimatePresence>
          
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
