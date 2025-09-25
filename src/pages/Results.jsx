import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import Filters from '../components/Filters.jsx';
import SearchBar from '../components/SearchBar.jsx';
import { dummyProducts } from '../utils/dummyData.js';
import { getBestDeal } from '../utils/formatPrice.js';

export default function Results() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const searchQuery = searchParams.get('q') || '';
  
  const [filters, setFilters] = useState({
    maxPrice: 200000,
    sortBy: 'price-low',
    brands: []
  });

  const handleSearch = (searchTerm) => {
    navigate(`/results?q=${encodeURIComponent(searchTerm)}`);
  };

  // Filter and sort products
  const filteredProducts = dummyProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = product.price <= filters.maxPrice;
    const matchesBrand = filters.brands.length === 0 || filters.brands.includes(product.brand);
    
    return matchesSearch && matchesPrice && matchesBrand;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (filters.sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'fast-delivery':
        return b.fastDelivery - a.fastDelivery;
      default:
        return 0;
    }
  });

  // Group by platform
  const flipkartProducts = sortedProducts.filter(p => p.platform === 'flipkart');
  const amazonProducts = sortedProducts.filter(p => p.platform === 'amazon');

  // Find best deals
  const bestFlipkartDeal = getBestDeal(flipkartProducts);
  const bestAmazonDeal = getBestDeal(amazonProducts);

  if (filteredProducts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">No products found</h2>
          <p className="text-gray-600 mb-8">Try searching for different keywords or adjust your filters</p>
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
          <div className="flex-1 max-w-md mx-8">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Search Results for "{searchQuery}"
          </h1>
          <p className="text-gray-600">
            Found {filteredProducts.length} products
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <div className="lg:w-80 flex-shrink-0">
            <Filters filters={filters} onFilterChange={setFilters} />
          </div>

          {/* Results Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {/* Flipkart Column */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold">
                    🛒 Flipkart ({flipkartProducts.length})
                  </div>
                </div>
                <div className="space-y-6">
                  {flipkartProducts.map(product => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      isBestDeal={bestFlipkartDeal?.id === product.id}
                    />
                  ))}
                  {flipkartProducts.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                      No products found on Flipkart
                    </div>
                  )}
                </div>
              </div>

              {/* Amazon Column */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold">
                    📦 Amazon ({amazonProducts.length})
                  </div>
                </div>
                <div className="space-y-6">
                  {amazonProducts.map(product => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      isBestDeal={bestAmazonDeal?.id === product.id}
                    />
                  ))}
                  {amazonProducts.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                      No products found on Amazon
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}