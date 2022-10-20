import clock from './components/clock';
import { getWeather } from './functions/callOpenWeather';
import autocomplete from './functions/autocomplete';
import 'normalize-css';
import './style.css';

clock();

// TODO - Default to Nashville

// Grab DOM elements and query
const locationInputForm = document.querySelector('.location-input');
const locationInput = locationInputForm.querySelector('input');
const locationSubmit = document.querySelector('#submit');

let query;
const getInput = () => locationInput.value;
const setQueryText = (text) => (locationInput.value = text);
const setQuery = (location) => {
  setQueryText(location.string);
  query = location;
};

locationSubmit.addEventListener('click', () => {
  // Call weather API
  getWeather(query).then((data) => console.log(data));
});

locationInput.addEventListener('input', () => {
  autocomplete.start();
});

// Call API
// Display data
const displayData = (json) => {
  const locationOuput = document.querySelector('#location');
  const currentTempOutput = document.querySelector('#current-temperature');
  const weatherImgOutput = document.querySelector('#weather-image');
  const descriptionOutput = document.querySelector('#description');
  const highOutput = document.querySelector('#high');
  const lowOutput = document.querySelector('#low');
  const scaleOutput = document.querySelector('.scale');
  const scaleToggle = document.querySelector('.scale-toggle');
  // checked is C, unchecked is F
  const getScale = () => scaleToggle.checked;

  const convertUnits = (kelvin) => {
    const celsius = kelvin - 273.15;
    const fahrenheit = 1.8 * celsius + 32;
    return { fahrenheit, celsius };
  };

  const data = {
    lat: json.coord.lat,
    lon: json.coord.lon,
    main: json.weather.main,
    description: json.weather.description,
    temp: json.main.temp,
    high: json.main.temp_max,
    low: json.main.temp_min,
    sunrise: json.sys.sunrise,
    sunset: json.sys.sunset,
    locationName: json.name,
  };

  // NOTE - when displaying location, either put CITY, STATE or CITY, COUNTRY
  locationOuput.innerHTML = `${query.name}, <small>${
    query.state ? query.state : query.country
  }</small>`;
  currentTempOutput.textContent = data.temp;
  weatherImgOutput.src =
    'https://i.pinimg.com/originals/ac/6e/06/ac6e06f77344e757114f4b3ac9fdd79c.gif'; // TEST
  descriptionOutput.textContent = data.description;
  highOutput.textContent = data.high;
  lowOutput.textContent = data.low;

  if (scaleToggle.checked) {
    console.log(scaleToggle.checked);
  }
};

// Change background and images based on data

// TODO - make cute lofi/anime theme
// TODO - foreground is window
// TODO - add list of possible weather conditions
// TODO - change to f or c based on location
// TODO - add autocomplete
// TODO - add direct stream from lofi girl
// TODO - add mini to-do list app
// TODO - add news blurb
// TODO - add pomodoro timer

export { setQuery, getInput };
