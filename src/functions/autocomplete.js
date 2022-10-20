import { getLocation } from './callOpenWeather';
import locationInput from '../components/main/locationInput';

// TODO - add arrow functionality for selecting autocomplete
const autocomplete = () => {
  let timeout;

  // when timeout ends, show results
  const showResults = (list) => {
    // create container and ul for autocomplete list
    const container = locationInput.autocompleteResponse;
    const ul = document.createElement('ul');

    container.classList.add('.autocomplete-container');
    ul.classList.add('.autocomplete-list');

    const showContainer = () => (container.style.display = 'block');
    const hideContainer = () => (container.style.display = 'none');

    // remove old results
    ul.innerHTML = '';
    // close box if no input
    if (!locationInput.getInput()) {
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
        locationInput.setQuery(itemWithString);
        hideContainer();
      });
    });
    return list;
  };

  // on input start timeout
  const newTimeout = () => {
    setTimeout(() => {
      // make api call
      getLocation(locationInput.getInput()).then((res) => showResults(res));
    }, 500);
  };

  // if more input, clear timeout
  const resetTimeout = () => clearTimeout(timeout);

  // start new timeout
  const restartTimeout = () => {
    resetTimeout();
    timeout = newTimeout();
  };

  const container = () => {};
};
export default restartTimeout;
