import React from 'react';

const QuickCityButtons = ({ fetchWeatherData, setCity }) => (
  <div className="text-center mt-8">
    <p className="text-white/80 mb-4">Quick Search:</p>
    <div className="flex flex-wrap justify-center gap-3">
      {['New York', 'Tokyo', 'Paris', 'Sydney', 'Mumbai'].map((quickCity) => (
        <button
          key={quickCity}
          onClick={() => {
            setCity(quickCity);
            fetchWeatherData(quickCity);
          }}
          className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-200 backdrop-blur-sm border border-white/30"
        >
          {quickCity}
        </button>
      ))}
    </div>
  </div>
);

export default QuickCityButtons;