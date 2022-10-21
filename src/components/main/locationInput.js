import { getLocation, getWeather } from '../../functions/callOpenWeather';
import { displayData } from './weatherDisplay';

const locationSearch = (() => {
  const locationContainer = document.createElement('div');

  const form = (() => {
    const container = document.createElement('form');
    const input = document.createElement('input');
    const submit = document.createElement('button');
    let query;

    container.classList.add('location-input');
    input.placeholder = 'Enter a location';
    submit.textContent = 'Go';

    const getInput = () => input.value;
    const setInput = (text) => (input.value = text);
    const getQuery = () => query;
    const setQuery = (location) => (query = location);
    const setQueryAndInput = (location) => {
      setQuery(location);
      setInput(location.string);
    };

    container.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!getQuery()) return;
      // Call weather API
      getWeather(getQuery()).then((res) => {
        const data = {
          query,
          json: res,
        };
        displayData(data);
        setInput(''); // clear input after
      });
    });
    input.addEventListener('input', () => {
      if (!getInput()) return;
      // eslint-disable-next-line no-use-before-define
      autocomplete.start();
    });

    container.append(input, submit);

    return {
      container,
      getInput,
      getQuery,
      setQueryAndInput,
    };
  })();

  const autocompleteContainer = (() => {
    const container = document.createElement('div');
    container.classList.add('autocomplete-container');
    container.textContent = 'Autocomplete results here';
    return container;
  })();

  locationContainer.classList.add('location-search');
  locationContainer.append(form.container, autocompleteContainer);

  // TODO - add arrow functionality for selecting autocomplete
  const autocomplete = (() => {
    let timeout;

    // when timeout ends, show results
    const showResults = (list) => {
      const container = autocompleteContainer;
      // create ul for autocomplete list
      const ul = document.createElement('ul');
      ul.classList.add('autocomplete-list');

      const showContainer = () => (container.style.display = 'block');
      const hideContainer = () => (container.style.display = 'none');

      // remove old results and add new
      container.innerHTML = '';
      container.append(ul);

      // close box if no input
      if (!form.getInput()) {
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
          form.setQueryAndInput(itemWithString);
          hideContainer();
        });
      });
      return ul;
    };

    // on input start timeout
    const newTimeout = () => {
      setTimeout(() => {
        // make api call
        getLocation(form.getInput()).then((res) => showResults(res));
      }, 500);
    };

    // if more input, clear timeout
    const resetTimeout = () => clearTimeout(timeout);

    // start new timeout
    const restartTimeout = () => {
      resetTimeout();
      timeout = newTimeout();
    };

    return { start: restartTimeout };
  })();

  return {
    weather: form.weather,
    container: locationContainer,
  };
})();

export default locationSearch;
