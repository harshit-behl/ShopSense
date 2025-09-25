import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions] = useState([
    'iPhone 15 Pro Max',
    'MacBook Air M3',
    'Samsung Galaxy S24',
    'OnePlus 12',
    'Dell XPS 13',
    'iPad Pro',
    'AirPods Pro'
  ]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    onSearch(suggestion);
    setShowSuggestions(false);
  };

  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-xl relative">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowSuggestions(e.target.value.length > 0);
            }}
            onFocus={() => setShowSuggestions(searchTerm.length > 0)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            className="w-full px-6 py-4 pr-12 rounded-xl shadow-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
            placeholder="Search mobiles, laptops, tablets..."
          />
          <button 
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors duration-200"
          >
            🔍
          </button>
        </div>
      </form>

      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border z-10 max-h-60 overflow-y-auto">
          {filteredSuggestions.map((suggestion, index) => (
            <div
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-6 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-200"
            >
              <span className="text-gray-800">{suggestion}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}