import { getLocation } from './callOpenWeather';
import { getInput, setQuery } from '../index';

// TODO - add arrow functionality for selecting autocomplete

let timeout;

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
    const string = `${item.name},${item.state ? ` ${item.state},` : ''} ${
      item.country
    }`;
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
  return list;
};
// on input start timeout
const newTimeout = () => {
  setTimeout(() => {
    // make api call
    getLocation(getInput()).then((res) => showResults(res));
  }, 500);
};
// if more input, clear timeout
const resetTimeout = () => clearTimeout(timeout);
// start new timeout
const restartTimeout = () => {
  resetTimeout();
  timeout = newTimeout();
};

export default restartTimeout;
