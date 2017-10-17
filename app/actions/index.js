import axios from 'axios';

export const GET_WEATHER = 'GET_WEATHER';
export const SET_LOCATION = 'SET_LOCATION';

export function setLocation(location) {
  return {
    type: SET_LOCATION,
    payload: location
  }
}

export function getWeather() {
  const API_KEY = '3322f6ba067d7541924ed01a758ec04f';
  const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
  const URL = 'https://api.darksky.net/forecast';
  const location = localStorage.getItem("location");

  return (dispatch) => {
    geocodeAddress(location).then( coordinates => {
      axios.get(`${ CORS_PROXY }${ URL }/${ API_KEY }/${ coordinates }`).then(({ data }) => {
        dispatch({
          type: GET_WEATHER,
          payload: data
        });
      });
    });
  }

  //const request = axios.get(`${CORS_PROXY}${URL}/${API_KEY}/${location}`);
  //return {
    //type: GET_WEATHER,
    //payload: request
  //}
}

function geocodeAddress(address) {
  const geocoder = new google.maps.Geocoder();
  return new Promise((resolve, reject) => {
    geocoder.geocode({ 'address': address }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        resolve(`${results[0].geometry.location.lat()},${results[0].geometry.location.lng()}`);
      }else{
        reject();
      }
    });
  });
}
