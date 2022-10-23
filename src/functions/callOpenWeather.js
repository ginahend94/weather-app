import { getLocationName } from './callOpenStreetMap';
import weatherDisplay, { displayData } from '../components/main/weatherDisplay';
import confirmModal from '../components/dialog';

const key = '2db6a02c5ebe70c03c3c00caa4802366';

// const getLocation = async (input) => {
//   // const url = `http://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=${key}&limit=10`;

//   const url = // TEST
//     'https://raw.githubusercontent.com/ginahend94/weather-app/master/src/test/test.json';
//   try {
//     const res = await fetch(url);
//     const json = await res.json();
//     // console.log(json);
//     return json;
//   } catch (e) {
//     console.error(e);
//   }
// };

const getWeather = async (data) => {
  if (!data?.lat || !data?.lon || !data) {
    return console.error('no input');
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${key}`;
  // const url = // TEST
  //    'https://raw.githubusercontent.com/ginahend94/weather-app/master/src/test/test-weather.json'; // TEST
  weatherDisplay.clearOutputs();
  // Process JSON data
  try {
    const res = await fetch(url);
    const json = await res.json();
    const location = await getLocationName({
      lat: json.coord.lat,
      lon: json.coord.lon,
    });
    return {
      location,
      weather: json,
    };
  } catch (e) {
    console.error(e);
  }
};

const initialWeather = (pos) => {
  getWeather({
    lat: pos.coords?.latitude || pos.lat,
    lon: pos.coords?.longitude || pos.lon,
  }).then((data) => displayData(data));
};
const defaultWeather = () => {
  initialWeather({
    lat: 36.174465, // nashville, tn
    lon: -86.76796,
  });
};
const getUserLocation = () => {
  navigator.geolocation.getCurrentPosition(
    (pos) => initialWeather(pos),
    async () => {
      await confirmModal({
        title: 'Location needed for weather data',
        message: 'Your location is needed to get local weather information. Please refresh the page to allow access.\n(This is optional.)',
        yes: 'OK',
        hideNo: true,
      });
    }
  );
};

export {
  getWeather,
  defaultWeather,
  getUserLocation,
};
