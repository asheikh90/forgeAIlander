import React from 'react'
import { motion } from 'framer-motion'
import { 
  MessageCircle, 
  Brain, 
  FileText, 
  Send, 
  Calendar,
  CreditCard,
  ArrowRight,
  Zap
} from 'lucide-react'

const FlowDiagram = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Lead Visits",
      description: "Customer contacts your business",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "AI Agent Responds",
      description: "ForgeCore qualifies and engages",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FileText,
      title: "Quote Generated",
      description: "Proposal Engine creates estimate",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Send,
      title: "Follow-up via SMS/Email",
      description: "Automated nurture sequences",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Calendar,
      title: "Job Booked",
      description: "Calendar sync and confirmation",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: CreditCard,
      title: "Payment Processed",
      description: "Automated billing and collection",
      color: "from-pink-500 to-rose-500"
    }
  ]

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Flow Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative"
          >
            {/* Connection Line */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 z-0">
                <motion.div
                  className="w-8 h-0.5 bg-gradient-to-r from-neon-blue to-transparent"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scaleX: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
                <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-neon-blue" />
              </div>
            )}

            {/* Step Card */}
            <div className="card-3d-premium text-center group relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Step Number */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-float relative`}>
                <step.icon className="w-8 h-8 text-white" />
                <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 glow-text">{step.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>

              {/* Data Stream Effect */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-blue to-transparent"
                animate={{
                  opacity: [0, 1, 0],
                  scaleX: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Central Processing Indicator */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 pointer-events-none hidden lg:block"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full border-2 border-neon-blue/20 rounded-full flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
            <Zap className="w-8 h-8 text-white" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default FlowDiagram
