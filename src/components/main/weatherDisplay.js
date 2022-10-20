export default (() => {
  const container = document.createElement('output');
  container.textContent = 'Weather module';
  const locationOuput = document.createElement('div');
  const currentTempOutput = document.createElement('div');
  const weatherImgOutput = document.createElement('div');
  const descriptionOutput = document.createElement('div');
  const highOutput = document.createElement('div');
  const lowOutput = document.createElement('div');
  const scaleOutput = document.createElement('div');

  container.append(
    locationOuput,
    currentTempOutput,
    weatherImgOutput,
    descriptionOutput,
    highOutput,
    lowOutput,
    scaleOutput,
  );

  return container;
})();

// Display data
const displayData = (response) => {
  // checked is C, unchecked is F
  const getScale = () => scaleToggle.checked;

  const convertUnits = (kelvin) => {
    const celsius = kelvin - 273.15;
    const fahrenheit = 1.8 * celsius + 32;
    return { fahrenheit, celsius };
  };

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

  // NOTE - when displaying location, either put CITY, STATE or CITY, COUNTRY
  locationOuput.innerHTML = `${response.query.name}, <small>${
    response.query.state ? response.query.state : response.query.country
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
  console.log(data);
};

export { displayData };
