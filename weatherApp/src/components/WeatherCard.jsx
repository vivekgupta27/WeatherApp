import React from 'react';
import { Cloud, Sun, CloudRain, CloudSnow, Wind, Droplets, Eye, Thermometer } from 'lucide-react';

const getWeatherIcon = (conditionCode) => {
  if (conditionCode === 1000) return <Sun className="w-16 h-16 text-yellow-400 animate-spin" style={{animationDuration: '8s'}} />;
  if ([1003, 1006, 1009].includes(conditionCode)) return <Cloud className="w-16 h-16 text-gray-300 animate-bounce" style={{animationDuration: '3s'}} />;
  if ([1063, 1180, 1183, 1189, 1195, 1240, 1243, 1246].includes(conditionCode)) return <CloudRain className="w-16 h-16 text-blue-400 animate-pulse" />;
  if ([1066, 1114, 1213, 1219, 1225, 1255, 1258].includes(conditionCode)) return <CloudSnow className="w-16 h-16 text-blue-200 animate-bounce" style={{animationDuration: '2s'}} />;
  if ([1087, 1273, 1276].includes(conditionCode)) return <CloudRain className="w-16 h-16 text-purple-400 animate-pulse" style={{animationDuration: '0.5s'}} />;
  if ([1030, 1135].includes(conditionCode)) return <Cloud className="w-16 h-16 text-gray-400 opacity-70" />;
  return <Sun className="w-16 h-16 text-yellow-400" />;
};

const WeatherCard = ({ weatherData }) => (
  <div className="max-w-4xl mx-auto">
    <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 mb-8 border border-white/30 shadow-xl">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          {weatherData?.location?.name}
        </h2>
        <p className="text-white/80 text-xl">
          {weatherData?.location?.country}
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4">
            {getWeatherIcon(weatherData?.current?.condition?.code)}
          </div>
          <div className="text-6xl md:text-7xl font-bold text-white mb-2">
            {Math.round(weatherData?.current?.temp_c)}°C
          </div>
          <p className="text-2xl text-white/80 capitalize">
            {weatherData?.current?.condition?.text}
          </p>
          <p className="text-lg text-white/60 mt-2">
            Feels like {Math.round(weatherData?.current?.feelslike_c)}°C
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-2xl p-4 text-center">
            <Droplets className="w-8 h-8 text-blue-300 mx-auto mb-2" />
            <p className="text-white/80 text-sm mb-1">Humidity</p>
            <p className="text-white text-xl font-semibold">
              {weatherData?.current?.humidity}%
            </p>
          </div>
          <div className="bg-white/10 rounded-2xl p-4 text-center">
            <Wind className="w-8 h-8 text-gray-300 mx-auto mb-2" />
            <p className="text-white/80 text-sm mb-1">Wind</p>
            <p className="text-white text-xl font-semibold">
              {weatherData?.current?.wind_kph} m/s
            </p>
          </div>
          <div className="bg-white/10 rounded-2xl p-4 text-center">
            <Thermometer className="w-8 h-8 text-red-300 mx-auto mb-2" />
            <p className="text-white/80 text-sm mb-1">Pressure</p>
            <p className="text-white text-xl font-semibold">
              {weatherData?.current?.pressure_mb} hPa
            </p>
          </div>
          <div className="bg-white/10 rounded-2xl p-4 text-center">
            <Eye className="w-8 h-8 text-green-300 mx-auto mb-2" />
            <p className="text-white/80 text-sm mb-1">Visibility</p>
            <p className="text-white text-xl font-semibold">
              {(weatherData?.current?.vis_km)} km
            </p>
          </div>
        </div>
      </div>
      <div className="text-center pt-6 border-t border-white/20">
        <p className="text-white/60">
          Last updated: {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  </div>
);

export default WeatherCard;