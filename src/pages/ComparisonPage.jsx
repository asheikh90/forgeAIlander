import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, X, Zap, CreditCard, MessageSquare, Brain, Phone, Globe, Shield, Sparkles } from 'lucide-react'

const ComparisonPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [tableRef, tableInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [demoRef, demoInView] = useInView({ threshold: 0.3, triggerOnce: true })

  const comparisonData = [
    {
      feature: "AI Quoting System",
      forgeHQ: true,
      stripe: false,
      ghl: false,
      description: "Automatically generate accurate quotes based on customer requirements and business history"
    },
    {
      feature: "Inbound Call Agent",
      forgeHQ: true,
      stripe: false,
      ghl: false,
      description: "AI answers and qualifies phone calls 24/7 with natural conversation"
    },
    {
      feature: "Self-hosted Messaging",
      forgeHQ: true,
      stripe: false,
      twilio: false,
      description: "Own your messaging infrastructure, no per-message fees or vendor lock-in"
    },
    {
      feature: "Residual Revenue Sharing",
      forgeHQ: true,
      stripe: false,
      ghl: false,
      description: "Earn ongoing revenue from payment processing and communications"
    },
    {
      feature: "AI Memory + CRM",
      forgeHQ: true,
      stripe: false,
      ghl: "Limited",
      description: "AI remembers customer history, preferences, and past interactions across all channels"
    },
    {
      feature: "24/7 Lead Follow-up",
      forgeHQ: true,
      stripe: false,
      ghl: "Manual",
      description: "Automated, intelligent follow-up sequences that never stop working"
    },
    {
      feature: "Voice AI Integration",
      forgeHQ: true,
      stripe: false,
      ghl: false,
      description: "Make and receive calls with AI voice agents trained on your business"
    },
    {
      feature: "White-label Ready",
      forgeHQ: true,
      stripe: "Limited",
      ghl: "Paid",
      description: "Complete branding customization included at no extra cost"
    },
    {
      feature: "Payment Processing",
      forgeHQ: "Included",
      stripe: true,
      ghl: "Third-party",
      description: "Built-in payment processing with competitive rates and full control"
    },
    {
      feature: "SEO & GMB Automation",
      forgeHQ: true,
      stripe: false,
      ghl: false,
      description: "Automated search optimization and Google My Business management"
    },
    {
      feature: "Custom Industry Training",
      forgeHQ: true,
      stripe: false,
      ghl: false,
      description: "AI trained specifically for your industry with specialized knowledge"
    },
    {
      feature: "Multi-channel Communication",
      forgeHQ: true,
      stripe: false,
      ghl: "Basic",
      description: "SMS, email, voice, and social media all in one intelligent system"
    }
  ]

  const platforms = [
    { 
      name: "ForgeHQ", 
      color: "from-neon-blue to-neon-purple", 
      icon: Zap,
      tagline: "Complete AI Business Operator"
    },
    { 
      name: "Stripe", 
      color: "from-purple-500 to-purple-600", 
      icon: CreditCard,
      tagline: "Payment Processing Only"
    },
    { 
      name: "GoHighLevel", 
      color: "from-green-500 to-green-600", 
      icon: MessageSquare,
      tagline: "Marketing Automation"
    }
  ]

  const renderFeatureValue = (value, platform) => {
    if (value === true) {
      return (
        <div className="flex items-center justify-center">
          <CheckCircle className="w-6 h-6 text-neon-green" />
        </div>
      )
    } else if (value === false) {
      return (
        <div className="flex items-center justify-center">
          <X className="w-6 h-6 text-red-400" />
        </div>
      )
    } else if (value === "Limited" || value === "Manual" || value === "Paid" || value === "Third-party" || value === "Basic") {
      return (
        <div className="flex items-center justify-center">
          <span className="text-yellow-400 text-sm font-medium px-2 py-1 bg-yellow-400/10 rounded-full border border-yellow-400/20">
            {value}
          </span>
        </div>
      )
    } else {
      return (
        <div className="flex items-center justify-center">
          <span className="text-neon-blue text-sm font-medium px-2 py-1 bg-neon-blue/10 rounded-full border border-neon-blue/20">
            {value}
          </span>
        </div>
      )
    }
  }

  const demoScenarios = [
    {
      title: "AI Quoting Agent",
      description: "Watch ForgeCore generate accurate quotes in seconds",
      action: "Quote Generated",
      color: "from-blue-500 to-cyan-500",
      icon: Brain
    },
    {
      title: "SMS Follow-up Agent",
      description: "See persistent but professional follow-up in action",
      action: "Message Sent",
      color: "from-green-500 to-emerald-500",
      icon: MessageSquare
    },
    {
      title: "Voice Booking Agent",
      description: "AI schedules appointments and confirms details",
      action: "Job Booked",
      color: "from-purple-500 to-pink-500",
      icon: Phone
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="section-padding relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(179, 71, 255, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 40% 80%, rgba(0, 255, 136, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)",
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full text-neon-blue font-medium border border-neon-blue/30 mb-8">
              <Sparkles className="w-5 h-5 inline mr-2" />
              The Ultimate Comparison
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
          >
            Why ForgeCore Beats
            <span className="gradient-text-premium block">The Competition</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            See how ForgeHQ stacks up against GoHighLevel, Stripe, and Twilio. 
            We're not just another tool - we're a complete AI business operator that thinks, learns, and acts.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {[
              { value: "12+", label: "Unique AI Features" },
              { value: "100%", label: "White-label Ready" },
              { value: "24/7", label: "Intelligent Operation" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold gradient-text-premium mb-2">{stat.value}</div>
                <div className="text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Platform Headers */}
      <section className="section-padding bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card-3d-premium text-center group relative overflow-hidden ${
                  platform.name === 'ForgeHQ' ? 'ring-2 ring-neon-blue/50 scale-105' : ''
                }`}
              >
                {platform.name === 'ForgeHQ' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Winner
                    </div>
                  </div>
                )}

                <div className={`w-20 h-20 bg-gradient-to-r ${platform.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:animate-float relative`}>
                  <platform.icon className="w-10 h-10 text-white" />
                  <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 glow-text">{platform.name}</h3>
                <p className="text-white/60">{platform.tagline}</p>

                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </motion.div>
            ))}
          </div>

          {/* Comparison Table */}
          <motion.div
            ref={tableRef}
            initial={{ opacity: 0, y: 50 }}
            animate={tableInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="card-3d-premium overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-6 px-6 text-white font-bold text-lg">Feature</th>
                    <th className="text-center py-6 px-6 text-white font-bold text-lg">
                      <span className="gradient-text-premium">ForgeHQ</span>
                    </th>
                    <th className="text-center py-6 px-6 text-white font-bold text-lg">Stripe</th>
                    <th className="text-center py-6 px-6 text-white font-bold text-lg">GoHighLevel</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={tableInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors duration-200 group"
                    >
                      <td className="py-6 px-6">
                        <div>
                          <p className="text-white font-semibold mb-2">{row.feature}</p>
                          <p className="text-white/60 text-sm leading-relaxed">{row.description}</p>
                        </div>
                      </td>
                      <td className="py-6 px-6 text-center bg-neon-blue/5 group-hover:bg-neon-blue/10 transition-colors duration-200">
                        {renderFeatureValue(row.forgeHQ, 'forgeHQ')}
                      </td>
                      <td className="py-6 px-6 text-center">
                        {renderFeatureValue(row.stripe, 'stripe')}
                      </td>
                      <td className="py-6 px-6 text-center">
                        {renderFeatureValue(row.ghl || row.twilio, 'ghl')}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Real-time Demo Section */}
      <section ref={demoRef} className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={demoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              See ForgeCore
              <span className="gradient-text-premium block">In Action</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Watch our AI agents work in real-time - quoting, texting, and booking jobs while competitors sleep
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {demoScenarios.map((demo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={demoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-3d-premium group cursor-pointer relative overflow-hidden"
              >
                {/* Demo Interface */}
                <div className={`h-64 bg-gradient-to-br ${demo.color}/20 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-center">
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-r ${demo.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <demo.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <motion.div
                      className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
                      animate={{
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      {demo.action}
                    </motion.div>
                  </div>
                  
                  {/* Animated Data Streams */}
                  {Array.from({ length: 3 }, (_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-full h-0.5 bg-gradient-to-r from-transparent via-neon-blue to-transparent`}
                      style={{ top: `${30 + i * 20}%` }}
                      animate={{
                        opacity: [0, 1, 0],
                        scaleX: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 glow-text">{demo.title}</h3>
                <p className="text-white/70 leading-relaxed">{demo.description}</p>

                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${demo.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ForgeHQ Wins */}
      <section className="section-padding bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              The ForgeCore
              <span className="gradient-text-premium block">Advantage</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              While others offer pieces, we deliver the complete AI business operator
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Complete AI Integration",
                description: "ForgeCore doesn't just process payments or send messages - it thinks, learns, and operates your entire business with human-like intelligence.",
                icon: Brain,
                color: "from-neon-blue to-neon-purple"
              },
              {
                title: "True White-label Solution",
                description: "Unlike competitors who charge extra for branding, ForgeHQ includes complete customization. Your brand, your voice, your business.",
                icon: Globe,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Residual Revenue Model",
                description: "Build a sustainable business with our reseller program. Earn on subscriptions, processing, and communications - not just one-time fees.",
                icon: CreditCard,
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Enterprise-Grade Security",
                description: "Self-hosted infrastructure means you own your data. No vendor lock-in, no per-message fees, complete control over your business operations.",
                icon: Shield,
                color: "from-orange-500 to-red-500"
              }
            ].map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-3d-premium group relative overflow-hidden"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${advantage.color} rounded-2xl flex items-center justify-center mb-6 group-hover:animate-float`}>
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 glow-text">{advantage.title}</h3>
                <p className="text-white/70 leading-relaxed">{advantage.description}</p>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 backdrop-blur-sm border-y border-neon-blue/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-white mb-8">
              Ready to Switch to
              <span className="gradient-text-premium block">ForgeCore?</span>
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Stop paying for multiple tools that don't work together. Get everything in one AI-powered platform 
              that actually understands your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-magnetic text-lg px-12 py-5">
                <Zap className="w-6 h-6 mr-3" />
                Start Free Trial
              </button>
              <button className="btn-secondary-magnetic text-lg px-12 py-5">
                <MessageSquare className="w-6 h-6 mr-3" />
                Compare Plans
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ComparisonPage
