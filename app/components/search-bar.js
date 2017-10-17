import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as WeatherActionCreators from "../actions/index";

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.props.setLocation(localStorage.getItem("location"));
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    localStorage.setItem("location", this.state.term);
    this.props.getWeather();
    this.props.setLocation(this.state.term);
    this.setState({ term: "" });
  }

  render() {
    return (
      <div id="search-bar">
        <form onSubmit={this.onFormSubmit} className="input-group">
          <span className="input-group">
            <input type="text"  className="form-control" value={this.state.term} onChange={this.onInputChange} />
            <button type="submit" className="btn btn-secondary">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(WeatherActionCreators, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
