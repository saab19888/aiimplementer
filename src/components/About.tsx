import React from 'react';
import { Award, Users, Lightbulb, Target, CheckCircle, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We stay at the forefront of AI technology to deliver cutting-edge solutions that give you a competitive advantage.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our mission. We partner with you every step of the way to ensure maximum ROI from your AI investment.'
    },
    {
      icon: Award,
      title: 'Proven Expertise',
      description: 'Our team combines deep AI knowledge with real-world business experience to deliver solutions that actually work.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes and tangible business benefits, not just flashy technology demos.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Businesses Transformed', icon: Users },
    { number: '95%', label: 'Client Satisfaction Rate', icon: Award },
    { number: '$2M+', label: 'Cost Savings Generated', icon: TrendingUp },
    { number: '24/7', label: 'AI Systems Monitoring', icon: CheckCircle }
  ];

  const team = [
    {
      name: 'Marcus Chen',
      role: 'Chief AI Officer',
      bio: 'Former Google AI researcher with 12+ years in machine learning and enterprise AI solutions.',
      expertise: ['Machine Learning', 'Natural Language Processing', 'AI Strategy']
    },
    {
      name: 'Sarah Rodriguez',
      role: 'Head of Implementation',
      bio: 'Business transformation expert specializing in AI integration and change management.',
      expertise: ['Process Automation', 'System Integration', 'Team Training']
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      bio: 'Full-stack developer with expertise in AI/ML deployment and scalable system architecture.',
      expertise: ['AI Development', 'System Architecture', 'Performance Optimization']
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About AIImplementer
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            We're on a mission to democratize AI for businesses of all sizes. Since 2021, we've helped over 500 companies 
            transform their operations with intelligent automation, saving millions in costs while dramatically improving efficiency and customer satisfaction.
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To bridge the gap between cutting-edge AI technology and practical business applications, making advanced AI 
              solutions accessible, affordable, and actionable for businesses ready to embrace the future.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and every solution we create.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-blue-600" size={28} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Impact by the Numbers</h3>
            <p className="text-gray-600">Real results from our AI implementations across industries</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="text-blue-600" size={24} />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              AI specialists, business strategists, and technical experts working together to transform your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-blue-600" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Why Choose AIImplementer?</h3>
          <p className="text-lg mb-6 leading-relaxed max-w-3xl mx-auto">
            We're not just consultants – we're your AI transformation partners. With proven methodologies, 
            continuous support, and a track record of success, we ensure your AI investment delivers real results.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className="text-sm">Success Rate</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold mb-1">6 Weeks</div>
              <div className="text-sm">Average Implementation</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-sm">Ongoing Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;