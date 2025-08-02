import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Zap, Brain, Network } from 'lucide-react'

const BrainCore = ({ size = 200 }) => {
  const neurons = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    angle: (i * 45) * (Math.PI / 180),
    delay: i * 0.2,
  }))

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Central Core */}
      <motion.div
        className="absolute w-20 h-20 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center z-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Brain className="w-10 h-10 text-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full blur-xl opacity-60 animate-pulse-glow" />
      </motion.div>

      {/* Neural Network Nodes */}
      {neurons.map((neuron) => (
        <motion.div
          key={neuron.id}
          className="absolute w-8 h-8 bg-gradient-to-r from-neon-green to-neon-blue rounded-full flex items-center justify-center"
          style={{
            left: `calc(50% + ${Math.cos(neuron.angle) * (size * 0.35)}px - 16px)`,
            top: `calc(50% + ${Math.sin(neuron.angle) * (size * 0.35)}px - 16px)`,
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: neuron.delay,
            ease: "easeInOut"
          }}
        >
          <Zap className="w-4 h-4 text-white" />
        </motion.div>
      ))}

      {/* Data Streams */}
      {neurons.map((neuron) => (
        <motion.div
          key={`stream-${neuron.id}`}
          className="absolute w-0.5 bg-gradient-to-r from-transparent via-neon-blue to-transparent"
          style={{
            left: '50%',
            top: '50%',
            height: size * 0.35,
            transformOrigin: 'bottom center',
            transform: `rotate(${neuron.angle * (180 / Math.PI)}deg)`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scaleY: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: neuron.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Outer Ring */}
      <motion.div
        className="absolute inset-0 border-2 border-neon-blue/30 rounded-full"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Inner Ring */}
      <motion.div
        className="absolute inset-8 border border-neon-purple/50 rounded-full"
        animate={{
          rotate: [0, 360],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}

export default BrainCore
