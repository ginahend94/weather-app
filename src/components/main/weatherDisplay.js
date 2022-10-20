import header from "../header/header";

const weatherDisplay = (() => {
  const container = document.createElement('div');
  container.textContent = 'Weather module';
  const locationOuput = document.createElement('h2');
  const currentTempOutput = document.createElement('h3');
  const scaleOutput = document.createElement('span');
  const weatherImgOutput = document.createElement('img');
  const descriptionOutput = document.createElement('p');
  const highOutput = document.createElement('span');
  const lowOutput = document.createElement('span');

  const setLocationOutput = (text) => (locationOuput.textContent = text);
  const setCurrentTempOutput = (text) => (currentTempOutput.textContent = text);
  const setScaleOutput = (text) => (scaleOutput.textContent = text);
  const setWeatherImgSrc = (text) => (weatherImgOutput.src = text);
  const setWeatherImgAltText = (text) => (weatherImgOutput.alt = text);
  const setWeatherImgTitle = (text) => (weatherImgOutput.title = text);
  const setWeatherImgAltAndTitle = (text) => {
    setWeatherImgAltText(text);
    setWeatherImgTitle(text);
  };
  const setDescriptionOutput = (text) => (descriptionOutput.textContent = text);
  const setHighOutput = (text) => (highOutput.textContent = text);
  const setLowOutput = (text) => (lowOutput.textContent = text);

  container.append(
    locationOuput,
    currentTempOutput,
    weatherImgOutput,
    descriptionOutput,
    highOutput,
    lowOutput,
    scaleOutput,
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
    main: response.json.weather.main,
    description: response.json.weather.description,
    temp: response.json.main.temp,
    high: response.json.main.temp_max,
    low: response.json.main.temp_min,
    sunrise: response.json.sys.sunrise,
    sunset: response.json.sys.sunset,
    locationName: response.json.name,
  };

  // checked is C, unchecked is F
  const scale = header.getScale() ? 'c' : 'f';

  const convertUnits = (kelvin) => {
    const c = kelvin - 273.15;
    const f = 1.8 * c + 32;
    return { f, c };
  };

  const convertedTemp = (() => convertUnits(data.temp))();
  const convertedHigh = (() => convertUnits(data.high))();
  const convertedLow = (() => convertUnits(data.low))();

  // NOTE - when displaying location, either put CITY, STATE or CITY, COUNTRY
  weatherDisplay.setLocationOutput(`${response.query.name}, ${
    response.query.state ? response.query.state : response.query.country
  }`);
  weatherDisplay.setCurrentTempOutput(convertedTemp[scale]);
  weatherDisplay.setScaleOutput(scale.toUpperCase());
  weatherDisplay.setWeatherImgSrceatherImgOutput('https://i.pinimg.com/originals/ac/6e/06/ac6e06f77344e757114f4b3ac9fdd79c.gif'); // TEST
  weatherDisplay.setDescriptionOutput(data.description);
  weatherDisplay.setHighOutput(convertedHigh[scale]);
  weatherDisplay.setLowOutput(convertedLow[scale]);

  console.log(data);
};

export default weatherDisplay;
export { displayData };
