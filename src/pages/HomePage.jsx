import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  MessageSquare, 
  Brain, 
  Zap, 
  Clock, 
  DollarSign, 
  Users,
  ArrowRight,
  Play,
  CheckCircle,
  Star,
  TrendingUp,
  FileText,
  Smartphone,
  CreditCard,
  Settings,
  Globe,
  Phone,
  Mail,
  Calendar,
  BarChart3,
  Shield,
  Cpu,
  Network,
  Database,
  Mic,
  MessageCircle,
  Target,
  Sparkles
} from 'lucide-react'
import BrainCore from '../components/BrainCore'
import FlowDiagram from '../components/FlowDiagram'

const HomePage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [flowRef, flowInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [proposalRef, proposalInView] = useInView({ threshold: 0.3, triggerOnce: true })

  const valueProps = [
    {
      icon: MessageSquare,
      title: "24/7 Lead Follow-up",
      description: "AI handles SMS, iMessage, email, and voice calls automatically with your business tone",
      features: ["Smart conversation flows", "Multi-channel engagement", "Never miss a lead"]
    },
    {
      icon: Brain,
      title: "ForgeCore AI Brain",
      description: "Advanced AI trained on your business logic, pricing, and customer history",
      features: ["Learns your style", "Remembers everything", "Gets smarter over time"]
    },
    {
      icon: TrendingUp,
      title: "Proposal Engine",
      description: "Generates branded estimates with upsells based on your past quotes and services",
      features: ["Instant accurate quotes", "Automatic upselling", "Branded proposals"]
    }
  ]

  const integrations = [
    { name: "CCC", logo: "🚗" },
    { name: "Stripe", logo: "💳" },
    { name: "Notion", logo: "📝" },
    { name: "Sheets", logo: "📊" },
    { name: "Jobber", logo: "🔧" },
    { name: "Slack", logo: "💬" },
    { name: "Gmail", logo: "📧" },
    { name: "Drive", logo: "☁️" },
    { name: "AirMessage", logo: "💬" },
    { name: "Twilio", logo: "📞" }
  ]

  const testimonials = [
    {
      name: "Mike Rodriguez",
      business: "Rodriguez Auto Body",
      quote: "ForgeHQ's Proposal Engine increased our quote-to-close rate by 300%. The AI never sleeps and never forgets to follow up.",
      rating: 5,
      avatar: "👨‍🔧"
    },
    {
      name: "Sarah Chen",
      business: "Chen & Associates Law",
      quote: "We went from missing 60% of leads to capturing 95%. The AI understands legal intake better than most humans.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Tom Wilson",
      business: "Wilson HVAC Solutions",
      quote: "Best investment we've made. ForgeCore books more jobs in a week than we used to book in a month.",
      rating: 5,
      avatar: "👨‍🔧"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="section-padding min-h-screen flex items-center relative overflow-hidden">
        {/* Animated Circuit Background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#b347ff" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {Array.from({ length: 20 }, (_, i) => (
              <motion.path
                key={i}
                d={`M${i * 50},0 L${i * 50},1000 M0,${i * 50} L1000,${i * 50}`}
                stroke="url(#circuit-gradient)"
                strokeWidth="1"
                fill="none"
                strokeDasharray="5,5"
                animate={{
                  strokeDashoffset: [0, -10],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.1
                }}
              />
            ))}
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full text-neon-blue font-medium text-sm border border-neon-blue/30 mb-6">
                  <Sparkles className="w-4 h-4 inline mr-2" />
                  Powered by ForgeCore AI
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
              >
                Let AI Run Your Business
                <span className="gradient-text-premium block">Like a Pro</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl text-white/80 mb-10 max-w-2xl leading-relaxed"
              >
                The all-in-one AI business operator powered by <span className="text-neon-blue font-semibold">ForgeCore</span>. 
                Handles leads, quotes, follow-ups, and bookings 24/7 while learning your business style.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <button className="btn-magnetic group">
                  <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-200" />
                  Watch 90-Second Demo
                </button>
                <button className="btn-secondary-magnetic group">
                  <Calendar className="w-6 h-6 mr-3" />
                  Book My Free Setup Call
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="grid grid-cols-3 gap-8 mt-16"
              >
                {[
                  { value: "300%", label: "Quote Response Rate" },
                  { value: "24/7", label: "Lead Coverage" },
                  { value: "20+", label: "Hours Saved/Week" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold gradient-text-premium mb-2">{stat.value}</div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Brain Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex justify-center"
            >
              <BrainCore size={400} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="section-padding bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Why Business Owners Choose
              <span className="gradient-text-premium block">ForgeHQ</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Stop losing leads to slow response times and human error. Let ForgeCore handle the heavy lifting.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-3d-premium group relative overflow-hidden"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-r from-neon-blue to-neon-purple rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:animate-float relative">
                  <prop.icon className="w-10 h-10 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 glow-text">{prop.title}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{prop.description}</p>

                {/* Features */}
                <ul className="space-y-3">
                  {prop.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white/80">
                      <CheckCircle className="w-5 h-5 text-neon-green mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-neon-purple"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section ref={flowRef} className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={flowInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              How ForgeCore
              <span className="gradient-text-premium block">Operates Your Business</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              From first contact to payment collection - completely automated with intelligent decision making
            </p>
          </motion.div>

          <FlowDiagram />
        </div>
      </section>

      {/* Proposal Engine Section */}
      <section ref={proposalRef} className="section-padding bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={proposalInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                AI That Sells
                <span className="gradient-text-premium block">Like You</span>
              </h2>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                ForgeCore's Proposal Engine is trained on your business DNA - past quotes, service lists, 
                and communication style to create perfect estimates every time.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: FileText,
                    title: "Past Quotes & Invoices",
                    description: "Learns from your pricing history and successful deals"
                  },
                  {
                    icon: Settings,
                    title: "Service List & Upsells",
                    description: "Automatically suggests relevant add-ons and upgrades"
                  },
                  {
                    icon: MessageCircle,
                    title: "Your Communication Tone",
                    description: "Mimics your voice from emails, texts, and conversations"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={proposalInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-white/60">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Visual Demo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={proposalInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="card-3d-premium p-8 relative overflow-hidden">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">Proposal Engine</h3>
                  <p className="text-white/60 text-sm">Real-time quote generation</p>
                </div>

                {/* Input Area */}
                <div className="bg-black/30 rounded-xl p-4 mb-6 border border-neon-blue/30">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/80 text-sm">Customer Requirements</span>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white/10 rounded-lg p-2 text-white/70 text-sm">2018 Honda Civic - Front bumper repair</div>
                    <div className="bg-white/10 rounded-lg p-2 text-white/70 text-sm">Paint matching required</div>
                  </div>
                </div>

                {/* Processing */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Brain className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Output */}
                <div className="bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-xl p-4 border border-neon-blue/50">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-semibold text-sm">Branded Proposal Generated</span>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white/10 rounded-lg p-2 text-white text-sm font-medium">$1,247 - Front Bumper Repair</div>
                    <div className="bg-white/5 rounded-lg p-2 text-white/70 text-sm">+ $89 - Paint Protection Film (Recommended)</div>
                  </div>
                </div>

                {/* Animated Data Streams */}
                {Array.from({ length: 3 }, (_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-neon-blue to-transparent"
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Plugs Into The Tools
              <span className="gradient-text-premium block">You Already Use</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              ForgeCore seamlessly integrates with your existing workflow and amplifies every tool
            </p>
          </motion.div>

          {/* Integration Logos */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-3d-premium text-center group hover:scale-110 transition-transform duration-300"
              >
                <div className="text-4xl mb-3">{integration.logo}</div>
                <div className="text-white/70 text-sm font-medium">{integration.name}</div>
              </motion.div>
            ))}
          </div>

          {/* Integration Flow */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="card-3d-premium"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Client Data In</h3>
                <p className="text-white/60 text-sm">Reads CRM notes, past jobs, preferences</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <Cpu className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 glow-text">ForgeCore</h3>
                <p className="text-white/60 text-sm">Processes, learns, decides</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Actions Out</h3>
                <p className="text-white/60 text-sm">Sends estimates, books calls, processes payments</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Voice & Messaging Section */}
      <section className="section-padding bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Inbound or Outbound,
                <span className="gradient-text-premium block">Your Agent Never Sleeps</span>
              </h2>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                ForgeCore handles voice calls like your best front desk person - professional, 
                knowledgeable, and always available.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Professional Call Handling",
                    description: "\"Thanks for calling Rodriguez Auto Body, how can I help you today?\""
                  },
                  {
                    icon: MessageCircle,
                    title: "Smart Response System",
                    description: "Contextual replies that sound natural and helpful"
                  },
                  {
                    icon: Database,
                    title: "Auto CRM Sync",
                    description: "Every conversation transcribed and logged automatically"
                  },
                  {
                    icon: CreditCard,
                    title: "Payment Link Drops",
                    description: "Can send payment links via text during or after calls"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-neon-green to-neon-blue rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-white/60">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Call Interface Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="card-3d-premium relative overflow-hidden">
                {/* Call Interface */}
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 mb-6 border border-green-500/30">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-white font-semibold">Live Call - Rodriguez Auto Body</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-neon-blue text-sm font-medium mb-1">ForgeCore Agent:</div>
                      <div className="text-white/80 text-sm">"Thanks for calling Rodriguez Auto Body! I can help you get a quote for your repair. What type of vehicle are you calling about?"</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-white/60 text-sm font-medium mb-1">Customer:</div>
                      <div className="text-white/70 text-sm">"I have a 2019 Toyota Camry with front-end damage..."</div>
                    </div>
                  </div>
                </div>

                {/* Real-time Transcription */}
                <div className="bg-black/30 rounded-xl p-4 border border-neon-blue/30">
                  <div className="flex items-center space-x-2 mb-3">
                    <Mic className="w-4 h-4 text-neon-blue" />
                    <span className="text-white/80 text-sm">Real-time Transcription</span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-white/60 text-sm">✓ Vehicle: 2019 Toyota Camry</div>
                    <div className="text-white/60 text-sm">✓ Damage: Front bumper, headlight</div>
                    <div className="text-white/60 text-sm">✓ Insurance: State Farm (claim #pending)</div>
                    <motion.div
                      className="text-neon-blue text-sm"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ⚡ Generating quote...
                    </motion.div>
                  </div>
                </div>

                {/* Floating Action Buttons */}
                <div className="absolute top-4 right-4 space-y-2">
                  <motion.button
                    className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Calendar className="w-5 h-5 text-white" />
                  </motion.button>
                  <motion.button
                    className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <CreditCard className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Trusted by Business
              <span className="gradient-text-premium block">Operators</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              See how ForgeCore is transforming businesses across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-3d-premium group relative overflow-hidden"
              >
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/80 mb-8 italic text-lg leading-relaxed">"{testimonial.quote}"</p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-white/60 text-sm">{testimonial.business}</p>
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
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
              Ready to Let ForgeCore
              <span className="gradient-text-premium block">Run Your Business?</span>
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Join thousands of business operators who've automated their operations with ForgeHQ's AI platform
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-magnetic text-lg px-12 py-5">
                <Calendar className="w-6 h-6 mr-3" />
                Book My Free Setup Call
              </button>
              <button className="btn-secondary-magnetic text-lg px-12 py-5">
                <Play className="w-6 h-6 mr-3" />
                Watch 90-Second Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
