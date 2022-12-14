import { getUserLocation, getWeather } from '../../functions/callOpenWeather';
import { getLocation } from '../../functions/callOpenStreetMap';
import weatherDisplay, { displayData } from './weatherDisplay';
import { hideElement } from '../../functions/helpers';
import './loading.css';

const locationSearch = (() => {
  const locationContainer = document.createElement('div');

  const autocompleteContainer = (() => {
    const container = document.createElement('div');
    container.classList.add('autocomplete-container');
    return container;
  })();

  const showContainer = () => (autocompleteContainer.style.display = 'block');
  const hideContainer = () => (autocompleteContainer.style.display = 'none');

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
      setInput(location.display_name || location);
    };

    const submitForm = (e) => {
      hideContainer();
      e.preventDefault();
      if (!getQuery()) return; // cancel if there's no query
      // Call weather API
      weatherDisplay.clearOutputs();
      getWeather(getQuery()).then((res) => {
        displayData(res);
        setInput(''); // clear input after
      });
    };
    container.addEventListener('keypress', (e) => {
      if (e.key !== 'Enter') return; // cancel if not trying to submit
      if (!getInput()) return; // cancel if input is empty
      if (!getQuery()) setQuery(getInput()); // set query to what was typed
      submitForm(e);
    });
    container.addEventListener('submit', (e) => {
      submitForm(e);
    });

    let selected = null;
    input.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp' && e.key !== 'Enter') return;
      if (autocompleteContainer.style.display !== 'block') return; // cancel if no autocomplete options
      if (e.key === 'Enter' && !selected) return; // cancel if nothing is selected
      const list = [...autocompleteContainer.querySelector('ul').children];
      const unselect = () => {
        list.forEach((a) => a.classList.remove('selected'));
        selected = null;
      };
      const select = (item) => {
        unselect();
        item?.classList.add('selected');
        selected = item;
      };
      if (e.key === 'ArrowUp') {
        e.preventDefault(); // stop cursor from going to beginning of input
        if (!selected) { // nothing is selected
          select(list[list.length - 1]); // select last item
        } else if ((selected === list[0])) { // first item is selected
          unselect();
          input.focus();
        } else { // any other item is selected
          select(selected.previousSibling || null); // if no previous sibling, unselect
        }
      }
      if (e.key === 'ArrowDown') {
        if (!selected) {
          select(list[0]);
        } else if (selected === list[list.length - 1]) {
          unselect();
          input.focus();
        } else {
          select(selected.nextSibling || null);
        }
      }
      if (e.key === 'Enter') {
        selected.click(); // choose selected item
        unselect();
      }
    });
    input.addEventListener('input', () => {
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
  const useMyLocation = (() => {
    const button = document.createElement('button');
    button.classList.add('use-location');
    button.textContent = 'Use my location';
    button.addEventListener('click', getUserLocation);
    return button;
  })();

  locationContainer.classList.add('location-search');
  locationContainer.append(
    form.container,
    autocompleteContainer,
    useMyLocation
  );

  // TODO - add arrow functionality for selecting autocomplete
  const autocomplete = (() => {
    let timeout;

    // when timeout ends, show results
    const showResults = (list) => {
      const container = autocompleteContainer;
      // create ul for autocomplete list
      const ul = document.createElement('ul');
      ul.classList.add('autocomplete-list', 'TEST');
      hideElement(ul, '.autocomplete-list');

      // remove old results and add new
      container.innerHTML = '';
      container.append(ul);

      // close box if no input
      if (!form.getInput().trim()) {
        return hideContainer();
      }

      // otherwise, show box if closed
      showContainer();

      const listPlaceholder = (text) => {
        const noResults = document.createElement('li');
        noResults.classList.add('no-hover', 'autocomplete-item');
        noResults.append(text);
        ul.append(noResults);
      };
      const loadingText = (() => {
        const text = document.createElement('span');
        text.classList.add('loading-indicator');
        text.innerHTML =
          'Loading<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>';
        return text;
      })();

      if (list === 'loading') {
        return listPlaceholder(loadingText);
      }

      if (!list.length) {
        listPlaceholder('No locations found.');
      }
      list.forEach((item) => {
        // create li element for each item
        const li = document.createElement('li');
        ul.append(li);
        li.classList.add('autocomplete-item');
        li.textContent = item.display_name;
        li.dataset.lat = item.lat;
        li.dataset.lon = item.lon;
        li.addEventListener('click', () => {
          form.setQueryAndInput(item);
          hideContainer();
        });
      });
      return {
        hideContainer,
      };
    };

    // on input start timeout
    const newTimeout = () => {
      showResults('loading');
      if (!form.getInput()) {
        return showResults();
      }
      return setTimeout(() => {
        // make api call
        getLocation(form.getInput()).then((res) => showResults(res));
      }, 600);
    };

    // if more input, clear timeout
    const resetTimeout = () => {
      if (!timeout) return;
      clearTimeout(timeout);
      timeout = null;
    };

    // start new timeout
    const restartTimeout = () => {
      resetTimeout();
      timeout = newTimeout();
    };

    return {
      hideContainer,
      start: restartTimeout,
    };
  })();

  return {
    weather: form.weather,
    container: locationContainer,
  };
})();

export default locationSearch;
