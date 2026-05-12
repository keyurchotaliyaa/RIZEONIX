import { pricingData } from '../data/pricingData.js';

/**
 * Calculate price for Semi Automated service
 * @param {number} panelCount - Number of panels
 * @returns {number} - Calculated price
 */
export const calculateSemiAutomatedPrice = (panelCount) => {
  const { tiers, above18Price } = pricingData['Semi Automated'];

  // Find the appropriate tier
  const tier = tiers.find(t => panelCount >= t.min && panelCount <= t.max);

  if (tier) {
    return tier.price;
  }

  // Above 18 panels: panelCount × 2800
  if (panelCount > 18) {
    return panelCount * above18Price;
  }

  return 0;
};

/**
 * Calculate price for Fully Automated service
 * @param {number} panelCount - Number of panels
 * @returns {object} - {basePrice, automationCost, totalPrice, setCount}
 */
export const calculateFullyAutomatedPrice = (panelCount) => {
  const basePrice = calculateSemiAutomatedPrice(panelCount);

  const { automationCostPerSet, setSize } = pricingData['Fully Automated'];

  // Calculate automation sets: Math.ceil(panelCount / 50)
  const setCount = Math.ceil(panelCount / setSize);
  const automationCost = setCount * automationCostPerSet;

  return {
    basePrice,
    automationCost,
    totalPrice: basePrice + automationCost,
    setCount,
  };
};

/**
 * Calculate price for Sprinklers service
 * @param {number} panelCount - Number of panels
 * @returns {number} - Calculated price
 */
export const calculateSprinklersPrice = (panelCount) => {
  const { tiers, above20Price, above50Price } = pricingData['Sprinklers'];

  // Find the appropriate tier
  const tier = tiers.find(t => panelCount >= t.min && panelCount <= t.max);

  if (tier) {
    return tier.price;
  }

  // Above 50 panels: panelCount × 900
  if (panelCount > 50) {
    return panelCount * above50Price;
  }

  // Above 20 panels: panelCount × 1100
  if (panelCount > 20) {
    return panelCount * above20Price;
  }

  return 0;
};

/**
 * Main calculation function
 * @param {string} serviceType - Type of service
 * @param {number} panelCount - Number of panels
 * @returns {object} - Calculation result
 */
export const calculateQuotation = (serviceType, panelCount) => {
  let result = {
    serviceType,
    panelCount,
    basePrice: 0,
    automationCost: 0,
    automationSetCount: 0,
    gst: 0,
    totalPrice: 0,
  };

  switch (serviceType) {
    case 'Semi Automated':
      result.basePrice = calculateSemiAutomatedPrice(panelCount);
      result.totalPrice = result.basePrice;
      break;

    case 'Fully Automated':
      const fullyAutoResult = calculateFullyAutomatedPrice(panelCount);
      result.basePrice = fullyAutoResult.basePrice;
      result.automationCost = fullyAutoResult.automationCost;
      result.automationSetCount = fullyAutoResult.setCount;
      result.totalPrice = fullyAutoResult.totalPrice;
      break;

    case 'Sprinklers':
      result.basePrice = calculateSprinklersPrice(panelCount);
      result.totalPrice = result.basePrice;
      break;

    default:
      break;
  }

  return result;
};

/**
 * Format currency in Indian Rupees
 * @param {number} amount - Amount to format
 * @returns {string} - Formatted currency string
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  }).format(amount);
};

/**
 * Validate form data
 * @param {object} formData - Form data to validate
 * @returns {object} - {isValid, errors}
 */
export const validateFormData = (formData) => {
  const errors = {};

  if (!formData.customerName?.trim()) {
    errors.customerName = 'Customer name is required';
  }

  if (!formData.mobileNumber?.trim()) {
    errors.mobileNumber = 'Mobile number is required';
  } else if (!/^\d{10}$/.test(formData.mobileNumber.replace(/\s/g, ''))) {
    errors.mobileNumber = 'Please enter a valid 10-digit mobile number';
  }

  if (!formData.address?.trim()) {
    errors.address = 'Address is required';
  }

  if (!formData.serviceType) {
    errors.serviceType = 'Please select a service type';
  }

  if (!formData.panelCount || formData.panelCount < 1) {
    errors.panelCount = 'Please enter a valid number of panels (minimum 1)';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};