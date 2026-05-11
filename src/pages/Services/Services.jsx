import { Award, Clock, Droplets, Shield, Sun, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Sun className="w-8 h-8" />,
      title: 'Solar Panel Cleaning',
      description: 'Professional cleaning services to remove dust, dirt, and debris from solar panels.',
      features: ['Eco-friendly cleaning', 'No water damage', '30% efficiency boost']
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Waterless Cleaning',
      description: 'Advanced dry cleaning technology that preserves water and maintains panel integrity.',
      features: ['Zero water usage', 'Safe for all panel types', 'Quick service']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'Comprehensive maintenance and optimization for maximum energy output.',
      features: ['Performance monitoring', 'System diagnostics', 'Efficiency reports']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Warranty Protection',
      description: 'Extended warranty coverage for your solar investment with our maintenance plans.',
      features: ['5-year warranty', 'Priority service', 'Damage protection']
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Scheduled Maintenance',
      description: 'Regular maintenance schedules to keep your solar system performing at peak levels.',
      features: ['Custom schedules', 'Preventive care', 'Cost savings']
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Premium Support',
      description: '24/7 technical support and emergency services for all our clients.',
      features: ['24/7 availability', 'Expert technicians', 'Fast response']
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive solar cleaning and maintenance solutions designed to maximize your energy production and protect your investment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glassmorphism p-6 rounded-xl hover:glow transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-300 flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glassmorphism p-8 rounded-xl max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-white">Need a Custom Solution?</h2>
            <p className="text-gray-300 mb-6">
              Contact our experts to discuss your specific solar maintenance requirements.
            </p>
            <button className="btn-primary">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;