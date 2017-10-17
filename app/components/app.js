import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getWeather } from "../actions/index";
import TodaysForecast from './todays-forecast';
import WeekForecastList from './week-forecast-list';
import SearchBar from './search-bar';
import '../styles/app.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.props.getWeather();
  }

  componentDidMount() {
    setInterval(this.props.getWeather, 1800000); // Get new weather every half an hour
  }

  render() {
    if(this.props.weather.data == undefined)
      return <h1 id="loading">Loading...</h1>
    return (
      <div>
          <SearchBar />
        <div id="app-wrapper">
          <TodaysForecast />
          <WeekForecastList />
        </div>
      </div>

    )
  }

}

function mapStateToProps({ weather }) {
  return { weather };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getWeather }, dispatch);
}

export function convertIconLabel(oldFormat) {
  return oldFormat.replace(/-/g, '_').toUpperCase();
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
