import { Calculator, Hash, MapPin, Phone, Settings, User } from 'lucide-react';
import { serviceTypes } from '../data/pricingData.js';

const QuotationForm = ({ formData, setFormData, onCalculate, errors }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate();
  };

  return (
    <div className="glassmorphism p-8 rounded-xl w-full max-w-2xl">
      <div className="flex items-center mb-6">
        <Calculator className="w-8 h-8 text-primary mr-3" />
        <h2 className="text-2xl font-bold text-white">Get Your Quotation</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Customer Name */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
            <User className="w-4 h-4 mr-2" />
            Customer Name *
          </label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors ${
              errors.customerName ? 'border-red-500' : 'border-white/20 focus:border-primary'
            }`}
            placeholder="Enter customer name"
          />
          {errors.customerName && (
            <p className="text-red-400 text-sm mt-1">{errors.customerName}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            Mobile Number *
          </label>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors ${
              errors.mobileNumber ? 'border-red-500' : 'border-white/20 focus:border-primary'
            }`}
            placeholder="Enter 10-digit mobile number"
          />
          {errors.mobileNumber && (
            <p className="text-red-400 text-sm mt-1">{errors.mobileNumber}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            Full Address *
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            rows={3}
            className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors resize-none ${
              errors.address ? 'border-red-500' : 'border-white/20 focus:border-primary'
            }`}
            placeholder="Enter complete address"
          />
          {errors.address && (
            <p className="text-red-400 text-sm mt-1">{errors.address}</p>
          )}
        </div>

        {/* Service Type */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
            <Settings className="w-4 h-4 mr-2" />
            Service Type *
          </label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white focus:outline-none transition-colors ${
              errors.serviceType ? 'border-red-500' : 'border-white/20 focus:border-primary'
            }`}
          >
            <option value="">Select Service Type</option>
            {serviceTypes.map((type) => (
              <option key={type} value={type} className="bg-dark-gray">
                {type}
              </option>
            ))}
          </select>
          {errors.serviceType && (
            <p className="text-red-400 text-sm mt-1">{errors.serviceType}</p>
          )}
        </div>

        {/* Number of Panels */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
            <Hash className="w-4 h-4 mr-2" />
            Number of Total Panels *
          </label>
          <input
            type="number"
            name="panelCount"
            value={formData.panelCount}
            onChange={handleInputChange}
            min="1"
            className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors ${
              errors.panelCount ? 'border-red-500' : 'border-white/20 focus:border-primary'
            }`}
            placeholder="Enter number of panels"
          />
          {errors.panelCount && (
            <p className="text-red-400 text-sm mt-1">{errors.panelCount}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full btn-primary py-3 text-lg font-semibold hover:scale-105 transition-all duration-300"
        >
          Calculate Quotation
        </button>
      </form>
    </div>
  );
};

export default QuotationForm;