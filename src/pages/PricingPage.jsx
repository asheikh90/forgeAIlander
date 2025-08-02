import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  CheckCircle, 
  Zap, 
  Crown, 
  Rocket,
  Phone,
  CreditCard,
  Settings,
  Users,
  MessageSquare,
  TrendingUp,
  Brain,
  Globe,
  Shield,
  Sparkles,
  Calendar,
  Play,
  ArrowRight,
  Star
} from 'lucide-react'

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly')
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [plansRef, plansInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [addonsRef, addonsInView] = useInView({ threshold: 0.3, triggerOnce: true })

  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: billingCycle === 'monthly' ? 297 : 2970,
      originalPrice: billingCycle === 'monthly' ? null : 3564,
      description: "Perfect for small businesses getting started with AI automation",
      features: [
        "1 ForgeCore AI Agent",
        "CRM & Lead Management",
        "SMS & Email Automation",
        "Basic Proposal Engine",
        "24/7 Lead Follow-up",
        "Standard Support",
        "Up to 1,000 contacts"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500",
      highlight: false
    },
    {
      name: "Pro",
      icon: Crown,
      price: billingCycle === 'monthly' ? 497 : 4970,
      originalPrice: billingCycle === 'monthly' ? null : 5964,
      description: "For growing businesses that want the full ForgeCore experience",
      features: [
        "Everything in Starter",
        "GMB Pulse Automation",
        "SEO Agent",
        "Voice AI Integration",
        "Advanced Proposal Rules",
        "Priority Support",
        "Custom Integrations",
        "Up to 10,000 contacts",
        "Reactivate Mode"
      ],
      popular: true,
      color: "from-neon-blue to-neon-purple",
      highlight: true
    },
    {
      name: "Reseller",
      icon: Rocket,
      price: billingCycle === 'monthly' ? 997 : 9970,
      originalPrice: billingCycle === 'monthly' ? null : 11964,
      description: "White-label license to build your own AI automation empire",
      features: [
        "Everything in Pro",
        "White-label License",
        "Full Brand Customization",
        "Reseller Training Program",
        "Revenue Sharing",
        "Dedicated Account Manager",
        "Custom Buildouts Available",
        "Unlimited contacts",
        "Multi-tenant Dashboard"
      ],
      popular: false,
      color: "from-yellow-500 to-orange-500",
      highlight: false
    }
  ]

  const addOns = [
    {
      name: "Payment Processing",
      icon: CreditCard,
      price: "Keep the fees",
      description: "Process payments and keep all transaction fees with your own merchant account",
      features: ["Competitive rates", "Instant payouts", "Fraud protection", "Recurring billing", "Chargeback protection"],
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "VoIP Agent",
      icon: Phone,
      price: "$197/month",
      description: "Full inbound/outbound AI call handling with natural conversation",
      features: ["24/7 call answering", "Lead qualification", "Appointment booking", "Call recording", "Voicemail drops"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Custom Buildout",
      icon: Settings,
      price: "Enterprise",
      description: "Fully customized ForgeCore agents for your specific industry needs",
      features: ["Custom workflows", "Industry-specific training", "Dedicated development", "Ongoing optimization", "White-glove setup"],
      color: "from-orange-500 to-red-500"
    }
  ]

  const techStack = [
    {
      title: "GPT-4o Enterprise",
      description: "Latest AI models for intelligent conversations and decision making",
      icon: Brain
    },
    {
      title: "Self-hosted Infrastructure",
      description: "Jambonz, FaceTime alternatives for complete communication control",
      icon: Globe
    },
    {
      title: "Custom Payment Gateway",
      description: "NMI, Stripe Connect, or crypto processing with full ownership",
      icon: CreditCard
    },
    {
      title: "Advanced CRM Memory",
      description: "Client notes, birthdays, job history, and preference tracking",
      icon: Users
    }
  ]

  const faqs = [
    {
      question: "How is ForgeCore different from ChatGPT or other AI tools?",
      answer: "ForgeCore is specifically trained for business operations, not general conversation. It understands your industry, pricing, and processes to make real business decisions, not just chat."
    },
    {
      question: "Can I really white-label the entire platform?",
      answer: "Yes, completely. Your logo, colors, domain, and even the AI's personality can be customized. Your clients will never know it's powered by ForgeHQ."
    },
    {
      question: "What kind of businesses work best with ForgeCore?",
      answer: "Service-based businesses that quote jobs work best - auto body, HVAC, legal, solar, detailing, contractors. Any business that needs to qualify leads and send estimates."
    },
    {
      question: "How long does setup take?",
      answer: "Basic setup takes 24-48 hours. Custom industry training and integrations can take 1-2 weeks depending on complexity."
    },
    {
      question: "Do I need technical knowledge to use ForgeHQ?",
      answer: "No technical knowledge required. We handle all the setup and provide training. You just need to provide your business rules and pricing."
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="section-padding relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 30 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-neon-blue rounded-full"
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
              Transparent Pricing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
          >
            Simple, Transparent
            <span className="gradient-text-premium block">Pricing</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Choose the plan that fits your business. All plans include ForgeCore AI automation, 
            smart quoting, and 24/7 operation. No hidden fees, no surprises.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center mb-16"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 flex border border-white/20">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 relative ${
                  billingCycle === 'yearly'
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Yearly
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                  Save 17%
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section ref={plansRef} className="section-padding bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                animate={plansInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative card-3d-premium group ${
                  plan.popular 
                    ? 'ring-2 ring-neon-blue/50 transform scale-105' 
                    : ''
                } ${plan.highlight ? 'bg-gradient-to-br from-neon-blue/10 to-neon-purple/10' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-6 py-3 rounded-full text-sm font-bold flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-10">
                  <div className={`w-20 h-20 bg-gradient-to-r ${plan.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:animate-float relative`}>
                    <plan.icon className="w-10 h-10 text-white" />
                    <div className={`absolute inset-0 bg-gradient-to-r ${plan.color} rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3 glow-text">{plan.name}</h3>
                  <p className="text-white/70 mb-8 leading-relaxed">{plan.description}</p>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-5xl font-bold text-white">${plan.price}</span>
                      <span className="text-white/60 ml-2 text-lg">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    {plan.originalPrice && (
                      <div className="text-white/40 line-through text-xl">
                        ${plan.originalPrice}/{billingCycle === 'monthly' ? 'month' : 'year'}
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white/80">
                      <CheckCircle className="w-5 h-5 text-neon-green mr-4 flex-shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:from-neon-blue/80 hover:to-neon-purple/80 shadow-lg hover:shadow-xl'
                    : 'bg-white/10 text-white hover:bg-white/20 border-2 border-white/20 hover:border-white/40'
                }`}>
                  Get Started
                  <ArrowRight className="w-5 h-5 inline ml-2" />
                </button>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section ref={addonsRef} className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={addonsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Powerful
              <span className="gradient-text-premium block">Add-ons</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Extend your ForgeCore platform with these premium features and services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 50 }}
                animate={addonsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-3d-premium group relative overflow-hidden"
              >
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${addon.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:animate-float relative`}>
                    <addon.icon className="w-10 h-10 text-white" />
                    <div className={`absolute inset-0 bg-gradient-to-r ${addon.color} rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 glow-text">{addon.name}</h3>
                  <p className="text-white/70 mb-6 leading-relaxed">{addon.description}</p>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${addon.color} bg-clip-text text-transparent`}>
                    {addon.price}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {addon.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white/80 text-sm">
                      <div className={`w-2 h-2 bg-gradient-to-r ${addon.color} rounded-full mr-3 flex-shrink-0`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 px-6 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 font-semibold">
                  Learn More
                </button>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${addon.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-padding bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Enterprise-Grade
              <span className="gradient-text-premium block">Technology</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Built on cutting-edge AI and infrastructure for maximum reliability, security, and performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-3d-premium text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-float">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 glow-text">{tech.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Frequently Asked
              <span className="gradient-text-premium block">Questions</span>
            </h2>
            <p className="text-xl text-white/60">
              Everything you need to know about ForgeCore and our pricing
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-3d-premium"
              >
                <h3 className="text-xl font-bold text-white mb-4 glow-text">{faq.question}</h3>
                <p className="text-white/70 leading-relaxed">{faq.answer}</p>
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
              Ready to Transform
              <span className="gradient-text-premium block">Your Business?</span>
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Start your free trial today and see how ForgeCore can save you 20+ hours per week 
              while closing more deals than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-magnetic text-lg px-12 py-5">
                <Zap className="w-6 h-6 mr-3" />
                Start Free Trial
              </button>
              <button className="btn-secondary-magnetic text-lg px-12 py-5">
                <Calendar className="w-6 h-6 mr-3" />
                Book Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PricingPage
