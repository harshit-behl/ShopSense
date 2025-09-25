import React from 'react';

import { formatPrice, calculateDiscount } from '../utils/formatPrice.js';

export default function ProductCard({ product, isBestDeal }) {
  const discount = calculateDiscount(product.originalPrice, product.price);

  const handleViewDeal = () => {
    const url = product.platform === 'flipkart' 
      ? 'https://flipkart.com' 
      : 'https://amazon.in';
    window.open(url, '_blank');
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 relative"
      whileHover={{ scale: 1.02, y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {isBestDeal && (
        <div className="absolute -top-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          🏆 Best Deal
        </div>
      )}
      
      <div className="flex justify-between items-start mb-4">
        <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-16 h-16 object-cover rounded"
          />
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-800">
            {formatPrice(product.price)}
          </div>
          <div className="text-sm text-gray-500 line-through">
            {formatPrice(product.originalPrice)}
          </div>
          <div className="text-green-600 text-sm font-semibold">
            {discount}% OFF
          </div>
        </div>
      </div>

      <h3 className="font-semibold text-lg mb-2 text-gray-800 line-clamp-2">
        {product.name}
      </h3>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">RAM:</span>
          <span className="font-medium">{product.specs.ram}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Storage:</span>
          <span className="font-medium">{product.specs.storage}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Camera:</span>
          <span className="font-medium">{product.specs.camera}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Battery:</span>
          <span className="font-medium">{product.specs.battery}</span>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <span className="text-yellow-500">⭐</span>
          <span className="ml-1 font-medium">{product.rating}</span>
          <span className="ml-1 text-gray-500 text-sm">({product.reviews})</span>
        </div>
        {product.fastDelivery && (
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
            🚚 Fast Delivery
          </span>
        )}
      </div>

      <div className="space-y-2">
        <button 
          onClick={handleViewDeal}
          className={`w-full py-2 rounded-lg font-semibold transition-colors duration-200 ${
            product.platform === 'flipkart'
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-orange-500 hover:bg-orange-600 text-white'
          }`}
        >
          View Deal on {product.platform === 'flipkart' ? 'Flipkart' : 'Amazon'} 🛒
        </button>
        
        <button 
          onClick={() => window.location.href = `/compare?product=${encodeURIComponent(product.name)}`}
          className="w-full py-2 border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 rounded-lg font-semibold transition-colors duration-200"
        >
          Compare Prices ⚖️
        </button>
      </div>
    </motion.div>
  );
}