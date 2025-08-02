import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, Zap } from 'lucide-react'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Reseller', path: '/reseller' },
    { name: 'Comparison', path: '/comparison' },
    { name: 'Pricing', path: '/pricing' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/20 backdrop-blur-md border-b border-neon-blue/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-2xl font-bold text-white glow-text">ForgeHQ</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm font-medium transition-all duration-300 group ${
                  location.pathname === item.path
                    ? 'text-neon-blue glow-text'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple transition-all duration-300 group-hover:w-full ${
                  location.pathname === item.path ? 'w-full' : ''
                }`} />
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 neon-border"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-neon-blue" />
              ) : (
                <Moon className="w-5 h-5 text-neon-blue" />
              )}
            </button>
            <button className="btn-secondary-magnetic">
              Watch 90-Second Demo
            </button>
            <button className="btn-magnetic">
              Book My Free Setup Call
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 neon-border"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-6 border-t border-white/10"
            >
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'text-neon-blue glow-text'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-4 pt-6">
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="self-start p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 neon-border"
                  >
                    {darkMode ? (
                      <Sun className="w-5 h-5 text-neon-blue" />
                    ) : (
                      <Moon className="w-5 h-5 text-neon-blue" />
                    )}
                  </button>
                  <button className="btn-secondary-magnetic text-sm">
                    Watch 90-Second Demo
                  </button>
                  <button className="btn-magnetic text-sm">
                    Book My Free Setup Call
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
