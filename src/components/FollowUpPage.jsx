import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Zap, CheckCircle, Calendar, Star, Shield, TrendingUp } from 'lucide-react'

const FollowUpPage = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState(null)
  const [personalizedContent, setPersonalizedContent] = useState([])

  useEffect(() => {
    // Get user data from localStorage
    const storedData = localStorage.getItem('forgehq_submission')
    if (!storedData) {
      navigate('/')
      return
    }

    const data = JSON.parse(storedData)
    setUserData(data)

    // Generate personalized content based on pain points
    const content = generatePersonalizedContent(data.painPoints)
    setPersonalizedContent(content)
  }, [navigate])

  const generatePersonalizedContent = (painPoints) => {
    const contentMap = {
      'Too many leads': {
        title: 'Drowning in Leads?',
        description: 'ForgeHQ\'s PreClose Engine automatically qualifies, prioritizes, and nurtures your leads so you only talk to ready-to-buy prospects.',
        icon: TrendingUp,
        feature: 'Smart Lead Scoring & Auto-Qualification'
      },
      'Not enough leads': {
        title: 'Need More Quality Leads?',
        description: 'Our Growth Agent deploys SEO-optimized content and landing pages that convert visitors into qualified prospects 24/7.',
        icon: Zap,
        feature: 'AI-Powered Lead Generation Engine'
      },
      'No follow-up system': {
        title: 'Leads Going Cold?',
        description: 'ForgeHQ\'s 24/7 AI agents keep every lead hot with personalized follow-ups, appointment scheduling, and nurture sequences.',
        icon: CheckCircle,
        feature: 'Automated Follow-Up System'
      },
      'Website doesn\'t convert': {
        title: 'Website Not Converting?',
        description: 'Our Growth Agent analyzes your traffic and automatically deploys conversion-optimized pages and content.',
        icon: TrendingUp,
        feature: 'Conversion Optimization Engine'
      },
      'SEO not working': {
        title: 'SEO Struggles?',
        description: 'ForgeHQ\'s Growth Agent creates and publishes SEO content that ranks, driving qualified traffic to your business.',
        icon: Star,
        feature: 'AI SEO Content Engine'
      },
      'Missed quotes': {
        title: 'Missing Quote Opportunities?',
        description: 'ForgeHQ\'s PreClose Engine handles quoting and follow-up instantly, ensuring no opportunity slips through the cracks.',
        icon: Shield,
        feature: 'Instant Quote & Follow-Up System'
      }
    }

    return painPoints.map(painPoint => contentMap[painPoint]).filter(Boolean)
  }

  if (!userData) {
    return <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-white">Loading...</div>
    </div>
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-primary-500" />
            <span className="text-2xl font-bold">ForgeHQ</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-900/20 text-green-400 px-4 py-2 rounded-full mb-6">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm font-medium">You're on the list!</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Welcome, {userData.fullName.split(' ')[0]}! 👋
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Based on your {userData.businessType.toLowerCase()} business needs, here's how ForgeHQ will transform your operations:
            </p>
          </div>

          {/* Personalized Content Blocks */}
          {personalizedContent.length > 0 && (
            <div className="space-y-8 mb-16">
              <h2 className="text-2xl font-semibold text-center mb-8">Your Personalized ForgeHQ Setup</h2>
              
              <div className="grid gap-8">
                {personalizedContent.map((content, index) => {
                  const IconComponent = content.icon
                  return (
                    <div key={index} className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary-500/10 p-3 rounded-lg">
                          <IconComponent className="h-6 w-6 text-primary-500" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-3">{content.title}</h3>
                          <p className="text-gray-300 mb-4">{content.description}</p>
                          <div className="inline-flex items-center space-x-2 bg-primary-500/10 text-primary-400 px-3 py-1 rounded-full text-sm">
                            <span>✨ {content.feature}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Core Modules Section */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Complete ForgeHQ Platform</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary-500/10 p-4 rounded-lg mb-3 mx-auto w-fit">
                  <Zap className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="font-semibold mb-2">PreClose Engine</h3>
                <p className="text-sm text-gray-400">Auto-quoting & follow-up</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary-500/10 p-4 rounded-lg mb-3 mx-auto w-fit">
                  <TrendingUp className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="font-semibold mb-2">Growth Agent</h3>
                <p className="text-sm text-gray-400">SEO content & optimization</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary-500/10 p-4 rounded-lg mb-3 mx-auto w-fit">
                  <CheckCircle className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="font-semibold mb-2">CRM Lite</h3>
                <p className="text-sm text-gray-400">Smart lead management</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary-500/10 p-4 rounded-lg mb-3 mx-auto w-fit">
                  <Shield className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="font-semibold mb-2">AI Operator</h3>
                <p className="text-sm text-gray-400">Hands-off management</p>
              </div>
            </div>
          </div>

          {/* AI Take Over Response */}
          {userData.aiTakeOver && (
            <div className="bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-2xl p-8 border border-primary-500/20 mb-12">
              <h3 className="text-xl font-semibold mb-4">We heard you want to automate:</h3>
              <blockquote className="text-lg italic text-gray-300 mb-4">
                "{userData.aiTakeOver}"
              </blockquote>
              <p className="text-primary-400">
                ✨ ForgeHQ's AI agents are designed to handle exactly these types of tasks. We'll show you how during your early access demo.
              </p>
            </div>
          )}

          {/* CTA Section */}
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 mx-auto">
                <Calendar className="h-5 w-5" />
                <span>Schedule Early Access Call</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <p className="text-sm text-gray-400">
                Or just stay on the waitlist - we'll notify you when ForgeHQ launches
              </p>
            </div>

            {/* Trust Indicators */}
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
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 mt-16 border-t border-gray-800">
        <div className="text-center text-gray-400 text-sm">
          © 2024 ForgeHQ. Built for real operators.
        </div>
      </footer>
    </div>
  )
}

export default FollowUpPage
