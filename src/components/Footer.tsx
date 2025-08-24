import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Bot } from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Solutions',
      links: [
        { name: 'AI Agents', href: '#solutions' },
        { name: 'Chatbots', href: '#solutions' },
        { name: 'Workflow Automation', href: '#solutions' },
        { name: 'AI Analytics', href: '#solutions' }
      ]
    },
    {
      title: 'Industries',
      links: [
        { name: 'Restaurants', href: '#industries' },
        { name: 'Hotels', href: '#industries' },
        { name: 'E-commerce', href: '#industries' },
        { name: 'Professional Services', href: '#industries' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Blog', href: '#blog' },
        { name: 'Case Studies', href: '#testimonials' },
        { name: 'Pricing', href: '#pricing' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'API Reference', href: '#' },
        { name: 'System Status', href: '#' }
      ]
    }
  ];

  const scrollToSection = (id: string) => {
    if (id.startsWith('#')) {
      const element = document.getElementById(id.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Bot className="text-blue-400 mr-2" size={32} />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  AIImplementer
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                We transform businesses with intelligent AI solutions that save money, attract clients, and scale operations. 
                Your trusted partner for AI implementation and optimization.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Phone className="text-blue-400 mr-3" size={18} />
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                    +1 (234) 567-8900
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="text-blue-400 mr-3" size={18} />
                  <a href="mailto:contact@aiimplementer.co" className="text-gray-300 hover:text-white transition-colors">
                    contact@aiimplementer.co
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-blue-400 mr-3" size={18} />
                  <span className="text-gray-300">San Francisco, CA</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            
            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-white transition-colors text-left"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="py-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-400">Get the latest AI implementation tips and industry insights.</p>
            </div>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-r-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 AIImplementer. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
        
        {/* Trust Badges */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex justify-center items-center space-x-8 text-gray-500">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm">99.9% Uptime</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm">SOC 2 Certified</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              <span className="text-sm">GDPR Compliant</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;