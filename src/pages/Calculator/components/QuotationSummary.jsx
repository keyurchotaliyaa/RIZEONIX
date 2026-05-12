import { Calculator as CalcIcon, Download, Receipt, Settings, Zap } from 'lucide-react';
import { downloadQuotationPDF } from '../services/pdfGenerator.js';
import { formatCurrency } from '../utils/calculator.js';

const QuotationSummary = ({ formData, calculation }) => {
  const handleDownloadPDF = () => {
    downloadQuotationPDF(formData, calculation);
  };

  return (
    <div className="glassmorphism p-8 rounded-xl w-full max-w-2xl">
      <div className="flex items-center mb-6">
        <Receipt className="w-8 h-8 text-primary mr-3" />
        <h2 className="text-2xl font-bold text-white">Quotation Summary</h2>
      </div>

      {/* Customer Details */}
      <div className="mb-6 p-4 bg-black/30 rounded-lg">
        <h3 className="text-lg font-semibold text-primary mb-3">Customer Details</h3>
        <div className="space-y-2 text-sm">
          <p className="text-gray-300"><span className="font-medium">Name:</span> {formData.customerName}</p>
          <p className="text-gray-300"><span className="font-medium">Phone:</span> {formData.mobileNumber}</p>
          <p className="text-gray-300"><span className="font-medium">Address:</span> {formData.address}</p>
        </div>
      </div>

      {/* Service Details */}
      <div className="mb-6 p-4 bg-black/30 rounded-lg">
        <h3 className="text-lg font-semibold text-primary mb-3">Service Details</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center">
            <Settings className="w-4 h-4 text-primary mr-2" />
            <span className="text-gray-300">Type: <span className="font-medium text-white">{calculation.serviceType}</span></span>
          </div>
          <div className="flex items-center">
            <CalcIcon className="w-4 h-4 text-primary mr-2" />
            <span className="text-gray-300">Panels: <span className="font-medium text-white">{calculation.panelCount}</span></span>
          </div>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-primary mb-4">Price Breakdown</h3>
        <div className="space-y-3">
          {/* Base Price */}
          <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
            <span className="text-gray-300">Base Price</span>
            <span className="text-white font-medium">{formatCurrency(calculation.basePrice)}</span>
          </div>

          {/* Automation Cost (if applicable) */}
          {calculation.automationCost > 0 && (
            <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
              <div className="flex items-center">
                <Zap className="w-4 h-4 text-primary mr-2" />
                <span className="text-gray-300">
                  Automation Cost ({calculation.automationSetCount} Set{calculation.automationSetCount > 1 ? 's' : ''})
                </span>
              </div>
              <span className="text-white font-medium">{formatCurrency(calculation.automationCost)}</span>
            </div>
          )}

          {/* GST */}
          <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
            <span className="text-gray-300">GST</span>
            <span className="text-white font-medium">{formatCurrency(calculation.gst)}</span>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center p-4 bg-primary/20 border border-primary/30 rounded-lg">
            <span className="text-white font-semibold text-lg">Total Price</span>
            <span className="text-primary font-bold text-xl">{formatCurrency(calculation.totalPrice)}</span>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownloadPDF}
        className="w-full btn-primary py-3 text-lg font-semibold flex items-center justify-center hover:scale-105 transition-all duration-300"
      >
        <Download className="w-5 h-5 mr-2" />
        Download Quotation PDF
      </button>

      {/* Note */}
      <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
        <p className="text-yellow-400 text-sm text-center">
          <strong>Note:</strong> Given price is estimate price. Final price will be discussed in meeting.
        </p>
      </div>
    </div>
  );
};

export default QuotationSummary;