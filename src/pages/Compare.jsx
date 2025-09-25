import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import CompareCard from '../components/CompareCard.jsx';
import { dummyProducts } from '../utils/dummyData.js';

export default function Compare() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const productName = searchParams.get('product');

  if (!productName) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Invalid Product</h2>
          <p className="text-gray-600 mb-8">Please select a valid product to compare</p>
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // Find matching products from both platforms
  const flipkartProduct = dummyProducts.find(p => 
    p.name.toLowerCase().includes(productName.toLowerCase()) && p.platform === 'flipkart'
  );
  
  const amazonProduct = dummyProducts.find(p => 
    p.name.toLowerCase().includes(productName.toLowerCase()) && p.platform === 'amazon'
  );

  if (!flipkartProduct && !amazonProduct) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Product Not Found</h2>
          <p className="text-gray-600 mb-8">The product "{productName}" was not found in our database</p>
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            📱 PriceCompare
          </button>
          <button 
            onClick={() => navigate(-1)}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
          >
            ← Back to Results
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Compare Prices
          </h1>
          <p className="text-gray-600">
            Side-by-side comparison of {productName} across platforms
          </p>
        </div>

        <CompareCard 
          flipkartProduct={flipkartProduct} 
          amazonProduct={amazonProduct} 
        />
      </div>
    </div>
  );
}