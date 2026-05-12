import { Calculator as CalcIcon } from 'lucide-react';
import { useState } from 'react';
import QuotationForm from './components/QuotationForm';
import QuotationSummary from './components/QuotationSummary';
import { calculateQuotation, validateFormData } from './utils/calculator';

const CalculatorPage = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    mobileNumber: '',
    address: '',
    serviceType: '',
    panelCount: '',
  });

  const [calculation, setCalculation] = useState(null);
  const [errors, setErrors] = useState({});
  const [showSummary, setShowSummary] = useState(false);

  const handleCalculate = () => {
    const validation = validateFormData(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      setShowSummary(false);
      return;
    }

    setErrors({});

    // Perform calculation
    const result = calculateQuotation(formData.serviceType, parseInt(formData.panelCount));
    setCalculation(result);
    setShowSummary(true);
  };

  const handleReset = () => {
    setFormData({
      customerName: '',
      mobileNumber: '',
      address: '',
      serviceType: '',
      panelCount: '',
    });
    setCalculation(null);
    setErrors({});
    setShowSummary(false);
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <CalcIcon className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
            Quotation Calculator
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get an instant professional quotation for your solar panel cleaning services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Form Section */}
          <div className="flex justify-center">
            <QuotationForm
              formData={formData}
              setFormData={setFormData}
              onCalculate={handleCalculate}
              errors={errors}
            />
          </div>

          {/* Summary Section */}
          <div className="flex flex-col items-center space-y-6">
            {showSummary && calculation ? (
              <>
                <QuotationSummary
                  formData={formData}
                  calculation={calculation}
                />
                <button
                  onClick={handleReset}
                  className="btn-secondary px-8 py-2"
                >
                  Calculate New Quotation
                </button>
              </>
            ) : (
              <div className="glassmorphism p-8 rounded-xl w-full max-w-2xl text-center">
                <CalcIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-300 mb-2">Quotation Preview</h3>
                <p className="text-gray-400">
                  Fill out the form and click &ldquo;Calculate Quotation&rdquo; to see your personalized quote
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 glassmorphism p-8 rounded-xl max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Our Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CalcIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Accurate Pricing</h3>
              <p className="text-gray-400 text-sm">
                Transparent and competitive pricing based on your specific requirements
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CalcIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">&ldquo;Professional PDF&rdquo;</h3>
              <p className="text-gray-400 text-sm">
                Download professional quotation PDFs for your records and sharing
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CalcIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Consultation</h3>
              <p className="text-gray-400 text-sm">
                Get expert advice and final pricing discussion for your solar needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;