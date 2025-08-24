import React from 'react';
import { Bot, MessageSquare, Workflow, BarChart3, ShoppingCart, Utensils, Building, Users } from 'lucide-react';

const Features: React.FC = () => {
  const solutions = [
    {
      icon: Bot,
      title: 'AI Agents',
      description: 'Intelligent virtual assistants that handle customer inquiries, sales, and support 24/7 with human-like conversations.',
      benefits: ['24/7 availability', 'Multilingual support', 'Lead qualification', 'Seamless handoffs']
    },
    {
      icon: MessageSquare,
      title: 'Smart Chatbots',
      description: 'Advanced conversational AI that understands context, maintains memory, and provides personalized experiences.',
      benefits: ['Context awareness', 'Personalization', 'Multi-platform', 'Analytics tracking']
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Streamline repetitive tasks, automate business processes, and connect your favorite tools seamlessly.',
      benefits: ['Process optimization', 'Tool integration', 'Error reduction', 'Time savings']
    },
    {
      icon: BarChart3,
      title: 'AI Analytics',
      description: 'Deep insights into customer behavior, performance metrics, and predictive analytics for better decisions.',
      benefits: ['Predictive insights', 'Real-time monitoring', 'Custom dashboards', 'ROI tracking']
    }
  ];

  const industries = [
    {
      icon: Utensils,
      title: 'Restaurants',
      description: 'Order taking, reservation management, customer support'
    },
    {
      icon: Building,
      title: 'Hotels',
      description: 'Booking assistance, concierge services, guest support'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Product recommendations, order tracking, customer service'
    },
    {
      icon: Users,
      title: 'Service Providers',
      description: 'Lead qualification, appointment booking, client communication'
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Solutions */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive AI Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intelligent chatbots to complex automation workflows, we implement AI solutions that transform how you do business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <div key={index} className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                  <solution.icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Solutions */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Industry-Specific Solutions
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored AI implementations designed for your industry's unique challenges and opportunities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-lg transition-all duration-200">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <industry.icon className="text-blue-600" size={28} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{industry.title}</h4>
              <p className="text-sm text-gray-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;