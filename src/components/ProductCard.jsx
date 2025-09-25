import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { formatPrice, calculateDiscount } from '../utils/formatPrice.js';

export default function ProductCard({ product, isBestDeal }) {
  const navigate = useNavigate();

  // Error checking for product data
  if (!product) {
    return (
      <div className="bg-gray-100 rounded-xl p-6 text-center text-gray-500">
        Product data not available
      </div>
    );
  }
  const discount = calculateDiscount(product.originalPrice || 0, product.price || 0);

  const handleViewDeal = () => {
    const url = product.platform === 'flipkart' 
      ? 'https://flipkart.com' 
      : 'https://amazon.in';
    window.open(url, '_blank');
  };

  const handleCompare = () => {
    navigate(`/compare?product=${encodeURIComponent(product.name || '')}`);
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
            src={product.image || 'https://via.placeholder.com/80x80?text=No+Image'} 
            alt={product.name || 'Product'}
            className="w-16 h-16 object-cover rounded"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/80x80?text=No+Image';
            }}
          />
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-800">
            {formatPrice(product.price || 0)}
          </div>
          {product.originalPrice && product.originalPrice > product.price && (
            <div className="text-sm text-gray-500 line-through">
              {formatPrice(product.originalPrice)}
            </div>
          )}
          {discount > 0 && (
            <div className="text-green-600 text-sm font-semibold">
              {discount}% OFF
            </div>
          )}
        </div>
      </div>

      <h3 className="font-semibold text-lg mb-2 text-gray-800 line-clamp-2">
        {product.name || 'Unknown Product'}
      </h3>

      {product.specs && (
        <div className="space-y-2 mb-4">
          {product.specs.ram && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">RAM:</span>
              <span className="font-medium">{product.specs.ram}</span>
            </div>
          )}
          {product.specs.storage && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Storage:</span>
              <span className="font-medium">{product.specs.storage}</span>
            </div>
          )}
          {product.specs.camera && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Camera:</span>
              <span className="font-medium">{product.specs.camera}</span>
            </div>
          )}
          {product.specs.battery && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Battery:</span>
              <span className="font-medium">{product.specs.battery}</span>
            </div>
          )}
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <span className="text-yellow-500">⭐</span>
          <span className="ml-1 font-medium">{product.rating || 'N/A'}</span>
          {product.reviews && (
            <span className="ml-1 text-gray-500 text-sm">({product.reviews})</span>
          )}
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
          onClick={handleCompare}
          className="w-full py-2 border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 rounded-lg font-semibold transition-colors duration-200"
        >
          Compare Prices ⚖️
        </button>
      </div>
    </motion.div>
  );
}