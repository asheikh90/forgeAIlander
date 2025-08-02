import React, { useEffect, useState } from 'react'

const ParticleField = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = []
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 15,
          duration: 15 + Math.random() * 10,
          size: 2 + Math.random() * 3,
        })
      }
      setParticles(newParticles)
    }

    generateParticles()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full opacity-60"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, rgba(0, 212, 255, 0.8) 0%, transparent 70%)`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            animation: `particle ${particle.duration}s linear infinite`,
          }}
        />
      ))}
    </div>
  )
}

export default ParticleField
