import React from 'react';

const SearchBar = ({ inputCity, setInputCity, handleSearch, isLoading }) => (
  <div className="max-w-md mx-auto mb-12">
    <div className="relative">
      <input
        type="text"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
        onKeyPress={(e) => { if (e.key === 'Enter') handleSearch(e); }}
        placeholder="Enter city name..."
        className="w-full px-6 py-4 text-lg rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
      />
      <button
        onClick={handleSearch}
        disabled={isLoading}
        className="absolute right-2 top-2 px-6 py-2 bg-white/30 hover:bg-white/40 text-white rounded-full transition-all duration-200 disabled:opacity-50"
      >
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </div>
  </div>
);

export default SearchBar;