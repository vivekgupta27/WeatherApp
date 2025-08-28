import React, { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import ErrorMessage from './components/ErrorMessage';
import LoadingSpinner from './components/LoadingSpinner';
import QuickCityButtons from './components/QuickCityButtons';

const api_key = import.meta.env.VITE_WEATHER_API_KEY;


const getBackgroundGradient = (conditionCode) => {
  if (conditionCode === 1000) return 'from-amber-300 via-orange-400 to-yellow-500';
  if (conditionCode === 1003) return 'from-blue-400 via-indigo-500 to-purple-500';
  if ([1006, 1009].includes(conditionCode)) return 'from-slate-400 via-gray-500 to-zinc-600';
  if ([1030, 1135].includes(conditionCode)) return 'from-gray-300 via-slate-400 to-gray-500';
  if ([1063, 1180, 1183].includes(conditionCode)) return 'from-slate-500 via-blue-600 to-indigo-700';
  if ([1189, 1195].includes(conditionCode)) return 'from-gray-700 via-slate-800 to-zinc-900';
  if ([1240, 1243, 1246].includes(conditionCode)) return 'from-blue-600 via-slate-700 to-gray-800';
  if ([1066, 1213].includes(conditionCode)) return 'from-blue-200 via-indigo-300 to-purple-400';
  if ([1114, 1219, 1225].includes(conditionCode)) return 'from-slate-300 via-blue-400 to-indigo-600';
  if ([1255, 1258].includes(conditionCode)) return 'from-blue-300 via-slate-400 to-indigo-500';
  if ([1087, 1273].includes(conditionCode)) return 'from-purple-600 via-indigo-700 to-slate-800';
  if (conditionCode === 1276) return 'from-purple-800 via-slate-900 to-black';
  return 'from-rose-400 via-fuchsia-500 to-indigo-500';
};

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('London');
  const [inputCity, setInputCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchWeatherData(city);
  }, []);

  const fetchWeatherData = async (cityName) => {
    setIsLoading(true);
    setError('');
    try {
      const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${cityName}`);
      const data = await res.json();
      if (data.error) {
        setWeatherData(null);
        setError('Place not found.');
      } else {
        setWeatherData(data);
      }
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
      setWeatherData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    if (inputCity.trim()) {
      setCity(inputCity.trim());
      fetchWeatherData(inputCity.trim());
      setInputCity('');
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${weatherData ? getBackgroundGradient(weatherData?.current?.condition?.code) : 'from-blue-400 via-purple-500 to-pink-500'} transition-all duration-1000`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/4 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">Weather App</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">Get real-time weather information for any city around the world</p>
        </header>

        <SearchBar
          inputCity={inputCity}
          setInputCity={setInputCity}
          handleSearch={handleSearch}
          isLoading={isLoading}
        />

        {error && <ErrorMessage message={error} />}
        {isLoading && <LoadingSpinner />}
        {weatherData && !isLoading && <WeatherCard weatherData={weatherData} />}
        {!isLoading && !weatherData && !error && <ErrorMessage message="Place not found." />}

        <QuickCityButtons
          fetchWeatherData={fetchWeatherData}
          setCity={setCity}
        />

        <footer className="text-center mt-16 text-white/60">
          <p>&copy; 2025 Weather App. Made with ❤️ using React</p>
        </footer>
      </div>
    </div>
  );
};

export default WeatherApp;