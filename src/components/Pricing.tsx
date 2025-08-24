import React, { useState } from 'react';
import { Check, Star, ArrowRight, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter Audit',
      price: 'Free',
      period: '',
      description: 'Perfect for getting started with AI assessment',
      features: [
        'Comprehensive business audit',
        'AI opportunity assessment', 
        'ROI projections',
        'Implementation roadmap',
        '90-minute consultation',
        'Custom recommendations'
      ],
      cta: 'Book Free Audit',
      popular: false,
      color: 'border-gray-200'
    },
    {
      name: 'Growth',
      price: isAnnual ? '$2,497' : '$2,997',
      period: isAnnual ? '/month' : '/month',
      description: 'Ideal for small to medium businesses',
      features: [
        'Everything in Starter Audit',
        'AI agent implementation',
        'Chatbot development',
        'Basic workflow automation',
        '24/7 system monitoring',
        'Monthly optimization reports',
        'Email & chat support',
        'Training for 2 team members'
      ],
      cta: 'Start Growing',
      popular: true,
      color: 'border-blue-500'
    },
    {
      name: 'Enterprise',
      price: isAnnual ? '$4,997' : '$5,997',
      period: isAnnual ? '/month' : '/month',
      description: 'Advanced AI solutions for scaling businesses',
      features: [
        'Everything in Growth',
        'Advanced automation workflows',
        'Custom AI model training',
        'Multi-platform integration',
        'Dedicated account manager',
        'Weekly strategy calls',
        'Priority support',
        'Unlimited team training',
        'Custom analytics dashboard'
      ],
      cta: 'Go Enterprise',
      popular: false,
      color: 'border-purple-500'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business needs. All plans include our proven implementation process and ongoing support.
          </p>
          
          {/* Annual/Monthly Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isAnnual ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual 
              <span className="ml-1 text-green-600 text-xs font-semibold">Save 20%</span>
            </span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white border-2 ${plan.color} rounded-xl p-8 ${
              plan.popular ? 'shadow-xl scale-105' : 'shadow-lg'
            } hover:shadow-xl transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="text-green-500 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={scrollToContact}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105'
                    : 'border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
        
        {/* Additional Services */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Custom Solutions Available</h3>
            <p className="text-gray-600">Need something more specific? We create tailored AI solutions for unique business requirements.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg text-center">
              <Zap className="text-blue-600 w-8 h-8 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Custom AI Models</h4>
              <p className="text-sm text-gray-600">Tailored machine learning models for specific business needs</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <Zap className="text-blue-600 w-8 h-8 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Enterprise Integration</h4>
              <p className="text-sm text-gray-600">Complex system integrations and enterprise-grade solutions</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <Zap className="text-blue-600 w-8 h-8 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Dedicated Support</h4>
              <p className="text-sm text-gray-600">24/7 dedicated support team and account management</p>
            </div>
          </div>
        </div>
        
        {/* Money Back Guarantee */}
        <div className="text-center">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="font-semibold text-green-800 mb-2">30-Day Money-Back Guarantee</h4>
            <p className="text-green-700 text-sm">
              Not satisfied with your AI implementation? Get a full refund within 30 days, no questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;