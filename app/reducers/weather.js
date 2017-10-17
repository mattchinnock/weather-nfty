import { GET_WEATHER, SET_LOCATION } from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_WEATHER:
      action.payload.currently.icon = convertIconLabel(action.payload.currently.icon);
      action.payload.currently.humidity = formatHumidity(action.payload.currently.humidity);
      return Object.assign({}, state, {
        data: action.payload
      })
    case SET_LOCATION:
      return Object.assign({}, state, {
        location: action.payload
      })
  }
  return state;
}


function convertIconLabel(oldFormat) {
  return oldFormat.replace(/-/g, '_').toUpperCase();
}

function formatHumidity(wholeNumber) {
  return (Math.floor(wholeNumber * 100)) + '%';
}
