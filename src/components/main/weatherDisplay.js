import header from '../header/header';
// TODO - set up call for nashville, TN
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
  const deg = '\u00B0';

  container.classList.add('weather-display');
  locationOuput.classList.add('location');
  currentTempOutput.classList.add('current-temp');
  scaleOutput.classList.add('scale');
  weatherImgOutput.classList.add('weather-img');
  descriptionOutput.classList.add('description');
  highOutput.classList.add('high');
  lowOutput.classList.add('low');
  hiLo.classList.add('high-low');

  const setLocationOutput = (text) => (locationOuput.textContent = text);
  const setCurrentTempOutput = (text) => (currentTempOutput.textContent = `${text}${deg}`);
  const setScaleOutput = (text) => (scaleOutput.textContent = text);
  const setWeatherImgSrc = (text) => (weatherImgOutput.src = text);
  const setWeatherImgAltText = (text) => (weatherImgOutput.alt = text);
  const setWeatherImgTitle = (text) => (weatherImgOutput.title = text);
  const setWeatherImgAltAndTitle = (text) => {
    setWeatherImgAltText(text);
    setWeatherImgTitle(text);
  };
  const setDescriptionOutput = (text) => (descriptionOutput.textContent = text);
  const setHighOutput = (text) => (highOutput.textContent = `${text}${deg}`);
  const setLowOutput = (text) => (lowOutput.textContent = `${text}${deg}`);

  setLocationOutput('Nashville, TN');
  setCurrentTempOutput('60');
  setScaleOutput('F');
  setWeatherImgSrc('http://openweathermap.org/img/wn/01d@2x.png');
  setWeatherImgAltAndTitle('Clear');
  setDescriptionOutput('Clear skies');
  setHighOutput('75');
  setLowOutput('55');

  currentTempOutput.append(scaleOutput);
  hiLo.append(highOutput, ' / ', lowOutput);

  container.append(
    locationOuput,
    currentTempOutput,
    weatherImgOutput,
    descriptionOutput,
    hiLo,
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
  };
})();

// Display data
const displayData = (response) => {
  const data = {
    lat: response.json.coord.lat,
    lon: response.json.coord.lon,
    main: response.json.weather[0].main,
    description: response.json.weather[0].description,
    temp: response.json.main.temp,
    high: response.json.main.temp_max,
    low: response.json.main.temp_min,
    sunrise: response.json.sys.sunrise,
    sunset: response.json.sys.sunset,
    locationName: response.json.name,
    icon: response.json.weather[0].icon,
  };
  console.log(data);

  // checked is C, unchecked is F
  const scale = header.getScale() ? 'c' : 'f';

  // convert to limit API calls
  const convertUnits = (kelvin) => {
    const c = Math.round(kelvin - 273.15);
    const f = Math.round(1.8 * c + 32);
    return { f, c };
  };

  const convertedTemp = (() => convertUnits(data.temp))();
  const convertedHigh = (() => convertUnits(data.high))();
  const convertedLow = (() => convertUnits(data.low))();

  // NOTE - when displaying location, either put CITY, STATE or CITY, COUNTRY
  weatherDisplay.setLocationOutput(
    `${response.query.name}, ${
      response.query.state ? response.query.state : response.query.country
    }`
  );
  weatherDisplay.setCurrentTempOutput(convertedTemp[scale]);
  weatherDisplay.setScaleOutput(scale.toUpperCase());
  weatherDisplay.setWeatherImgSrc(
    `http://openweathermap.org/img/wn/${data.icon}@2x.png`
  ); // TEST
  weatherDisplay.setWeatherImgAltAndTitle(data.main);
  weatherDisplay.setDescriptionOutput(data.description);
  weatherDisplay.setHighOutput(convertedHigh[scale]);
  weatherDisplay.setLowOutput(convertedLow[scale]);
};

export default weatherDisplay;
export { displayData };
