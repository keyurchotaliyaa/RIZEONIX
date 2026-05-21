import { useState } from 'react';
import { Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ComparisonTable from './components/ComparisonTable';

const CompareService = () => {
  const [panelCount, setPanelCount] = useState('');
  const [errors, setErrors] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    
    // Clear errors
    setErrors('');
    
    // Only allow positive integers
    if (value === '' || (Number.isInteger(Number(value)) && Number(value) > 0)) {
      setPanelCount(value);
    }
  };

  const handleCompare = () => {
    if (!panelCount || panelCount <= 0) {
      setErrors('Please enter a valid panel number');
      return;
    }
    // Comparison table will automatically update
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-10 h-10 text-primary mr-3" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">Compare Services</h1>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Compare all three service options side by side and find the perfect solution for your needs
          </p>
        </div>

        {/* Input Section */}
        <div className="glassmorphism p-8 rounded-xl mb-12 max-w-md mx-auto">
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Enter Number of Panels
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              value={panelCount}
              onChange={handleInputChange}
              onKeyPress={(e) => e.key === 'Enter' && handleCompare()}
              className={`flex-1 px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors ${
                errors ? 'border-red-500' : 'border-white/20 focus:border-primary'
              }`}
              placeholder="Enter panel count"
              min="1"
            />
            <button
              onClick={handleCompare}
              className="btn-primary px-6 py-3 flex items-center gap-2 whitespace-nowrap"
            >
              <span>Compare</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          {errors && (
            <p className="text-red-400 text-sm mt-2">{errors}</p>
          )}
        </div>

        {/* Comparison Table */}
        {panelCount && (
          <div className="glassmorphism p-8 rounded-xl mb-12 overflow-hidden">
            <ComparisonTable panelCount={Number(panelCount)} />
          </div>
        )}

        {/* Info Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glassmorphism p-6 rounded-xl">
            <h3 className="text-white font-bold text-lg mb-3">Semi Automated</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Manual control with timer settings. Ideal for small to medium setups with basic monitoring requirements.
            </p>
          </div>
          <div className="glassmorphism p-6 rounded-xl border border-primary/50">
            <h3 className="text-primary font-bold text-lg mb-3">⭐ Fully Automated</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Complete automation with mobile app control, smart automation, and AI optimization for maximum efficiency.
            </p>
          </div>
          <div className="glassmorphism p-6 rounded-xl">
            <h3 className="text-white font-bold text-lg mb-3">Sprinklers</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Cost-effective sprinkler solution with manual control and timer settings. Perfect for budget-conscious customers.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">Ready to get a detailed quotation?</p>
          <Link to="/calculator" className="btn-primary inline-flex items-center gap-2">
            <span>Get Quotation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompareService;
