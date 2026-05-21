import { Check, X } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../context/translations';
import { calculateServicePrice, formatPrice } from '../utils/priceCalculator';

const ComparisonTable = ({ panelCount }) => {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      name: t.semiAutomated,
      nameEn: 'Semi Automated',
      features: [
        { name: t.manualControl, included: true },
        { name: t.timerSettings, included: true },
        { name: t.basicMonitoring, included: true },
        { name: t.mobileAppControl, included: false },
        { name: t.smartAutomation, included: false },
        { name: t.aiOptimization, included: false },
      ],
    },
    {
      name: t.fullyAutomated,
      nameEn: 'Fully Automated',
      features: [
        { name: t.manualControl, included: true },
        { name: t.timerSettings, included: true },
        { name: t.basicMonitoring, included: true },
        { name: t.mobileAppControl, included: true },
        { name: t.smartAutomation, included: true },
        { name: t.aiOptimization, included: true },
      ],
    },
    {
      name: t.sprinklers,
      nameEn: 'Sprinklers',
      features: [
        { name: t.manualControl, included: true },
        { name: t.timerSettings, included: true },
        { name: t.basicMonitoring, included: false },
        { name: t.mobileAppControl, included: false },
        { name: t.smartAutomation, included: false },
        { name: t.aiOptimization, included: false },
      ],
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/20">
            <th className="text-left py-4 px-4 text-white font-semibold">{t.features}</th>
            {services.map(service => (
              <th key={service.nameEn} className="text-center py-4 px-4">
                <div className="text-white font-semibold text-lg mb-2">{service.name}</div>
                <div className="text-primary text-xl font-bold">
                  {panelCount > 0 ? formatPrice(calculateServicePrice(service.nameEn, panelCount)) : '₹0'}
                </div>
                <div className="text-gray-400 text-xs mt-1">{t.panels}: {panelCount}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {services[0].features.map((feature, idx) => (
            <tr key={feature.name} className="border-b border-white/10 hover:bg-white/5 transition-colors">
              <td className="py-4 px-4 text-gray-300 font-medium">{feature.name}</td>
              {services.map(service => (
                <td key={`${service.nameEn}-${feature.name}`} className="text-center py-4 px-4">
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
