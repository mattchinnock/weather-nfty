import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import { Wind } from '../assets/icons/icons';

const WeekForecast = (props) => {
  const weatherTypes = {
    'wind' : Wind
  }

  return (
    <div className="weekday-forecast">
      <p>{getDay(props.time)}</p>
      <div className="weather-icon">
        {React.createElement(
          weatherTypes['wind'],
          { width: 48, height: 48 },
          null
        )}
        {/*<Icon width={48} height={48} />*/}
      </div>
      <p className="temp">{Math.floor(props.apparentTemperatureHigh)}&#176;F</p>
    </div>
  )

}

function getDay(timestamp) {
  return new Date(timestamp*1000).toLocaleDateString('en-US', { weekday: 'long' });
}


export default WeekForecast;
