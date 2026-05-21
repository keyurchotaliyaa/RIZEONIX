import { pricingData } from '../../Calculator/data/pricingData.js';

export const calculateServicePrice = (serviceType, panelCount) => {
  const pricing = pricingData[serviceType];
  
  if (!pricing || panelCount <= 0) return 0;

  switch (serviceType) {
    case 'Semi Automated':
      return calculateSemiAutomatedPrice(panelCount);
    
    case 'Fully Automated':
      return calculateFullyAutomatedPrice(panelCount);
    
    case 'Sprinklers':
      return calculateSprinklersPrice(panelCount);
    
    default:
      return 0;
  }
};

const calculateSemiAutomatedPrice = (panelCount) => {
  const { tiers, above18Price } = pricingData['Semi Automated'];
  
  // Find applicable tier
  const applicableTier = tiers.find(
    tier => panelCount >= tier.min && panelCount <= tier.max
  );
  
  if (applicableTier) {
    return applicableTier.price;
  }
  
  // If above 18 panels
  if (panelCount > 18) {
    const baseTier = tiers[tiers.length - 1];
    const additionalPanels = panelCount - baseTier.max;
    return baseTier.price + (additionalPanels * above18Price);
  }
  
  return 0;
};

const calculateFullyAutomatedPrice = (panelCount) => {
  const basePriceForSemiAutomated = calculateSemiAutomatedPrice(panelCount);
  const { automationCostPerSet, setSize } = pricingData['Fully Automated'];
  
  // Calculate number of sets and additional automation cost
  const numberOfSets = Math.ceil(panelCount / setSize);
  const automationCost = numberOfSets * automationCostPerSet;
  
  return basePriceForSemiAutomated + automationCost;
};

const calculateSprinklersPrice = (panelCount) => {
  const { tiers, above20Price, above50Price } = pricingData['Sprinklers'];
  
  // Find applicable tier
  const applicableTier = tiers.find(
    tier => panelCount >= tier.min && panelCount <= tier.max
  );
  
  if (applicableTier) {
    return applicableTier.price;
  }
  
  // If above 18 panels
  if (panelCount > 18) {
    const baseTier = tiers[tiers.length - 1];
    
    if (panelCount <= 50) {
      const additionalPanels = panelCount - baseTier.max;
      return baseTier.price + (additionalPanels * above20Price);
    } else {
      const panelsUpTo50 = 50 - baseTier.max;
      const panelsAbove50 = panelCount - 50;
      return baseTier.price + (panelsUpTo50 * above20Price) + (panelsAbove50 * above50Price);
    }
  }
  
  return 0;
};

export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
