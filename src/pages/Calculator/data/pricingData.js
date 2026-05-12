// Pricing data for different service types
export const pricingData = {
  'Semi Automated': {
    tiers: [
      { min: 0, max: 6, price: 22000 },
      { min: 7, max: 8, price: 25000 },
      { min: 9, max: 10, price: 33000 },
      { min: 11, max: 12, price: 37000 },
      { min: 13, max: 14, price: 43000 },
      { min: 15, max: 16, price: 48000 },
      { min: 17, max: 18, price: 53000 },
    ],
    above18Price: 2800, // per panel above 18
  },
  'Fully Automated': {
    // Same base pricing as Semi Automated
    basePricing: 'Semi Automated',
    automationCostPerSet: 15000, // per 50 panels
    setSize: 50,
  },
  'Sprinklers': {
    tiers: [
      { min: 0, max: 6, price: 12000 },
      { min: 7, max: 8, price: 13000 },
      { min: 9, max: 10, price: 14000 },
      { min: 11, max: 12, price: 15000 },
      { min: 13, max: 14, price: 16000 },
      { min: 15, max: 16, price: 17000 },
      { min: 17, max: 18, price: 18000 },
    ],
    above20Price: 1100, // per panel above 20
    above50Price: 900,  // per panel above 50
  },
};

export const serviceTypes = [
  'Semi Automated',
  'Fully Automated',
  'Sprinklers',
];