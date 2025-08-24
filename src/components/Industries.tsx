import React from 'react';
import { Utensils, Building, ShoppingCart, Users, Briefcase, Heart, GraduationCap, Car } from 'lucide-react';

const Industries: React.FC = () => {
  const industries = [
    {
      icon: Utensils,
      name: 'Restaurants',
      description: 'AI-powered ordering, reservation management, and customer support systems.',
      useCases: ['Automated order taking', 'Reservation optimization', 'Customer feedback analysis', 'Inventory management'],
      benefits: '35% increase in order efficiency'
    },
    {
      icon: Building,
      name: 'Hotels & Hospitality',
      description: 'Enhance guest experience with intelligent booking and concierge services.',
      useCases: ['Smart booking assistance', 'Virtual concierge', 'Room service automation', 'Guest feedback processing'],
      benefits: '40% improvement in guest satisfaction'
    },
    {
      icon: ShoppingCart,
      name: 'E-commerce',
      description: 'Personalized shopping experiences and intelligent customer support.',
      useCases: ['Product recommendations', 'Order tracking', 'Customer service automation', 'Inventory optimization'],
      benefits: '25% increase in conversion rates'
    },
    {
      icon: Users,
      name: 'Service Providers',
      description: 'Streamline client interactions and automate service delivery processes.',
      useCases: ['Lead qualification', 'Appointment scheduling', 'Service reminders', 'Client communication'],
      benefits: '50% reduction in admin tasks'
    },
    {
      icon: Briefcase,
      name: 'Professional Services',
      description: 'Automate consultations, proposals, and client management workflows.',
      useCases: ['Client intake automation', 'Proposal generation', 'Meeting scheduling', 'Document processing'],
      benefits: '60% faster client onboarding'
    },
    {
      icon: Heart,
      name: 'Healthcare',
      description: 'Improve patient care with intelligent scheduling and support systems.',
      useCases: ['Appointment scheduling', 'Patient reminders', 'Symptom pre-screening', 'Insurance verification'],
      benefits: '30% reduction in no-shows'
    },
    {
      icon: GraduationCap,
      name: 'Education',
      description: 'Enhance learning experiences with AI-powered tutoring and administration.',
      useCases: ['Student support', 'Course recommendations', 'Administrative automation', 'Learning analytics'],
      benefits: '45% improvement in student engagement'
    },
    {
      icon: Car,
      name: 'Automotive',
      description: 'Streamline sales processes and improve customer service experiences.',
      useCases: ['Lead qualification', 'Service scheduling', 'Parts ordering', 'Customer follow-up'],
      benefits: '35% increase in lead conversion'
    }
  ];

  return (
    <section id="industries" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industries We Transform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From restaurants to healthcare, we implement AI solutions tailored to your industry's specific challenges and opportunities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-600 transition-colors duration-300">
                  <industry.icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg">{industry.name}</h3>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {industry.description}
              </p>
              
              <div className="mb-4">
                <h4 className="font-medium text-gray-800 text-sm mb-2">Key Use Cases:</h4>
                <ul className="space-y-1">
                  {industry.useCases.map((useCase, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-600">
                      <div className="w-1 h-1 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-3 border-t border-gray-100">
                <div className="text-xs font-medium text-blue-600 bg-blue-50 rounded-full px-3 py-1 text-center">
                  {industry.benefits}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Success Stories Preview */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Success Across Industries</h3>
            <p className="text-gray-600">Real results from our AI implementations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Utensils className="text-green-600" size={32} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Restaurant Chain</h4>
              <p className="text-sm text-gray-600 mb-2">Implemented AI ordering system across 25 locations</p>
              <div className="text-2xl font-bold text-green-600">+47%</div>
              <div className="text-xs text-gray-600">Order accuracy improvement</div>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="text-blue-600" size={32} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">E-commerce Store</h4>
              <p className="text-sm text-gray-600 mb-2">AI-powered customer service and recommendations</p>
              <div className="text-2xl font-bold text-blue-600">+68%</div>
              <div className="text-xs text-gray-600">Customer satisfaction increase</div>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Building className="text-purple-600" size={32} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Hotel Group</h4>
              <p className="text-sm text-gray-600 mb-2">Smart booking and guest service automation</p>
              <div className="text-2xl font-bold text-purple-600">+33%</div>
              <div className="text-xs text-gray-600">Booking conversion rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;