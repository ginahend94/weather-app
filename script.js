// Default to Nashville

// Grab DOM elements and query
const locationInputForm = document.querySelector('.location-input');
const locationInput = locationInputForm.querySelector('input');
const locationSubmit = document.querySelector('#submit');
//NOTE - when displaying location, either put CITY, STATE or CITY, COUNTRY

let query;
const getInput = () => locationInput.value;
const setQuery = (location) => {
  setQueryText(location.string);
  query = location;
};
const setQueryText = (text) => (locationInput.value = text);
locationSubmit.addEventListener('click', () => {
  getWeather(query?.lat, query?.lon).then((data) => console.log(data));
});

locationInput.addEventListener('input', () => {
  autocomplete.start();
});
// TODO - add arrow functionality for selecting autocomplete

const autocomplete = (() => {
  input = getInput();
  let timeout;
  // on input start timeout
  const newTimeout = () =>
    setTimeout(() => {
      // make api call
      fakeCall(getLondon).then((res) => showResults(res)); // ANCHOR - TEST
    }, 500);
  // if more input, clear timeout
  const resetTimeout = () => clearTimeout(timeout);
  // start new timeout
  const restartTimeout = () => {
    resetTimeout();
    timeout = newTimeout();
  };

  // when timeout ends, show results
  const showResults = (list) => {
    // grab container and ul for autocomplete list
    const container = document.querySelector('.autocomplete-container');
    const ul = container.querySelector('.autocomplete-list');
    const showContainer = () => (container.style.display = 'block');
    const hideContainer = () => (container.style.display = 'none');
    // remove old results
    ul.innerHTML = '';

    // close box if no input
    if (!getInput()) {
      return hideContainer();
    }

    // otherwise, show box if closed
    showContainer();

    list.forEach((item) => {
      // readable string of location name
      const string = `${item.name},${
        item.state ? ' ' + item.state + ',' : ''
      } ${item.country}`;
      const itemWithString = {
        ...item,
        string,
      };

      // create li element for each item
      const li = document.createElement('li');
      ul.append(li);
      li.classList.add('autocomplete-item');
      li.textContent = string;
      li.dataset.lat = item.lat;
      li.dataset.lon = item.lon;
      li.addEventListener('click', () => {
        setQuery(itemWithString);
        hideContainer();
      });
    });
  };

  return { start: restartTimeout };
})();

// Call API
const getWeather = async (lat, lon) => {
  if (!lat || !lon) {
    console.log('no input');
    return;
  }
  const key = '2db6a02c5ebe70c03c3c00caa4802366';
  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
  const url = 'test-weather.json'; // ANCHOR - TEST
  // Process JSON data
  const res = await fetch(url);
  const json = await res.json();
  return json;
};
const convertUnits = (kelvin) => {
  const celsius = kelvin - 273.15;
  const fahrenheit = 1.8 * celsius + 32;
  return { fahrenheit, celsius };
};
// Display data
const displayData = (json) => {
  const locationOuput = document.querySelector('#location');
  const currentTempOutput = document.querySelector('#current-temperature');
  const weatherImgOutput = document.querySelector('#weather-image');
  const descriptionOutput = document.querySelector('#description');
  const highOutput = document.querySelector('#high');
  const lowOutput = document.querySelector('#low');
  const scaleToggle = document.querySelector('.scale');
  // checked is C, unchecked is F
  const getScale = () => scaleToggle.checked;

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
  }

  locationOuput.textContent = data.
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

// ANCHOR - TEST
async function getLondon() {
  try {
    const response = await fetch('test.json');
    const json = await response.json();
    // console.log(json);
    return json;
  } catch (e) {
    console.error(e);
  }
}

const fakeCall = (fn) => {
  const num = Math.floor(Math.random() * 3000) + 500;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fn());
    }, num);
  });
};
