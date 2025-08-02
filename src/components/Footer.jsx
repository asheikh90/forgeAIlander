import React from 'react'
import { Link } from 'react-router-dom'
import { Zap, Twitter, Linkedin, Github, Mail, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative bg-black/40 backdrop-blur-md border-t border-neon-blue/20">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-neon-purple/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl blur-lg opacity-50" />
              </div>
              <span className="text-2xl font-bold text-white glow-text">ForgeHQ</span>
            </div>
            <p className="text-white/70 mb-8 max-w-md leading-relaxed">
              The all-in-one AI business operator platform. Let intelligent agents run your business 
              with 24/7 automation, smart quoting, and seamless customer communication powered by ForgeCore.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" },
                { icon: Mail, href: "mailto:hello@forgehq.ai" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 rounded-xl bg-white/10 hover:bg-neon-blue/20 transition-all duration-300 hover:scale-110 neon-border group"
                >
                  <social.icon className="w-5 h-5 text-white/70 group-hover:text-neon-blue transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg glow-text">Product</h3>
            <ul className="space-y-3">
              {[
                { name: 'ForgeCore AI', href: '/' },
                { name: 'Proposal Engine', href: '/' },
                { name: 'Voice Agents', href: '/' },
                { name: 'CRM Sync', href: '/' },
                { name: 'GMB Pulse', href: '/' },
                { name: 'Reactivate Mode', href: '/' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-white/60 hover:text-neon-blue transition-all duration-300 hover:translate-x-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg glow-text">Company</h3>
            <ul className="space-y-3">
              {[
                { name: 'About ForgeHQ', href: '#' },
                { name: 'Become a Reseller', href: '/reseller' },
                { name: 'Enterprise', href: '/pricing' },
                { name: 'Support Center', href: '#' },
                { name: 'API Documentation', href: '#' },
                { name: 'Status Page', href: '#' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-white/60 hover:text-neon-blue transition-all duration-300 hover:translate-x-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © 2024 ForgeHQ. All rights reserved. Powered by ForgeCore AI.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            {[
              'Privacy Policy',
              'Terms of Service',
              'Cookie Policy'
            ].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-white/50 hover:text-neon-blue text-sm transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
