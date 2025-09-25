export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

export const calculateDiscount = (originalPrice, salePrice) => {
  const discount = ((originalPrice - salePrice) / originalPrice) * 100;
  return Math.round(discount);
};

export const getBestDeal = (products) => {
  if (!products || products.length === 0) return null;
  return products.reduce((best, current) => 
    current.price < best.price ? current : best
  );
};
