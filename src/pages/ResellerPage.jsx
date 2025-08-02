import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Palette, 
  DollarSign, 
  Users, 
  Settings,
  Smartphone,
  CreditCard,
  MessageSquare,
  TrendingUp,
  Crown,
  Zap,
  Target,
  BarChart3,
  Globe,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react'

const ResellerPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [revenueRef, revenueInView] = useInView({ threshold: 0.3, triggerOnce: true })

  const benefits = [
    {
      icon: Palette,
      title: "Full Brand Customization",
      description: "Colors, logos, voice, and messaging - make ForgeCore completely yours",
      features: ["Custom color schemes", "Your logo throughout", "Branded AI personality", "White-label URLs"]
    },
    {
      icon: Target,
      title: "Target Any Vertical",
      description: "Collision shops, law firms, HVAC, solar, detailing - you choose the market",
      features: ["Industry-specific training", "Vertical templates", "Specialized workflows", "Market expertise"]
    },
    {
      icon: DollarSign,
      title: "Set Your Own Pricing",
      description: "Charge $297-$997/month and keep the difference as pure profit",
      features: ["100% markup control", "Flexible pricing tiers", "Volume discounts", "Enterprise deals"]
    },
    {
      icon: TrendingUp,
      title: "Multiple Revenue Streams",
      description: "Earn on subscriptions, processing, SMS/calls, and custom buildouts",
      features: ["Monthly recurring revenue", "Transaction fees", "Communication markup", "Setup fees"]
    }
  ]

  const mockups = [
    {
      title: "Branded ForgeCore Dashboard",
      description: "Your logo, colors, and branding throughout the entire AI platform",
      features: ["Custom color schemes", "Your logo placement", "Branded login pages", "White-label URLs"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI Agent Customization",
      description: "Train ForgeCore to speak in your brand's voice and industry expertise",
      features: ["Custom personality", "Industry-specific responses", "Your business rules", "Branded signatures"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Payment & Billing Pages",
      description: "Fully branded checkout and payment processing with your merchant account",
      features: ["Your business name", "Custom styling", "Your merchant account", "Branded receipts"],
      gradient: "from-green-500 to-emerald-500"
    }
  ]

  const revenueStreams = [
    {
      icon: CreditCard,
      title: "Monthly Subscriptions",
      amount: "$297-$997",
      description: "Charge clients monthly for ForgeCore access. Keep 100% of markup.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Smartphone,
      title: "Payment Processing",
      amount: "2-3%",
      description: "Earn residuals on every transaction your clients process.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageSquare,
      title: "SMS & Voice Credits",
      amount: "$0.02-0.05",
      description: "Mark up communication costs and earn on every message and call.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Settings,
      title: "Custom Buildouts",
      amount: "$5K-50K",
      description: "High-value enterprise setups and industry-specific customizations.",
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="section-padding min-h-screen flex items-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 50 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full text-yellow-400 font-medium border border-yellow-400/30 mb-8">
                <Crown className="w-5 h-5 inline mr-2" />
                Exclusive Reseller Program
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
            >
              License ForgeCore.
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent block">Make it Yours.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Build your own AI business automation empire. White-label ForgeCore, customize everything, 
              and sell to your target market at premium prices. Your brand, your pricing, our technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <button className="btn-magnetic text-lg px-12 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600">
                <Crown className="w-6 h-6 mr-3" />
                Become a Reseller
              </button>
              <button className="btn-secondary-magnetic text-lg px-12 py-5">
                <Globe className="w-6 h-6 mr-3" />
                View Demo Platform
              </button>
            </motion.div>

            {/* Success Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
            >
              {[
                { value: "$50K+", label: "Average Monthly Revenue" },
                { value: "85%", label: "Profit Margins" },
                { value: "200+", label: "Active Resellers" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">{stat.value}</div>
                  <div className="text-white/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="section-padding bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Why Become a
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent block">ForgeHQ Reseller?</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Turn AI automation into your competitive advantage and build a recurring revenue empire
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-3d-premium group relative overflow-hidden"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center mb-8 group-hover:animate-float relative">
                  <benefit.icon className="w-10 h-10 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 glow-text">{benefit.title}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{benefit.description}</p>

                {/* Features */}
                <ul className="space-y-3">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white/80">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mockups Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Complete Customization
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent block">Control</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Every aspect of ForgeCore can be branded and customized to match your business identity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {mockups.map((mockup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-3d-premium group relative overflow-hidden"
              >
                {/* Mockup Preview */}
                <div className={`h-64 bg-gradient-to-br ${mockup.gradient}/20 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-center">
                    <div className={`w-20 h-20 bg-gradient-to-r ${mockup.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-float`}>
                      <Settings className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-white/60 text-sm">Interactive Preview</p>
                  </div>
                  
                  {/* Animated Elements */}
                  {Array.from({ length: 5 }, (_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-2 h-2 bg-gradient-to-r ${mockup.gradient} rounded-full`}
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 2) * 40}%`,
                      }}
                      animate={{
                        scale: [0.5, 1.5, 0.5],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 glow-text">{mockup.title}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{mockup.description}</p>
                
                <ul className="space-y-3">
                  {mockup.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white/80">
                      <div className={`w-2 h-2 bg-gradient-to-r ${mockup.gradient} rounded-full mr-3 flex-shrink-0`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${mockup.gradient}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Model Section */}
      <section ref={revenueRef} className="section-padding bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={revenueInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Multiple Revenue
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent block">Streams</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Build a sustainable business with recurring revenue and transaction-based income
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {revenueStreams.map((stream, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={revenueInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-3d-premium text-center group relative overflow-hidden"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stream.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-float`}>
                  <stream.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{stream.title}</h3>
                <div className={`text-2xl font-bold bg-gradient-to-r ${stream.color} bg-clip-text text-transparent mb-3`}>
                  {stream.amount}
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{stream.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Revenue Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={revenueInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="card-3d-premium bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-8 glow-text">Revenue Calculator</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-black/30 rounded-xl border border-green-500/20">
                    <span className="text-white/80">25 clients × $497/month</span>
                    <span className="text-green-400 font-bold text-xl">$12,425</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-black/30 rounded-xl border border-blue-500/20">
                    <span className="text-white/80">Processing fees (2.5%)</span>
                    <span className="text-blue-400 font-bold text-xl">$3,200</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-black/30 rounded-xl border border-purple-500/20">
                    <span className="text-white/80">SMS/Voice markup</span>
                    <span className="text-purple-400 font-bold text-xl">$1,800</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-black/30 rounded-xl border border-orange-500/20">
                    <span className="text-white/80">Custom buildouts</span>
                    <span className="text-orange-400 font-bold text-xl">$15,000</span>
                  </div>
                  <div className="border-t border-white/20 pt-6">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold text-xl">Monthly Revenue</span>
                      <span className="text-green-400 font-bold text-3xl glow-text">$32,425</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <motion.div
                  className="w-48 h-48 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 relative"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="w-32 h-32 bg-black/20 rounded-full flex items-center justify-center">
                    <BarChart3 className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-xl opacity-50" />
                </motion.div>
                <h4 className="text-2xl font-bold text-white mb-4">Scale Your Empire</h4>
                <p className="text-white/70 leading-relaxed">
                  Start with 5-10 clients and scale to 100+ as you build your reputation and referral network.
                </p>
              </div>
            </div>

            {/* Animated Background Elements */}
            {Array.from({ length: 10 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-green-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Reseller Success
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent block">Stories</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              See how our resellers are building million-dollar AI automation businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: "Alex Thompson",
                business: "AutoTech Solutions",
                revenue: "$85K/month",
                clients: "47 auto body shops",
                quote: "ForgeHQ's white-label platform let me build a $1M ARR business in 18 months. The AI is so good, my clients think I have a team of 20 people.",
                avatar: "👨‍💼"
              },
              {
                name: "Maria Rodriguez",
                business: "LegalAI Partners",
                revenue: "$120K/month",
                clients: "23 law firms",
                quote: "I went from freelance consultant to running a 7-figure AI automation agency. ForgeCore handles everything while I focus on sales and growth.",
                avatar: "👩‍💼"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-3d-premium group relative overflow-hidden"
              >
                {/* Stats Header */}
                <div className="flex items-center justify-between mb-6 p-4 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-xl border border-yellow-400/20">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl">
                      {story.avatar}
                    </div>
                    <div>
                      <div className="text-white font-bold">{story.name}</div>
                      <div className="text-white/60 text-sm">{story.business}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-yellow-400 font-bold text-lg">{story.revenue}</div>
                    <div className="text-white/60 text-sm">{story.clients}</div>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-white/80 italic text-lg leading-relaxed mb-6">"{story.quote}"</p>

                {/* Rating */}
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm border-y border-yellow-400/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-white mb-8">
              Ready to Build Your
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent block">AI Empire?</span>
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Join our exclusive reseller program and start building your AI automation business today. 
              Limited spots available for serious operators only.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-magnetic text-lg px-12 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600">
                <Crown className="w-6 h-6 mr-3" />
                Apply Now
              </button>
              <button className="btn-secondary-magnetic text-lg px-12 py-5">
                <Users className="w-6 h-6 mr-3" />
                Schedule Strategy Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ResellerPage
