import React from 'react';

const ErrorMessage = ({ message }) => (
  <div className="max-w-md mx-auto mb-8 p-4 bg-red-500/20 border border-red-400/30 rounded-xl text-white text-center backdrop-blur-sm">
    {message}
  </div>
);

export default ErrorMessage;