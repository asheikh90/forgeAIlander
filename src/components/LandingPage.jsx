import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  ArrowRight, 
  Zap, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  X, 
  Clock, 
  MessageSquare, 
  Camera, 
  Globe, 
  Phone, 
  Mail,
  Settings,
  Users,
  Shield,
  Star,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

const LandingPage = () => {
  const navigate = useNavigate()
  const [showForm, setShowForm] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    businessType: '',
    painPoints: [],
    aiTakeOver: ''
  })

  const businessTypes = [
    'Auto Shop',
    'HVAC',
    'Legal',
    'Marketing Agency',
    'Retail',
    'Construction',
    'Other'
  ]

  const painPointOptions = [
    'Too many leads to handle',
    'Not enough quality leads',
    'No follow-up system',
    'Website doesn\'t convert',
    'SEO not working',
    'Missed quotes and opportunities',
    'Inconsistent pricing',
    'Too many disconnected tools'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePainPointChange = (painPoint) => {
    setFormData(prev => ({
      ...prev,
      painPoints: prev.painPoints.includes(painPoint)
        ? prev.painPoints.filter(p => p !== painPoint)
        : [...prev.painPoints, painPoint]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const submissionData = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now().toString()
    }
    
    localStorage.setItem('forgehq_submission', JSON.stringify(submissionData))
    navigate('/welcome')
  }

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "Will this replace my team?",
      answer: "No, ForgeHQ augments your team by handling repetitive tasks like lead follow-up, quote generation, and SEO content. Your team can focus on high-value work like closing deals and serving customers."
    },
    {
      question: "Do I need to know tech to use this?",
      answer: "Not at all. ForgeHQ is designed for business operators, not tech experts. We handle all the setup and training. You just connect your existing tools and let it work."
    },
    {
      question: "Can I turn parts off or customize what it does?",
      answer: "Absolutely. You have full control over which modules are active. Want just lead follow-up? Turn off SEO. Need only quote generation? Disable the CRM. It's your business, your rules."
    },
    {
      question: "Is this really trained on MY specific business?",
      answer: "Yes. ForgeHQ learns your tone from emails, your pricing from past quotes, and your processes from how you currently operate. It's not generic AI - it's YOUR AI operator."
    },
    {
      question: "How long does setup take?",
      answer: "Initial setup takes about 30 minutes to connect your tools. Training on your business data happens automatically over 24-48 hours. You'll see results within the first week."
    },
    {
      question: "What if I don't like it?",
      answer: "We're confident you'll love ForgeHQ, but if it's not right for your business, you can cancel anytime. No long-term contracts, no hassle."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-6 sticky top-0 bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-primary-500" />
            <span className="text-2xl font-bold">ForgeHQ</span>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Get Early Access
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary-500/10 text-primary-400 px-4 py-2 rounded-full mb-8">
            <Zap className="h-4 w-4" />
            <span className="text-sm font-medium">AI-Powered Business Operator</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
            Let AI Run Your Business{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              Like a Pro
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            ForgeHQ is the first hands-off AI operator that thinks, talks, and acts like you — trained on your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => setShowForm(true)}
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Join the Early Access List</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border border-gray-600 hover:border-gray-500 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              Watch Demo
            </button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <Clock className="h-8 w-8 text-primary-500 mx-auto mb-2" />
              <span className="text-sm text-gray-300">24/7 Operations</span>
            </div>
            <div className="text-center">
              <Target className="h-8 w-8 text-primary-500 mx-auto mb-2" />
              <span className="text-sm text-gray-300">Zero Missed Leads</span>
            </div>
            <div className="text-center">
              <TrendingUp className="h-8 w-8 text-primary-500 mx-auto mb-2" />
              <span className="text-sm text-gray-300">Auto Growth</span>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 text-primary-500 mx-auto mb-2" />
              <span className="text-sm text-gray-300">Your Brand Voice</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gray-800/50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">Running a Business is Overwhelming...</h2>
            <p className="text-xl text-gray-300">
              You're juggling too many tools, missing opportunities, and spending time on tasks that should be automated.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-red-900/20 border border-red-800/30 rounded-xl p-6 text-center">
              <X className="h-8 w-8 text-red-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-red-300">Missed Leads</h3>
              <p className="text-sm text-gray-400">Leads slip through the cracks because there's no consistent follow-up system</p>
            </div>
            
            <div className="bg-red-900/20 border border-red-800/30 rounded-xl p-6 text-center">
              <X className="h-8 w-8 text-red-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-red-300">Inconsistent Quotes</h3>
              <p className="text-sm text-gray-400">Pricing varies by who's working, leading to lost deals and confused customers</p>
            </div>
            
            <div className="bg-red-900/20 border border-red-800/30 rounded-xl p-6 text-center">
              <X className="h-8 w-8 text-red-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-red-300">SEO Nightmare</h3>
              <p className="text-sm text-gray-400">Your website doesn't rank, and you don't have time to create content</p>
            </div>
            
            <div className="bg-red-900/20 border border-red-800/30 rounded-xl p-6 text-center">
              <X className="h-8 w-8 text-red-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-red-300">Tool Chaos</h3>
              <p className="text-sm text-gray-400">Too many disconnected tools that don't talk to each other</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes ForgeHQ Different */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">What Makes ForgeHQ Different</h2>
            <p className="text-xl text-gray-300">
              This isn't another chatbot or generic AI tool. ForgeHQ is trained specifically on YOUR business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="bg-primary-500/10 p-3 rounded-lg w-fit mb-4">
                <MessageSquare className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">No Prompting Required</h3>
              <p className="text-gray-300">Learns your tone, style, and processes automatically. No complex setup or prompt engineering.</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="bg-primary-500/10 p-3 rounded-lg w-fit mb-4">
                <Settings className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trained on Your Logic</h3>
              <p className="text-gray-300">Uses your past quotes, emails, and pricing to make decisions exactly like you would.</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="bg-primary-500/10 p-3 rounded-lg w-fit mb-4">
                <Globe className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Deploys to Your Website</h3>
              <p className="text-gray-300">Automatically publishes SEO content and updates directly to your existing website.</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="bg-primary-500/10 p-3 rounded-lg w-fit mb-4">
                <Clock className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Follow-Up</h3>
              <p className="text-gray-300">Never miss a lead again. Responds instantly and follows up until they convert or opt out.</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="bg-primary-500/10 p-3 rounded-lg w-fit mb-4">
                <Camera className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Photo to Quote</h3>
              <p className="text-gray-300">Customers send photos, AI generates accurate quotes based on your pricing logic.</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="bg-primary-500/10 p-3 rounded-lg w-fit mb-4">
                <Target className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-Channel Intake</h3>
              <p className="text-gray-300">Pulls leads from Google Ads, website forms, social media, and phone calls.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Signup Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Reserve Your Spot</h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Business Type</label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select your business type</option>
                  {businessTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Main Pain Points (select all that apply)</label>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {painPointOptions.map(painPoint => (
                    <label key={painPoint} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.painPoints.includes(painPoint)}
                        onChange={() => handlePainPointChange(painPoint)}
                        className="w-4 h-4 text-primary-500 bg-gray-700 border-gray-600 rounded focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-300">{painPoint}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">What would you let AI handle tomorrow?</label>
                <textarea
                  name="aiTakeOver"
                  value={formData.aiTakeOver}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder="Tell us what you'd love to automate..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Reserve My Spot</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* How It Works */}
      <section className="bg-gray-800/50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">How It Works</h2>
            <p className="text-xl text-gray-300">
              Three simple steps to get your AI operator running your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                1
              </div>
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex justify-center space-x-4 mb-4">
                  <Mail className="h-8 w-8 text-primary-500" />
                  <Globe className="h-8 w-8 text-primary-500" />
                  <Phone className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Connect Your Tools</h3>
                <p className="text-gray-300">Link Gmail, website, phone system, and any existing CRM. Takes about 30 minutes.</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                2
              </div>
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex justify-center space-x-4 mb-4">
                  <Settings className="h-8 w-8 text-primary-500" />
                  <MessageSquare className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Learns Your Business</h3>
                <p className="text-gray-300">We train it on your quotes, emails, tone, and pricing logic. Happens automatically over 24-48 hours.</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                3
              </div>
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex justify-center space-x-4 mb-4">
                  <Zap className="h-8 w-8 text-primary-500" />
                  <TrendingUp className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">It Starts Working</h3>
                <p className="text-gray-300">AI begins handling SEO, quotes, follow-ups automatically. You focus on running your business.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">Who It's For</h2>
            <p className="text-xl text-gray-300">
              Service-based operators who want results, not more tools to manage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <div className="bg-primary-500/10 p-4 rounded-lg mb-4 mx-auto w-fit">
                <Settings className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="font-semibold mb-2">Auto Shops</h3>
              <p className="text-sm text-gray-400">Quote repairs from photos, follow up on estimates, manage service appointments</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <div className="bg-primary-500/10 p-4 rounded-lg mb-4 mx-auto w-fit">
                <TrendingUp className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="font-semibold mb-2">HVAC</h3>
              <p className="text-sm text-gray-400">Instant quotes for installations, 24/7 emergency response, seasonal maintenance reminders</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <div className="bg-primary-500/10 p-4 rounded-lg mb-4 mx-auto w-fit">
                <Shield className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="font-semibold mb-2">Legal</h3>
              <p className="text-sm text-gray-400">Qualify leads, schedule consultations, follow up on case inquiries</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <div className="bg-primary-500/10 p-4 rounded-lg mb-4 mx-auto w-fit">
                <Users className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="font-semibold mb-2">Marketing Agencies</h3>
              <p className="text-sm text-gray-400">Qualify prospects, create proposals, manage client communications</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-800/50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-gray-800 rounded-xl border border-gray-700">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors"
                  >
                    <span className="font-semibold">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-primary-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-primary-500" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              This Isn't Another Tool.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                It's Your Operator.
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Let AI quote, follow up, and grow your business — so you can focus on running it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => setShowForm(true)}
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Early Access</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center space-x-8 pt-8 border-t border-gray-800">
              <div className="flex items-center space-x-2 text-gray-400">
                <Shield className="h-5 w-5" />
                <span className="text-sm">Built for real operators</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Star className="h-5 w-5" />
                <span className="text-sm">Early access priority</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm">No spam, ever</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800">
        <div className="text-center text-gray-400 text-sm">
          © 2024 ForgeHQ. Built for real operators.
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
