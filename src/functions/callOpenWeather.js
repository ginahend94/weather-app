const key = '2db6a02c5ebe70c03c3c00caa4802366';

const getLocation = async (input) => {
  // const url = `http://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=${key}`;

  const url = // TEST
    'https://raw.githubusercontent.com/ginahend94/weather-app/master/src/test/test.json';
  try {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  } catch (e) {
    console.error(e);
  }
};

const getWeather = async (data) => {
  if (!data?.lat || !data?.lon || !data) {
    return console.error('no input');
  }
  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${key}`;
  const url = // TEST
    'https://raw.githubusercontent.com/ginahend94/weather-app/master/src/test/test-weather.json'; // TEST
  // Process JSON data
  try {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  } catch (e) {
    console.error(e);
  }
};

// TEST
async function getLondon() {
  try {
    const response = await fetch('./test/test.json');
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

export { getLocation, getWeather };
