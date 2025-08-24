import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Calendar, Phone, Mail, Clock } from 'lucide-react';

const CTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    'Comprehensive business AI audit',
    'Custom implementation roadmap',
    'ROI projections and timeline',
    'No obligation or pressure',
    'Expert AI strategy consultation',
    'Industry-specific recommendations'
  ];

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-4">
                🚀 Ready to Transform Your Business?
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Get Your Free AI Audit Today
            </h2>
            
            <p className="text-xl mb-8 leading-relaxed text-blue-100">
              Discover how AI can save you money, attract more clients, and scale your operations. 
              Our experts will analyze your business and show you exactly what's possible.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="mr-2" size={24} />
                What You'll Get (FREE):
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-blue-100">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center text-blue-100">
                <Clock className="mr-2" size={20} />
                <span>90-minute consultation</span>
              </div>
              <div className="flex items-center text-blue-100">
                <Calendar className="mr-2" size={20} />
                <span>Available this week</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="font-semibold mb-4">Prefer to talk directly?</h4>
              <div className="space-y-3">
                <a href="tel:+1234567890" className="flex items-center text-white hover:text-blue-200 transition-colors">
                  <Phone className="mr-3" size={20} />
                  <span>+1 (234) 567-8900</span>
                </a>
                <a href="mailto:contact@aiimplementer.co" className="flex items-center text-white hover:text-blue-200 transition-colors">
                  <Mail className="mr-3" size={20} />
                  <span>contact@aiimplementer.co</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Book Your Free AI Audit
              </h3>
              <p className="text-gray-600">
                Fill out the form below and we'll contact you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your business needs
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="What challenges are you facing? What processes would you like to automate?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-center group"
              >
                Get My Free AI Audit
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy. We'll never spam you or share your information.
              </p>
            </form>

            {/* Trust badges */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex justify-center items-center space-x-6 text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  <span className="text-xs">Secure</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  <span className="text-xs">No Spam</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  <span className="text-xs">24h Response</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Urgency/Social Proof */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
            <p className="text-white text-lg mb-4">
              <strong>Limited Time:</strong> This month we're accepting only 20 new clients for our comprehensive AI audit program.
            </p>
            <div className="flex justify-center items-center space-x-8 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">47</div>
                <div className="text-sm">Audits completed this month</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">8</div>
                <div className="text-sm">Spots remaining</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24hrs</div>
                <div className="text-sm">Average response time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;