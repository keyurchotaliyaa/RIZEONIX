import { Check, X } from 'lucide-react';
import { calculateServicePrice, formatPrice } from '../utils/priceCalculator';

const ComparisonTable = ({ panelCount }) => {
  const services = [
    {
      name: 'Semi Automated',
      features: [
        { name: 'Manual Control', included: true },
        { name: 'Timer Settings', included: true },
        { name: 'Basic Monitoring', included: true },
        { name: 'Mobile App Control', included: false },
        { name: 'Smart Automation', included: false },
        { name: 'AI Optimization', included: false },
      ],
    },
    {
      name: 'Fully Automated',
      features: [
        { name: 'Manual Control', included: true },
        { name: 'Timer Settings', included: true },
        { name: 'Basic Monitoring', included: true },
        { name: 'Mobile App Control', included: true },
        { name: 'Smart Automation', included: true },
        { name: 'AI Optimization', included: true },
      ],
    },
    {
      name: 'Sprinklers',
      features: [
        { name: 'Manual Control', included: true },
        { name: 'Timer Settings', included: true },
        { name: 'Basic Monitoring', included: false },
        { name: 'Mobile App Control', included: false },
        { name: 'Smart Automation', included: false },
        { name: 'AI Optimization', included: false },
      ],
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/20">
            <th className="text-left py-4 px-4 text-white font-semibold">Features</th>
            {services.map(service => (
              <th key={service.name} className="text-center py-4 px-4">
                <div className="text-white font-semibold text-lg mb-2">{service.name}</div>
                <div className="text-primary text-xl font-bold">
                  {panelCount > 0 ? formatPrice(calculateServicePrice(service.name, panelCount)) : '₹0'}
                </div>
                <div className="text-gray-400 text-xs mt-1">for {panelCount} panels</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {services[0].features.map((feature, idx) => (
            <tr key={feature.name} className="border-b border-white/10 hover:bg-white/5 transition-colors">
              <td className="py-4 px-4 text-gray-300 font-medium">{feature.name}</td>
              {services.map(service => (
                <td key={`${service.name}-${feature.name}`} className="text-center py-4 px-4">
                  {service.features[idx].included ? (
                    <Check className="w-6 h-6 text-green-500 inline-block" />
                  ) : (
                    <X className="w-6 h-6 text-red-500 inline-block" />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
