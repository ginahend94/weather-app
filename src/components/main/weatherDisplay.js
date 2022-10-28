import loading from '../../assets/images/loading_circle.gif';
import background from '../background/background';
import load from '../../functions/load';
import save from '../../functions/save';

// add client location option
const weatherDisplay = (() => {
  const container = document.createElement('div');
  const locationOuput = document.createElement('h2');
  const currentTempOutput = document.createElement('h3');
  const scaleOutput = document.createElement('span');
  const weatherImgOutput = document.createElement('img');
  const descriptionOutput = document.createElement('p');
  const highOutput = document.createElement('span');
  const lowOutput = document.createElement('span');
  const hiLo = document.createElement('div');
  // TODO - persist units on refresh
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

    if (load('units')) {
      console.log(load('units'));
      input.checked = load('units');
    } else save('units', input.checked);

    const getScale = () => input.checked;

    input.addEventListener('input', getScale);

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
    currentTempOutput,
    hiLo,
    weatherImgOutput,
    descriptionOutput,
    unitSlider.label
  );

  return {
    container,
    setLocationOutput,
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
    city: response.location.address.city || null,
    municipality: response.location.municipality || null,
    suburb: response.location.address.suburb || null,
    town: response.location.address.town || null,
    village: response.location.address.village || null,
    state: response.location.address.state || null,
    country: response.location.address.country,
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

    if (data.suburb) {
      a = `${data.suburb}, `;
    } else if (data.village) {
      a = `${data.village}, `;
    } else if (data.town) {
      a = `${data.town}, `;
    } else if (data.city) {
      a = `${data.city}, `;
    } else if (data.municipality) {
      a = `${data.municipality}, `;
    } else {
      a = '';
    }

    if (data.country === 'United States' || data.state) {
      b = data.state;
    } else if (data.region) {
      b = data.region;
    } else {
      b = data.country;
    }
    return `${a}${b}`;
  })();

  const showWeather = () => {
    const units = scale();
    weatherDisplay.setLocationOutput(locationString);
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
