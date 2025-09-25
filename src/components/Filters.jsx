import React from 'react';
import { brands } from '../utils/dummyData.js';

export default function Filters({ filters, onFilterChange }) {
  const handlePriceRangeChange = (e) => {
    onFilterChange({
      ...filters,
      maxPrice: parseInt(e.target.value)
    });
  };

  const handleSortChange = (e) => {
    onFilterChange({
      ...filters,
      sortBy: e.target.value
    });
  };

  const handleBrandChange = (brand) => {
    const updatedBrands = filters.brands.includes(brand)
      ? filters.brands.filter(b => b !== brand)
      : [...filters.brands, brand];
    
    onFilterChange({
      ...filters,
      brands: updatedBrands
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Filters & Sort</h3>
      
      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price Range: Up to ₹{filters.maxPrice?.toLocaleString() || '200000'}
        </label>
        <input
          type="range"
          min="10000"
          max="200000"
          step="5000"
          value={filters.maxPrice || 200000}
          onChange={handlePriceRangeChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-sm text-gray-500 mt-1">
          <span>₹10K</span>
          <span>₹200K</span>
        </div>
      </div>

      {/* Sort By */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Sort By
        </label>
        <select
          value={filters.sortBy || 'price-low'}
          onChange={handleSortChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="price-low">Price: Low to High 💸</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Rating ⭐</option>
          <option value="fast-delivery">Fast Delivery 🚚</option>
        </select>
      </div>

      {/* Brand Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Brands
        </label>
        <div className="grid grid-cols-2 gap-2">
          {brands.map(brand => (
            <label key={brand} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.brands?.includes(brand) || false}
                onChange={() => handleBrandChange(brand)}
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <span className="ml-2 text-sm text-gray-700">{brand}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}