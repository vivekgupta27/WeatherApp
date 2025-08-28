import React from 'react';

const LoadingSpinner = () => (
  <div className="text-center mb-12">
    <div className="inline-block w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
    <p className="text-white mt-4">Loading weather data...</p>
  </div>
);

export default LoadingSpinner;