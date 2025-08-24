import React from 'react';
import { Search, Settings, Rocket, BarChart } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: 1,
      icon: Search,
      title: 'Free AI Audit',
      description: 'We analyze your business processes, identify automation opportunities, and assess your current tech stack.',
      details: ['Business process analysis', 'Current system evaluation', 'AI opportunity assessment', 'ROI projections']
    },
    {
      step: 2,
      icon: Settings,
      title: 'Custom Implementation',
      description: 'Our experts design and implement tailored AI solutions that integrate seamlessly with your existing systems.',
      details: ['Custom AI development', 'System integration', 'Data migration', 'Security implementation']
    },
    {
      step: 3,
      icon: Rocket,
      title: 'Launch & Training',
      description: 'We deploy your AI solutions and provide comprehensive training to ensure your team can maximize their potential.',
      details: ['Smooth deployment', 'Team training sessions', 'Documentation provision', 'Initial monitoring']
    },
    {
      step: 4,
      icon: BarChart,
      title: 'Optimize & Scale',
      description: 'Continuous monitoring, optimization, and scaling to ensure maximum performance and ROI from your AI investment.',
      details: ['Performance monitoring', 'Continuous optimization', 'Scaling strategies', 'Ongoing support']
    }
  ];

  return (
    <section id="howitworks" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How We Transform Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 4-step process ensures successful AI implementation from audit to optimization, delivering measurable results.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"></div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step number */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                    <div className="absolute -inset-2 bg-blue-100 rounded-full -z-10 animate-pulse"></div>
                  </div>
                </div>
                
                {/* Content card */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <step.icon className="text-blue-600" size={24} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-center leading-relaxed">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8">
                    <div className="w-0.5 h-12 bg-gradient-to-b from-blue-400 to-blue-200"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Timeline */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Typical Implementation Timeline</h3>
            <p className="text-gray-600">From initial audit to full optimization</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <div className="font-bold text-blue-600 text-lg mb-1">Week 1-2</div>
              <div className="text-sm text-gray-600">Audit & Analysis</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <div className="font-bold text-blue-600 text-lg mb-1">Week 3-6</div>
              <div className="text-sm text-gray-600">Development & Integration</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <div className="font-bold text-blue-600 text-lg mb-1">Week 7</div>
              <div className="text-sm text-gray-600">Launch & Training</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <div className="font-bold text-blue-600 text-lg mb-1">Ongoing</div>
              <div className="text-sm text-gray-600">Optimization & Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;