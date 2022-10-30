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
      if (!getQuery()) return;
      // Call weather API
      weatherDisplay.clearOutputs();
      getWeather(getQuery()).then((res) => {
        displayData(res);
        setInput(''); // clear input after
      });
    };
    container.addEventListener('keypress', (e) => {
      if (e.key !== 'Enter') return;
      if (!getInput()) return;
      if (!getQuery()) setQuery(getInput());
      submitForm(e);
    });
    container.addEventListener('submit', (e) => {
      submitForm(e);
    });

    let selected = null;
    input.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp' && e.key !== 'Enter') return;
      if (autocompleteContainer.style.display !== 'block') {
        return console.log('nothing here');
      }
      if (e.key === 'Enter' && !selected) return;
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
        e.preventDefault();
        if (!selected) {
          // highlight last item
          select(list[list.length - 1]);
        } else if ((selected === list[0])) {
          unselect();
          input.focus();
        } else {
          select(selected.previousSibling);
        }
      }
      if (e.key === 'ArrowDown') {
        if (!selected) {
          // highlight first item
          select(list[0]);
        } else if (selected === list[list.length - 1]) {
          unselect();
          input.focus();
        } else {
          select(selected.nextSibling || null);
        }
      }
      if (e.key === 'Enter') {
        selected.click();
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
        li.addEventListener('keypress', (e) => {
          if (e.key !== 'Enter') return;
          console.log(item);
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
        // console.log('empty');
        // return;
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
