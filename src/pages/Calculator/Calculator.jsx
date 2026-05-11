import { Calculator, DollarSign, Sun } from 'lucide-react';
import { useState } from 'react';

const CalculatorPage = () => {
  const [formData, setFormData] = useState({
    panelCount: '',
    panelSize: '',
    location: '',
    cleaningFrequency: 'quarterly'
  });

  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateQuote = (e) => {
    e.preventDefault();
    // Simple calculation logic (placeholder)
    const basePrice = 50; // Base price per panel
    const frequencyMultiplier = {
      monthly: 12,
      quarterly: 4,
      biannual: 2,
      annual: 1
    };

    const total = formData.panelCount * formData.panelSize * basePrice * frequencyMultiplier[formData.cleaningFrequency];
    const savings = total * 0.3; // Estimated efficiency savings

    setResult({
      total: total.toFixed(2),
      savings: savings.toFixed(2),
      frequency: formData.cleaningFrequency
    });
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Calculator className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
            Quotation Calculator
          </h1>
          <p className="text-xl text-gray-300">
            Get an instant quote for your solar panel cleaning services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="glassmorphism p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6 text-white">Calculate Your Quote</h2>
            <form onSubmit={calculateQuote} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Number of Solar Panels
                </label>
                <input
                  type="number"
                  name="panelCount"
                  value={formData.panelCount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors"
                  placeholder="e.g., 20"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Average Panel Size (sq ft)
                </label>
                <input
                  type="number"
                  name="panelSize"
                  value={formData.panelSize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors"
                  placeholder="e.g., 18"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Location
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:border-primary focus:outline-none transition-colors"
                  required
                >
                  <option value="">Select Location</option>
                  <option value="urban">Urban Area</option>
                  <option value="suburban">Suburban Area</option>
                  <option value="rural">Rural Area</option>
                  <option value="coastal">Coastal Area</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Cleaning Frequency
                </label>
                <select
                  name="cleaningFrequency"
                  value={formData.cleaningFrequency}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="biannual">Bi-Annual</option>
                  <option value="annual">Annual</option>
                </select>
              </div>

              <button type="submit" className="w-full btn-primary text-lg py-3">
                Calculate Quote
              </button>
            </form>
          </div>

          {/* Results */}
          <div className="glassmorphism p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6 text-white">Your Quote</h2>
            {result ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-black/30 rounded-lg">
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-primary mr-2" />
                    <span className="text-gray-300">Total Cost ({result.frequency})</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">${result.total}</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-black/30 rounded-lg">
                  <div className="flex items-center">
                    <Sun className="w-5 h-5 text-green-400 mr-2" />
                    <span className="text-gray-300">Estimated Annual Savings</span>
                  </div>
                  <span className="text-2xl font-bold text-green-400">${result.savings}</span>
                </div>

                <div className="text-center pt-4">
                  <button className="btn-primary">
                    Get Detailed Quote
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-400 py-12">
                <Calculator className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Fill out the form to get your personalized quote</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;