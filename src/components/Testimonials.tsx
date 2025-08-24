import React from 'react';
import { Star, Quote, TrendingUp, Clock, DollarSign } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Maria Rodriguez',
      company: 'Bella Vista Restaurant Group',
      role: 'Operations Director',
      image: '👩‍💼',
      rating: 5,
      quote: "AIImplementer transformed our reservation and ordering system. We've increased efficiency by 45% and customer satisfaction scores have never been higher. The AI handles complex orders perfectly.",
      results: {
        metric: 'Order Accuracy',
        improvement: '+45%',
        timeframe: '3 months'
      }
    },
    {
      name: 'David Chen',
      company: 'TechFlow Solutions',
      role: 'CEO',
      image: '👨‍💻',
      rating: 5,
      quote: "The AI agents they built for us qualify leads 24/7 and have tripled our conversion rate. Our sales team now focuses on closing deals instead of cold outreach. Game changer!",
      results: {
        metric: 'Lead Conversion',
        improvement: '+300%',
        timeframe: '4 months'
      }
    },
    {
      name: 'Sarah Johnson',
      company: 'Luxury Suites Hotel',
      role: 'General Manager',
      image: '👩‍🏨',
      rating: 5,
      quote: "Our guests love the AI concierge service. It handles everything from restaurant recommendations to spa bookings. We've reduced front desk workload by 60% while improving guest experience.",
      results: {
        metric: 'Guest Satisfaction',
        improvement: '+38%',
        timeframe: '2 months'
      }
    },
    {
      name: 'Michael Park',
      company: 'EcoTech E-commerce',
      role: 'Founder',
      image: '👨‍🚀',
      rating: 5,
      quote: "The AI chatbot provides instant product recommendations and support. Our customers get answers immediately, and we've seen a 55% increase in average order value through smart upselling.",
      results: {
        metric: 'Average Order Value',
        improvement: '+55%',
        timeframe: '5 months'
      }
    },
    {
      name: 'Lisa Thompson',
      company: 'Thompson Legal Services',
      role: 'Managing Partner',
      image: '👩‍⚖️',
      rating: 5,
      quote: "Client intake automation has been incredible. The AI qualifies potential clients, schedules consultations, and even prepares preliminary case summaries. We're saving 20 hours per week.",
      results: {
        metric: 'Time Savings',
        improvement: '20hrs/week',
        timeframe: '6 weeks'
      }
    },
    {
      name: 'James Wilson',
      company: 'Wilson Auto Group',
      role: 'Owner',
      image: '👨‍🔧',
      rating: 5,
      quote: "The AI handles service appointments, parts orders, and follow-ups automatically. Our customer retention improved dramatically, and our team can focus on what they do best - fixing cars.",
      results: {
        metric: 'Customer Retention',
        improvement: '+42%',
        timeframe: '4 months'
      }
    }
  ];

  const caseStudies = [
    {
      company: 'Regional Restaurant Chain',
      industry: 'Food Service',
      challenge: 'High order errors, slow service, missed phone calls during peak hours',
      solution: 'AI-powered ordering system with voice recognition and multi-location integration',
      results: [
        { metric: 'Order Accuracy', value: '+47%' },
        { metric: 'Service Speed', value: '+35%' },
        { metric: 'Revenue', value: '+28%' }
      ],
      timeline: '8 weeks',
      roi: '340%'
    },
    {
      company: 'Boutique Hotel Chain',
      industry: 'Hospitality',
      challenge: 'Overwhelming guest requests, booking inefficiencies, staff burnout',
      solution: 'Smart concierge AI with booking automation and guest preference learning',
      results: [
        { metric: 'Guest Satisfaction', value: '+52%' },
        { metric: 'Staff Efficiency', value: '+60%' },
        { metric: 'Booking Conversion', value: '+33%' }
      ],
      timeline: '6 weeks',
      roi: '280%'
    },
    {
      company: 'B2B Service Provider',
      industry: 'Professional Services',
      challenge: 'Poor lead qualification, manual follow-ups, lost opportunities',
      solution: 'AI lead qualification system with automated nurturing workflows',
      results: [
        { metric: 'Qualified Leads', value: '+180%' },
        { metric: 'Conversion Rate', value: '+85%' },
        { metric: 'Sales Cycle', value: '-40%' }
      ],
      timeline: '5 weeks',
      roi: '420%'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real success stories from businesses that transformed their operations with our AI solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{testimonial.image}</div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm font-medium text-blue-600">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative mb-4">
                <Quote className="absolute -top-2 -left-2 text-blue-100 w-8 h-8" />
                <p className="text-gray-700 italic leading-relaxed pl-6">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-600">{testimonial.results.metric}</div>
                    <div className="font-bold text-blue-600">{testimonial.results.improvement}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Timeline</div>
                    <div className="font-medium text-gray-800">{testimonial.results.timeframe}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Detailed Case Studies
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deep dives into how we've transformed businesses across different industries.
            </p>
          </div>
          
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-xl border border-gray-200">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 px-3 py-1 rounded-full text-blue-700 text-sm font-medium mr-3">
                        {study.industry}
                      </div>
                      <div className="text-sm text-gray-500">ROI: {study.roi} in {study.timeline}</div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{study.company}</h4>
                    <div className="mb-4">
                      <h5 className="font-semibold text-red-600 mb-2">Challenge</h5>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-600 mb-2">Solution</h5>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h5 className="font-semibold text-green-600 mb-4">Results Achieved</h5>
                    <div className="grid md:grid-cols-3 gap-4">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-green-600 mb-1">{result.value}</div>
                          <div className="text-sm text-green-700">{result.metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Trusted by Industry Leaders</h3>
            <p className="text-gray-600">Join hundreds of businesses already transforming with AI</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <TrendingUp className="text-blue-600 w-8 h-8 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">98%</div>
              <div className="text-sm text-gray-600">Client Retention Rate</div>
            </div>
            <div className="text-center">
              <Clock className="text-green-600 w-8 h-8 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">6 Weeks</div>
              <div className="text-sm text-gray-600">Average Implementation</div>
            </div>
            <div className="text-center">
              <DollarSign className="text-purple-600 w-8 h-8 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">340%</div>
              <div className="text-sm text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <Star className="text-yellow-500 w-8 h-8 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">4.9/5</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;