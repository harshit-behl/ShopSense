import React from 'react';
import { formatPrice, calculateDiscount } from '../utils/formatPrice.js';

export default function CompareCard({ flipkartProduct, amazonProduct }) {
  if (!flipkartProduct && !amazonProduct) return null;

  const product = flipkartProduct || amazonProduct;
  const bothAvailable = flipkartProduct && amazonProduct;
  
  const flipkartDiscount = flipkartProduct ? calculateDiscount(flipkartProduct.originalPrice, flipkartProduct.price) : 0;
  const amazonDiscount = amazonProduct ? calculateDiscount(amazonProduct.originalPrice, amazonProduct.price) : 0;
  
  const bestPrice = bothAvailable 
    ? Math.min(flipkartProduct.price, amazonProduct.price)
    : product.price;
    
  const priceDifference = bothAvailable 
    ? Math.abs(flipkartProduct.price - amazonProduct.price)
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="text-center mb-6">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-32 h-32 mx-auto object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
        <div className="flex items-center justify-center">
          <span className="text-yellow-500 text-xl">⭐</span>
          <span className="ml-2 text-lg font-semibold">{product.rating}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Flipkart Card */}
        <div className={`border-2 rounded-xl p-4 ${flipkartProduct ? 'border-blue-200 bg-blue-50' : 'border-gray-200 bg-gray-50'}`}>
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-semibold text-blue-600">🛒 Flipkart</div>
            {flipkartProduct && bestPrice === flipkartProduct.price && bothAvailable && (
              <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                Best Price!
              </div>
            )}
          </div>
          
          {flipkartProduct ? (
            <>
              <div className="text-2xl font-bold text-gray-800 mb-2">
                {formatPrice(flipkartProduct.price)}
              </div>
              <div className="text-sm text-gray-500 line-through mb-2">
                {formatPrice(flipkartProduct.originalPrice)}
              </div>
              <div className="text-green-600 text-sm font-semibold mb-4">
                {flipkartDiscount}% OFF
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200">
                Buy on Flipkart
              </button>
            </>
          ) : (
            <div className="text-center py-8 text-gray-500">
              Not available on Flipkart
            </div>
          )}
        </div>

        {/* Amazon Card */}
        <div className={`border-2 rounded-xl p-4 ${amazonProduct ? 'border-orange-200 bg-orange-50' : 'border-gray-200 bg-gray-50'}`}>
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-semibold text-orange-600">📦 Amazon</div>
            {amazonProduct && bestPrice === amazonProduct.price && bothAvailable && (
              <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                Best Price!
              </div>
            )}
          </div>
          
          {amazonProduct ? (
            <>
              <div className="text-2xl font-bold text-gray-800 mb-2">
                {formatPrice(amazonProduct.price)}
              </div>
              <div className="text-sm text-gray-500 line-through mb-2">
                {formatPrice(amazonProduct.originalPrice)}
              </div>
              <div className="text-green-600 text-sm font-semibold mb-4">
                {amazonDiscount}% OFF
              </div>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200">
                Buy on Amazon
              </button>
            </>
          ) : (
            <div className="text-center py-8 text-gray-500">
              Not available on Amazon
            </div>
          )}
        </div>
      </div>

      {/* Price Difference */}
      {bothAvailable && priceDifference > 0 && (
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
          <div className="text-lg font-semibold text-yellow-800">
            💰 Price Difference: {formatPrice(priceDifference)}
          </div>
          <div className="text-sm text-yellow-600">
            Save {formatPrice(priceDifference)} by choosing the lower price!
          </div>
        </div>
      )}

      {/* Specifications Table */}
      <div className="mt-6 overflow-hidden">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Specifications</h3>
        <div className="bg-gray-50 rounded-lg p-4">
          <table className="w-full">
            <tbody className="space-y-2">
              <tr className="border-b border-gray-200">
                <td className="py-2 text-gray-600">RAM</td>
                <td className="py-2 font-medium text-right">{product.specs.ram}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 text-gray-600">Storage</td>
                <td className="py-2 font-medium text-right">{product.specs.storage}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 text-gray-600">Camera</td>
                <td className="py-2 font-medium text-right">{product.specs.camera}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 text-gray-600">Battery</td>
                <td className="py-2 font-medium text-right">{product.specs.battery}</td>
              </tr>
              <tr>
                <td className="py-2 text-gray-600">Display</td>
                <td className="py-2 font-medium text-right">{product.specs.display}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}