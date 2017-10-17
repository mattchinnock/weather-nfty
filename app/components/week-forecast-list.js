import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import { connect } from 'react-redux';
import WeekForecast from './week-forecast';

const WeekForecastList = (props) => {
  return (
    <div id="week-forecast-list">
      {props.dailyWeather.data.filter((o,index) => index!=0).map(weekDay => {
        return <WeekForecast key={weekDay.time} {...weekDay} />
      })}
      <p className="summary">{props.dailyWeather.summary}</p>
    </div>
  );
}

function mapStateToProps({ weather }) {
  return { dailyWeather :  weather.data.daily };
}

export default connect(mapStateToProps) (WeekForecastList);
