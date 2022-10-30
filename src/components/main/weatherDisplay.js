import loading from '../../assets/images/loading_circle.gif';
import background from '../background/background';
import { save, load } from '../../functions/helpers';
import clock from './clock';

// add client location option
const weatherDisplay = (() => {
  const container = document.createElement('div');
  const locationOuput = document.createElement('h2');
  const clockOutput = document.createElement('div');
  const currentTempOutput = document.createElement('h3');
  const scaleOutput = document.createElement('span');
  const weatherImgOutput = document.createElement('img');
  const descriptionOutput = document.createElement('p');
  const highOutput = document.createElement('span');
  const lowOutput = document.createElement('span');
  const hiLo = document.createElement('div');
  const unitSlider = (() => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    const slider = document.createElement('span');
    const celsius = document.createElement('span');
    const fahrenheit = document.createElement('span');

    label.classList.add('unit-slider');
    input.type = 'checkbox';
    slider.classList.add('slider');
    celsius.textContent = 'Celsius';
    celsius.classList.add('celsius');
    fahrenheit.textContent = 'Fahrenheit';
    fahrenheit.classList.add('fahrenheit');

    if (!load('units')) {
      save('units', input.checked);
    }
    const units = load('units');
    input.checked = units;

    const getScale = () => input.checked;
    const setScale = () => save('units', input.checked);

    input.addEventListener('input', setScale);

    slider.append(celsius, fahrenheit);
    label.append(input, slider);

    return {
      label,
      getScale,
    };
  })();
  const deg = '\u00B0';

  container.classList.add('weather-display');
  locationOuput.classList.add('location');
  currentTempOutput.classList.add('current-temp');
  scaleOutput.classList.add('scale');
  weatherImgOutput.classList.add('weather-img');
  descriptionOutput.classList.add('description');
  highOutput.classList.add('high');
  highOutput.title = 'High';
  lowOutput.classList.add('low');
  lowOutput.title = 'Low';
  hiLo.classList.add('high-low');

  const setLocationOutput = (text) => {
    locationOuput.textContent = text;
    locationOuput.title = text;
  };
  const clearClockOutput = () => (clockOutput.innerHTML = '');
  const setClockOutput = (countryCode) => {
    clearClockOutput();
    clockOutput.append(clock(countryCode));
  };
  const setCurrentTempOutput = (text) => (currentTempOutput.textContent = `${text}${deg}`);
  const setScaleOutput = (text) => (scaleOutput.textContent = text);
  const setWeatherImgSrc = (text) => (weatherImgOutput.src = text);
  const setWeatherImgAltText = (text) => (weatherImgOutput.alt = text);
  const setWeatherImgTitle = (text) => (weatherImgOutput.title = text);
  const setWeatherImgAltAndTitle = (text) => {
    setWeatherImgAltText(text);
    setWeatherImgTitle(text);
  };
  const setDescriptionOutput = (text) => (descriptionOutput.textContent = text.toLowerCase());
  const setHighOutput = (text) => (highOutput.textContent = `${text}${deg}`);
  const setLowOutput = (text) => (lowOutput.textContent = `${text}${deg}`);

  const clearOutputs = () => {
    setLocationOutput('');
    clearClockOutput();
    setCurrentTempOutput('');
    setScaleOutput('');
    setWeatherImgSrc(loading);
    setWeatherImgAltAndTitle('Loading...');
    setDescriptionOutput('Loading...');
    setHighOutput('');
    setLowOutput('');
  };

  setLocationOutput('Nashville, TN');
  setCurrentTempOutput('60');
  setScaleOutput('F');
  setWeatherImgSrc('http://openweathermap.org/img/wn/01d@2x.png');
  setWeatherImgAltAndTitle('Clear');
  setDescriptionOutput('Clear skies');
  setHighOutput('75');
  setLowOutput('55');

  hiLo.append(highOutput, ' / ', lowOutput);

  container.append(
    locationOuput,
    clockOutput,
    currentTempOutput,
    hiLo,
    weatherImgOutput,
    descriptionOutput,
    unitSlider.label,
  );

  return {
    container,
    setLocationOutput,
    setClockOutput,
    setCurrentTempOutput,
    setScaleOutput,
    setWeatherImgSrc,
    setWeatherImgAltAndTitle,
    setDescriptionOutput,
    setHighOutput,
    setLowOutput,
    clearOutputs,
    unitSlider,
  };
})();

// Display data
const displayData = (response) => {
  const data = {
    lat: response.weather.coord.lat,
    lon: response.weather.coord.lon,
    main: response.weather.weather[0].main,
    description: response.weather.weather[0].description,
    temp: response.weather.main.temp,
    high: response.weather.main.temp_max,
    low: response.weather.main.temp_min,
    sunrise: response.weather.sys.sunrise,
    sunset: response.weather.sys.sunset,
    locationName: response.weather.name,
    icon: response.weather.weather[0].icon,
    city: response.location.address?.city || null,
    municipality: response.location.municipality || null,
    suburb: response.location.address?.suburb || null,
    town: response.location.address?.town || null,
    village: response.location.address?.village || null,
    state: response.location.address?.state || null,
    country: response.location.address?.country,
    timezone: response.weather.timezone,
  };

  // checked is F, unchecked is C
  const scale = () => (weatherDisplay.unitSlider.getScale() ? 'f' : 'c');

  // convert in app to limit API calls
  const convertUnits = (kelvin) => {
    const c = Math.round(kelvin - 273.15);
    const f = Math.round(1.8 * c + 32);
    return {
      f,
      c,
    };
  };

  const convertedTemp = (() => convertUnits(data.temp))();
  const convertedHigh = (() => convertUnits(data.high))();
  const convertedLow = (() => convertUnits(data.low))();

  const locationString = (() => {
    let a;
    let b;

    if (data.city) {
      a = `${data.city}, `;
    } else if (data.village) {
      a = `${data.village}, `;
    } else if (data.town) {
      a = `${data.town}, `;
    } else if (data.suburb) {
      a = `${data.suburb}, `;
    } else if (data.municipality) {
      a = `${data.municipality}, `;
    } else {
      a = '';
    }

    if (data.country === 'United States' || data.state) {
      if (!a) return `${data.state}, ${data.country}`;
      b = data.state;
    } else if (data.region) {
      b = data.region;
    } else {
      b = data.country || data.locationName || '(no location name available)';
    }
    return `${a}${b}`;
  })();

  const showWeather = () => {
    const units = scale();
    weatherDisplay.setLocationOutput(locationString);
    if (typeof data.timezone === 'number') weatherDisplay.setClockOutput(data.timezone);
    weatherDisplay.setCurrentTempOutput(convertedTemp[units]);
    weatherDisplay.setScaleOutput(units);
    weatherDisplay.setWeatherImgSrc(
      `http://openweathermap.org/img/wn/${data.icon}@2x.png`
    );
    weatherDisplay.setWeatherImgAltAndTitle(data.main);
    weatherDisplay.setDescriptionOutput(data.description);
    weatherDisplay.setHighOutput(convertedHigh[units]);
    weatherDisplay.setLowOutput(convertedLow[units]);
    background.changeBackground(background.images[data.icon]);
  };

  weatherDisplay.unitSlider.label.addEventListener('click', () => {
    showWeather();
    save('units', weatherDisplay.unitSlider.getScale());
  });

  showWeather();
};

export default weatherDisplay;
export { displayData };
