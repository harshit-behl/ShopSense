import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar.jsx";

export default function Home() {
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    navigate(`/results?q=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 via-green-300 to-blue-200">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Compare Electronics Prices
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto px-4">
          Find the best deals on mobiles, laptops, tablets & more from Flipkart & Amazon 🛒
        </p>
      </div>
      
      <SearchBar onSearch={handleSearch} />
      
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
        <div className="text-center">
          <div className="text-4xl mb-2">📱</div>
          <div className="text-white font-medium">Mobiles</div>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-2">💻</div>
          <div className="text-white font-medium">Laptops</div>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-2">📺</div>
          <div className="text-white font-medium">TVs</div>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-2">🎧</div>
          <div className="text-white font-medium">Audio</div>
        </div>
      </div>
    </div>
  );
}
