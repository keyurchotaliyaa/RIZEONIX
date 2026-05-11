import { Droplets, Package, Shield, Sun, Wind, Zap } from 'lucide-react';

const Material = () => {
  const materials = [
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Cleaning Brushes',
      description: 'Specialized brushes designed for solar panel surfaces without scratching.',
      specs: ['Soft microfiber bristles', 'Telescopic handles', 'Water-resistant']
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Eco-Friendly Solutions',
      description: 'Biodegradable cleaning solutions that are safe for the environment.',
      specs: ['Non-toxic formula', 'pH balanced', 'Quick drying']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Protective Coatings',
      description: 'Anti-reflective and protective coatings to enhance panel performance.',
      specs: ['UV resistant', 'Hydrophobic properties', '5-year durability']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Cleaning Robots',
      description: 'Automated cleaning robots for large-scale solar installations.',
      specs: ['AI-powered navigation', 'Water recycling', 'Remote monitoring']
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: 'De-ionized Water Systems',
      description: 'Pure water systems that eliminate mineral deposits and stains.',
      specs: ['99.9% purity', 'Mobile units', 'Cost-effective']
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: 'Solar Panel Analyzers',
      description: 'Diagnostic tools to measure panel efficiency and identify issues.',
      specs: ['Real-time monitoring', 'Thermal imaging', 'Performance reports']
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Package className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
            Our Materials
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Premium materials and equipment designed specifically for solar panel maintenance and optimization.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((material, index) => (
            <div
              key={index}
              className="glassmorphism p-6 rounded-xl hover:glow transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {material.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{material.title}</h3>
              <p className="text-gray-400 mb-4">{material.description}</p>
              <ul className="space-y-2">
                {material.specs.map((spec, idx) => (
                  <li key={idx} className="text-sm text-gray-300 flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quality Assurance */}
        <div className="mt-16 glassmorphism p-8 rounded-xl">
          <div className="text-center mb-8">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Quality Assurance</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              All our materials undergo rigorous testing and meet industry standards for solar panel maintenance equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-gray-300">Material Purity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5 Years</div>
              <div className="text-gray-300">Warranty Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-300">Technical Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Material;