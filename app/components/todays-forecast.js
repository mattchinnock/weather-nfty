import React from 'react';
import { connect } from "react-redux";
import ReactAnimatedWeather from 'react-animated-weather';

export const TodaysForecast = (props) => {
    return (
      <div id="todays-forecast">
        <h1>Current Forecast</h1>
        <h2>{props.location}</h2>
        <ReactAnimatedWeather icon={props.todaysWeather.icon} color='#7fa8b3' size={64} animate={true} />
        <div className="temp">
          {Math.floor(props.todaysWeather.apparentTemperature)}&#176;F
        </div>
        <ul className="current-stats">
          <li>humidity: {props.todaysWeather.humidity}</li>
          <li>uv index: {props.todaysWeather.uvIndex}</li>
          <li>rain: {props.todaysWeather.precipProbability}%</li>
          <li>{props.todaysWeather.summary.toLowerCase()}</li>
        </ul>
      </div>
    );
}

function mapStateToProps({ weather }) {
  return {
    todaysWeather :  weather.data.currently,
    location:  weather.location
  };
}

export default connect(mapStateToProps) (TodaysForecast);
