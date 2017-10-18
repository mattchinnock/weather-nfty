import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import { Wind, Rain, Cloud, Sun, Moon, Snow, Sleet, Fog, CloudSun, CloudMoon, iconTypes } from '../assets/icons/icons';

const WeekForecast = (props) => {
  const Icon = iconTypes[props.icon];
  return (
    <div className="weekday-forecast">
      <p>{getDay(props.time)}</p>
      <div className="weather-icon">
        <Icon className="mini-icon" />
      </div>
      <p className="temp">{Math.floor(props.apparentTemperatureHigh)}&#176;F</p>
    </div>
  )
}

function getDay(timestamp) {
  return new Date(timestamp*1000).toLocaleDateString('en-US', { weekday: 'long' });
}

export default WeekForecast;
