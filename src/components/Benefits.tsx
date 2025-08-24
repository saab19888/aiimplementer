import React from 'react';
import { DollarSign, Users, Clock, TrendingUp, Shield, Zap } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Save Money',
      description: 'Reduce operational costs by up to 40% through intelligent automation and efficient AI processes.',
      stats: '40% cost reduction',
      color: 'green'
    },
    {
      icon: Users,
      title: 'Gain More Clients',
      description: 'Convert more leads with 24/7 AI agents that never miss an opportunity and qualify prospects instantly.',
      stats: '3x lead conversion',
      color: 'blue'
    },
    {
      icon: Clock,
      title: 'Increase Efficiency',
      description: 'Automate repetitive tasks and streamline workflows, freeing your team to focus on high-value activities.',
      stats: '60% time savings',
      color: 'purple'
    },
    {
      icon: TrendingUp,
      title: 'Scale Operations',
      description: 'Handle unlimited customer interactions and business processes without proportional staff increases.',
      stats: 'Unlimited scalability',
      color: 'orange'
    },
    {
      icon: Shield,
      title: 'Improve Quality',
      description: 'Ensure consistent, high-quality customer experiences with AI that learns and improves over time.',
      stats: '99.9% accuracy',
      color: 'red'
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description: 'Provide immediate customer support and responses, significantly improving satisfaction rates.',
      stats: '<1s response time',
      color: 'yellow'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: 'bg-green-100 text-green-600 border-green-200',
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200',
      red: 'bg-red-100 text-red-600 border-red-200',
      yellow: 'bg-yellow-100 text-yellow-600 border-yellow-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose AI Implementation?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with measurable benefits that drive growth, efficiency, and customer satisfaction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg border ${getColorClasses(benefit.color)}`}>
                  <benefit.icon size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                  <div className={`text-sm font-medium ${benefit.color === 'green' ? 'text-green-600' : 
                    benefit.color === 'blue' ? 'text-blue-600' :
                    benefit.color === 'purple' ? 'text-purple-600' :
                    benefit.color === 'orange' ? 'text-orange-600' :
                    benefit.color === 'red' ? 'text-red-600' : 'text-yellow-600'}`}>
                    {benefit.stats}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* ROI Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Average ROI in First 6 Months</h3>
            <p className="text-gray-600">Real results from our AI implementations</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-blue-600 mb-2">300%</div>
              <div className="text-sm text-gray-600">Return on Investment</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-green-600 mb-2">$50K</div>
              <div className="text-sm text-gray-600">Average Cost Savings</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
              <div className="text-sm text-gray-600">Task Automation Rate</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Operational Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;