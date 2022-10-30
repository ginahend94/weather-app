/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/background/background.js":
/*!*************************************************!*\
  !*** ./src/components/background/background.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {
  const container = document.createElement('div');
  container.classList.add('background');
  const imgObj = {};
  const importAll = r => {
    const keys = r.keys();
    const urls = r.keys().map(r);
    return urls.forEach((url, i) => {
      const key = keys[i].replace(/.\/|.jpg/g, '');
      imgObj[key] = url;
    });
  };
  importAll(
  // import all background images
  __webpack_require__("./src/assets/images/weather-photos sync \\.jpg$"));
  const changeBackground = url => {
    container.style.backgroundImage = `url(${url})`;
  };
  changeBackground(imgObj['03d']);
  return {
    container,
    changeBackground,
    images: imgObj
  };
})());

/***/ }),

/***/ "./src/components/dialog.js":
/*!**********************************!*\
  !*** ./src/components/dialog.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dialog_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog.css */ "./src/components/dialog.css");

const confirmModal = async options => {
  const box = (() => {
    const container = document.createElement('dialog');
    container.classList.add('custom-modal');
    const title = document.createElement('h2');
    title.textContent = (options === null || options === void 0 ? void 0 : options.title) || 'Confirm...';
    const message = document.createElement('div');
    message.textContent = (options === null || options === void 0 ? void 0 : options.message) || '';
    const menu = document.createElement('menu');
    const yes = document.createElement('button');
    yes.textContent = (options === null || options === void 0 ? void 0 : options.yes) || 'Yes';
    const no = document.createElement('button');
    no.textContent = (options === null || options === void 0 ? void 0 : options.no) || 'No';
    menu.append(yes);
    if (!(options !== null && options !== void 0 && options.hideNo)) menu.append(no);
    container.append(title, message, menu);
    document.body.append(container);
    return {
      container,
      yes,
      no
    };
  })();
  box.container.showModal();
  const hideBox = () => {
    box.container.close();
  };
  return new Promise(resolve => {
    box.yes.addEventListener('click', () => {
      resolve(true);
      hideBox();
    });
    box.no.addEventListener('click', () => {
      resolve(false);
      hideBox();
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (confirmModal);

/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions/helpers */ "./src/functions/helpers.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {
  const container = document.createElement('footer');
  const credit = document.createElement('span');
  const github = (0,_functions_helpers__WEBPACK_IMPORTED_MODULE_0__.createLink)({
    text: (0,_functions_helpers__WEBPACK_IMPORTED_MODULE_0__.icon)('mdi:github'),
    href: 'https://github.com/ginahend94',
    title: 'GitHub'
  });
  const web = (0,_functions_helpers__WEBPACK_IMPORTED_MODULE_0__.createLink)({
    text: (0,_functions_helpers__WEBPACK_IMPORTED_MODULE_0__.icon)('mdi:web'),
    href: 'https://ginahenderson.me',
    title: 'Personal website'
  });
  credit.innerHTML = 'Created by <a href="https://ginahenderson.me" target="_blank">Gina Henderson</a>.';
  container.append(credit, github, web);
  return container;
})());

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_clock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main/clock */ "./src/components/main/clock.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {
  const container = document.createElement('header');
  const title = document.createElement('h1');
  title.textContent = 'weather';
  container.append(title, (0,_main_clock__WEBPACK_IMPORTED_MODULE_0__["default"])());
  return {
    container
  };
})());

/***/ }),

/***/ "./src/components/main/clock.js":
/*!**************************************!*\
  !*** ./src/components/main/clock.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  let timezone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  const container = document.createElement('div');
  container.classList.add('clock');
  const time = document.createElement('span');
  container.append(time);
  const convertTimezone = offset => {
    const userOffset = new Date().getTimezoneOffset() * 60;
    return new Date((offset + userOffset + Date.now() / 1000) * 1000);
  };
  const updateClock = () => {
    const today = new Date();
    if (typeof timezone === 'number') {
      // allows 0 to be passed in
      time.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(convertTimezone(timezone), 'p').toLowerCase();
    } else {
      time.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(today, 'p').toLowerCase();
    }
  };
  updateClock();
  setInterval(updateClock, 10);
  return container;
});

/***/ }),

/***/ "./src/components/main/locationInput.js":
/*!**********************************************!*\
  !*** ./src/components/main/locationInput.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_callOpenWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions/callOpenWeather */ "./src/functions/callOpenWeather.js");
/* harmony import */ var _functions_callOpenStreetMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functions/callOpenStreetMap */ "./src/functions/callOpenStreetMap.js");
/* harmony import */ var _weatherDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherDisplay */ "./src/components/main/weatherDisplay.js");
/* harmony import */ var _functions_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions/helpers */ "./src/functions/helpers.js");
/* harmony import */ var _loading_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading.css */ "./src/components/main/loading.css");





const locationSearch = (() => {
  const locationContainer = document.createElement('div');
  const autocompleteContainer = (() => {
    const container = document.createElement('div');
    container.classList.add('autocomplete-container');
    return container;
  })();
  const showContainer = () => autocompleteContainer.style.display = 'block';
  const hideContainer = () => autocompleteContainer.style.display = 'none';
  const form = (() => {
    const container = document.createElement('form');
    const input = document.createElement('input');
    const submit = document.createElement('button');
    let query;
    container.classList.add('location-input');
    input.placeholder = 'Enter a location';
    submit.textContent = 'Go';
    const getInput = () => input.value;
    const setInput = text => input.value = text;
    const getQuery = () => query;
    const setQuery = location => query = location;
    const setQueryAndInput = location => {
      setQuery(location);
      setInput(location.display_name || location);
    };
    const submitForm = e => {
      hideContainer();
      e.preventDefault();
      if (!getQuery()) return; // cancel if there's no query
      // Call weather API
      _weatherDisplay__WEBPACK_IMPORTED_MODULE_2__["default"].clearOutputs();
      (0,_functions_callOpenWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather)(getQuery()).then(res => {
        (0,_weatherDisplay__WEBPACK_IMPORTED_MODULE_2__.displayData)(res);
        setInput(''); // clear input after
      });
    };

    container.addEventListener('keypress', e => {
      if (e.key !== 'Enter') return; // cancel if not trying to submit
      if (!getInput()) return; // cancel if input is empty
      if (!getQuery()) setQuery(getInput()); // set query to what was typed
      submitForm(e);
    });
    container.addEventListener('submit', e => {
      submitForm(e);
    });
    let selected = null;
    input.addEventListener('keydown', e => {
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp' && e.key !== 'Enter') return;
      if (autocompleteContainer.style.display !== 'block') return; // cancel if no autocomplete options
      if (e.key === 'Enter' && !selected) return; // cancel if nothing is selected
      const list = [...autocompleteContainer.querySelector('ul').children];
      const unselect = () => {
        list.forEach(a => a.classList.remove('selected'));
        selected = null;
      };
      const select = item => {
        unselect();
        item === null || item === void 0 ? void 0 : item.classList.add('selected');
        selected = item;
      };
      if (e.key === 'ArrowUp') {
        e.preventDefault(); // stop cursor from going to beginning of input
        if (!selected) {
          // nothing is selected
          select(list[list.length - 1]); // select last item
        } else if (selected === list[0]) {
          // first item is selected
          unselect();
          input.focus();
        } else {
          // any other item is selected
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
      setQueryAndInput
    };
  })();
  const useMyLocation = (() => {
    const button = document.createElement('button');
    button.classList.add('use-location');
    button.textContent = 'Use my location';
    button.addEventListener('click', _functions_callOpenWeather__WEBPACK_IMPORTED_MODULE_0__.getUserLocation);
    return button;
  })();
  locationContainer.classList.add('location-search');
  locationContainer.append(form.container, autocompleteContainer, useMyLocation);

  // TODO - add arrow functionality for selecting autocomplete
  const autocomplete = (() => {
    let timeout;

    // when timeout ends, show results
    const showResults = list => {
      const container = autocompleteContainer;
      // create ul for autocomplete list
      const ul = document.createElement('ul');
      ul.classList.add('autocomplete-list', 'TEST');
      (0,_functions_helpers__WEBPACK_IMPORTED_MODULE_3__.hideElement)(ul, '.autocomplete-list');

      // remove old results and add new
      container.innerHTML = '';
      container.append(ul);

      // close box if no input
      if (!form.getInput().trim()) {
        return hideContainer();
      }

      // otherwise, show box if closed
      showContainer();
      const listPlaceholder = text => {
        const noResults = document.createElement('li');
        noResults.classList.add('no-hover', 'autocomplete-item');
        noResults.append(text);
        ul.append(noResults);
      };
      const loadingText = (() => {
        const text = document.createElement('span');
        text.classList.add('loading-indicator');
        text.innerHTML = 'Loading<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>';
        return text;
      })();
      if (list === 'loading') {
        return listPlaceholder(loadingText);
      }
      if (!list.length) {
        listPlaceholder('No locations found.');
      }
      list.forEach(item => {
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
        hideContainer
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
        (0,_functions_callOpenStreetMap__WEBPACK_IMPORTED_MODULE_1__.getLocation)(form.getInput()).then(res => showResults(res));
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
      start: restartTimeout
    };
  })();
  return {
    weather: form.weather,
    container: locationContainer
  };
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locationSearch);

/***/ }),

/***/ "./src/components/main/main.js":
/*!*************************************!*\
  !*** ./src/components/main/main.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weatherDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherDisplay */ "./src/components/main/weatherDisplay.js");
/* harmony import */ var _locationInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locationInput */ "./src/components/main/locationInput.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {
  const container = document.createElement('main');
  container.append(_locationInput__WEBPACK_IMPORTED_MODULE_1__["default"].container, _weatherDisplay__WEBPACK_IMPORTED_MODULE_0__["default"].container);
  return container;
})());

/***/ }),

/***/ "./src/components/main/weatherDisplay.js":
/*!***********************************************!*\
  !*** ./src/components/main/weatherDisplay.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "displayData": () => (/* binding */ displayData)
/* harmony export */ });
/* harmony import */ var _assets_images_loading_circle_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/loading_circle.gif */ "./src/assets/images/loading_circle.gif");
/* harmony import */ var _background_background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../background/background */ "./src/components/background/background.js");
/* harmony import */ var _functions_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/helpers */ "./src/functions/helpers.js");
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clock */ "./src/components/main/clock.js");




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
    if (!(0,_functions_helpers__WEBPACK_IMPORTED_MODULE_2__.load)('units')) {
      (0,_functions_helpers__WEBPACK_IMPORTED_MODULE_2__.save)('units', input.checked);
    }
    const units = (0,_functions_helpers__WEBPACK_IMPORTED_MODULE_2__.load)('units');
    input.checked = units;
    const getScale = () => input.checked;
    const setScale = () => (0,_functions_helpers__WEBPACK_IMPORTED_MODULE_2__.save)('units', input.checked);
    input.addEventListener('input', setScale);
    slider.append(celsius, fahrenheit);
    label.append(input, slider);
    return {
      label,
      getScale
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
  const setLocationOutput = text => {
    locationOuput.textContent = text;
    locationOuput.title = text;
  };
  const clearClockOutput = () => clockOutput.innerHTML = '';
  const setClockOutput = countryCode => {
    clearClockOutput();
    clockOutput.append((0,_clock__WEBPACK_IMPORTED_MODULE_3__["default"])(countryCode));
  };
  const setCurrentTempOutput = text => currentTempOutput.textContent = `${text}${deg}`;
  const setScaleOutput = text => scaleOutput.textContent = text;
  const setWeatherImgSrc = text => weatherImgOutput.src = text;
  const setWeatherImgAltText = text => weatherImgOutput.alt = text;
  const setWeatherImgTitle = text => weatherImgOutput.title = text;
  const setWeatherImgAltAndTitle = text => {
    setWeatherImgAltText(text);
    setWeatherImgTitle(text);
  };
  const setDescriptionOutput = text => descriptionOutput.textContent = text.toLowerCase();
  const setHighOutput = text => highOutput.textContent = `${text}${deg}`;
  const setLowOutput = text => lowOutput.textContent = `${text}${deg}`;
  const clearOutputs = () => {
    setLocationOutput('');
    clearClockOutput();
    setCurrentTempOutput('');
    setScaleOutput('');
    setWeatherImgSrc(_assets_images_loading_circle_gif__WEBPACK_IMPORTED_MODULE_0__);
    setWeatherImgAltAndTitle('Loading...');
    setDescriptionOutput('Loading...');
    setHighOutput('');
    setLowOutput('');
  };
  setLocationOutput('Anytown, United States');
  setClockOutput(-18000);
  setCurrentTempOutput('60');
  setScaleOutput('F');
  setWeatherImgSrc('http://openweathermap.org/img/wn/01d@2x.png');
  setWeatherImgAltAndTitle('Clear');
  setDescriptionOutput('Clear skies');
  setHighOutput('75');
  setLowOutput('55');
  hiLo.append(highOutput, ' / ', lowOutput);
  container.append(locationOuput, clockOutput, currentTempOutput, hiLo, weatherImgOutput, descriptionOutput, unitSlider.label);
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
    unitSlider
  };
})();

// Display data
const displayData = response => {
  var _response$location$ad, _response$location$ad2, _response$location$ad3, _response$location$ad4, _response$location$ad5, _response$location$ad6;
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
    city: ((_response$location$ad = response.location.address) === null || _response$location$ad === void 0 ? void 0 : _response$location$ad.city) || null,
    municipality: response.location.municipality || null,
    suburb: ((_response$location$ad2 = response.location.address) === null || _response$location$ad2 === void 0 ? void 0 : _response$location$ad2.suburb) || null,
    town: ((_response$location$ad3 = response.location.address) === null || _response$location$ad3 === void 0 ? void 0 : _response$location$ad3.town) || null,
    village: ((_response$location$ad4 = response.location.address) === null || _response$location$ad4 === void 0 ? void 0 : _response$location$ad4.village) || null,
    state: ((_response$location$ad5 = response.location.address) === null || _response$location$ad5 === void 0 ? void 0 : _response$location$ad5.state) || null,
    country: (_response$location$ad6 = response.location.address) === null || _response$location$ad6 === void 0 ? void 0 : _response$location$ad6.country,
    timezone: response.weather.timezone
  };

  // checked is F, unchecked is C
  const scale = () => weatherDisplay.unitSlider.getScale() ? 'f' : 'c';

  // convert in app to limit API calls
  const convertUnits = kelvin => {
    const c = Math.round(kelvin - 273.15);
    const f = Math.round(1.8 * c + 32);
    return {
      f,
      c
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
    weatherDisplay.setWeatherImgSrc(`http://openweathermap.org/img/wn/${data.icon}@2x.png`);
    weatherDisplay.setWeatherImgAltAndTitle(data.main);
    weatherDisplay.setDescriptionOutput(data.description);
    weatherDisplay.setHighOutput(convertedHigh[units]);
    weatherDisplay.setLowOutput(convertedLow[units]);
    _background_background__WEBPACK_IMPORTED_MODULE_1__["default"].changeBackground(_background_background__WEBPACK_IMPORTED_MODULE_1__["default"].images[data.icon]);
  };
  weatherDisplay.unitSlider.label.addEventListener('click', () => {
    showWeather();
    (0,_functions_helpers__WEBPACK_IMPORTED_MODULE_2__.save)('units', weatherDisplay.unitSlider.getScale());
  });
  showWeather();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherDisplay);


/***/ }),

/***/ "./src/components/render.js":
/*!**********************************!*\
  !*** ./src/components/render.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _background_background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background/background */ "./src/components/background/background.js");
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header */ "./src/components/header/header.js");
/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main */ "./src/components/main/main.js");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer */ "./src/components/footer/footer.js");
/* harmony import */ var _functions_callOpenWeather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/callOpenWeather */ "./src/functions/callOpenWeather.js");
/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! normalize-css/normalize.css */ "./node_modules/normalize-css/normalize.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style.css */ "./src/style.css");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,_functions_callOpenWeather__WEBPACK_IMPORTED_MODULE_4__.defaultWeather)();
  document.body.append(_background_background__WEBPACK_IMPORTED_MODULE_0__["default"].container, _header_header__WEBPACK_IMPORTED_MODULE_1__["default"].container, _main_main__WEBPACK_IMPORTED_MODULE_2__["default"], _footer_footer__WEBPACK_IMPORTED_MODULE_3__["default"]);
});

/***/ }),

/***/ "./src/functions/callOpenStreetMap.js":
/*!********************************************!*\
  !*** ./src/functions/callOpenStreetMap.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocation": () => (/* binding */ getLocation),
/* harmony export */   "getLocationName": () => (/* binding */ getLocationName)
/* harmony export */ });
const getLocationName = async coords => {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lon}`;
  const res = await fetch(url);
  const json = await res.json();
  return json;
};
const getLocation = async input => {
  const url = `https://nominatim.openstreetmap.org/search?q=${input}&format=json&limit=5`;
  try {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  } catch (e) {
    throw new Error(e);
  }
};


/***/ }),

/***/ "./src/functions/callOpenWeather.js":
/*!******************************************!*\
  !*** ./src/functions/callOpenWeather.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultWeather": () => (/* binding */ defaultWeather),
/* harmony export */   "getUserLocation": () => (/* binding */ getUserLocation),
/* harmony export */   "getWeather": () => (/* binding */ getWeather)
/* harmony export */ });
/* harmony import */ var _callOpenStreetMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./callOpenStreetMap */ "./src/functions/callOpenStreetMap.js");
/* harmony import */ var _components_main_weatherDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/main/weatherDisplay */ "./src/components/main/weatherDisplay.js");
/* harmony import */ var _components_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/dialog */ "./src/components/dialog.js");



const key = '2db6a02c5ebe70c03c3c00caa4802366';
const getWeather = async data => {
  let url;
  if (typeof data === 'string') {
    if (!data.trim()) {
      return 0;
    }
    url = `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${key}`;
  } else if (!(data !== null && data !== void 0 && data.lat) || !(data !== null && data !== void 0 && data.lon) || !data) {
    return 0;
  } else {
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${key}`;
  }
  // Process JSON data
  try {
    const res = await fetch(url);
    if (!res.ok) {
      (0,_components_dialog__WEBPACK_IMPORTED_MODULE_2__["default"])({
        title: `${res.status} Error`,
        message: res.statusText,
        hideNo: true,
        yes: 'OK'
      });
    }
    const json = await res.json();
    const location = await (0,_callOpenStreetMap__WEBPACK_IMPORTED_MODULE_0__.getLocationName)({
      lat: json.coord.lat,
      lon: json.coord.lon
    });
    return {
      location,
      weather: json
    };
  } catch (e) {
    throw new Error(e);
  }
};
const initialWeather = pos => {
  var _pos$coords, _pos$coords2;
  getWeather({
    lat: ((_pos$coords = pos.coords) === null || _pos$coords === void 0 ? void 0 : _pos$coords.latitude) || pos.lat,
    lon: ((_pos$coords2 = pos.coords) === null || _pos$coords2 === void 0 ? void 0 : _pos$coords2.longitude) || pos.lon
  }).then(data => (0,_components_main_weatherDisplay__WEBPACK_IMPORTED_MODULE_1__.displayData)(data));
};
const defaultWeather = () => {
  initialWeather({
    lat: 36.174465,
    // nashville, tn
    lon: -86.76796
  });
};
const getUserLocation = () => {
  navigator.geolocation.getCurrentPosition(pos => initialWeather(pos), async () => {
    await (0,_components_dialog__WEBPACK_IMPORTED_MODULE_2__["default"])({
      title: 'Location needed for weather data',
      message: 'Your location is needed to get local weather information. Please refresh the page to allow access.\n(This is optional.)',
      yes: 'OK',
      hideNo: true
    });
  });
};


/***/ }),

/***/ "./src/functions/helpers.js":
/*!**********************************!*\
  !*** ./src/functions/helpers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLink": () => (/* binding */ createLink),
/* harmony export */   "hideElement": () => (/* binding */ hideElement),
/* harmony export */   "icon": () => (/* binding */ icon),
/* harmony export */   "load": () => (/* binding */ load),
/* harmony export */   "save": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var iconify_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iconify-icon */ "./node_modules/iconify-icon/dist/iconify-icon.mjs");
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */

const hideElement = (element, selector) => {
  const hide = e => {
    if (!e.target.closest(selector)) {
      element.style.display = 'none';
      removeListener();
    }
  };
  const removeListener = () => {
    document.body.removeEventListener('click', hide);
  };
  document.body.addEventListener('click', hide);
};
const icon = name => {
  const iconifyIcon = document.createElement('iconify-icon');
  iconifyIcon.setAttribute('icon', name);
  return iconifyIcon;
};
const createLink = opts => {
  const a = document.createElement('a');
  a.append(opts.text);
  a.setAttribute('href', opts.href);
  a.target = '_blank';
  if (opts.title) a.title = opts.title;
  return a;
};
const load = name => {
  if (localStorage.getItem(name) == null) {
    // console.log('You haven\'t created this value yet.')
    return false;
  }
  return JSON.parse(localStorage.getItem(name));
};
const save = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize-css/normalize.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/normalize-css/normalize.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v2.1.3 | MIT License | git.io/normalize */\n\n/* ==========================================================================\n   HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined in IE 8/9.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection,\nsummary {\n    display: block;\n}\n\n/**\n * Correct `inline-block` display not defined in IE 8/9.\n */\n\naudio,\ncanvas,\nvideo {\n    display: inline-block;\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9.\n * Hide the `template` element in IE, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n    display: none;\n}\n\n/* ==========================================================================\n   Base\n   ========================================================================== */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n    font-family: sans-serif; /* 1 */\n    -ms-text-size-adjust: 100%; /* 2 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n    margin: 0;\n}\n\n/* ==========================================================================\n   Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n    background: transparent;\n}\n\n/**\n * Address `outline` inconsistency between Chrome and other browsers.\n */\n\na:focus {\n    outline: thin dotted;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n    outline: 0;\n}\n\n/* ==========================================================================\n   Typography\n   ========================================================================== */\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari 5, and Chrome.\n */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9, Safari 5, and Chrome.\n */\n\nabbr[title] {\n    border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari 5, and Chrome.\n */\n\nb,\nstrong {\n    font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari 5 and Chrome.\n */\n\ndfn {\n    font-style: italic;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n    height: 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n    background: #ff0;\n    color: #000;\n}\n\n/**\n * Correct font family set oddly in Safari 5 and Chrome.\n */\n\ncode,\nkbd,\npre,\nsamp {\n    font-family: monospace, serif;\n    font-size: 1em;\n}\n\n/**\n * Improve readability of pre-formatted text in all browsers.\n */\n\npre {\n    white-space: pre-wrap;\n}\n\n/**\n * Set consistent quote types.\n */\n\nq {\n    quotes: \"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\";\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n    font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsup {\n    top: -0.5em;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\n/* ==========================================================================\n   Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9.\n */\n\nimg {\n    border: 0;\n}\n\n/**\n * Correct overflow displayed oddly in IE 9.\n */\n\nsvg:not(:root) {\n    overflow: hidden;\n}\n\n/* ==========================================================================\n   Figures\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari 5.\n */\n\nfigure {\n    margin: 0;\n}\n\n/* ==========================================================================\n   Forms\n   ========================================================================== */\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n    border: 0; /* 1 */\n    padding: 0; /* 2 */\n}\n\n/**\n * 1. Correct font family not being inherited in all browsers.\n * 2. Correct font size not being inherited in all browsers.\n * 3. Address margins set differently in Firefox 4+, Safari 5, and Chrome.\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 2 */\n    margin: 0; /* 3 */\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\nbutton,\ninput {\n    line-height: normal;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 8+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n    -webkit-appearance: button; /* 2 */\n    cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n    cursor: default;\n}\n\n/**\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box; /* 2 */\n    box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\n/**\n * 1. Remove default vertical scrollbar in IE 8/9.\n * 2. Improve readability and alignment in all browsers.\n */\n\ntextarea {\n    overflow: auto; /* 1 */\n    vertical-align: top; /* 2 */\n}\n\n/* ==========================================================================\n   Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/normalize-css/normalize.css"],"names":[],"mappings":"AAAA,2DAA2D;;AAE3D;;+EAE+E;;AAE/E;;EAEE;;AAEF;;;;;;;;;;;;IAYI,cAAc;AAClB;;AAEA;;EAEE;;AAEF;;;IAGI,qBAAqB;AACzB;;AAEA;;;EAGE;;AAEF;IACI,aAAa;IACb,SAAS;AACb;;AAEA;;;EAGE;;AAEF;;IAEI,aAAa;AACjB;;AAEA;;+EAE+E;;AAE/E;;;;EAIE;;AAEF;IACI,uBAAuB,EAAE,MAAM;IAC/B,0BAA0B,EAAE,MAAM;IAClC,8BAA8B,EAAE,MAAM;AAC1C;;AAEA;;EAEE;;AAEF;IACI,SAAS;AACb;;AAEA;;+EAE+E;;AAE/E;;EAEE;;AAEF;IACI,uBAAuB;AAC3B;;AAEA;;EAEE;;AAEF;IACI,oBAAoB;AACxB;;AAEA;;EAEE;;AAEF;;IAEI,UAAU;AACd;;AAEA;;+EAE+E;;AAE/E;;;EAGE;;AAEF;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA;;EAEE;;AAEF;IACI,yBAAyB;AAC7B;;AAEA;;EAEE;;AAEF;;IAEI,iBAAiB;AACrB;;AAEA;;EAEE;;AAEF;IACI,kBAAkB;AACtB;;AAEA;;EAEE;;AAEF;IACI,4BAA4B;IAC5B,uBAAuB;IACvB,SAAS;AACb;;AAEA;;EAEE;;AAEF;IACI,gBAAgB;IAChB,WAAW;AACf;;AAEA;;EAEE;;AAEF;;;;IAII,6BAA6B;IAC7B,cAAc;AAClB;;AAEA;;EAEE;;AAEF;IACI,qBAAqB;AACzB;;AAEA;;EAEE;;AAEF;IACI,uCAAuC;AAC3C;;AAEA;;EAEE;;AAEF;IACI,cAAc;AAClB;;AAEA;;EAEE;;AAEF;;IAEI,cAAc;IACd,cAAc;IACd,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;AAEA;;+EAE+E;;AAE/E;;EAEE;;AAEF;IACI,SAAS;AACb;;AAEA;;EAEE;;AAEF;IACI,gBAAgB;AACpB;;AAEA;;+EAE+E;;AAE/E;;EAEE;;AAEF;IACI,SAAS;AACb;;AAEA;;+EAE+E;;AAE/E;;EAEE;;AAEF;IACI,yBAAyB;IACzB,aAAa;IACb,8BAA8B;AAClC;;AAEA;;;EAGE;;AAEF;IACI,SAAS,EAAE,MAAM;IACjB,UAAU,EAAE,MAAM;AACtB;;AAEA;;;;EAIE;;AAEF;;;;IAII,oBAAoB,EAAE,MAAM;IAC5B,eAAe,EAAE,MAAM;IACvB,SAAS,EAAE,MAAM;AACrB;;AAEA;;;EAGE;;AAEF;;IAEI,mBAAmB;AACvB;;AAEA;;;;;EAKE;;AAEF;;IAEI,oBAAoB;AACxB;;AAEA;;;;;;EAME;;AAEF;;;;IAII,0BAA0B,EAAE,MAAM;IAClC,eAAe,EAAE,MAAM;AAC3B;;AAEA;;EAEE;;AAEF;;IAEI,eAAe;AACnB;;AAEA;;;EAGE;;AAEF;;IAEI,sBAAsB,EAAE,MAAM;IAC9B,UAAU,EAAE,MAAM;AACtB;;AAEA;;;;EAIE;;AAEF;IACI,6BAA6B,EAAE,MAAM;IACrC,4BAA4B;IAC5B,+BAA+B,EAAE,MAAM;IACvC,uBAAuB;AAC3B;;AAEA;;;EAGE;;AAEF;;IAEI,wBAAwB;AAC5B;;AAEA;;EAEE;;AAEF;;IAEI,SAAS;IACT,UAAU;AACd;;AAEA;;;EAGE;;AAEF;IACI,cAAc,EAAE,MAAM;IACtB,mBAAmB,EAAE,MAAM;AAC/B;;AAEA;;+EAE+E;;AAE/E;;EAEE;;AAEF;IACI,yBAAyB;IACzB,iBAAiB;AACrB","sourcesContent":["/*! normalize.css v2.1.3 | MIT License | git.io/normalize */\n\n/* ==========================================================================\n   HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined in IE 8/9.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection,\nsummary {\n    display: block;\n}\n\n/**\n * Correct `inline-block` display not defined in IE 8/9.\n */\n\naudio,\ncanvas,\nvideo {\n    display: inline-block;\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9.\n * Hide the `template` element in IE, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n    display: none;\n}\n\n/* ==========================================================================\n   Base\n   ========================================================================== */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n    font-family: sans-serif; /* 1 */\n    -ms-text-size-adjust: 100%; /* 2 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n    margin: 0;\n}\n\n/* ==========================================================================\n   Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n    background: transparent;\n}\n\n/**\n * Address `outline` inconsistency between Chrome and other browsers.\n */\n\na:focus {\n    outline: thin dotted;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n    outline: 0;\n}\n\n/* ==========================================================================\n   Typography\n   ========================================================================== */\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari 5, and Chrome.\n */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9, Safari 5, and Chrome.\n */\n\nabbr[title] {\n    border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari 5, and Chrome.\n */\n\nb,\nstrong {\n    font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari 5 and Chrome.\n */\n\ndfn {\n    font-style: italic;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n    height: 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n    background: #ff0;\n    color: #000;\n}\n\n/**\n * Correct font family set oddly in Safari 5 and Chrome.\n */\n\ncode,\nkbd,\npre,\nsamp {\n    font-family: monospace, serif;\n    font-size: 1em;\n}\n\n/**\n * Improve readability of pre-formatted text in all browsers.\n */\n\npre {\n    white-space: pre-wrap;\n}\n\n/**\n * Set consistent quote types.\n */\n\nq {\n    quotes: \"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\";\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n    font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsup {\n    top: -0.5em;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\n/* ==========================================================================\n   Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9.\n */\n\nimg {\n    border: 0;\n}\n\n/**\n * Correct overflow displayed oddly in IE 9.\n */\n\nsvg:not(:root) {\n    overflow: hidden;\n}\n\n/* ==========================================================================\n   Figures\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari 5.\n */\n\nfigure {\n    margin: 0;\n}\n\n/* ==========================================================================\n   Forms\n   ========================================================================== */\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n    border: 0; /* 1 */\n    padding: 0; /* 2 */\n}\n\n/**\n * 1. Correct font family not being inherited in all browsers.\n * 2. Correct font size not being inherited in all browsers.\n * 3. Address margins set differently in Firefox 4+, Safari 5, and Chrome.\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 2 */\n    margin: 0; /* 3 */\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\nbutton,\ninput {\n    line-height: normal;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 8+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n    -webkit-appearance: button; /* 2 */\n    cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n    cursor: default;\n}\n\n/**\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box; /* 2 */\n    box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\n/**\n * 1. Remove default vertical scrollbar in IE 8/9.\n * 2. Improve readability and alignment in all browsers.\n */\n\ntextarea {\n    overflow: auto; /* 1 */\n    vertical-align: top; /* 2 */\n}\n\n/* ==========================================================================\n   Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/dialog.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/dialog.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".custom-modal {\r\n  background-color:white;\r\n  border:solid 1px;\r\n  padding:20px;\r\n  width:500px;\r\n  /* position:absolute; */\r\n  margin:auto;\r\n  /* z-index:99999999; */\r\n}\r\n\r\n.custom-modal menu {\r\n  float: right;\r\n}\r\n\r\n.custom-modal:open {\r\n  display:block;\r\n}", "",{"version":3,"sources":["webpack://./src/components/dialog.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf","sourcesContent":[".custom-modal {\r\n  background-color:white;\r\n  border:solid 1px;\r\n  padding:20px;\r\n  width:500px;\r\n  /* position:absolute; */\r\n  margin:auto;\r\n  /* z-index:99999999; */\r\n}\r\n\r\n.custom-modal menu {\r\n  float: right;\r\n}\r\n\r\n.custom-modal:open {\r\n  display:block;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/main/loading.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/main/loading.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".loading-indicator .dot {\r\n  font-weight: bold;\r\n  animation: blink 2s infinite;\r\n  display: inline-block;\r\n  margin:0 2px;\r\n  opacity:0;\r\n}\r\n\r\n.loading-indicator .dot:nth-child(2) {\r\n  animation-delay: 0.333s;\r\n}\r\n\r\n.loading-indicator .dot:last-child {\r\n  animation-delay: 0.667s;\r\n}\r\n\r\n@keyframes blink {\r\n  0% {\r\n      opacity: 0;\r\n  }\r\n\r\n  50% {\r\n      opacity:1;\r\n  }\r\n\r\n  100% {\r\n      opacity: 0;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://./src/components/main/loading.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,4BAA4B;EAC5B,qBAAqB;EACrB,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE;MACI,UAAU;EACd;;EAEA;MACI,SAAS;EACb;;EAEA;MACI,UAAU;EACd;AACF","sourcesContent":[".loading-indicator .dot {\r\n  font-weight: bold;\r\n  animation: blink 2s infinite;\r\n  display: inline-block;\r\n  margin:0 2px;\r\n  opacity:0;\r\n}\r\n\r\n.loading-indicator .dot:nth-child(2) {\r\n  animation-delay: 0.333s;\r\n}\r\n\r\n.loading-indicator .dot:last-child {\r\n  animation-delay: 0.667s;\r\n}\r\n\r\n@keyframes blink {\r\n  0% {\r\n      opacity: 0;\r\n  }\r\n\r\n  50% {\r\n      opacity:1;\r\n  }\r\n\r\n  100% {\r\n      opacity: 0;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Quentin.otf */ "./src/assets/Quentin.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/ModernSans-Light.otf */ "./src/assets/ModernSans-Light.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: 'Quentin';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n@font-face {\r\n  font-family: 'Modern Sans';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  font-weight: light;\r\n}\r\n\r\n:root {\r\n  --heading: 'Quentin';\r\n  --body: 'Modern Sans';\r\n}\r\n\r\n*, *::after, *::before {\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-family: var(--body);\r\n  min-height: 100vh;\r\n  width: 100%;\r\n}\r\n\r\n.background {\r\n  background-color: #DAEBF2;\r\n  background-size: cover;\r\n  position: fixed;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100vw;\r\n  min-height: 100vh;\r\n  z-index: -1;\r\n}\r\n\r\nh1, h2, h3 {\r\n  margin:0;\r\n}\r\n\r\na {\r\n  color:inherit;\r\n  opacity:.6;\r\n  transition: .2s;\r\n}\r\n\r\na:hover {\r\n  opacity: 1;\r\n}\r\n\r\nheader {\r\n  background-color: rgba(255, 255, 255,.2);\r\n  box-shadow: 0 1px 5px rgba(0,0,0,.2);\r\n  backdrop-filter: blur(5px);\r\n  margin: 0;\r\n  width: 100%;\r\n  padding: 20px 40px;\r\n  font-family:var(--heading);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\nheader .clock {\r\n  font-family: var(--body);\r\n}\r\n\r\nmain {\r\n  flex:auto;\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: start;\r\n  padding: 20px;\r\n  margin:20px;\r\n  position: relative;\r\n  background-color: rgba(255,255,255,.2);\r\n  box-shadow: 1px 1px 10px rgba(0,0,0,.1);\r\n  backdrop-filter: blur(5px);\r\n  border-radius: 5px;\r\n  max-width:1000px;\r\n}\r\n\r\n.location-input {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-self: start;\r\n}\r\n.location-input input {\r\n  border:none;\r\n  padding:4px 5px;\r\n  background-color: rgba(255, 255, 255,.95);\r\n  font-size: 1.2rem;\r\n  height:35px;\r\n  border:solid 1px transparent;\r\n  transition: .1s;\r\n  flex:auto;\r\n}\r\n.location-input input:focus {\r\n  border:solid 1px #D0D0D7;\r\n  outline:none;\r\n}\r\nbutton {\r\n  border:none;\r\n  height: 35px;\r\n  min-width:50px;\r\n  padding:5px;\r\n  transition: .1s;\r\n}\r\n\r\nbutton.use-location {\r\n  margin:10px;\r\n  padding:5px 10px;\r\n}\r\n\r\n.autocomplete-container {\r\n  box-shadow: 1px 1px 10px #0000001a;\r\n  border-radius: 0 0 5px 5px;\r\n  overflow: auto;\r\n  position: absolute;\r\n  display: none;\r\n}\r\n.autocomplete-list {\r\n  margin: 0;\r\n  padding: 0;\r\n  text-align: left;\r\n  background-color: rgba(255, 255, 255,.95);\r\n  list-style: none;\r\n  z-index:9999999;\r\n  width: 100%;\r\n}\r\n.autocomplete-item {\r\n  padding: 5px 10px;\r\n  margin: 0;\r\n  transition: .2s;\r\n}\r\n.autocomplete-item:not(.no-hover):hover, .autocomplete-item:not(.no-hover).selected {\r\n  background-color: rgba(0,0,0,.08);\r\n  cursor: pointer;\r\n}\r\n\r\n.clock {\r\n  padding:20px;\r\n  font-size:1.5rem;\r\n}\r\n\r\n.weather-display {\r\n  flex:1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.weather-display .location {\r\n  font-style: italic;\r\n  font-size:2rem;\r\n  text-transform: lowercase;\r\n}\r\n.current-temp {\r\n  font-size:4rem;\r\n}\r\n.weather-img {\r\n  width:100px;\r\n}\r\n\r\n.unit-slider {\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n\r\n.unit-slider input {\r\n  position: absolute;\r\n  width: 0;\r\n  height: 0;\r\n  opacity: 0;\r\n}\r\n\r\n.unit-slider .slider {\r\n  padding: 5px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width:150px;\r\n  height: 27px;\r\n}\r\n\r\n.unit-slider .slider::before {\r\n  content: '';\r\n  position: absolute;\r\n  left:-2px;\r\n  top:0;\r\n  display: block;\r\n  width: 60px;\r\n  transition: .2s;\r\n  border: solid 1px rgba(0,0, 0, .2);\r\n  height: 100%;\r\n  filter: drop-shadow(2px 2px 2px rgba(0,0,0,1));\r\n}\r\n.unit-slider input:checked + .slider::before {\r\n  width:90px;\r\n  transform: translateX(65px);\r\n}\r\n.slider .celsius {\r\n  opacity: 1;\r\n  transition: .2s;\r\n}\r\n.slider .fahrenheit {\r\n  opacity: .2;\r\n  transition: .2s;\r\n}\r\n.unit-slider input:checked + .slider .celsius {\r\n  opacity: .2;\r\n}\r\n.unit-slider input:checked + .slider .fahrenheit {\r\n  opacity: 1;\r\n}\r\n\r\ndialog.custom-modal {\r\n  border: none;\r\n  background-color: rgba(255, 255, 255,.75);\r\n  border-radius: 5px;\r\n  backdrop-filter: blur(5px);\r\n}\r\n.custom-modal button {\r\n  border: solid 1px rgba(0,0, 0, .2);\r\n}\r\n\r\nfooter {\r\n  width: 100%;\r\n  margin:0;\r\n  padding: 40px 30px;\r\n  background-color: rgba(255,255,255, .2);\r\n  backdrop-filter: blur(5px);\r\n  display: flex;\r\n  gap:10px;\r\n  align-items: center;\r\n}\r\n\r\nfooter iconify-icon {\r\n  font-size: 1.5rem;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: 'Quentin';\r\n  src: url('./assets/Quentin.otf');\r\n}\r\n@font-face {\r\n  font-family: 'Modern Sans';\r\n  src: url('./assets/ModernSans-Light.otf');\r\n  font-weight: light;\r\n}\r\n\r\n:root {\r\n  --heading: 'Quentin';\r\n  --body: 'Modern Sans';\r\n}\r\n\r\n*, *::after, *::before {\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-family: var(--body);\r\n  min-height: 100vh;\r\n  width: 100%;\r\n}\r\n\r\n.background {\r\n  background-color: #DAEBF2;\r\n  background-size: cover;\r\n  position: fixed;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100vw;\r\n  min-height: 100vh;\r\n  z-index: -1;\r\n}\r\n\r\nh1, h2, h3 {\r\n  margin:0;\r\n}\r\n\r\na {\r\n  color:inherit;\r\n  opacity:.6;\r\n  transition: .2s;\r\n}\r\n\r\na:hover {\r\n  opacity: 1;\r\n}\r\n\r\nheader {\r\n  background-color: rgba(255, 255, 255,.2);\r\n  box-shadow: 0 1px 5px rgba(0,0,0,.2);\r\n  backdrop-filter: blur(5px);\r\n  margin: 0;\r\n  width: 100%;\r\n  padding: 20px 40px;\r\n  font-family:var(--heading);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\nheader .clock {\r\n  font-family: var(--body);\r\n}\r\n\r\nmain {\r\n  flex:auto;\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: start;\r\n  padding: 20px;\r\n  margin:20px;\r\n  position: relative;\r\n  background-color: rgba(255,255,255,.2);\r\n  box-shadow: 1px 1px 10px rgba(0,0,0,.1);\r\n  backdrop-filter: blur(5px);\r\n  border-radius: 5px;\r\n  max-width:1000px;\r\n}\r\n\r\n.location-input {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-self: start;\r\n}\r\n.location-input input {\r\n  border:none;\r\n  padding:4px 5px;\r\n  background-color: rgba(255, 255, 255,.95);\r\n  font-size: 1.2rem;\r\n  height:35px;\r\n  border:solid 1px transparent;\r\n  transition: .1s;\r\n  flex:auto;\r\n}\r\n.location-input input:focus {\r\n  border:solid 1px #D0D0D7;\r\n  outline:none;\r\n}\r\nbutton {\r\n  border:none;\r\n  height: 35px;\r\n  min-width:50px;\r\n  padding:5px;\r\n  transition: .1s;\r\n}\r\n\r\nbutton.use-location {\r\n  margin:10px;\r\n  padding:5px 10px;\r\n}\r\n\r\n.autocomplete-container {\r\n  box-shadow: 1px 1px 10px #0000001a;\r\n  border-radius: 0 0 5px 5px;\r\n  overflow: auto;\r\n  position: absolute;\r\n  display: none;\r\n}\r\n.autocomplete-list {\r\n  margin: 0;\r\n  padding: 0;\r\n  text-align: left;\r\n  background-color: rgba(255, 255, 255,.95);\r\n  list-style: none;\r\n  z-index:9999999;\r\n  width: 100%;\r\n}\r\n.autocomplete-item {\r\n  padding: 5px 10px;\r\n  margin: 0;\r\n  transition: .2s;\r\n}\r\n.autocomplete-item:not(.no-hover):hover, .autocomplete-item:not(.no-hover).selected {\r\n  background-color: rgba(0,0,0,.08);\r\n  cursor: pointer;\r\n}\r\n\r\n.clock {\r\n  padding:20px;\r\n  font-size:1.5rem;\r\n}\r\n\r\n.weather-display {\r\n  flex:1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.weather-display .location {\r\n  font-style: italic;\r\n  font-size:2rem;\r\n  text-transform: lowercase;\r\n}\r\n.current-temp {\r\n  font-size:4rem;\r\n}\r\n.weather-img {\r\n  width:100px;\r\n}\r\n\r\n.unit-slider {\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n\r\n.unit-slider input {\r\n  position: absolute;\r\n  width: 0;\r\n  height: 0;\r\n  opacity: 0;\r\n}\r\n\r\n.unit-slider .slider {\r\n  padding: 5px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width:150px;\r\n  height: 27px;\r\n}\r\n\r\n.unit-slider .slider::before {\r\n  content: '';\r\n  position: absolute;\r\n  left:-2px;\r\n  top:0;\r\n  display: block;\r\n  width: 60px;\r\n  transition: .2s;\r\n  border: solid 1px rgba(0,0, 0, .2);\r\n  height: 100%;\r\n  filter: drop-shadow(2px 2px 2px rgba(0,0,0,1));\r\n}\r\n.unit-slider input:checked + .slider::before {\r\n  width:90px;\r\n  transform: translateX(65px);\r\n}\r\n.slider .celsius {\r\n  opacity: 1;\r\n  transition: .2s;\r\n}\r\n.slider .fahrenheit {\r\n  opacity: .2;\r\n  transition: .2s;\r\n}\r\n.unit-slider input:checked + .slider .celsius {\r\n  opacity: .2;\r\n}\r\n.unit-slider input:checked + .slider .fahrenheit {\r\n  opacity: 1;\r\n}\r\n\r\ndialog.custom-modal {\r\n  border: none;\r\n  background-color: rgba(255, 255, 255,.75);\r\n  border-radius: 5px;\r\n  backdrop-filter: blur(5px);\r\n}\r\n.custom-modal button {\r\n  border: solid 1px rgba(0,0, 0, .2);\r\n}\r\n\r\nfooter {\r\n  width: 100%;\r\n  margin:0;\r\n  padding: 40px 30px;\r\n  background-color: rgba(255,255,255, .2);\r\n  backdrop-filter: blur(5px);\r\n  display: flex;\r\n  gap:10px;\r\n  align-items: center;\r\n}\r\n\r\nfooter iconify-icon {\r\n  font-size: 1.5rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */
var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};

var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};

var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];

    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || _typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./node_modules/normalize-css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize-css/normalize.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize-css/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/dialog.css":
/*!***********************************!*\
  !*** ./src/components/dialog.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./dialog.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/dialog.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/main/loading.css":
/*!*****************************************!*\
  !*** ./src/components/main/loading.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_loading_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./loading.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/main/loading.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_loading_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_loading_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_loading_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_loading_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/images/weather-photos sync \\.jpg$":
/*!********************************************************************!*\
  !*** ./src/assets/images/weather-photos/ sync nonrecursive \.jpg$ ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./01d.jpg": "./src/assets/images/weather-photos/01d.jpg",
	"./01n.jpg": "./src/assets/images/weather-photos/01n.jpg",
	"./02d.jpg": "./src/assets/images/weather-photos/02d.jpg",
	"./02n.jpg": "./src/assets/images/weather-photos/02n.jpg",
	"./03d.jpg": "./src/assets/images/weather-photos/03d.jpg",
	"./03n.jpg": "./src/assets/images/weather-photos/03n.jpg",
	"./04d.jpg": "./src/assets/images/weather-photos/04d.jpg",
	"./04n.jpg": "./src/assets/images/weather-photos/04n.jpg",
	"./09d.jpg": "./src/assets/images/weather-photos/09d.jpg",
	"./09n.jpg": "./src/assets/images/weather-photos/09n.jpg",
	"./10d.jpg": "./src/assets/images/weather-photos/10d.jpg",
	"./10n.jpg": "./src/assets/images/weather-photos/10n.jpg",
	"./11d.jpg": "./src/assets/images/weather-photos/11d.jpg",
	"./11n.jpg": "./src/assets/images/weather-photos/11n.jpg",
	"./13d.jpg": "./src/assets/images/weather-photos/13d.jpg",
	"./13n.jpg": "./src/assets/images/weather-photos/13n.jpg",
	"./50d.jpg": "./src/assets/images/weather-photos/50d.jpg",
	"./50n.jpg": "./src/assets/images/weather-photos/50n.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images/weather-photos sync \\.jpg$";

/***/ }),

/***/ "./src/assets/ModernSans-Light.otf":
/*!*****************************************!*\
  !*** ./src/assets/ModernSans-Light.otf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bebb6d2d7adb7481905a.otf";

/***/ }),

/***/ "./src/assets/Quentin.otf":
/*!********************************!*\
  !*** ./src/assets/Quentin.otf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d23f14229019500f4959.otf";

/***/ }),

/***/ "./src/assets/images/loading_circle.gif":
/*!**********************************************!*\
  !*** ./src/assets/images/loading_circle.gif ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "92af15917dc30c7b0a04.gif";

/***/ }),

/***/ "./src/assets/images/weather-photos/01d.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/weather-photos/01d.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c970ce02ba4e4db9e70f.jpg";

/***/ }),

/***/ "./src/assets/images/weather-photos/01n.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/weather-photos/01n.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bdf84e95f4ddd1677a56.jpg";

/***/ }),

/***/ "./src/assets/images/weather-photos/02d.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/weather-photos/02d.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "220fddbadd0a85b98fa6.jpg";

/***/ }),

/***/ "./src/assets/images/weather-photos/02n.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/weather-photos/02n.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9a1949d3ebd894843e16.jpg";

/***/ }),

/***/ "./src/assets/images/weather-photos/03d.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/weather-photos/03d.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c3ba364f78aa11cd7e84.jpg";

/***/ }),

/***/ "./src/assets/images/weather-photos/03n.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/weather-photos/03n.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c00dcb23f1472f9c520f.jpg";

/***/ }),

/***/ "./src/assets/images/weather-photos/04d.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/weather-photos/04d.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ad4caa9c367585c08e07.jpg";

/***/ }),

/***/ "./src/assets/images/weather-photos/04n.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/weather-photos/04n.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "26879b64a8f71bd12f2f.jpg";

/***/ }),

/***/ "./src/assets/images/weather-photos/09d.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/weather-photos/09d.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d81e2e9fba65a25bcee5.jpg";

/***/ }),

/***/ "./src/assets/images/weather-photos/09n.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/weather-photos/09n.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e6957b54b212d0c570c5.jpg";

/***/ }),

/***/ "./src/assets/images/weather-photos/10d.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/weather-photos/10d.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "30609e078fc8bdff9924.jpg";

/***/ }),

/***/ "./src/assets/images/weather-photos/10n.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/weather-photos/10n.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "36ac4039259ca17b5c22.jpg";

/***/ }),

/***/ "./src/assets/images/weather-photos/11d.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/weather-photos/11d.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3cbd33c03c21f0758fb1.jpg";

/***/ }),

/***/ "./src/assets/images/weather-photos/11n.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/weather-photos/11n.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8cbad6cd55b8c6930546.jpg";

/***/ }),

/***/ "./src/assets/images/weather-photos/13d.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/weather-photos/13d.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4119f1f6fe892c70271f.jpg";

/***/ }),

/***/ "./src/assets/images/weather-photos/13n.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/weather-photos/13n.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "afc1c029d96c2f23ce35.jpg";

/***/ }),

/***/ "./src/assets/images/weather-photos/50d.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/weather-photos/50d.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5aea6aa3919b469d3b49.jpg";

/***/ }),

/***/ "./src/assets/images/weather-photos/50n.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/weather-photos/50n.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8ca246f49cb8bbf92c8f.jpg";

/***/ }),

/***/ "./node_modules/iconify-icon/dist/iconify-icon.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/iconify-icon/dist/iconify-icon.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconifyIconComponent": () => (/* binding */ IconifyIconComponent),
/* harmony export */   "_api": () => (/* binding */ _api),
/* harmony export */   "addAPIProvider": () => (/* binding */ addAPIProvider),
/* harmony export */   "addCollection": () => (/* binding */ addCollection),
/* harmony export */   "addIcon": () => (/* binding */ addIcon),
/* harmony export */   "buildIcon": () => (/* binding */ buildIcon),
/* harmony export */   "calculateSize": () => (/* binding */ calculateSize),
/* harmony export */   "disableCache": () => (/* binding */ disableCache),
/* harmony export */   "enableCache": () => (/* binding */ enableCache),
/* harmony export */   "getIcon": () => (/* binding */ getIcon),
/* harmony export */   "iconExists": () => (/* binding */ iconExists),
/* harmony export */   "listIcons": () => (/* binding */ listIcons),
/* harmony export */   "loadIcon": () => (/* binding */ loadIcon),
/* harmony export */   "loadIcons": () => (/* binding */ loadIcons)
/* harmony export */ });
/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 1.0.1
*/
const defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
const defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
const defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
const defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});

const defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
const defaultIconCustomisations = Object.freeze({
  ...defaultIconSizeCustomisations,
  ...defaultIconTransformations
});

function rotateFromString(value, defaultValue = 0) {
  const units = value.replace(/^-?[0-9.]*/, "");
  function cleanup(value2) {
    while (value2 < 0) {
      value2 += 4;
    }
    return value2 % 4;
  }
  if (units === "") {
    const num = parseInt(value);
    return isNaN(num) ? 0 : cleanup(num);
  } else if (units !== value) {
    let split = 0;
    switch (units) {
      case "%":
        split = 25;
        break;
      case "deg":
        split = 90;
    }
    if (split) {
      let num = parseFloat(value.slice(0, value.length - units.length));
      if (isNaN(num)) {
        return 0;
      }
      num = num / split;
      return num % 1 === 0 ? cleanup(num) : 0;
    }
  }
  return defaultValue;
}

const separator = /[\s,]+/;
function flipFromString(custom, flip) {
  flip.split(separator).forEach((str) => {
    const value = str.trim();
    switch (value) {
      case "horizontal":
        custom.hFlip = true;
        break;
      case "vertical":
        custom.vFlip = true;
        break;
    }
  });
}

const defaultCustomisations = {
    ...defaultIconCustomisations,
    preserveAspectRatio: '',
};
/**
 * Get customisations
 */
function getCustomisations(node) {
    const customisations = {
        ...defaultCustomisations,
    };
    const attr = (key, def) => node.getAttribute(key) || def;
    // Dimensions
    customisations.width = attr('width', null);
    customisations.height = attr('height', null);
    // Rotation
    customisations.rotate = rotateFromString(attr('rotate', ''));
    // Flip
    flipFromString(customisations, attr('flip', ''));
    // SVG attributes
    customisations.preserveAspectRatio = attr('preserveAspectRatio', attr('preserveaspectratio', ''));
    return customisations;
}
/**
 * Check if customisations have been updated
 */
function haveCustomisationsChanged(value1, value2) {
    for (const key in defaultCustomisations) {
        if (value1[key] !== value2[key]) {
            return true;
        }
    }
    return false;
}

const matchIconName = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const stringToIcon = (value, validate, allowSimpleName, provider = "") => {
  const colonSeparated = value.split(":");
  if (value.slice(0, 1) === "@") {
    if (colonSeparated.length < 2 || colonSeparated.length > 3) {
      return null;
    }
    provider = colonSeparated.shift().slice(1);
  }
  if (colonSeparated.length > 3 || !colonSeparated.length) {
    return null;
  }
  if (colonSeparated.length > 1) {
    const name2 = colonSeparated.pop();
    const prefix = colonSeparated.pop();
    const result = {
      provider: colonSeparated.length > 0 ? colonSeparated[0] : provider,
      prefix,
      name: name2
    };
    return validate && !validateIconName(result) ? null : result;
  }
  const name = colonSeparated[0];
  const dashSeparated = name.split("-");
  if (dashSeparated.length > 1) {
    const result = {
      provider,
      prefix: dashSeparated.shift(),
      name: dashSeparated.join("-")
    };
    return validate && !validateIconName(result) ? null : result;
  }
  if (allowSimpleName && provider === "") {
    const result = {
      provider,
      prefix: "",
      name
    };
    return validate && !validateIconName(result, allowSimpleName) ? null : result;
  }
  return null;
};
const validateIconName = (icon, allowSimpleName) => {
  if (!icon) {
    return false;
  }
  return !!((icon.provider === "" || icon.provider.match(matchIconName)) && (allowSimpleName && icon.prefix === "" || icon.prefix.match(matchIconName)) && icon.name.match(matchIconName));
};

function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}

function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}

function getIconsTree(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || {};
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  (names || Object.keys(icons).concat(Object.keys(aliases))).forEach(resolve);
  return resolved;
}

function internalGetIconData(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || {};
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}

function parseIconSet(data, callback) {
  const names = [];
  if (typeof data !== "object" || typeof data.icons !== "object") {
    return names;
  }
  if (data.not_found instanceof Array) {
    data.not_found.forEach((name) => {
      callback(name, null);
      names.push(name);
    });
  }
  const tree = getIconsTree(data);
  for (const name in tree) {
    const item = tree[name];
    if (item) {
      callback(name, internalGetIconData(data, name, item));
      names.push(name);
    }
  }
  return names;
}

const optionalPropertyDefaults = {
  provider: "",
  aliases: {},
  not_found: {},
  ...defaultIconDimensions
};
function checkOptionalProps(item, defaults) {
  for (const prop in defaults) {
    if (prop in item && typeof item[prop] !== typeof defaults[prop]) {
      return false;
    }
  }
  return true;
}
function quicklyValidateIconSet(obj) {
  if (typeof obj !== "object" || obj === null) {
    return null;
  }
  const data = obj;
  if (typeof data.prefix !== "string" || !obj.icons || typeof obj.icons !== "object") {
    return null;
  }
  if (!checkOptionalProps(obj, optionalPropertyDefaults)) {
    return null;
  }
  const icons = data.icons;
  for (const name in icons) {
    const icon = icons[name];
    if (!name.match(matchIconName) || typeof icon.body !== "string" || !checkOptionalProps(
      icon,
      defaultExtendedIconProps
    )) {
      return null;
    }
  }
  const aliases = data.aliases || {};
  for (const name in aliases) {
    const icon = aliases[name];
    const parent = icon.parent;
    if (!name.match(matchIconName) || typeof parent !== "string" || !icons[parent] && !aliases[parent] || !checkOptionalProps(
      icon,
      defaultExtendedIconProps
    )) {
      return null;
    }
  }
  return data;
}

const dataStorage = /* @__PURE__ */ Object.create(null);
function newStorage(provider, prefix) {
  return {
    provider,
    prefix,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function getStorage(provider, prefix) {
  const providerStorage = dataStorage[provider] || (dataStorage[provider] = /* @__PURE__ */ Object.create(null));
  return providerStorage[prefix] || (providerStorage[prefix] = newStorage(provider, prefix));
}
function addIconSet(storage, data) {
  if (!quicklyValidateIconSet(data)) {
    return [];
  }
  return parseIconSet(data, (name, icon) => {
    if (icon) {
      storage.icons[name] = icon;
    } else {
      storage.missing.add(name);
    }
  });
}
function addIconToStorage(storage, name, icon) {
  try {
    if (typeof icon.body === "string") {
      storage.icons[name] = { ...icon };
      return true;
    }
  } catch (err) {
  }
  return false;
}
function listIcons$1(provider, prefix) {
  let allIcons = [];
  const providers = typeof provider === "string" ? [provider] : Object.keys(dataStorage);
  providers.forEach((provider2) => {
    const prefixes = typeof provider2 === "string" && typeof prefix === "string" ? [prefix] : Object.keys(dataStorage[provider2] || {});
    prefixes.forEach((prefix2) => {
      const storage = getStorage(provider2, prefix2);
      allIcons = allIcons.concat(
        Object.keys(storage.icons).map(
          (name) => (provider2 !== "" ? "@" + provider2 + ":" : "") + prefix2 + ":" + name
        )
      );
    });
  });
  return allIcons;
}

let simpleNames = false;
function allowSimpleNames(allow) {
  if (typeof allow === "boolean") {
    simpleNames = allow;
  }
  return simpleNames;
}
function getIconData(name) {
  const icon = typeof name === "string" ? stringToIcon(name, true, simpleNames) : name;
  if (icon) {
    const storage = getStorage(icon.provider, icon.prefix);
    const iconName = icon.name;
    return storage.icons[iconName] || (storage.missing.has(iconName) ? null : void 0);
  }
}
function addIcon$1(name, data) {
  const icon = stringToIcon(name, true, simpleNames);
  if (!icon) {
    return false;
  }
  const storage = getStorage(icon.provider, icon.prefix);
  return addIconToStorage(storage, icon.name, data);
}
function addCollection$1(data, provider) {
  if (typeof data !== "object") {
    return false;
  }
  if (typeof provider !== "string") {
    provider = data.provider || "";
  }
  if (simpleNames && !provider && !data.prefix) {
    let added = false;
    if (quicklyValidateIconSet(data)) {
      data.prefix = "";
      parseIconSet(data, (name, icon) => {
        if (icon && addIcon$1(name, icon)) {
          added = true;
        }
      });
    }
    return added;
  }
  const prefix = data.prefix;
  if (!validateIconName({
    provider,
    prefix,
    name: "a"
  })) {
    return false;
  }
  const storage = getStorage(provider, prefix);
  return !!addIconSet(storage, data);
}
function iconExists$1(name) {
  return !!getIconData(name);
}
function getIcon$1(name) {
  const result = getIconData(name);
  return result ? {
    ...defaultIconProps,
    ...result
  } : null;
}

function sortIcons(icons) {
  const result = {
    loaded: [],
    missing: [],
    pending: []
  };
  const storage = /* @__PURE__ */ Object.create(null);
  icons.sort((a, b) => {
    if (a.provider !== b.provider) {
      return a.provider.localeCompare(b.provider);
    }
    if (a.prefix !== b.prefix) {
      return a.prefix.localeCompare(b.prefix);
    }
    return a.name.localeCompare(b.name);
  });
  let lastIcon = {
    provider: "",
    prefix: "",
    name: ""
  };
  icons.forEach((icon) => {
    if (lastIcon.name === icon.name && lastIcon.prefix === icon.prefix && lastIcon.provider === icon.provider) {
      return;
    }
    lastIcon = icon;
    const provider = icon.provider;
    const prefix = icon.prefix;
    const name = icon.name;
    const providerStorage = storage[provider] || (storage[provider] = /* @__PURE__ */ Object.create(null));
    const localStorage = providerStorage[prefix] || (providerStorage[prefix] = getStorage(provider, prefix));
    let list;
    if (name in localStorage.icons) {
      list = result.loaded;
    } else if (prefix === "" || localStorage.missing.has(name)) {
      list = result.missing;
    } else {
      list = result.pending;
    }
    const item = {
      provider,
      prefix,
      name
    };
    list.push(item);
  });
  return result;
}

function removeCallback(storages, id) {
  storages.forEach((storage) => {
    const items = storage.loaderCallbacks;
    if (items) {
      storage.loaderCallbacks = items.filter((row) => row.id !== id);
    }
  });
}
function updateCallbacks(storage) {
  if (!storage.pendingCallbacksFlag) {
    storage.pendingCallbacksFlag = true;
    setTimeout(() => {
      storage.pendingCallbacksFlag = false;
      const items = storage.loaderCallbacks ? storage.loaderCallbacks.slice(0) : [];
      if (!items.length) {
        return;
      }
      let hasPending = false;
      const provider = storage.provider;
      const prefix = storage.prefix;
      items.forEach((item) => {
        const icons = item.icons;
        const oldLength = icons.pending.length;
        icons.pending = icons.pending.filter((icon) => {
          if (icon.prefix !== prefix) {
            return true;
          }
          const name = icon.name;
          if (storage.icons[name]) {
            icons.loaded.push({
              provider,
              prefix,
              name
            });
          } else if (storage.missing.has(name)) {
            icons.missing.push({
              provider,
              prefix,
              name
            });
          } else {
            hasPending = true;
            return true;
          }
          return false;
        });
        if (icons.pending.length !== oldLength) {
          if (!hasPending) {
            removeCallback([storage], item.id);
          }
          item.callback(
            icons.loaded.slice(0),
            icons.missing.slice(0),
            icons.pending.slice(0),
            item.abort
          );
        }
      });
    });
  }
}
let idCounter = 0;
function storeCallback(callback, icons, pendingSources) {
  const id = idCounter++;
  const abort = removeCallback.bind(null, pendingSources, id);
  if (!icons.pending.length) {
    return abort;
  }
  const item = {
    id,
    icons,
    callback,
    abort
  };
  pendingSources.forEach((storage) => {
    (storage.loaderCallbacks || (storage.loaderCallbacks = [])).push(item);
  });
  return abort;
}

const storage = /* @__PURE__ */ Object.create(null);
function setAPIModule(provider, item) {
  storage[provider] = item;
}
function getAPIModule(provider) {
  return storage[provider] || storage[""];
}

function listToIcons(list, validate = true, simpleNames = false) {
  const result = [];
  list.forEach((item) => {
    const icon = typeof item === "string" ? stringToIcon(item, validate, simpleNames) : item;
    if (icon) {
      result.push(icon);
    }
  });
  return result;
}

// src/config.ts
var defaultConfig = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: false,
  dataAfterTimeout: false
};

// src/query.ts
function sendQuery(config, payload, query, done) {
  const resourcesCount = config.resources.length;
  const startIndex = config.random ? Math.floor(Math.random() * resourcesCount) : config.index;
  let resources;
  if (config.random) {
    let list = config.resources.slice(0);
    resources = [];
    while (list.length > 1) {
      const nextIndex = Math.floor(Math.random() * list.length);
      resources.push(list[nextIndex]);
      list = list.slice(0, nextIndex).concat(list.slice(nextIndex + 1));
    }
    resources = resources.concat(list);
  } else {
    resources = config.resources.slice(startIndex).concat(config.resources.slice(0, startIndex));
  }
  const startTime = Date.now();
  let status = "pending";
  let queriesSent = 0;
  let lastError;
  let timer = null;
  let queue = [];
  let doneCallbacks = [];
  if (typeof done === "function") {
    doneCallbacks.push(done);
  }
  function resetTimer() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function abort() {
    if (status === "pending") {
      status = "aborted";
    }
    resetTimer();
    queue.forEach((item) => {
      if (item.status === "pending") {
        item.status = "aborted";
      }
    });
    queue = [];
  }
  function subscribe(callback, overwrite) {
    if (overwrite) {
      doneCallbacks = [];
    }
    if (typeof callback === "function") {
      doneCallbacks.push(callback);
    }
  }
  function getQueryStatus() {
    return {
      startTime,
      payload,
      status,
      queriesSent,
      queriesPending: queue.length,
      subscribe,
      abort
    };
  }
  function failQuery() {
    status = "failed";
    doneCallbacks.forEach((callback) => {
      callback(void 0, lastError);
    });
  }
  function clearQueue() {
    queue.forEach((item) => {
      if (item.status === "pending") {
        item.status = "aborted";
      }
    });
    queue = [];
  }
  function moduleResponse(item, response, data) {
    const isError = response !== "success";
    queue = queue.filter((queued) => queued !== item);
    switch (status) {
      case "pending":
        break;
      case "failed":
        if (isError || !config.dataAfterTimeout) {
          return;
        }
        break;
      default:
        return;
    }
    if (response === "abort") {
      lastError = data;
      failQuery();
      return;
    }
    if (isError) {
      lastError = data;
      if (!queue.length) {
        if (!resources.length) {
          failQuery();
        } else {
          execNext();
        }
      }
      return;
    }
    resetTimer();
    clearQueue();
    if (!config.random) {
      const index = config.resources.indexOf(item.resource);
      if (index !== -1 && index !== config.index) {
        config.index = index;
      }
    }
    status = "completed";
    doneCallbacks.forEach((callback) => {
      callback(data);
    });
  }
  function execNext() {
    if (status !== "pending") {
      return;
    }
    resetTimer();
    const resource = resources.shift();
    if (resource === void 0) {
      if (queue.length) {
        timer = setTimeout(() => {
          resetTimer();
          if (status === "pending") {
            clearQueue();
            failQuery();
          }
        }, config.timeout);
        return;
      }
      failQuery();
      return;
    }
    const item = {
      status: "pending",
      resource,
      callback: (status2, data) => {
        moduleResponse(item, status2, data);
      }
    };
    queue.push(item);
    queriesSent++;
    timer = setTimeout(execNext, config.rotate);
    query(resource, payload, item.callback);
  }
  setTimeout(execNext);
  return getQueryStatus;
}

// src/index.ts
function initRedundancy(cfg) {
  const config = {
    ...defaultConfig,
    ...cfg
  };
  let queries = [];
  function cleanup() {
    queries = queries.filter((item) => item().status === "pending");
  }
  function query(payload, queryCallback, doneCallback) {
    const query2 = sendQuery(
      config,
      payload,
      queryCallback,
      (data, error) => {
        cleanup();
        if (doneCallback) {
          doneCallback(data, error);
        }
      }
    );
    queries.push(query2);
    return query2;
  }
  function find(callback) {
    return queries.find((value) => {
      return callback(value);
    }) || null;
  }
  const instance = {
    query,
    find,
    setIndex: (index) => {
      config.index = index;
    },
    getIndex: () => config.index,
    cleanup
  };
  return instance;
}

function createAPIConfig(source) {
  let resources;
  if (typeof source.resources === "string") {
    resources = [source.resources];
  } else {
    resources = source.resources;
    if (!(resources instanceof Array) || !resources.length) {
      return null;
    }
  }
  const result = {
    resources,
    path: source.path || "/",
    maxURL: source.maxURL || 500,
    rotate: source.rotate || 750,
    timeout: source.timeout || 5e3,
    random: source.random === true,
    index: source.index || 0,
    dataAfterTimeout: source.dataAfterTimeout !== false
  };
  return result;
}
const configStorage = /* @__PURE__ */ Object.create(null);
const fallBackAPISources = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
];
const fallBackAPI = [];
while (fallBackAPISources.length > 0) {
  if (fallBackAPISources.length === 1) {
    fallBackAPI.push(fallBackAPISources.shift());
  } else {
    if (Math.random() > 0.5) {
      fallBackAPI.push(fallBackAPISources.shift());
    } else {
      fallBackAPI.push(fallBackAPISources.pop());
    }
  }
}
configStorage[""] = createAPIConfig({
  resources: ["https://api.iconify.design"].concat(fallBackAPI)
});
function addAPIProvider$1(provider, customConfig) {
  const config = createAPIConfig(customConfig);
  if (config === null) {
    return false;
  }
  configStorage[provider] = config;
  return true;
}
function getAPIConfig(provider) {
  return configStorage[provider];
}
function listAPIProviders() {
  return Object.keys(configStorage);
}

function emptyCallback$1() {
}
const redundancyCache = /* @__PURE__ */ Object.create(null);
function getRedundancyCache(provider) {
  if (!redundancyCache[provider]) {
    const config = getAPIConfig(provider);
    if (!config) {
      return;
    }
    const redundancy = initRedundancy(config);
    const cachedReundancy = {
      config,
      redundancy
    };
    redundancyCache[provider] = cachedReundancy;
  }
  return redundancyCache[provider];
}
function sendAPIQuery(target, query, callback) {
  let redundancy;
  let send;
  if (typeof target === "string") {
    const api = getAPIModule(target);
    if (!api) {
      callback(void 0, 424);
      return emptyCallback$1;
    }
    send = api.send;
    const cached = getRedundancyCache(target);
    if (cached) {
      redundancy = cached.redundancy;
    }
  } else {
    const config = createAPIConfig(target);
    if (config) {
      redundancy = initRedundancy(config);
      const moduleKey = target.resources ? target.resources[0] : "";
      const api = getAPIModule(moduleKey);
      if (api) {
        send = api.send;
      }
    }
  }
  if (!redundancy || !send) {
    callback(void 0, 424);
    return emptyCallback$1;
  }
  return redundancy.query(query, send, callback)().abort;
}

const browserCacheVersion = "iconify2";
const browserCachePrefix = "iconify";
const browserCacheCountKey = browserCachePrefix + "-count";
const browserCacheVersionKey = browserCachePrefix + "-version";
const browserStorageHour = 36e5;
const browserStorageCacheExpiration = 168;

function getStoredItem(func, key) {
  try {
    return func.getItem(key);
  } catch (err) {
  }
}
function setStoredItem(func, key, value) {
  try {
    func.setItem(key, value);
    return true;
  } catch (err) {
  }
}
function removeStoredItem(func, key) {
  try {
    func.removeItem(key);
  } catch (err) {
  }
}

function setBrowserStorageItemsCount(storage, value) {
  return setStoredItem(storage, browserCacheCountKey, value.toString());
}
function getBrowserStorageItemsCount(storage) {
  return parseInt(getStoredItem(storage, browserCacheCountKey)) || 0;
}

const browserStorageConfig = {
  local: true,
  session: true
};
const browserStorageEmptyItems = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let browserStorageStatus = false;
function setBrowserStorageStatus(status) {
  browserStorageStatus = status;
}

let _window = typeof window === "undefined" ? {} : window;
function getBrowserStorage(key) {
  const attr = key + "Storage";
  try {
    if (_window && _window[attr] && typeof _window[attr].length === "number") {
      return _window[attr];
    }
  } catch (err) {
  }
  browserStorageConfig[key] = false;
}

function iterateBrowserStorage(key, callback) {
  const func = getBrowserStorage(key);
  if (!func) {
    return;
  }
  const version = getStoredItem(func, browserCacheVersionKey);
  if (version !== browserCacheVersion) {
    if (version) {
      const total2 = getBrowserStorageItemsCount(func);
      for (let i = 0; i < total2; i++) {
        removeStoredItem(func, browserCachePrefix + i.toString());
      }
    }
    setStoredItem(func, browserCacheVersionKey, browserCacheVersion);
    setBrowserStorageItemsCount(func, 0);
    return;
  }
  const minTime = Math.floor(Date.now() / browserStorageHour) - browserStorageCacheExpiration;
  const parseItem = (index) => {
    const name = browserCachePrefix + index.toString();
    const item = getStoredItem(func, name);
    if (typeof item !== "string") {
      return;
    }
    try {
      const data = JSON.parse(item);
      if (typeof data === "object" && typeof data.cached === "number" && data.cached > minTime && typeof data.provider === "string" && typeof data.data === "object" && typeof data.data.prefix === "string" && callback(data, index)) {
        return true;
      }
    } catch (err) {
    }
    removeStoredItem(func, name);
  };
  let total = getBrowserStorageItemsCount(func);
  for (let i = total - 1; i >= 0; i--) {
    if (!parseItem(i)) {
      if (i === total - 1) {
        total--;
        setBrowserStorageItemsCount(func, total);
      } else {
        browserStorageEmptyItems[key].add(i);
      }
    }
  }
}

function initBrowserStorage() {
  if (browserStorageStatus) {
    return;
  }
  setBrowserStorageStatus(true);
  for (const key in browserStorageConfig) {
    iterateBrowserStorage(key, (item) => {
      const iconSet = item.data;
      const provider = item.provider;
      const prefix = iconSet.prefix;
      const storage = getStorage(
        provider,
        prefix
      );
      if (!addIconSet(storage, iconSet).length) {
        return false;
      }
      const lastModified = iconSet.lastModified || -1;
      storage.lastModifiedCached = storage.lastModifiedCached ? Math.min(storage.lastModifiedCached, lastModified) : lastModified;
      return true;
    });
  }
}

function updateLastModified(storage, lastModified) {
  const lastValue = storage.lastModifiedCached;
  if (lastValue && lastValue >= lastModified) {
    return lastValue === lastModified;
  }
  storage.lastModifiedCached = lastModified;
  if (lastValue) {
    for (const key in browserStorageConfig) {
      iterateBrowserStorage(key, (item) => {
        const iconSet = item.data;
        return item.provider !== storage.provider || iconSet.prefix !== storage.prefix || iconSet.lastModified === lastModified;
      });
    }
  }
  return true;
}
function storeInBrowserStorage(storage, data) {
  if (!browserStorageStatus) {
    initBrowserStorage();
  }
  function store(key) {
    let func;
    if (!browserStorageConfig[key] || !(func = getBrowserStorage(key))) {
      return;
    }
    const set = browserStorageEmptyItems[key];
    let index;
    if (set.size) {
      set.delete(index = Array.from(set).shift());
    } else {
      index = getBrowserStorageItemsCount(func);
      if (!setBrowserStorageItemsCount(func, index + 1)) {
        return;
      }
    }
    const item = {
      cached: Math.floor(Date.now() / browserStorageHour),
      provider: storage.provider,
      data
    };
    return setStoredItem(
      func,
      browserCachePrefix + index.toString(),
      JSON.stringify(item)
    );
  }
  if (data.lastModified && !updateLastModified(storage, data.lastModified)) {
    return;
  }
  if (!Object.keys(data.icons).length) {
    return;
  }
  if (data.not_found) {
    data = Object.assign({}, data);
    delete data.not_found;
  }
  if (!store("local")) {
    store("session");
  }
}

function emptyCallback() {
}
function loadedNewIcons(storage) {
  if (!storage.iconsLoaderFlag) {
    storage.iconsLoaderFlag = true;
    setTimeout(() => {
      storage.iconsLoaderFlag = false;
      updateCallbacks(storage);
    });
  }
}
function loadNewIcons(storage, icons) {
  if (!storage.iconsToLoad) {
    storage.iconsToLoad = icons;
  } else {
    storage.iconsToLoad = storage.iconsToLoad.concat(icons).sort();
  }
  if (!storage.iconsQueueFlag) {
    storage.iconsQueueFlag = true;
    setTimeout(() => {
      storage.iconsQueueFlag = false;
      const { provider, prefix } = storage;
      const icons2 = storage.iconsToLoad;
      delete storage.iconsToLoad;
      let api;
      if (!icons2 || !(api = getAPIModule(provider))) {
        return;
      }
      const params = api.prepare(provider, prefix, icons2);
      params.forEach((item) => {
        sendAPIQuery(provider, item, (data, error) => {
          if (typeof data !== "object") {
            if (error !== 404) {
              return;
            }
            item.icons.forEach((name) => {
              storage.missing.add(name);
            });
          } else {
            try {
              const parsed = addIconSet(
                storage,
                data
              );
              if (!parsed.length) {
                return;
              }
              const pending = storage.pendingIcons;
              if (pending) {
                parsed.forEach((name) => {
                  pending.delete(name);
                });
              }
              storeInBrowserStorage(storage, data);
            } catch (err) {
              console.error(err);
            }
          }
          loadedNewIcons(storage);
        });
      });
    });
  }
}
const loadIcons$1 = (icons, callback) => {
  const cleanedIcons = listToIcons(icons, true, allowSimpleNames());
  const sortedIcons = sortIcons(cleanedIcons);
  if (!sortedIcons.pending.length) {
    let callCallback = true;
    if (callback) {
      setTimeout(() => {
        if (callCallback) {
          callback(
            sortedIcons.loaded,
            sortedIcons.missing,
            sortedIcons.pending,
            emptyCallback
          );
        }
      });
    }
    return () => {
      callCallback = false;
    };
  }
  const newIcons = /* @__PURE__ */ Object.create(null);
  const sources = [];
  let lastProvider, lastPrefix;
  sortedIcons.pending.forEach((icon) => {
    const { provider, prefix } = icon;
    if (prefix === lastPrefix && provider === lastProvider) {
      return;
    }
    lastProvider = provider;
    lastPrefix = prefix;
    sources.push(getStorage(provider, prefix));
    const providerNewIcons = newIcons[provider] || (newIcons[provider] = /* @__PURE__ */ Object.create(null));
    if (!providerNewIcons[prefix]) {
      providerNewIcons[prefix] = [];
    }
  });
  sortedIcons.pending.forEach((icon) => {
    const { provider, prefix, name } = icon;
    const storage = getStorage(provider, prefix);
    const pendingQueue = storage.pendingIcons || (storage.pendingIcons = /* @__PURE__ */ new Set());
    if (!pendingQueue.has(name)) {
      pendingQueue.add(name);
      newIcons[provider][prefix].push(name);
    }
  });
  sources.forEach((storage) => {
    const { provider, prefix } = storage;
    if (newIcons[provider][prefix].length) {
      loadNewIcons(storage, newIcons[provider][prefix]);
    }
  });
  return callback ? storeCallback(callback, sortedIcons, sources) : emptyCallback;
};
const loadIcon$1 = (icon) => {
  return new Promise((fulfill, reject) => {
    const iconObj = typeof icon === "string" ? stringToIcon(icon, true) : icon;
    if (!iconObj) {
      reject(icon);
      return;
    }
    loadIcons$1([iconObj || icon], (loaded) => {
      if (loaded.length && iconObj) {
        const data = getIconData(iconObj);
        if (data) {
          fulfill({
            ...defaultIconProps,
            ...data
          });
          return;
        }
      }
      reject(icon);
    });
  });
};

/**
 * Test icon string
 */
function testIconObject(value) {
    try {
        const obj = typeof value === 'string' ? JSON.parse(value) : value;
        if (typeof obj.body === 'string') {
            return {
                ...obj,
            };
        }
    }
    catch (err) {
        //
    }
}

/**
 * Parse icon value, load if needed
 */
function parseIconValue(value, onload) {
    // Check if icon name is valid
    const name = typeof value === 'string' ? stringToIcon(value, true, true) : null;
    if (!name) {
        // Test for serialised object
        const data = testIconObject(value);
        return {
            value,
            data,
        };
    }
    // Valid icon name: check if data is available
    const data = getIconData(name);
    // Icon data exists or icon has no prefix. Do not load icon from API if icon has no prefix
    if (data !== void 0 || !name.prefix) {
        return {
            value,
            name,
            data, // could be 'null' -> icon is missing
        };
    }
    // Load icon
    const loading = loadIcons$1([name], () => onload(value, name, getIconData(name)));
    return {
        value,
        name,
        loading,
    };
}

/**
 * Check for inline
 */
function getInline(node) {
    return node.hasAttribute('inline');
}

// Check for Safari
let isBuggedSafari = false;
try {
    isBuggedSafari = navigator.vendor.indexOf('Apple') === 0;
}
catch (err) {
    //
}
/**
 * Get render mode
 */
function getRenderMode(body, mode) {
    switch (mode) {
        // Force mode
        case 'svg':
        case 'bg':
        case 'mask':
            return mode;
    }
    // Check for animation, use 'style' for animated icons, unless browser is Safari
    // (only <a>, which should be ignored or animations start with '<a')
    if (mode !== 'style' &&
        (isBuggedSafari || body.indexOf('<a') === -1)) {
        // Render <svg>
        return 'svg';
    }
    // Use background or mask
    return body.indexOf('currentColor') === -1 ? 'bg' : 'mask';
}

const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize$1(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}

function iconToSVG(icon, customisations) {
  const fullIcon = {
    ...defaultIconProps,
    ...icon
  };
  const fullCustomisations = {
    ...defaultIconCustomisations,
    ...customisations
  };
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push(
          "translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")"
        );
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")"
      );
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift(
          "rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")"
        );
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift(
          "rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = '<g transform="' + transformations.join(" ") + '">' + body + "</g>";
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize$1(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize$1(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const result = {
    attributes: {
      width: width.toString(),
      height: height.toString(),
      viewBox: box.left.toString() + " " + box.top.toString() + " " + boxWidth.toString() + " " + boxHeight.toString()
    },
    body
  };
  return result;
}

const detectFetch = () => {
  let callback;
  try {
    callback = fetch;
    if (typeof callback === "function") {
      return callback;
    }
  } catch (err) {
  }
};
let fetchModule = detectFetch();
function setFetch(fetch2) {
  fetchModule = fetch2;
}
function getFetch() {
  return fetchModule;
}
function calculateMaxLength(provider, prefix) {
  const config = getAPIConfig(provider);
  if (!config) {
    return 0;
  }
  let result;
  if (!config.maxURL) {
    result = 0;
  } else {
    let maxHostLength = 0;
    config.resources.forEach((item) => {
      const host = item;
      maxHostLength = Math.max(maxHostLength, host.length);
    });
    const url = prefix + ".json?icons=";
    result = config.maxURL - maxHostLength - config.path.length - url.length;
  }
  return result;
}
function shouldAbort(status) {
  return status === 404;
}
const prepare = (provider, prefix, icons) => {
  const results = [];
  const maxLength = calculateMaxLength(provider, prefix);
  const type = "icons";
  let item = {
    type,
    provider,
    prefix,
    icons: []
  };
  let length = 0;
  icons.forEach((name, index) => {
    length += name.length + 1;
    if (length >= maxLength && index > 0) {
      results.push(item);
      item = {
        type,
        provider,
        prefix,
        icons: []
      };
      length = name.length;
    }
    item.icons.push(name);
  });
  results.push(item);
  return results;
};
function getPath(provider) {
  if (typeof provider === "string") {
    const config = getAPIConfig(provider);
    if (config) {
      return config.path;
    }
  }
  return "/";
}
const send = (host, params, callback) => {
  if (!fetchModule) {
    callback("abort", 424);
    return;
  }
  let path = getPath(params.provider);
  switch (params.type) {
    case "icons": {
      const prefix = params.prefix;
      const icons = params.icons;
      const iconsList = icons.join(",");
      const urlParams = new URLSearchParams({
        icons: iconsList
      });
      path += prefix + ".json?" + urlParams.toString();
      break;
    }
    case "custom": {
      const uri = params.uri;
      path += uri.slice(0, 1) === "/" ? uri.slice(1) : uri;
      break;
    }
    default:
      callback("abort", 400);
      return;
  }
  let defaultError = 503;
  fetchModule(host + path).then((response) => {
    const status = response.status;
    if (status !== 200) {
      setTimeout(() => {
        callback(shouldAbort(status) ? "abort" : "next", status);
      });
      return;
    }
    defaultError = 501;
    return response.json();
  }).then((data) => {
    if (typeof data !== "object" || data === null) {
      setTimeout(() => {
        callback("next", defaultError);
      });
      return;
    }
    setTimeout(() => {
      callback("success", data);
    });
  }).catch(() => {
    callback("next", defaultError);
  });
};
const fetchAPIModule = {
  prepare,
  send
};

function toggleBrowserCache(storage, value) {
  switch (storage) {
    case "local":
    case "session":
      browserStorageConfig[storage] = value;
      break;
    case "all":
      for (const key in browserStorageConfig) {
        browserStorageConfig[key] = value;
      }
      break;
  }
}

// Core
/**
 * Get functions and initialise stuff
 */
function exportFunctions() {
    /**
     * Initialise stuff
     */
    // Set API module
    setAPIModule('', fetchAPIModule);
    // Allow simple icon names
    allowSimpleNames(true);
    let _window;
    try {
        _window = window;
    }
    catch (err) {
        //
    }
    if (_window) {
        // Set cache and load existing cache
        initBrowserStorage();
        // Load icons from global "IconifyPreload"
        if (_window.IconifyPreload !== void 0) {
            const preload = _window.IconifyPreload;
            const err = 'Invalid IconifyPreload syntax.';
            if (typeof preload === 'object' && preload !== null) {
                (preload instanceof Array ? preload : [preload]).forEach((item) => {
                    try {
                        if (
                        // Check if item is an object and not null/array
                        typeof item !== 'object' ||
                            item === null ||
                            item instanceof Array ||
                            // Check for 'icons' and 'prefix'
                            typeof item.icons !== 'object' ||
                            typeof item.prefix !== 'string' ||
                            // Add icon set
                            !addCollection$1(item)) {
                            console.error(err);
                        }
                    }
                    catch (e) {
                        console.error(err);
                    }
                });
            }
        }
        // Set API from global "IconifyProviders"
        if (_window.IconifyProviders !== void 0) {
            const providers = _window.IconifyProviders;
            if (typeof providers === 'object' && providers !== null) {
                for (const key in providers) {
                    const err = 'IconifyProviders[' + key + '] is invalid.';
                    try {
                        const value = providers[key];
                        if (typeof value !== 'object' ||
                            !value ||
                            value.resources === void 0) {
                            continue;
                        }
                        if (!addAPIProvider$1(key, value)) {
                            console.error(err);
                        }
                    }
                    catch (e) {
                        console.error(err);
                    }
                }
            }
        }
    }
    const _api = {
        getAPIConfig,
        setAPIModule,
        sendAPIQuery,
        setFetch,
        getFetch,
        listAPIProviders,
    };
    return {
        enableCache: (storage) => toggleBrowserCache(storage, true),
        disableCache: (storage) => toggleBrowserCache(storage, false),
        iconExists: iconExists$1,
        getIcon: getIcon$1,
        listIcons: listIcons$1,
        addIcon: addIcon$1,
        addCollection: addCollection$1,
        calculateSize: calculateSize$1,
        buildIcon: iconToSVG,
        loadIcons: loadIcons$1,
        loadIcon: loadIcon$1,
        addAPIProvider: addAPIProvider$1,
        _api,
    };
}

function iconToHTML(body, attributes) {
  let renderAttribsHTML = body.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const attr in attributes) {
    renderAttribsHTML += " " + attr + '="' + attributes[attr] + '"';
  }
  return '<svg xmlns="http://www.w3.org/2000/svg"' + renderAttribsHTML + ">" + body + "</svg>";
}

function encodeSVGforURL(svg) {
  return svg.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function svgToURL(svg) {
  return 'url("data:image/svg+xml,' + encodeSVGforURL(svg) + '")';
}

// List of properties to apply
const monotoneProps = {
    'background-color': 'currentColor',
};
const coloredProps = {
    'background-color': 'transparent',
};
// Dynamically add common props to variables above
const propsToAdd = {
    image: 'var(--svg)',
    repeat: 'no-repeat',
    size: '100% 100%',
};
const propsToAddTo = {
    '-webkit-mask': monotoneProps,
    'mask': monotoneProps,
    'background': coloredProps,
};
for (const prefix in propsToAddTo) {
    const list = propsToAddTo[prefix];
    for (const prop in propsToAdd) {
        list[prefix + '-' + prop] = propsToAdd[prop];
    }
}
/**
 * Fix size: add 'px' to numbers
 */
function fixSize(value) {
    return value + (value.match(/^[-0-9.]+$/) ? 'px' : '');
}
/**
 * Render node as <span>
 */
function renderSPAN(data, icon, useMask) {
    const node = document.createElement('span');
    // Body
    let body = data.body;
    if (body.indexOf('<a') !== -1) {
        // Animated SVG: add something to fix timing bug
        body += '<!-- ' + Date.now() + ' -->';
    }
    // Generate SVG as URL
    const renderAttribs = data.attributes;
    const html = iconToHTML(body, {
        ...renderAttribs,
        width: icon.width + '',
        height: icon.height + '',
    });
    const url = svgToURL(html);
    // Generate style
    const svgStyle = node.style;
    const styles = {
        '--svg': url,
        'width': fixSize(renderAttribs.width),
        'height': fixSize(renderAttribs.height),
        ...(useMask ? monotoneProps : coloredProps),
    };
    // Apply style
    for (const prop in styles) {
        svgStyle.setProperty(prop, styles[prop]);
    }
    return node;
}

/**
 * Render node as <svg>
 */
function renderSVG(data) {
    const node = document.createElement('span');
    // Generate SVG
    node.innerHTML = iconToHTML(data.body, data.attributes);
    return node.firstChild;
}

/**
 * Render icon
 */
function renderIcon(parent, state) {
    const iconData = state.icon.data;
    const customisations = state.customisations;
    // Render icon
    const renderData = iconToSVG(iconData, customisations);
    if (customisations.preserveAspectRatio) {
        renderData.attributes['preserveAspectRatio'] =
            customisations.preserveAspectRatio;
    }
    const mode = state.renderedMode;
    let node;
    switch (mode) {
        case 'svg':
            node = renderSVG(renderData);
            break;
        default:
            node = renderSPAN(renderData, {
                ...defaultIconProps,
                ...iconData,
            }, mode === 'mask');
    }
    // Set element
    const oldNode = Array.from(parent.childNodes).find((node) => {
        const tag = node.tagName &&
            node.tagName.toUpperCase();
        return tag === 'SPAN' || tag === 'SVG';
    });
    if (oldNode) {
        // Replace old element
        if (node.tagName === 'SPAN' && oldNode.tagName === node.tagName) {
            // Swap style instead of whole node
            oldNode.setAttribute('style', node.getAttribute('style'));
        }
        else {
            parent.replaceChild(node, oldNode);
        }
    }
    else {
        // Add new element
        parent.appendChild(node);
    }
}

/**
 * Attribute to add
 */
const nodeAttr = 'data-style';
/**
 * Add/update style node
 */
function updateStyle(parent, inline) {
    // Get node, create if needed
    let styleNode = Array.from(parent.childNodes).find((node) => node.hasAttribute &&
        node.hasAttribute(nodeAttr));
    if (!styleNode) {
        styleNode = document.createElement('style');
        styleNode.setAttribute(nodeAttr, nodeAttr);
        parent.appendChild(styleNode);
    }
    // Update content
    styleNode.textContent =
        ':host{display:inline-block;vertical-align:' +
            (inline ? '-0.125em' : '0') +
            '}span,svg{display:block}';
}

/**
 * Set state to PendingState
 */
function setPendingState(icon, inline, lastState) {
    const lastRender = lastState &&
        (lastState.rendered
            ? lastState
            : lastState.lastRender);
    return {
        rendered: false,
        inline,
        icon,
        lastRender,
    };
}

/**
 * Register 'iconify-icon' component, if it does not exist
 */
function defineIconifyIcon(name = 'iconify-icon') {
    // Check for custom elements registry and HTMLElement
    let customElements;
    let ParentClass;
    try {
        customElements = window.customElements;
        ParentClass = window.HTMLElement;
    }
    catch (err) {
        return;
    }
    // Make sure registry and HTMLElement exist
    if (!customElements || !ParentClass) {
        return;
    }
    // Check for duplicate
    const ConflictingClass = customElements.get(name);
    if (ConflictingClass) {
        return ConflictingClass;
    }
    // All attributes
    const attributes = [
        // Icon
        'icon',
        // Mode
        'mode',
        'inline',
        // Customisations
        'width',
        'height',
        'rotate',
        'flip',
    ];
    /**
     * Component class
     */
    const IconifyIcon = class extends ParentClass {
        // Root
        _shadowRoot;
        // State
        _state;
        // Attributes check queued
        _checkQueued = false;
        /**
         * Constructor
         */
        constructor() {
            super();
            // Attach shadow DOM
            const root = (this._shadowRoot = this.attachShadow({
                mode: 'open',
            }));
            // Add style
            const inline = getInline(this);
            updateStyle(root, inline);
            // Create empty state
            this._state = setPendingState({
                value: '',
            }, inline);
            // Queue icon render
            this._queueCheck();
        }
        /**
         * Observed attributes
         */
        static get observedAttributes() {
            return attributes.slice(0);
        }
        /**
         * Observed properties that are different from attributes
         *
         * Experimental! Need to test with various frameworks that support it
         */
        /*
        static get properties() {
            return {
                inline: {
                    type: Boolean,
                    reflect: true,
                },
                // Not listing other attributes because they are strings or combination
                // of string and another type. Cannot have multiple types
            };
        }
        */
        /**
         * Attribute has changed
         */
        attributeChangedCallback(name) {
            if (name === 'inline') {
                // Update immediately: not affected by other attributes
                const newInline = getInline(this);
                const state = this._state;
                if (newInline !== state.inline) {
                    // Update style if inline mode changed
                    state.inline = newInline;
                    updateStyle(this._shadowRoot, newInline);
                }
            }
            else {
                // Queue check for other attributes
                this._queueCheck();
            }
        }
        /**
         * Get/set icon
         */
        get icon() {
            const value = this.getAttribute('icon');
            if (value && value.slice(0, 1) === '{') {
                try {
                    return JSON.parse(value);
                }
                catch (err) {
                    //
                }
            }
            return value;
        }
        set icon(value) {
            if (typeof value === 'object') {
                value = JSON.stringify(value);
            }
            this.setAttribute('icon', value);
        }
        /**
         * Get/set inline
         */
        get inline() {
            return getInline(this);
        }
        set inline(value) {
            this.setAttribute('inline', value ? 'true' : null);
        }
        /**
         * Restart animation
         */
        restartAnimation() {
            const state = this._state;
            if (state.rendered) {
                const root = this._shadowRoot;
                if (state.renderedMode === 'svg') {
                    // Update root node
                    try {
                        root.lastChild.setCurrentTime(0);
                        return;
                    }
                    catch (err) {
                        // Failed: setCurrentTime() is not supported
                    }
                }
                renderIcon(root, state);
            }
        }
        /**
         * Get status
         */
        get status() {
            const state = this._state;
            return state.rendered
                ? 'rendered'
                : state.icon.data === null
                    ? 'failed'
                    : 'loading';
        }
        /**
         * Queue attributes re-check
         */
        _queueCheck() {
            if (!this._checkQueued) {
                this._checkQueued = true;
                setTimeout(() => {
                    this._check();
                });
            }
        }
        /**
         * Check for changes
         */
        _check() {
            if (!this._checkQueued) {
                return;
            }
            this._checkQueued = false;
            const state = this._state;
            // Get icon
            const newIcon = this.getAttribute('icon');
            if (newIcon !== state.icon.value) {
                this._iconChanged(newIcon);
                return;
            }
            // Ignore other attributes if icon is not rendered
            if (!state.rendered) {
                return;
            }
            // Check for mode and attribute changes
            const mode = this.getAttribute('mode');
            const customisations = getCustomisations(this);
            if (state.attrMode !== mode ||
                haveCustomisationsChanged(state.customisations, customisations)) {
                this._renderIcon(state.icon, customisations, mode);
            }
        }
        /**
         * Icon value has changed
         */
        _iconChanged(newValue) {
            const icon = parseIconValue(newValue, (value, name, data) => {
                // Asynchronous callback: re-check values to make sure stuff wasn't changed
                const state = this._state;
                if (state.rendered || this.getAttribute('icon') !== value) {
                    // Icon data is already available or icon attribute was changed
                    return;
                }
                // Change icon
                const icon = {
                    value,
                    name,
                    data,
                };
                if (icon.data) {
                    // Render icon
                    this._gotIconData(icon);
                }
                else {
                    // Nothing to render: update icon in state
                    state.icon = icon;
                }
            });
            if (icon.data) {
                // Icon is ready to render
                this._gotIconData(icon);
            }
            else {
                // Pending icon
                this._state = setPendingState(icon, this._state.inline, this._state);
            }
        }
        /**
         * Got new icon data, icon is ready to (re)render
         */
        _gotIconData(icon) {
            this._checkQueued = false;
            this._renderIcon(icon, getCustomisations(this), this.getAttribute('mode'));
        }
        /**
         * Re-render based on icon data
         */
        _renderIcon(icon, customisations, attrMode) {
            // Get mode
            const renderedMode = getRenderMode(icon.data.body, attrMode);
            // Inline was not changed
            const inline = this._state.inline;
            // Set state and render
            renderIcon(this._shadowRoot, (this._state = {
                rendered: true,
                icon,
                inline,
                customisations,
                attrMode,
                renderedMode,
            }));
        }
    };
    // Add getters and setters
    attributes.forEach((attr) => {
        if (!(attr in IconifyIcon.prototype)) {
            Object.defineProperty(IconifyIcon.prototype, attr, {
                get: function () {
                    return this.getAttribute(attr);
                },
                set: function (value) {
                    this.setAttribute(attr, value);
                },
            });
        }
    });
    // Add exported functions: both as static and instance methods
    const functions = exportFunctions();
    for (const key in functions) {
        IconifyIcon[key] = IconifyIcon.prototype[key] = functions[key];
    }
    // Define new component
    customElements.define(name, IconifyIcon);
    return IconifyIcon;
}

/**
 * Create exported data: either component instance or functions
 */
const IconifyIconComponent = defineIconifyIcon() || exportFunctions();
/**
 * Export functions
 */
const { enableCache, disableCache, iconExists, getIcon, listIcons, addIcon, addCollection, calculateSize, buildIcon, loadIcons, loadIcon, addAPIProvider, _api, } = IconifyIconComponent;




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/render */ "./src/components/render.js");

(0,_components_render__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSUFBc0k7QUFDdEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixZQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFFBQVE7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG1CQUFtQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLFlBQVkseUJBQXlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLFlBQVksbUJBQW1CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxQkFBcUI7QUFDcEM7QUFDQSxjQUFjLFNBQVMsY0FBYztBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwwSkFBMEo7O0FBRXNCOzs7Ozs7O1VDeG5FeEw7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXlDO0FBRXpDc0UsOERBQU0sRUFBRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9iYWNrZ3JvdW5kL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9kaWFsb2cuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL21haW4vY2xvY2suanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9tYWluL2xvY2F0aW9uSW5wdXQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9tYWluL21haW4uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9tYWluL3dlYXRoZXJEaXNwbGF5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvcmVuZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Z1bmN0aW9ucy9jYWxsT3BlblN0cmVldE1hcC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mdW5jdGlvbnMvY2FsbE9wZW5XZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Z1bmN0aW9ucy9oZWxwZXJzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS1jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2RpYWxvZy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9tYWluL2xvYWRpbmcuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLWNzcy9ub3JtYWxpemUuY3NzP2M3MDQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9kaWFsb2cuY3NzP2ViMzYiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9tYWluL2xvYWRpbmcuY3NzP2ZiODQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hc3NldHMvaW1hZ2VzL3dlYXRoZXItcGhvdG9zLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC5qcGckIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2ljb25pZnktaWNvbi9kaXN0L2ljb25pZnktaWNvbi5tanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kJyk7XHJcbiAgY29uc3QgaW1nT2JqID0ge307XHJcbiAgY29uc3QgaW1wb3J0QWxsID0gKHIpID0+IHtcclxuICAgIGNvbnN0IGtleXMgPSByLmtleXMoKTtcclxuICAgIGNvbnN0IHVybHMgPSByLmtleXMoKS5tYXAocik7XHJcbiAgICByZXR1cm4gdXJscy5mb3JFYWNoKCh1cmwsIGkpID0+IHtcclxuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXS5yZXBsYWNlKC8uXFwvfC5qcGcvZywgJycpO1xyXG4gICAgICBpbWdPYmpba2V5XSA9IHVybDtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgaW1wb3J0QWxsKCAvLyBpbXBvcnQgYWxsIGJhY2tncm91bmQgaW1hZ2VzXHJcbiAgICByZXF1aXJlLmNvbnRleHQoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvd2VhdGhlci1waG90b3MnLCBmYWxzZSwgL1xcLmpwZyQvKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZUJhY2tncm91bmQgPSAodXJsKSA9PiB7XHJcbiAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3VybH0pYDtcclxuICB9O1xyXG5cclxuICBjaGFuZ2VCYWNrZ3JvdW5kKGltZ09ialsnMDNkJ10pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY29udGFpbmVyLFxyXG4gICAgY2hhbmdlQmFja2dyb3VuZCxcclxuICAgIGltYWdlczogaW1nT2JqLFxyXG4gIH07XHJcbn0pKCk7XHJcbiIsImltcG9ydCAnLi9kaWFsb2cuY3NzJztcclxuXHJcbmNvbnN0IGNvbmZpcm1Nb2RhbCA9IGFzeW5jIChvcHRpb25zKSA9PiB7XHJcbiAgY29uc3QgYm94ID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1tb2RhbCcpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBvcHRpb25zPy50aXRsZSB8fCAnQ29uZmlybS4uLic7XHJcbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gb3B0aW9ucz8ubWVzc2FnZSB8fCAnJztcclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZW51Jyk7XHJcbiAgICBjb25zdCB5ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHllcy50ZXh0Q29udGVudCA9IG9wdGlvbnM/LnllcyB8fCAnWWVzJztcclxuICAgIGNvbnN0IG5vID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBuby50ZXh0Q29udGVudCA9IG9wdGlvbnM/Lm5vIHx8ICdObyc7XHJcblxyXG4gICAgbWVudS5hcHBlbmQoeWVzKTtcclxuICAgIGlmICghb3B0aW9ucz8uaGlkZU5vKSBtZW51LmFwcGVuZChubyk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKHRpdGxlLCBtZXNzYWdlLCBtZW51KTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChjb250YWluZXIpO1xyXG5cclxuICAgIHJldHVybiB7IGNvbnRhaW5lciwgeWVzLCBubyB9O1xyXG4gIH0pKCk7XHJcbiAgYm94LmNvbnRhaW5lci5zaG93TW9kYWwoKTtcclxuXHJcbiAgY29uc3QgaGlkZUJveCA9ICgpID0+IHtcclxuICAgIGJveC5jb250YWluZXIuY2xvc2UoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgIGJveC55ZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgIGhpZGVCb3goKTtcclxuICAgIH0pO1xyXG4gICAgYm94Lm5vLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgaGlkZUJveCgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maXJtTW9kYWw7XHJcbiIsImltcG9ydCB7IGljb24sIGNyZWF0ZUxpbmsgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvaGVscGVycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gIGNvbnN0IGNyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBjb25zdCBnaXRodWIgPSBjcmVhdGVMaW5rKHtcclxuICAgIHRleHQ6IGljb24oJ21kaTpnaXRodWInKSxcclxuICAgIGhyZWY6ICdodHRwczovL2dpdGh1Yi5jb20vZ2luYWhlbmQ5NCcsXHJcbiAgICB0aXRsZTogJ0dpdEh1YicsXHJcbiAgfSk7XHJcbiAgY29uc3Qgd2ViID0gY3JlYXRlTGluayh7XHJcbiAgICB0ZXh0OiBpY29uKCdtZGk6d2ViJyksXHJcbiAgICBocmVmOiAnaHR0cHM6Ly9naW5haGVuZGVyc29uLm1lJyxcclxuICAgIHRpdGxlOiAnUGVyc29uYWwgd2Vic2l0ZScsXHJcbiAgfSk7XHJcbiAgY3JlZGl0LmlubmVySFRNTCA9XHJcbiAgICAnQ3JlYXRlZCBieSA8YSBocmVmPVwiaHR0cHM6Ly9naW5haGVuZGVyc29uLm1lXCIgdGFyZ2V0PVwiX2JsYW5rXCI+R2luYSBIZW5kZXJzb248L2E+Lic7XHJcbiAgY29udGFpbmVyLmFwcGVuZChjcmVkaXQsIGdpdGh1Yiwgd2ViKTtcclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59KSgpO1xyXG4iLCJpbXBvcnQgY2xvY2sgZnJvbSAnLi4vbWFpbi9jbG9jayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICB0aXRsZS50ZXh0Q29udGVudCA9ICd3ZWF0aGVyJztcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZChcclxuICAgIHRpdGxlLFxyXG4gICAgY2xvY2soKSxcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICBjb250YWluZXIsXHJcbiAgfTtcclxufSkoKTtcclxuIiwiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHRpbWV6b25lID0gJycpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2xvY2snKTtcclxuICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmQodGltZSk7XHJcblxyXG4gIGNvbnN0IGNvbnZlcnRUaW1lem9uZSA9IChvZmZzZXQpID0+IHtcclxuICAgIGNvbnN0IHVzZXJPZmZzZXQgPSAobmV3IERhdGUoKSkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwO1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKCgob2Zmc2V0ICsgdXNlck9mZnNldCArIERhdGUubm93KCkgLyAxMDAwKSAqIDEwMDApKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVDbG9jayA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIGlmICh0eXBlb2YgdGltZXpvbmUgPT09ICdudW1iZXInKSB7IC8vIGFsbG93cyAwIHRvIGJlIHBhc3NlZCBpblxyXG4gICAgICB0aW1lLnRleHRDb250ZW50ID0gZm9ybWF0KGNvbnZlcnRUaW1lem9uZSh0aW1lem9uZSksICdwJykudG9Mb3dlckNhc2UoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRpbWUudGV4dENvbnRlbnQgPSBmb3JtYXQodG9kYXksICdwJykudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHVwZGF0ZUNsb2NrKCk7XHJcbiAgc2V0SW50ZXJ2YWwodXBkYXRlQ2xvY2ssIDEwKTtcclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBnZXRVc2VyTG9jYXRpb24sIGdldFdlYXRoZXIgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvY2FsbE9wZW5XZWF0aGVyJztcclxuaW1wb3J0IHsgZ2V0TG9jYXRpb24gfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvY2FsbE9wZW5TdHJlZXRNYXAnO1xyXG5pbXBvcnQgd2VhdGhlckRpc3BsYXksIHsgZGlzcGxheURhdGEgfSBmcm9tICcuL3dlYXRoZXJEaXNwbGF5JztcclxuaW1wb3J0IHsgaGlkZUVsZW1lbnQgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvaGVscGVycyc7XHJcbmltcG9ydCAnLi9sb2FkaW5nLmNzcyc7XHJcblxyXG5jb25zdCBsb2NhdGlvblNlYXJjaCA9ICgoKSA9PiB7XHJcbiAgY29uc3QgbG9jYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgY29uc3QgYXV0b2NvbXBsZXRlQ29udGFpbmVyID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2F1dG9jb21wbGV0ZS1jb250YWluZXInKTtcclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgfSkoKTtcclxuXHJcbiAgY29uc3Qgc2hvd0NvbnRhaW5lciA9ICgpID0+IChhdXRvY29tcGxldGVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jaycpO1xyXG4gIGNvbnN0IGhpZGVDb250YWluZXIgPSAoKSA9PiAoYXV0b2NvbXBsZXRlQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpO1xyXG5cclxuICBjb25zdCBmb3JtID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbGV0IHF1ZXJ5O1xyXG5cclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbi1pbnB1dCcpO1xyXG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgYSBsb2NhdGlvbic7XHJcbiAgICBzdWJtaXQudGV4dENvbnRlbnQgPSAnR28nO1xyXG5cclxuICAgIGNvbnN0IGdldElucHV0ID0gKCkgPT4gaW5wdXQudmFsdWU7XHJcbiAgICBjb25zdCBzZXRJbnB1dCA9ICh0ZXh0KSA9PiAoaW5wdXQudmFsdWUgPSB0ZXh0KTtcclxuICAgIGNvbnN0IGdldFF1ZXJ5ID0gKCkgPT4gcXVlcnk7XHJcbiAgICBjb25zdCBzZXRRdWVyeSA9IChsb2NhdGlvbikgPT4gKHF1ZXJ5ID0gbG9jYXRpb24pO1xyXG4gICAgY29uc3Qgc2V0UXVlcnlBbmRJbnB1dCA9IChsb2NhdGlvbikgPT4ge1xyXG4gICAgICBzZXRRdWVyeShsb2NhdGlvbik7XHJcbiAgICAgIHNldElucHV0KGxvY2F0aW9uLmRpc3BsYXlfbmFtZSB8fCBsb2NhdGlvbik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEZvcm0gPSAoZSkgPT4ge1xyXG4gICAgICBoaWRlQ29udGFpbmVyKCk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKCFnZXRRdWVyeSgpKSByZXR1cm47IC8vIGNhbmNlbCBpZiB0aGVyZSdzIG5vIHF1ZXJ5XHJcbiAgICAgIC8vIENhbGwgd2VhdGhlciBBUElcclxuICAgICAgd2VhdGhlckRpc3BsYXkuY2xlYXJPdXRwdXRzKCk7XHJcbiAgICAgIGdldFdlYXRoZXIoZ2V0UXVlcnkoKSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgZGlzcGxheURhdGEocmVzKTtcclxuICAgICAgICBzZXRJbnB1dCgnJyk7IC8vIGNsZWFyIGlucHV0IGFmdGVyXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLmtleSAhPT0gJ0VudGVyJykgcmV0dXJuOyAvLyBjYW5jZWwgaWYgbm90IHRyeWluZyB0byBzdWJtaXRcclxuICAgICAgaWYgKCFnZXRJbnB1dCgpKSByZXR1cm47IC8vIGNhbmNlbCBpZiBpbnB1dCBpcyBlbXB0eVxyXG4gICAgICBpZiAoIWdldFF1ZXJ5KCkpIHNldFF1ZXJ5KGdldElucHV0KCkpOyAvLyBzZXQgcXVlcnkgdG8gd2hhdCB3YXMgdHlwZWRcclxuICAgICAgc3VibWl0Rm9ybShlKTtcclxuICAgIH0pO1xyXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgIHN1Ym1pdEZvcm0oZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgc2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLmtleSAhPT0gJ0Fycm93RG93bicgJiYgZS5rZXkgIT09ICdBcnJvd1VwJyAmJiBlLmtleSAhPT0gJ0VudGVyJykgcmV0dXJuO1xyXG4gICAgICBpZiAoYXV0b2NvbXBsZXRlQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgIT09ICdibG9jaycpIHJldHVybjsgLy8gY2FuY2VsIGlmIG5vIGF1dG9jb21wbGV0ZSBvcHRpb25zXHJcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiAhc2VsZWN0ZWQpIHJldHVybjsgLy8gY2FuY2VsIGlmIG5vdGhpbmcgaXMgc2VsZWN0ZWRcclxuICAgICAgY29uc3QgbGlzdCA9IFsuLi5hdXRvY29tcGxldGVDb250YWluZXIucXVlcnlTZWxlY3RvcigndWwnKS5jaGlsZHJlbl07XHJcbiAgICAgIGNvbnN0IHVuc2VsZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxpc3QuZm9yRWFjaCgoYSkgPT4gYS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpKTtcclxuICAgICAgICBzZWxlY3RlZCA9IG51bGw7XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHNlbGVjdCA9IChpdGVtKSA9PiB7XHJcbiAgICAgICAgdW5zZWxlY3QoKTtcclxuICAgICAgICBpdGVtPy5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgIHNlbGVjdGVkID0gaXRlbTtcclxuICAgICAgfTtcclxuICAgICAgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIHN0b3AgY3Vyc29yIGZyb20gZ29pbmcgdG8gYmVnaW5uaW5nIG9mIGlucHV0XHJcbiAgICAgICAgaWYgKCFzZWxlY3RlZCkgeyAvLyBub3RoaW5nIGlzIHNlbGVjdGVkXHJcbiAgICAgICAgICBzZWxlY3QobGlzdFtsaXN0Lmxlbmd0aCAtIDFdKTsgLy8gc2VsZWN0IGxhc3QgaXRlbVxyXG4gICAgICAgIH0gZWxzZSBpZiAoKHNlbGVjdGVkID09PSBsaXN0WzBdKSkgeyAvLyBmaXJzdCBpdGVtIGlzIHNlbGVjdGVkXHJcbiAgICAgICAgICB1bnNlbGVjdCgpO1xyXG4gICAgICAgICAgaW5wdXQuZm9jdXMoKTtcclxuICAgICAgICB9IGVsc2UgeyAvLyBhbnkgb3RoZXIgaXRlbSBpcyBzZWxlY3RlZFxyXG4gICAgICAgICAgc2VsZWN0KHNlbGVjdGVkLnByZXZpb3VzU2libGluZyB8fCBudWxsKTsgLy8gaWYgbm8gcHJldmlvdXMgc2libGluZywgdW5zZWxlY3RcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykge1xyXG4gICAgICAgIGlmICghc2VsZWN0ZWQpIHtcclxuICAgICAgICAgIHNlbGVjdChsaXN0WzBdKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkID09PSBsaXN0W2xpc3QubGVuZ3RoIC0gMV0pIHtcclxuICAgICAgICAgIHVuc2VsZWN0KCk7XHJcbiAgICAgICAgICBpbnB1dC5mb2N1cygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZWxlY3Qoc2VsZWN0ZWQubmV4dFNpYmxpbmcgfHwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgIHNlbGVjdGVkLmNsaWNrKCk7IC8vIGNob29zZSBzZWxlY3RlZCBpdGVtXHJcbiAgICAgICAgdW5zZWxlY3QoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXHJcbiAgICAgIGF1dG9jb21wbGV0ZS5zdGFydCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZChpbnB1dCwgc3VibWl0KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb250YWluZXIsXHJcbiAgICAgIGdldElucHV0LFxyXG4gICAgICBnZXRRdWVyeSxcclxuICAgICAgc2V0UXVlcnlBbmRJbnB1dCxcclxuICAgIH07XHJcbiAgfSkoKTtcclxuICBjb25zdCB1c2VNeUxvY2F0aW9uID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3VzZS1sb2NhdGlvbicpO1xyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1VzZSBteSBsb2NhdGlvbic7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZXRVc2VyTG9jYXRpb24pO1xyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxuICB9KSgpO1xyXG5cclxuICBsb2NhdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbi1zZWFyY2gnKTtcclxuICBsb2NhdGlvbkNvbnRhaW5lci5hcHBlbmQoXHJcbiAgICBmb3JtLmNvbnRhaW5lcixcclxuICAgIGF1dG9jb21wbGV0ZUNvbnRhaW5lcixcclxuICAgIHVzZU15TG9jYXRpb25cclxuICApO1xyXG5cclxuICAvLyBUT0RPIC0gYWRkIGFycm93IGZ1bmN0aW9uYWxpdHkgZm9yIHNlbGVjdGluZyBhdXRvY29tcGxldGVcclxuICBjb25zdCBhdXRvY29tcGxldGUgPSAoKCkgPT4ge1xyXG4gICAgbGV0IHRpbWVvdXQ7XHJcblxyXG4gICAgLy8gd2hlbiB0aW1lb3V0IGVuZHMsIHNob3cgcmVzdWx0c1xyXG4gICAgY29uc3Qgc2hvd1Jlc3VsdHMgPSAobGlzdCkgPT4ge1xyXG4gICAgICBjb25zdCBjb250YWluZXIgPSBhdXRvY29tcGxldGVDb250YWluZXI7XHJcbiAgICAgIC8vIGNyZWF0ZSB1bCBmb3IgYXV0b2NvbXBsZXRlIGxpc3RcclxuICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICB1bC5jbGFzc0xpc3QuYWRkKCdhdXRvY29tcGxldGUtbGlzdCcsICdURVNUJyk7XHJcbiAgICAgIGhpZGVFbGVtZW50KHVsLCAnLmF1dG9jb21wbGV0ZS1saXN0Jyk7XHJcblxyXG4gICAgICAvLyByZW1vdmUgb2xkIHJlc3VsdHMgYW5kIGFkZCBuZXdcclxuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kKHVsKTtcclxuXHJcbiAgICAgIC8vIGNsb3NlIGJveCBpZiBubyBpbnB1dFxyXG4gICAgICBpZiAoIWZvcm0uZ2V0SW5wdXQoKS50cmltKCkpIHtcclxuICAgICAgICByZXR1cm4gaGlkZUNvbnRhaW5lcigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBvdGhlcndpc2UsIHNob3cgYm94IGlmIGNsb3NlZFxyXG4gICAgICBzaG93Q29udGFpbmVyKCk7XHJcblxyXG4gICAgICBjb25zdCBsaXN0UGxhY2Vob2xkZXIgPSAodGV4dCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5vUmVzdWx0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgbm9SZXN1bHRzLmNsYXNzTGlzdC5hZGQoJ25vLWhvdmVyJywgJ2F1dG9jb21wbGV0ZS1pdGVtJyk7XHJcbiAgICAgICAgbm9SZXN1bHRzLmFwcGVuZCh0ZXh0KTtcclxuICAgICAgICB1bC5hcHBlbmQobm9SZXN1bHRzKTtcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgbG9hZGluZ1RleHQgPSAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgdGV4dC5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nLWluZGljYXRvcicpO1xyXG4gICAgICAgIHRleHQuaW5uZXJIVE1MID1cclxuICAgICAgICAgICdMb2FkaW5nPHNwYW4gY2xhc3M9XCJkb3RcIj4uPC9zcGFuPjxzcGFuIGNsYXNzPVwiZG90XCI+Ljwvc3Bhbj48c3BhbiBjbGFzcz1cImRvdFwiPi48L3NwYW4+JztcclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgfSkoKTtcclxuXHJcbiAgICAgIGlmIChsaXN0ID09PSAnbG9hZGluZycpIHtcclxuICAgICAgICByZXR1cm4gbGlzdFBsYWNlaG9sZGVyKGxvYWRpbmdUZXh0KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFsaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIGxpc3RQbGFjZWhvbGRlcignTm8gbG9jYXRpb25zIGZvdW5kLicpO1xyXG4gICAgICB9XHJcbiAgICAgIGxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIC8vIGNyZWF0ZSBsaSBlbGVtZW50IGZvciBlYWNoIGl0ZW1cclxuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgdWwuYXBwZW5kKGxpKTtcclxuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCdhdXRvY29tcGxldGUtaXRlbScpO1xyXG4gICAgICAgIGxpLnRleHRDb250ZW50ID0gaXRlbS5kaXNwbGF5X25hbWU7XHJcbiAgICAgICAgbGkuZGF0YXNldC5sYXQgPSBpdGVtLmxhdDtcclxuICAgICAgICBsaS5kYXRhc2V0LmxvbiA9IGl0ZW0ubG9uO1xyXG4gICAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgZm9ybS5zZXRRdWVyeUFuZElucHV0KGl0ZW0pO1xyXG4gICAgICAgICAgaGlkZUNvbnRhaW5lcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBoaWRlQ29udGFpbmVyLFxyXG4gICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBvbiBpbnB1dCBzdGFydCB0aW1lb3V0XHJcbiAgICBjb25zdCBuZXdUaW1lb3V0ID0gKCkgPT4ge1xyXG4gICAgICBzaG93UmVzdWx0cygnbG9hZGluZycpO1xyXG4gICAgICBpZiAoIWZvcm0uZ2V0SW5wdXQoKSkge1xyXG4gICAgICAgIHJldHVybiBzaG93UmVzdWx0cygpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyBtYWtlIGFwaSBjYWxsXHJcbiAgICAgICAgZ2V0TG9jYXRpb24oZm9ybS5nZXRJbnB1dCgpKS50aGVuKChyZXMpID0+IHNob3dSZXN1bHRzKHJlcykpO1xyXG4gICAgICB9LCA2MDApO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBpZiBtb3JlIGlucHV0LCBjbGVhciB0aW1lb3V0XHJcbiAgICBjb25zdCByZXNldFRpbWVvdXQgPSAoKSA9PiB7XHJcbiAgICAgIGlmICghdGltZW91dCkgcmV0dXJuO1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBzdGFydCBuZXcgdGltZW91dFxyXG4gICAgY29uc3QgcmVzdGFydFRpbWVvdXQgPSAoKSA9PiB7XHJcbiAgICAgIHJlc2V0VGltZW91dCgpO1xyXG4gICAgICB0aW1lb3V0ID0gbmV3VGltZW91dCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBoaWRlQ29udGFpbmVyLFxyXG4gICAgICBzdGFydDogcmVzdGFydFRpbWVvdXQsXHJcbiAgICB9O1xyXG4gIH0pKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB3ZWF0aGVyOiBmb3JtLndlYXRoZXIsXHJcbiAgICBjb250YWluZXI6IGxvY2F0aW9uQ29udGFpbmVyLFxyXG4gIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2NhdGlvblNlYXJjaDtcclxuIiwiaW1wb3J0IHdlYXRoZXJEaXNwbGF5IGZyb20gJy4vd2VhdGhlckRpc3BsYXknO1xyXG5pbXBvcnQgbG9jYXRpb25JbnB1dCBmcm9tICcuL2xvY2F0aW9uSW5wdXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgY29udGFpbmVyLmFwcGVuZChcclxuICAgIGxvY2F0aW9uSW5wdXQuY29udGFpbmVyLFxyXG4gICAgd2VhdGhlckRpc3BsYXkuY29udGFpbmVyLFxyXG4gICk7XHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufSkoKTtcclxuIiwiaW1wb3J0IGxvYWRpbmcgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2FkaW5nX2NpcmNsZS5naWYnO1xyXG5pbXBvcnQgYmFja2dyb3VuZCBmcm9tICcuLi9iYWNrZ3JvdW5kL2JhY2tncm91bmQnO1xyXG5pbXBvcnQgeyBzYXZlLCBsb2FkIH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zL2hlbHBlcnMnO1xyXG5pbXBvcnQgY2xvY2sgZnJvbSAnLi9jbG9jayc7XHJcblxyXG5jb25zdCB3ZWF0aGVyRGlzcGxheSA9ICgoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgbG9jYXRpb25PdXB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgY29uc3QgY2xvY2tPdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBjdXJyZW50VGVtcE91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgY29uc3Qgc2NhbGVPdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgY29uc3Qgd2VhdGhlckltZ091dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uT3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IGhpZ2hPdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgY29uc3QgbG93T3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGNvbnN0IGhpTG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB1bml0U2xpZGVyID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNvbnN0IGNlbHNpdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBjb25zdCBmYWhyZW5oZWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3VuaXQtc2xpZGVyJyk7XHJcbiAgICBpbnB1dC50eXBlID0gJ2NoZWNrYm94JztcclxuICAgIHNsaWRlci5jbGFzc0xpc3QuYWRkKCdzbGlkZXInKTtcclxuICAgIGNlbHNpdXMudGV4dENvbnRlbnQgPSAnQ2Vsc2l1cyc7XHJcbiAgICBjZWxzaXVzLmNsYXNzTGlzdC5hZGQoJ2NlbHNpdXMnKTtcclxuICAgIGZhaHJlbmhlaXQudGV4dENvbnRlbnQgPSAnRmFocmVuaGVpdCc7XHJcbiAgICBmYWhyZW5oZWl0LmNsYXNzTGlzdC5hZGQoJ2ZhaHJlbmhlaXQnKTtcclxuXHJcbiAgICBpZiAoIWxvYWQoJ3VuaXRzJykpIHtcclxuICAgICAgc2F2ZSgndW5pdHMnLCBpbnB1dC5jaGVja2VkKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHVuaXRzID0gbG9hZCgndW5pdHMnKTtcclxuICAgIGlucHV0LmNoZWNrZWQgPSB1bml0cztcclxuXHJcbiAgICBjb25zdCBnZXRTY2FsZSA9ICgpID0+IGlucHV0LmNoZWNrZWQ7XHJcbiAgICBjb25zdCBzZXRTY2FsZSA9ICgpID0+IHNhdmUoJ3VuaXRzJywgaW5wdXQuY2hlY2tlZCk7XHJcblxyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzZXRTY2FsZSk7XHJcblxyXG4gICAgc2xpZGVyLmFwcGVuZChjZWxzaXVzLCBmYWhyZW5oZWl0KTtcclxuICAgIGxhYmVsLmFwcGVuZChpbnB1dCwgc2xpZGVyKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsYWJlbCxcclxuICAgICAgZ2V0U2NhbGUsXHJcbiAgICB9O1xyXG4gIH0pKCk7XHJcbiAgY29uc3QgZGVnID0gJ1xcdTAwQjAnO1xyXG5cclxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1kaXNwbGF5Jyk7XHJcbiAgbG9jYXRpb25PdXB1dC5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbicpO1xyXG4gIGN1cnJlbnRUZW1wT3V0cHV0LmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtdGVtcCcpO1xyXG4gIHNjYWxlT3V0cHV0LmNsYXNzTGlzdC5hZGQoJ3NjYWxlJyk7XHJcbiAgd2VhdGhlckltZ091dHB1dC5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWltZycpO1xyXG4gIGRlc2NyaXB0aW9uT3V0cHV0LmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XHJcbiAgaGlnaE91dHB1dC5jbGFzc0xpc3QuYWRkKCdoaWdoJyk7XHJcbiAgaGlnaE91dHB1dC50aXRsZSA9ICdIaWdoJztcclxuICBsb3dPdXRwdXQuY2xhc3NMaXN0LmFkZCgnbG93Jyk7XHJcbiAgbG93T3V0cHV0LnRpdGxlID0gJ0xvdyc7XHJcbiAgaGlMby5jbGFzc0xpc3QuYWRkKCdoaWdoLWxvdycpO1xyXG5cclxuICBjb25zdCBzZXRMb2NhdGlvbk91dHB1dCA9ICh0ZXh0KSA9PiB7XHJcbiAgICBsb2NhdGlvbk91cHV0LnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIGxvY2F0aW9uT3VwdXQudGl0bGUgPSB0ZXh0O1xyXG4gIH07XHJcbiAgY29uc3QgY2xlYXJDbG9ja091dHB1dCA9ICgpID0+IChjbG9ja091dHB1dC5pbm5lckhUTUwgPSAnJyk7XHJcbiAgY29uc3Qgc2V0Q2xvY2tPdXRwdXQgPSAoY291bnRyeUNvZGUpID0+IHtcclxuICAgIGNsZWFyQ2xvY2tPdXRwdXQoKTtcclxuICAgIGNsb2NrT3V0cHV0LmFwcGVuZChjbG9jayhjb3VudHJ5Q29kZSkpO1xyXG4gIH07XHJcbiAgY29uc3Qgc2V0Q3VycmVudFRlbXBPdXRwdXQgPSAodGV4dCkgPT4gKGN1cnJlbnRUZW1wT3V0cHV0LnRleHRDb250ZW50ID0gYCR7dGV4dH0ke2RlZ31gKTtcclxuICBjb25zdCBzZXRTY2FsZU91dHB1dCA9ICh0ZXh0KSA9PiAoc2NhbGVPdXRwdXQudGV4dENvbnRlbnQgPSB0ZXh0KTtcclxuICBjb25zdCBzZXRXZWF0aGVySW1nU3JjID0gKHRleHQpID0+ICh3ZWF0aGVySW1nT3V0cHV0LnNyYyA9IHRleHQpO1xyXG4gIGNvbnN0IHNldFdlYXRoZXJJbWdBbHRUZXh0ID0gKHRleHQpID0+ICh3ZWF0aGVySW1nT3V0cHV0LmFsdCA9IHRleHQpO1xyXG4gIGNvbnN0IHNldFdlYXRoZXJJbWdUaXRsZSA9ICh0ZXh0KSA9PiAod2VhdGhlckltZ091dHB1dC50aXRsZSA9IHRleHQpO1xyXG4gIGNvbnN0IHNldFdlYXRoZXJJbWdBbHRBbmRUaXRsZSA9ICh0ZXh0KSA9PiB7XHJcbiAgICBzZXRXZWF0aGVySW1nQWx0VGV4dCh0ZXh0KTtcclxuICAgIHNldFdlYXRoZXJJbWdUaXRsZSh0ZXh0KTtcclxuICB9O1xyXG4gIGNvbnN0IHNldERlc2NyaXB0aW9uT3V0cHV0ID0gKHRleHQpID0+IChkZXNjcmlwdGlvbk91dHB1dC50ZXh0Q29udGVudCA9IHRleHQudG9Mb3dlckNhc2UoKSk7XHJcbiAgY29uc3Qgc2V0SGlnaE91dHB1dCA9ICh0ZXh0KSA9PiAoaGlnaE91dHB1dC50ZXh0Q29udGVudCA9IGAke3RleHR9JHtkZWd9YCk7XHJcbiAgY29uc3Qgc2V0TG93T3V0cHV0ID0gKHRleHQpID0+IChsb3dPdXRwdXQudGV4dENvbnRlbnQgPSBgJHt0ZXh0fSR7ZGVnfWApO1xyXG5cclxuICBjb25zdCBjbGVhck91dHB1dHMgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2NhdGlvbk91dHB1dCgnJyk7XHJcbiAgICBjbGVhckNsb2NrT3V0cHV0KCk7XHJcbiAgICBzZXRDdXJyZW50VGVtcE91dHB1dCgnJyk7XHJcbiAgICBzZXRTY2FsZU91dHB1dCgnJyk7XHJcbiAgICBzZXRXZWF0aGVySW1nU3JjKGxvYWRpbmcpO1xyXG4gICAgc2V0V2VhdGhlckltZ0FsdEFuZFRpdGxlKCdMb2FkaW5nLi4uJyk7XHJcbiAgICBzZXREZXNjcmlwdGlvbk91dHB1dCgnTG9hZGluZy4uLicpO1xyXG4gICAgc2V0SGlnaE91dHB1dCgnJyk7XHJcbiAgICBzZXRMb3dPdXRwdXQoJycpO1xyXG4gIH07XHJcblxyXG4gIHNldExvY2F0aW9uT3V0cHV0KCdBbnl0b3duLCBVbml0ZWQgU3RhdGVzJyk7XHJcbiAgc2V0Q2xvY2tPdXRwdXQoLTE4MDAwKTtcclxuICBzZXRDdXJyZW50VGVtcE91dHB1dCgnNjAnKTtcclxuICBzZXRTY2FsZU91dHB1dCgnRicpO1xyXG4gIHNldFdlYXRoZXJJbWdTcmMoJ2h0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLzAxZEAyeC5wbmcnKTtcclxuICBzZXRXZWF0aGVySW1nQWx0QW5kVGl0bGUoJ0NsZWFyJyk7XHJcbiAgc2V0RGVzY3JpcHRpb25PdXRwdXQoJ0NsZWFyIHNraWVzJyk7XHJcbiAgc2V0SGlnaE91dHB1dCgnNzUnKTtcclxuICBzZXRMb3dPdXRwdXQoJzU1Jyk7XHJcblxyXG4gIGhpTG8uYXBwZW5kKGhpZ2hPdXRwdXQsICcgLyAnLCBsb3dPdXRwdXQpO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kKFxyXG4gICAgbG9jYXRpb25PdXB1dCxcclxuICAgIGNsb2NrT3V0cHV0LFxyXG4gICAgY3VycmVudFRlbXBPdXRwdXQsXHJcbiAgICBoaUxvLFxyXG4gICAgd2VhdGhlckltZ091dHB1dCxcclxuICAgIGRlc2NyaXB0aW9uT3V0cHV0LFxyXG4gICAgdW5pdFNsaWRlci5sYWJlbCxcclxuICApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY29udGFpbmVyLFxyXG4gICAgc2V0TG9jYXRpb25PdXRwdXQsXHJcbiAgICBzZXRDbG9ja091dHB1dCxcclxuICAgIHNldEN1cnJlbnRUZW1wT3V0cHV0LFxyXG4gICAgc2V0U2NhbGVPdXRwdXQsXHJcbiAgICBzZXRXZWF0aGVySW1nU3JjLFxyXG4gICAgc2V0V2VhdGhlckltZ0FsdEFuZFRpdGxlLFxyXG4gICAgc2V0RGVzY3JpcHRpb25PdXRwdXQsXHJcbiAgICBzZXRIaWdoT3V0cHV0LFxyXG4gICAgc2V0TG93T3V0cHV0LFxyXG4gICAgY2xlYXJPdXRwdXRzLFxyXG4gICAgdW5pdFNsaWRlcixcclxuICB9O1xyXG59KSgpO1xyXG5cclxuLy8gRGlzcGxheSBkYXRhXHJcbmNvbnN0IGRpc3BsYXlEYXRhID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgIGxhdDogcmVzcG9uc2Uud2VhdGhlci5jb29yZC5sYXQsXHJcbiAgICBsb246IHJlc3BvbnNlLndlYXRoZXIuY29vcmQubG9uLFxyXG4gICAgbWFpbjogcmVzcG9uc2Uud2VhdGhlci53ZWF0aGVyWzBdLm1haW4sXHJcbiAgICBkZXNjcmlwdGlvbjogcmVzcG9uc2Uud2VhdGhlci53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxyXG4gICAgdGVtcDogcmVzcG9uc2Uud2VhdGhlci5tYWluLnRlbXAsXHJcbiAgICBoaWdoOiByZXNwb25zZS53ZWF0aGVyLm1haW4udGVtcF9tYXgsXHJcbiAgICBsb3c6IHJlc3BvbnNlLndlYXRoZXIubWFpbi50ZW1wX21pbixcclxuICAgIHN1bnJpc2U6IHJlc3BvbnNlLndlYXRoZXIuc3lzLnN1bnJpc2UsXHJcbiAgICBzdW5zZXQ6IHJlc3BvbnNlLndlYXRoZXIuc3lzLnN1bnNldCxcclxuICAgIGxvY2F0aW9uTmFtZTogcmVzcG9uc2Uud2VhdGhlci5uYW1lLFxyXG4gICAgaWNvbjogcmVzcG9uc2Uud2VhdGhlci53ZWF0aGVyWzBdLmljb24sXHJcbiAgICBjaXR5OiByZXNwb25zZS5sb2NhdGlvbi5hZGRyZXNzPy5jaXR5IHx8IG51bGwsXHJcbiAgICBtdW5pY2lwYWxpdHk6IHJlc3BvbnNlLmxvY2F0aW9uLm11bmljaXBhbGl0eSB8fCBudWxsLFxyXG4gICAgc3VidXJiOiByZXNwb25zZS5sb2NhdGlvbi5hZGRyZXNzPy5zdWJ1cmIgfHwgbnVsbCxcclxuICAgIHRvd246IHJlc3BvbnNlLmxvY2F0aW9uLmFkZHJlc3M/LnRvd24gfHwgbnVsbCxcclxuICAgIHZpbGxhZ2U6IHJlc3BvbnNlLmxvY2F0aW9uLmFkZHJlc3M/LnZpbGxhZ2UgfHwgbnVsbCxcclxuICAgIHN0YXRlOiByZXNwb25zZS5sb2NhdGlvbi5hZGRyZXNzPy5zdGF0ZSB8fCBudWxsLFxyXG4gICAgY291bnRyeTogcmVzcG9uc2UubG9jYXRpb24uYWRkcmVzcz8uY291bnRyeSxcclxuICAgIHRpbWV6b25lOiByZXNwb25zZS53ZWF0aGVyLnRpbWV6b25lLFxyXG4gIH07XHJcblxyXG4gIC8vIGNoZWNrZWQgaXMgRiwgdW5jaGVja2VkIGlzIENcclxuICBjb25zdCBzY2FsZSA9ICgpID0+ICh3ZWF0aGVyRGlzcGxheS51bml0U2xpZGVyLmdldFNjYWxlKCkgPyAnZicgOiAnYycpO1xyXG5cclxuICAvLyBjb252ZXJ0IGluIGFwcCB0byBsaW1pdCBBUEkgY2FsbHNcclxuICBjb25zdCBjb252ZXJ0VW5pdHMgPSAoa2VsdmluKSA9PiB7XHJcbiAgICBjb25zdCBjID0gTWF0aC5yb3VuZChrZWx2aW4gLSAyNzMuMTUpO1xyXG4gICAgY29uc3QgZiA9IE1hdGgucm91bmQoMS44ICogYyArIDMyKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGYsXHJcbiAgICAgIGMsXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbnZlcnRlZFRlbXAgPSAoKCkgPT4gY29udmVydFVuaXRzKGRhdGEudGVtcCkpKCk7XHJcbiAgY29uc3QgY29udmVydGVkSGlnaCA9ICgoKSA9PiBjb252ZXJ0VW5pdHMoZGF0YS5oaWdoKSkoKTtcclxuICBjb25zdCBjb252ZXJ0ZWRMb3cgPSAoKCkgPT4gY29udmVydFVuaXRzKGRhdGEubG93KSkoKTtcclxuXHJcbiAgY29uc3QgbG9jYXRpb25TdHJpbmcgPSAoKCkgPT4ge1xyXG4gICAgbGV0IGE7XHJcbiAgICBsZXQgYjtcclxuXHJcbiAgICBpZiAoZGF0YS5jaXR5KSB7XHJcbiAgICAgIGEgPSBgJHtkYXRhLmNpdHl9LCBgO1xyXG4gICAgfSBlbHNlIGlmIChkYXRhLnZpbGxhZ2UpIHtcclxuICAgICAgYSA9IGAke2RhdGEudmlsbGFnZX0sIGA7XHJcbiAgICB9IGVsc2UgaWYgKGRhdGEudG93bikge1xyXG4gICAgICBhID0gYCR7ZGF0YS50b3dufSwgYDtcclxuICAgIH0gZWxzZSBpZiAoZGF0YS5zdWJ1cmIpIHtcclxuICAgICAgYSA9IGAke2RhdGEuc3VidXJifSwgYDtcclxuICAgIH0gZWxzZSBpZiAoZGF0YS5tdW5pY2lwYWxpdHkpIHtcclxuICAgICAgYSA9IGAke2RhdGEubXVuaWNpcGFsaXR5fSwgYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGEgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YS5jb3VudHJ5ID09PSAnVW5pdGVkIFN0YXRlcycgfHwgZGF0YS5zdGF0ZSkge1xyXG4gICAgICBpZiAoIWEpIHJldHVybiBgJHtkYXRhLnN0YXRlfSwgJHtkYXRhLmNvdW50cnl9YDtcclxuICAgICAgYiA9IGRhdGEuc3RhdGU7XHJcbiAgICB9IGVsc2UgaWYgKGRhdGEucmVnaW9uKSB7XHJcbiAgICAgIGIgPSBkYXRhLnJlZ2lvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGIgPSBkYXRhLmNvdW50cnkgfHwgZGF0YS5sb2NhdGlvbk5hbWUgfHwgJyhubyBsb2NhdGlvbiBuYW1lIGF2YWlsYWJsZSknO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGAke2F9JHtifWA7XHJcbiAgfSkoKTtcclxuXHJcbiAgY29uc3Qgc2hvd1dlYXRoZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB1bml0cyA9IHNjYWxlKCk7XHJcbiAgICB3ZWF0aGVyRGlzcGxheS5zZXRMb2NhdGlvbk91dHB1dChsb2NhdGlvblN0cmluZyk7XHJcbiAgICBpZiAodHlwZW9mIGRhdGEudGltZXpvbmUgPT09ICdudW1iZXInKSB3ZWF0aGVyRGlzcGxheS5zZXRDbG9ja091dHB1dChkYXRhLnRpbWV6b25lKTtcclxuICAgIHdlYXRoZXJEaXNwbGF5LnNldEN1cnJlbnRUZW1wT3V0cHV0KGNvbnZlcnRlZFRlbXBbdW5pdHNdKTtcclxuICAgIHdlYXRoZXJEaXNwbGF5LnNldFNjYWxlT3V0cHV0KHVuaXRzKTtcclxuICAgIHdlYXRoZXJEaXNwbGF5LnNldFdlYXRoZXJJbWdTcmMoXHJcbiAgICAgIGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RhdGEuaWNvbn1AMngucG5nYFxyXG4gICAgKTtcclxuICAgIHdlYXRoZXJEaXNwbGF5LnNldFdlYXRoZXJJbWdBbHRBbmRUaXRsZShkYXRhLm1haW4pO1xyXG4gICAgd2VhdGhlckRpc3BsYXkuc2V0RGVzY3JpcHRpb25PdXRwdXQoZGF0YS5kZXNjcmlwdGlvbik7XHJcbiAgICB3ZWF0aGVyRGlzcGxheS5zZXRIaWdoT3V0cHV0KGNvbnZlcnRlZEhpZ2hbdW5pdHNdKTtcclxuICAgIHdlYXRoZXJEaXNwbGF5LnNldExvd091dHB1dChjb252ZXJ0ZWRMb3dbdW5pdHNdKTtcclxuICAgIGJhY2tncm91bmQuY2hhbmdlQmFja2dyb3VuZChiYWNrZ3JvdW5kLmltYWdlc1tkYXRhLmljb25dKTtcclxuICB9O1xyXG5cclxuICB3ZWF0aGVyRGlzcGxheS51bml0U2xpZGVyLmxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgc2hvd1dlYXRoZXIoKTtcclxuICAgIHNhdmUoJ3VuaXRzJywgd2VhdGhlckRpc3BsYXkudW5pdFNsaWRlci5nZXRTY2FsZSgpKTtcclxuICB9KTtcclxuXHJcbiAgc2hvd1dlYXRoZXIoKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdlYXRoZXJEaXNwbGF5O1xyXG5leHBvcnQgeyBkaXNwbGF5RGF0YSB9O1xyXG4iLCJpbXBvcnQgYmFja2dyb3VuZCBmcm9tICcuL2JhY2tncm91bmQvYmFja2dyb3VuZCc7XHJcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0IG1haW4gZnJvbSAnLi9tYWluL21haW4nO1xyXG5pbXBvcnQgZm9vdGVyIGZyb20gJy4vZm9vdGVyL2Zvb3Rlcic7XHJcbmltcG9ydCB7IGRlZmF1bHRXZWF0aGVyIH0gZnJvbSAnLi4vZnVuY3Rpb25zL2NhbGxPcGVuV2VhdGhlcic7XHJcbmltcG9ydCAnbm9ybWFsaXplLWNzcy9ub3JtYWxpemUuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGRlZmF1bHRXZWF0aGVyKCk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoXHJcbiAgICBiYWNrZ3JvdW5kLmNvbnRhaW5lcixcclxuICAgIGhlYWRlci5jb250YWluZXIsXHJcbiAgICBtYWluLFxyXG4gICAgZm9vdGVyLFxyXG4gICk7XHJcbn07XHJcbiIsImNvbnN0IGdldExvY2F0aW9uTmFtZSA9IGFzeW5jIChjb29yZHMpID0+IHtcclxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9ub21pbmF0aW0ub3BlbnN0cmVldG1hcC5vcmcvcmV2ZXJzZT9mb3JtYXQ9anNvbiZsYXQ9JHtjb29yZHMubGF0fSZsb249JHtjb29yZHMubG9ufWA7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICByZXR1cm4ganNvbjtcclxufTtcclxuXHJcbmNvbnN0IGdldExvY2F0aW9uID0gYXN5bmMgKGlucHV0KSA9PiB7XHJcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vbm9taW5hdGltLm9wZW5zdHJlZXRtYXAub3JnL3NlYXJjaD9xPSR7aW5wdXR9JmZvcm1hdD1qc29uJmxpbWl0PTVgO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4ganNvbjtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgZ2V0TG9jYXRpb24sIGdldExvY2F0aW9uTmFtZSB9O1xyXG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk5hbWUgfSBmcm9tICcuL2NhbGxPcGVuU3RyZWV0TWFwJztcclxuaW1wb3J0IHsgZGlzcGxheURhdGEgfSBmcm9tICcuLi9jb21wb25lbnRzL21haW4vd2VhdGhlckRpc3BsYXknO1xyXG5pbXBvcnQgY29uZmlybU1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvZGlhbG9nJztcclxuXHJcbmNvbnN0IGtleSA9ICcyZGI2YTAyYzVlYmU3MGMwM2MzYzAwY2FhNDgwMjM2Nic7XHJcblxyXG5jb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICBsZXQgdXJsO1xyXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcclxuICAgIGlmICghZGF0YS50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2RhdGF9JmFwcGlkPSR7a2V5fWA7XHJcbiAgfSBlbHNlIGlmICghZGF0YT8ubGF0IHx8ICFkYXRhPy5sb24gfHwgIWRhdGEpIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7ZGF0YS5sYXR9Jmxvbj0ke2RhdGEubG9ufSZhcHBpZD0ke2tleX1gO1xyXG4gIH1cclxuICAvLyBQcm9jZXNzIEpTT04gZGF0YVxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgY29uZmlybU1vZGFsKHtcclxuICAgICAgICB0aXRsZTogYCR7cmVzLnN0YXR1c30gRXJyb3JgLFxyXG4gICAgICAgIG1lc3NhZ2U6IHJlcy5zdGF0dXNUZXh0LFxyXG4gICAgICAgIGhpZGVObzogdHJ1ZSxcclxuICAgICAgICB5ZXM6ICdPSycsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IGF3YWl0IGdldExvY2F0aW9uTmFtZSh7XHJcbiAgICAgIGxhdDoganNvbi5jb29yZC5sYXQsXHJcbiAgICAgIGxvbjoganNvbi5jb29yZC5sb24sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxvY2F0aW9uLFxyXG4gICAgICB3ZWF0aGVyOiBqc29uLFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFdlYXRoZXIgPSAocG9zKSA9PiB7XHJcbiAgZ2V0V2VhdGhlcih7XHJcbiAgICBsYXQ6IHBvcy5jb29yZHM/LmxhdGl0dWRlIHx8IHBvcy5sYXQsXHJcbiAgICBsb246IHBvcy5jb29yZHM/LmxvbmdpdHVkZSB8fCBwb3MubG9uLFxyXG4gIH0pLnRoZW4oKGRhdGEpID0+IGRpc3BsYXlEYXRhKGRhdGEpKTtcclxufTtcclxuY29uc3QgZGVmYXVsdFdlYXRoZXIgPSAoKSA9PiB7XHJcbiAgaW5pdGlhbFdlYXRoZXIoe1xyXG4gICAgbGF0OiAzNi4xNzQ0NjUsIC8vIG5hc2h2aWxsZSwgdG5cclxuICAgIGxvbjogLTg2Ljc2Nzk2LFxyXG4gIH0pO1xyXG59O1xyXG5jb25zdCBnZXRVc2VyTG9jYXRpb24gPSAoKSA9PiB7XHJcbiAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihcclxuICAgIChwb3MpID0+IGluaXRpYWxXZWF0aGVyKHBvcyksXHJcbiAgICBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IGNvbmZpcm1Nb2RhbCh7XHJcbiAgICAgICAgdGl0bGU6ICdMb2NhdGlvbiBuZWVkZWQgZm9yIHdlYXRoZXIgZGF0YScsXHJcbiAgICAgICAgbWVzc2FnZTogJ1lvdXIgbG9jYXRpb24gaXMgbmVlZGVkIHRvIGdldCBsb2NhbCB3ZWF0aGVyIGluZm9ybWF0aW9uLiBQbGVhc2UgcmVmcmVzaCB0aGUgcGFnZSB0byBhbGxvdyBhY2Nlc3MuXFxuKFRoaXMgaXMgb3B0aW9uYWwuKScsXHJcbiAgICAgICAgeWVzOiAnT0snLFxyXG4gICAgICAgIGhpZGVObzogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgZ2V0V2VhdGhlcixcclxuICBkZWZhdWx0V2VhdGhlcixcclxuICBnZXRVc2VyTG9jYXRpb24sXHJcbn07XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXHJcbmltcG9ydCAnaWNvbmlmeS1pY29uJztcclxuXHJcbmNvbnN0IGhpZGVFbGVtZW50ID0gKGVsZW1lbnQsIHNlbGVjdG9yKSA9PiB7XHJcbiAgY29uc3QgaGlkZSA9IChlKSA9PiB7XHJcbiAgICBpZiAoIWUudGFyZ2V0LmNsb3Nlc3Qoc2VsZWN0b3IpKSB7XHJcbiAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgcmVtb3ZlTGlzdGVuZXIoKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJlbW92ZUxpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGUpO1xyXG4gIH07XHJcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGUpO1xyXG59O1xyXG5cclxuY29uc3QgaWNvbiA9IChuYW1lKSA9PiB7XHJcbiAgY29uc3QgaWNvbmlmeUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpY29uaWZ5LWljb24nKTtcclxuICBpY29uaWZ5SWNvbi5zZXRBdHRyaWJ1dGUoJ2ljb24nLCBuYW1lKTtcclxuICByZXR1cm4gaWNvbmlmeUljb247XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVMaW5rID0gKG9wdHMpID0+IHtcclxuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIGEuYXBwZW5kKG9wdHMudGV4dCk7XHJcbiAgYS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBvcHRzLmhyZWYpO1xyXG4gIGEudGFyZ2V0ID0gJ19ibGFuayc7XHJcbiAgaWYgKG9wdHMudGl0bGUpIGEudGl0bGUgPSBvcHRzLnRpdGxlO1xyXG4gIHJldHVybiBhO1xyXG59O1xyXG5cclxuY29uc3QgbG9hZCA9IChuYW1lKSA9PiB7XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpID09IG51bGwpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdZb3UgaGF2ZW5cXCd0IGNyZWF0ZWQgdGhpcyB2YWx1ZSB5ZXQuJylcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSkpO1xyXG59O1xyXG5cclxuY29uc3Qgc2F2ZSA9IChuYW1lLCBkYXRhKSA9PiB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBoaWRlRWxlbWVudCxcclxuICBpY29uLFxyXG4gIGNyZWF0ZUxpbmssXHJcbiAgbG9hZCxcclxuICBzYXZlLFxyXG59O1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2Mi4xLjMgfCBNSVQgTGljZW5zZSB8IGdpdC5pby9ub3JtYWxpemUgKi9cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIEhUTUw1IGRpc3BsYXkgZGVmaW5pdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDgvOS5cXG4gKi9cXG5cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWFpbixcXG5uYXYsXFxuc2VjdGlvbixcXG5zdW1tYXJ5IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgYGlubGluZS1ibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRSA4LzkuXFxuICovXFxuXFxuYXVkaW8sXFxuY2FudmFzLFxcbnZpZGVvIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IG1vZGVybiBicm93c2VycyBmcm9tIGRpc3BsYXlpbmcgYGF1ZGlvYCB3aXRob3V0IGNvbnRyb2xzLlxcbiAqIFJlbW92ZSBleGNlc3MgaGVpZ2h0IGluIGlPUyA1IGRldmljZXMuXFxuICovXFxuXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGBbaGlkZGVuXWAgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkuXFxuICogSGlkZSB0aGUgYHRlbXBsYXRlYCBlbGVtZW50IGluIElFLCBTYWZhcmksIGFuZCBGaXJlZm94IDwgMjIuXFxuICovXFxuXFxuW2hpZGRlbl0sXFxudGVtcGxhdGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIEJhc2VcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIFNldCBkZWZhdWx0IGZvbnQgZmFtaWx5IHRvIHNhbnMtc2VyaWYuXFxuICogMi4gUHJldmVudCBpT1MgdGV4dCBzaXplIGFkanVzdCBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2UsIHdpdGhvdXQgZGlzYWJsaW5nXFxuICogICAgdXNlciB6b29tLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgLyogMSAqL1xcbiAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgTGlua3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIGNvbG9yIGZyb20gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBgb3V0bGluZWAgaW5jb25zaXN0ZW5jeSBiZXR3ZWVuIENocm9tZSBhbmQgb3RoZXIgYnJvd3NlcnMuXFxuICovXFxuXFxuYTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IHRoaW4gZG90dGVkO1xcbn1cXG5cXG4vKipcXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IHdoZW4gZm9jdXNlZCBhbmQgYWxzbyBtb3VzZSBob3ZlcmVkIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5hOmFjdGl2ZSxcXG5hOmhvdmVyIHtcXG4gICAgb3V0bGluZTogMDtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gICBUeXBvZ3JhcGh5XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHZhcmlhYmxlIGBoMWAgZm9udC1zaXplIGFuZCBtYXJnaW4gd2l0aGluIGBzZWN0aW9uYCBhbmQgYGFydGljbGVgXFxuICogY29udGV4dHMgaW4gRmlyZWZveCA0KywgU2FmYXJpIDUsIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOSwgU2FmYXJpIDUsIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxlIHNldCB0byBgYm9sZGVyYCBpbiBGaXJlZm94IDQrLCBTYWZhcmkgNSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gU2FmYXJpIDUgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5kZm4ge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgZGlmZmVyZW5jZXMgYmV0d2VlbiBGaXJlZm94IGFuZCBvdGhlciBicm93c2Vycy5cXG4gKi9cXG5cXG5ociB7XFxuICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkuXFxuICovXFxuXFxubWFyayB7XFxuICAgIGJhY2tncm91bmQ6ICNmZjA7XFxuICAgIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IGZvbnQgZmFtaWx5IHNldCBvZGRseSBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnByZSxcXG5zYW1wIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4vKipcXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IG9mIHByZS1mb3JtYXR0ZWQgdGV4dCBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbn1cXG5cXG4vKipcXG4gKiBTZXQgY29uc2lzdGVudCBxdW90ZSB0eXBlcy5cXG4gKi9cXG5cXG5xIHtcXG4gICAgcXVvdGVzOiBcXFwiXFxcXDIwMUNcXFwiIFxcXCJcXFxcMjAxRFxcXCIgXFxcIlxcXFwyMDE4XFxcIiBcXFwiXFxcXDIwMTlcXFwiO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBhbmQgdmFyaWFibGUgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBhZmZlY3RpbmcgYGxpbmUtaGVpZ2h0YCBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1cCB7XFxuICAgIHRvcDogLTAuNWVtO1xcbn1cXG5cXG5zdWIge1xcbiAgICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIGJvcmRlciB3aGVuIGluc2lkZSBgYWAgZWxlbWVudCBpbiBJRSA4LzkuXFxuICovXFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IG92ZXJmbG93IGRpc3BsYXllZCBvZGRseSBpbiBJRSA5LlxcbiAqL1xcblxcbnN2Zzpub3QoOnJvb3QpIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gICBGaWd1cmVzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA4LzkgYW5kIFNhZmFyaSA1LlxcbiAqL1xcblxcbmZpZ3VyZSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gICBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogRGVmaW5lIGNvbnNpc3RlbnQgYm9yZGVyLCBtYXJnaW4sIGFuZCBwYWRkaW5nLlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcXG4gICAgbWFyZ2luOiAwIDJweDtcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGBjb2xvcmAgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBJRSA4LzkuXFxuICogMi4gUmVtb3ZlIHBhZGRpbmcgc28gcGVvcGxlIGFyZW4ndCBjYXVnaHQgb3V0IGlmIHRoZXkgemVybyBvdXQgZmllbGRzZXRzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICAgIGJvcmRlcjogMDsgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgZm9udCBmYW1pbHkgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCBmb250IHNpemUgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMy4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBGaXJlZm94IDQrLCBTYWZhcmkgNSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAyICovXFxuICAgIG1hcmdpbjogMDsgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIEZpcmVmb3ggNCsgc2V0dGluZyBgbGluZS1oZWlnaHRgIG9uIGBpbnB1dGAgdXNpbmcgYCFpbXBvcnRhbnRgIGluXFxuICogdGhlIFVBIHN0eWxlc2hlZXQuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYHRleHQtdHJhbnNmb3JtYCBpbmhlcml0YW5jZSBmb3IgYGJ1dHRvbmAgYW5kIGBzZWxlY3RgLlxcbiAqIEFsbCBvdGhlciBmb3JtIGNvbnRyb2wgZWxlbWVudHMgZG8gbm90IGluaGVyaXQgYHRleHQtdHJhbnNmb3JtYCB2YWx1ZXMuXFxuICogQ29ycmVjdCBgYnV0dG9uYCBzdHlsZSBpbmhlcml0YW5jZSBpbiBDaHJvbWUsIFNhZmFyaSA1KywgYW5kIElFIDgrLlxcbiAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCA0KyBhbmQgT3BlcmEuXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxcbiAqICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxcbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxcbiAqICAgIGBpbnB1dGAgYW5kIG90aGVycy5cXG4gKi9cXG5cXG5idXR0b24sXFxuaHRtbCBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSwgLyogMSAqL1xcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMiAqL1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cXG4gKi9cXG5cXG5idXR0b25bZGlzYWJsZWRdLFxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIGBjb250ZW50LWJveGAgaW4gSUUgOC85LzEwLlxcbiAqIDIuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA4LzkvMTAuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZHJlc3MgYGFwcGVhcmFuY2VgIHNldCB0byBgc2VhcmNoZmllbGRgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWUuXFxuICogMi4gQWRkcmVzcyBgYm94LXNpemluZ2Agc2V0IHRvIGBib3JkZXItYm94YCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXFxuICogICAgKGluY2x1ZGUgYC1tb3pgIHRvIGZ1dHVyZS1wcm9vZikuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAyICovXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgc2VhcmNoIGNhbmNlbCBidXR0b24gaW4gU2FmYXJpIDUgYW5kIENocm9tZVxcbiAqIG9uIE9TIFguXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCA0Ky5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSA4LzkuXFxuICogMi4gSW1wcm92ZSByZWFkYWJpbGl0eSBhbmQgYWxpZ25tZW50IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiAxICovXFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7IC8qIDIgKi9cXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gICBUYWJsZXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSBtb3N0IHNwYWNpbmcgYmV0d2VlbiB0YWJsZSBjZWxscy5cXG4gKi9cXG5cXG50YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLWNzcy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJEQUEyRDs7QUFFM0Q7OytFQUUrRTs7QUFFL0U7O0VBRUU7O0FBRUY7Ozs7Ozs7Ozs7OztJQVlJLGNBQWM7QUFDbEI7O0FBRUE7O0VBRUU7O0FBRUY7OztJQUdJLHFCQUFxQjtBQUN6Qjs7QUFFQTs7O0VBR0U7O0FBRUY7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBOzs7RUFHRTs7QUFFRjs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOzsrRUFFK0U7O0FBRS9FOzs7O0VBSUU7O0FBRUY7SUFDSSx1QkFBdUIsRUFBRSxNQUFNO0lBQy9CLDBCQUEwQixFQUFFLE1BQU07SUFDbEMsOEJBQThCLEVBQUUsTUFBTTtBQUMxQzs7QUFFQTs7RUFFRTs7QUFFRjtJQUNJLFNBQVM7QUFDYjs7QUFFQTs7K0VBRStFOztBQUUvRTs7RUFFRTs7QUFFRjtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTs7RUFFRTs7QUFFRjtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTs7RUFFRTs7QUFFRjs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7OytFQUUrRTs7QUFFL0U7OztFQUdFOztBQUVGO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTs7RUFFRTs7QUFFRjtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTs7RUFFRTs7QUFFRjs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7O0VBRUU7O0FBRUY7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7O0VBRUU7O0FBRUY7SUFDSSw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTs7RUFFRTs7QUFFRjtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7SUFJSSw2QkFBNkI7SUFDN0IsY0FBYztBQUNsQjs7QUFFQTs7RUFFRTs7QUFFRjtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTs7RUFFRTs7QUFFRjtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTs7RUFFRTs7QUFFRjtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7O0VBRUU7O0FBRUY7O0lBRUksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7K0VBRStFOztBQUUvRTs7RUFFRTs7QUFFRjtJQUNJLFNBQVM7QUFDYjs7QUFFQTs7RUFFRTs7QUFFRjtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7K0VBRStFOztBQUUvRTs7RUFFRTs7QUFFRjtJQUNJLFNBQVM7QUFDYjs7QUFFQTs7K0VBRStFOztBQUUvRTs7RUFFRTs7QUFFRjtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBOzs7RUFHRTs7QUFFRjtJQUNJLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFVBQVUsRUFBRSxNQUFNO0FBQ3RCOztBQUVBOzs7O0VBSUU7O0FBRUY7Ozs7SUFJSSxvQkFBb0IsRUFBRSxNQUFNO0lBQzVCLGVBQWUsRUFBRSxNQUFNO0lBQ3ZCLFNBQVMsRUFBRSxNQUFNO0FBQ3JCOztBQUVBOzs7RUFHRTs7QUFFRjs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUE7Ozs7O0VBS0U7O0FBRUY7O0lBRUksb0JBQW9CO0FBQ3hCOztBQUVBOzs7Ozs7RUFNRTs7QUFFRjs7OztJQUlJLDBCQUEwQixFQUFFLE1BQU07SUFDbEMsZUFBZSxFQUFFLE1BQU07QUFDM0I7O0FBRUE7O0VBRUU7O0FBRUY7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0lBRUksc0JBQXNCLEVBQUUsTUFBTTtJQUM5QixVQUFVLEVBQUUsTUFBTTtBQUN0Qjs7QUFFQTs7OztFQUlFOztBQUVGO0lBQ0ksNkJBQTZCLEVBQUUsTUFBTTtJQUNyQyw0QkFBNEI7SUFDNUIsK0JBQStCLEVBQUUsTUFBTTtJQUN2Qyx1QkFBdUI7QUFDM0I7O0FBRUE7OztFQUdFOztBQUVGOztJQUVJLHdCQUF3QjtBQUM1Qjs7QUFFQTs7RUFFRTs7QUFFRjs7SUFFSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBOzs7RUFHRTs7QUFFRjtJQUNJLGNBQWMsRUFBRSxNQUFNO0lBQ3RCLG1CQUFtQixFQUFFLE1BQU07QUFDL0I7O0FBRUE7OytFQUUrRTs7QUFFL0U7O0VBRUU7O0FBRUY7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHYyLjEuMyB8IE1JVCBMaWNlbnNlIHwgZ2l0LmlvL25vcm1hbGl6ZSAqL1xcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgSFRNTDUgZGlzcGxheSBkZWZpbml0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgOC85LlxcbiAqL1xcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tYWluLFxcbm5hdixcXG5zZWN0aW9uLFxcbnN1bW1hcnkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDgvOS5cXG4gKi9cXG5cXG5hdWRpbyxcXG5jYW52YXMsXFxudmlkZW8ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXFxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cXG4gKi9cXG5cXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgYFtoaWRkZW5dYCBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS5cXG4gKiBIaWRlIHRoZSBgdGVtcGxhdGVgIGVsZW1lbnQgaW4gSUUsIFNhZmFyaSwgYW5kIEZpcmVmb3ggPCAyMi5cXG4gKi9cXG5cXG5baGlkZGVuXSxcXG50ZW1wbGF0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgQmFzZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gU2V0IGRlZmF1bHQgZm9udCBmYW1pbHkgdG8gc2Fucy1zZXJpZi5cXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcXG4gKiAgICB1c2VyIHpvb20uXFxuICovXFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvKiAxICovXFxuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4uXFxuICovXFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gICBMaW5rc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgY29sb3IgZnJvbSBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGBvdXRsaW5lYCBpbmNvbnNpc3RlbmN5IGJldHdlZW4gQ2hyb21lIGFuZCBvdGhlciBicm93c2Vycy5cXG4gKi9cXG5cXG5hOmZvY3VzIHtcXG4gICAgb3V0bGluZTogdGhpbiBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgd2hlbiBmb2N1c2VkIGFuZCBhbHNvIG1vdXNlIGhvdmVyZWQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmE6YWN0aXZlLFxcbmE6aG92ZXIge1xcbiAgICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIFR5cG9ncmFwaHlcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZHJlc3MgdmFyaWFibGUgYGgxYCBmb250LXNpemUgYW5kIG1hcmdpbiB3aXRoaW4gYHNlY3Rpb25gIGFuZCBgYXJ0aWNsZWBcXG4gKiBjb250ZXh0cyBpbiBGaXJlZm94IDQrLCBTYWZhcmkgNSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LCBTYWZhcmkgNSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGUgc2V0IHRvIGBib2xkZXJgIGluIEZpcmVmb3ggNCssIFNhZmFyaSA1LCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmRmbiB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBkaWZmZXJlbmNlcyBiZXR3ZWVuIEZpcmVmb3ggYW5kIG90aGVyIGJyb3dzZXJzLlxcbiAqL1xcblxcbmhyIHtcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS5cXG4gKi9cXG5cXG5tYXJrIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmMDtcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgZm9udCBmYW1pbHkgc2V0IG9kZGx5IGluIFNhZmFyaSA1IGFuZCBDaHJvbWUuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxucHJlLFxcbnNhbXAge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi8qKlxcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgb2YgcHJlLWZvcm1hdHRlZCB0ZXh0IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxufVxcblxcbi8qKlxcbiAqIFNldCBjb25zaXN0ZW50IHF1b3RlIHR5cGVzLlxcbiAqL1xcblxcbnEge1xcbiAgICBxdW90ZXM6IFxcXCJcXFxcMjAxQ1xcXCIgXFxcIlxcXFwyMDFEXFxcIiBcXFwiXFxcXDIwMThcXFwiIFxcXCJcXFxcMjAxOVxcXCI7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGFuZCB2YXJpYWJsZSBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gICAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGFmZmVjdGluZyBgbGluZS1oZWlnaHRgIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gICAgZm9udC1zaXplOiA3NSU7XFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3VwIHtcXG4gICAgdG9wOiAtMC41ZW07XFxufVxcblxcbnN1YiB7XFxuICAgIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gICBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDgvOS5cXG4gKi9cXG5cXG5pbWcge1xcbiAgICBib3JkZXI6IDA7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3Qgb3ZlcmZsb3cgZGlzcGxheWVkIG9kZGx5IGluIElFIDkuXFxuICovXFxuXFxuc3ZnOm5vdCg6cm9vdCkge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIEZpZ3VyZXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDgvOSBhbmQgU2FmYXJpIDUuXFxuICovXFxuXFxuZmlndXJlIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xcbiAgICBtYXJnaW46IDAgMnB4O1xcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgYGNvbG9yYCBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDgvOS5cXG4gKiAyLiBSZW1vdmUgcGFkZGluZyBzbyBwZW9wbGUgYXJlbid0IGNhdWdodCBvdXQgaWYgdGhleSB6ZXJvIG91dCBmaWVsZHNldHMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gICAgYm9yZGVyOiAwOyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBmb250IGZhbWlseSBub3QgYmVpbmcgaW5oZXJpdGVkIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IGZvbnQgc2l6ZSBub3QgYmVpbmcgaW5oZXJpdGVkIGluIGFsbCBicm93c2Vycy5cXG4gKiAzLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIEZpcmVmb3ggNCssIFNhZmFyaSA1LCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDIgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiAzICovXFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgRmlyZWZveCA0KyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXFxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIENocm9tZSwgU2FmYXJpIDUrLCBhbmQgSUUgOCsuXFxuICogQ29ycmVjdCBgc2VsZWN0YCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94IDQrIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXFxuICogICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXFxuICogMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxcbiAqIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXFxuICogICAgYGlucHV0YCBhbmQgb3RoZXJzLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5odG1sIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLCAvKiAxICovXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxcbiAqL1xcblxcbmJ1dHRvbltkaXNhYmxlZF0sXFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gYGNvbnRlbnQtYm94YCBpbiBJRSA4LzkvMTAuXFxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS8xMC5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZS5cXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcXG4gKiAgICAoaW5jbHVkZSBgLW1vemAgdG8gZnV0dXJlLXByb29mKS5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDIgKi9cXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXFxuICogb24gT1MgWC5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDQrLlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDgvOS5cXG4gKiAyLiBJbXByb3ZlIHJlYWRhYmlsaXR5IGFuZCBhbGlnbm1lbnQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIDEgKi9cXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDsgLyogMiAqL1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIFRhYmxlc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxcbiAqL1xcblxcbnRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jdXN0b20tbW9kYWwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG4gIGJvcmRlcjpzb2xpZCAxcHg7XFxyXFxuICBwYWRkaW5nOjIwcHg7XFxyXFxuICB3aWR0aDo1MDBweDtcXHJcXG4gIC8qIHBvc2l0aW9uOmFic29sdXRlOyAqL1xcclxcbiAgbWFyZ2luOmF1dG87XFxyXFxuICAvKiB6LWluZGV4Ojk5OTk5OTk5OyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uY3VzdG9tLW1vZGFsIG1lbnUge1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uY3VzdG9tLW1vZGFsOm9wZW4ge1xcclxcbiAgZGlzcGxheTpibG9jaztcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY3VzdG9tLW1vZGFsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxuICBib3JkZXI6c29saWQgMXB4O1xcclxcbiAgcGFkZGluZzoyMHB4O1xcclxcbiAgd2lkdGg6NTAwcHg7XFxyXFxuICAvKiBwb3NpdGlvbjphYnNvbHV0ZTsgKi9cXHJcXG4gIG1hcmdpbjphdXRvO1xcclxcbiAgLyogei1pbmRleDo5OTk5OTk5OTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmN1c3RvbS1tb2RhbCBtZW51IHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLmN1c3RvbS1tb2RhbDpvcGVuIHtcXHJcXG4gIGRpc3BsYXk6YmxvY2s7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5sb2FkaW5nLWluZGljYXRvciAuZG90IHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYW5pbWF0aW9uOiBibGluayAycyBpbmZpbml0ZTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIG1hcmdpbjowIDJweDtcXHJcXG4gIG9wYWNpdHk6MDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvYWRpbmctaW5kaWNhdG9yIC5kb3Q6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMC4zMzNzO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9hZGluZy1pbmRpY2F0b3IgLmRvdDpsYXN0LWNoaWxkIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMC42NjdzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgICBvcGFjaXR5OjE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9tYWluL2xvYWRpbmcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFO01BQ0ksVUFBVTtFQUNkOztFQUVBO01BQ0ksU0FBUztFQUNiOztFQUVBO01BQ0ksVUFBVTtFQUNkO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxvYWRpbmctaW5kaWNhdG9yIC5kb3Qge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBhbmltYXRpb246IGJsaW5rIDJzIGluZmluaXRlO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgbWFyZ2luOjAgMnB4O1xcclxcbiAgb3BhY2l0eTowO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9hZGluZy1pbmRpY2F0b3IgLmRvdDpudGgtY2hpbGQoMikge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjMzM3M7XFxyXFxufVxcclxcblxcclxcbi5sb2FkaW5nLWluZGljYXRvciAuZG90Omxhc3QtY2hpbGQge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjY2N3M7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYmxpbmsge1xcclxcbiAgMCUge1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA1MCUge1xcclxcbiAgICAgIG9wYWNpdHk6MTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvUXVlbnRpbi5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9Nb2Rlcm5TYW5zLUxpZ2h0Lm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUXVlbnRpbic7XFxyXFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxufVxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdNb2Rlcm4gU2Fucyc7XFxyXFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICBmb250LXdlaWdodDogbGlnaHQ7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0taGVhZGluZzogJ1F1ZW50aW4nO1xcclxcbiAgLS1ib2R5OiAnTW9kZXJuIFNhbnMnO1xcclxcbn1cXHJcXG5cXHJcXG4qLCAqOjphZnRlciwgKjo6YmVmb3JlIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJvZHkpO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tncm91bmQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RBRUJGMjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuXFxyXFxuaDEsIGgyLCBoMyB7XFxyXFxuICBtYXJnaW46MDtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICBjb2xvcjppbmhlcml0O1xcclxcbiAgb3BhY2l0eTouNjtcXHJcXG4gIHRyYW5zaXRpb246IC4ycztcXHJcXG59XFxyXFxuXFxyXFxuYTpob3ZlciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LC4yKTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsMCwwLC4yKTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxyXFxuICBmb250LWZhbWlseTp2YXIoLS1oZWFkaW5nKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLmNsb2NrIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2R5KTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBmbGV4OmF1dG87XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgbWFyZ2luOjIwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4yKTtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLC4xKTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgbWF4LXdpZHRoOjEwMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvY2F0aW9uLWlucHV0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXHJcXG59XFxyXFxuLmxvY2F0aW9uLWlucHV0IGlucHV0IHtcXHJcXG4gIGJvcmRlcjpub25lO1xcclxcbiAgcGFkZGluZzo0cHggNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LC45NSk7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGhlaWdodDozNXB4O1xcclxcbiAgYm9yZGVyOnNvbGlkIDFweCB0cmFuc3BhcmVudDtcXHJcXG4gIHRyYW5zaXRpb246IC4xcztcXHJcXG4gIGZsZXg6YXV0bztcXHJcXG59XFxyXFxuLmxvY2F0aW9uLWlucHV0IGlucHV0OmZvY3VzIHtcXHJcXG4gIGJvcmRlcjpzb2xpZCAxcHggI0QwRDBENztcXHJcXG4gIG91dGxpbmU6bm9uZTtcXHJcXG59XFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjpub25lO1xcclxcbiAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgbWluLXdpZHRoOjUwcHg7XFxyXFxuICBwYWRkaW5nOjVweDtcXHJcXG4gIHRyYW5zaXRpb246IC4xcztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLnVzZS1sb2NhdGlvbiB7XFxyXFxuICBtYXJnaW46MTBweDtcXHJcXG4gIHBhZGRpbmc6NXB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5hdXRvY29tcGxldGUtY29udGFpbmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCAjMDAwMDAwMWE7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLmF1dG9jb21wbGV0ZS1saXN0IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LC45NSk7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgei1pbmRleDo5OTk5OTk5O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5hdXRvY29tcGxldGUtaXRlbSB7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHRyYW5zaXRpb246IC4ycztcXHJcXG59XFxyXFxuLmF1dG9jb21wbGV0ZS1pdGVtOm5vdCgubm8taG92ZXIpOmhvdmVyLCAuYXV0b2NvbXBsZXRlLWl0ZW06bm90KC5uby1ob3Zlcikuc2VsZWN0ZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDgpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvY2sge1xcclxcbiAgcGFkZGluZzoyMHB4O1xcclxcbiAgZm9udC1zaXplOjEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItZGlzcGxheSB7XFxyXFxuICBmbGV4OjE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLndlYXRoZXItZGlzcGxheSAubG9jYXRpb24ge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgZm9udC1zaXplOjJyZW07XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xcclxcbn1cXHJcXG4uY3VycmVudC10ZW1wIHtcXHJcXG4gIGZvbnQtc2l6ZTo0cmVtO1xcclxcbn1cXHJcXG4ud2VhdGhlci1pbWcge1xcclxcbiAgd2lkdGg6MTAwcHg7XFxyXFxufVxcclxcblxcclxcbi51bml0LXNsaWRlciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi51bml0LXNsaWRlciBpbnB1dCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi51bml0LXNsaWRlciAuc2xpZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6MTUwcHg7XFxyXFxuICBoZWlnaHQ6IDI3cHg7XFxyXFxufVxcclxcblxcclxcbi51bml0LXNsaWRlciAuc2xpZGVyOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0Oi0ycHg7XFxyXFxuICB0b3A6MDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAuMnM7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsMCwgMCwgLjIpO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMnB4IDJweCByZ2JhKDAsMCwwLDEpKTtcXHJcXG59XFxyXFxuLnVuaXQtc2xpZGVyIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOjpiZWZvcmUge1xcclxcbiAgd2lkdGg6OTBweDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg2NXB4KTtcXHJcXG59XFxyXFxuLnNsaWRlciAuY2Vsc2l1cyB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgdHJhbnNpdGlvbjogLjJzO1xcclxcbn1cXHJcXG4uc2xpZGVyIC5mYWhyZW5oZWl0IHtcXHJcXG4gIG9wYWNpdHk6IC4yO1xcclxcbiAgdHJhbnNpdGlvbjogLjJzO1xcclxcbn1cXHJcXG4udW5pdC1zbGlkZXIgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIgLmNlbHNpdXMge1xcclxcbiAgb3BhY2l0eTogLjI7XFxyXFxufVxcclxcbi51bml0LXNsaWRlciBpbnB1dDpjaGVja2VkICsgLnNsaWRlciAuZmFocmVuaGVpdCB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cuY3VzdG9tLW1vZGFsIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwuNzUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxyXFxufVxcclxcbi5jdXN0b20tbW9kYWwgYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwwLCAwLCAuMik7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjowO1xcclxcbiAgcGFkZGluZzogNDBweCAzMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwgLjIpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOjEwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgaWNvbmlmeS1pY29uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRDQUFnQztBQUNsQztBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLDRDQUF5QztFQUN6QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsb0NBQW9DO0VBQ3BDLDBCQUEwQjtFQUMxQixTQUFTO0VBQ1QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0Qyx1Q0FBdUM7RUFDdkMsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZix5Q0FBeUM7RUFDekMsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLFNBQVM7QUFDWDtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIseUNBQXlDO0VBQ3pDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsV0FBVztBQUNiO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsU0FBUztFQUNULGVBQWU7QUFDakI7QUFDQTtFQUNFLGlDQUFpQztFQUNqQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLE1BQU07RUFDTixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsS0FBSztFQUNMLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osOENBQThDO0FBQ2hEO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlDQUF5QztFQUN6QyxrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixRQUFRO0VBQ1IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdRdWVudGluJztcXHJcXG4gIHNyYzogdXJsKCcuL2Fzc2V0cy9RdWVudGluLm90ZicpO1xcclxcbn1cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTW9kZXJuIFNhbnMnO1xcclxcbiAgc3JjOiB1cmwoJy4vYXNzZXRzL01vZGVyblNhbnMtTGlnaHQub3RmJyk7XFxyXFxuICBmb250LXdlaWdodDogbGlnaHQ7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0taGVhZGluZzogJ1F1ZW50aW4nO1xcclxcbiAgLS1ib2R5OiAnTW9kZXJuIFNhbnMnO1xcclxcbn1cXHJcXG5cXHJcXG4qLCAqOjphZnRlciwgKjo6YmVmb3JlIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJvZHkpO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tncm91bmQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RBRUJGMjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuXFxyXFxuaDEsIGgyLCBoMyB7XFxyXFxuICBtYXJnaW46MDtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICBjb2xvcjppbmhlcml0O1xcclxcbiAgb3BhY2l0eTouNjtcXHJcXG4gIHRyYW5zaXRpb246IC4ycztcXHJcXG59XFxyXFxuXFxyXFxuYTpob3ZlciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LC4yKTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsMCwwLC4yKTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxyXFxuICBmb250LWZhbWlseTp2YXIoLS1oZWFkaW5nKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLmNsb2NrIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2R5KTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBmbGV4OmF1dG87XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgbWFyZ2luOjIwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4yKTtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsMCwwLC4xKTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgbWF4LXdpZHRoOjEwMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvY2F0aW9uLWlucHV0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXHJcXG59XFxyXFxuLmxvY2F0aW9uLWlucHV0IGlucHV0IHtcXHJcXG4gIGJvcmRlcjpub25lO1xcclxcbiAgcGFkZGluZzo0cHggNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LC45NSk7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGhlaWdodDozNXB4O1xcclxcbiAgYm9yZGVyOnNvbGlkIDFweCB0cmFuc3BhcmVudDtcXHJcXG4gIHRyYW5zaXRpb246IC4xcztcXHJcXG4gIGZsZXg6YXV0bztcXHJcXG59XFxyXFxuLmxvY2F0aW9uLWlucHV0IGlucHV0OmZvY3VzIHtcXHJcXG4gIGJvcmRlcjpzb2xpZCAxcHggI0QwRDBENztcXHJcXG4gIG91dGxpbmU6bm9uZTtcXHJcXG59XFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjpub25lO1xcclxcbiAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgbWluLXdpZHRoOjUwcHg7XFxyXFxuICBwYWRkaW5nOjVweDtcXHJcXG4gIHRyYW5zaXRpb246IC4xcztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLnVzZS1sb2NhdGlvbiB7XFxyXFxuICBtYXJnaW46MTBweDtcXHJcXG4gIHBhZGRpbmc6NXB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5hdXRvY29tcGxldGUtY29udGFpbmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCAjMDAwMDAwMWE7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLmF1dG9jb21wbGV0ZS1saXN0IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LC45NSk7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgei1pbmRleDo5OTk5OTk5O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5hdXRvY29tcGxldGUtaXRlbSB7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHRyYW5zaXRpb246IC4ycztcXHJcXG59XFxyXFxuLmF1dG9jb21wbGV0ZS1pdGVtOm5vdCgubm8taG92ZXIpOmhvdmVyLCAuYXV0b2NvbXBsZXRlLWl0ZW06bm90KC5uby1ob3Zlcikuc2VsZWN0ZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDgpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvY2sge1xcclxcbiAgcGFkZGluZzoyMHB4O1xcclxcbiAgZm9udC1zaXplOjEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItZGlzcGxheSB7XFxyXFxuICBmbGV4OjE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLndlYXRoZXItZGlzcGxheSAubG9jYXRpb24ge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgZm9udC1zaXplOjJyZW07XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xcclxcbn1cXHJcXG4uY3VycmVudC10ZW1wIHtcXHJcXG4gIGZvbnQtc2l6ZTo0cmVtO1xcclxcbn1cXHJcXG4ud2VhdGhlci1pbWcge1xcclxcbiAgd2lkdGg6MTAwcHg7XFxyXFxufVxcclxcblxcclxcbi51bml0LXNsaWRlciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi51bml0LXNsaWRlciBpbnB1dCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi51bml0LXNsaWRlciAuc2xpZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6MTUwcHg7XFxyXFxuICBoZWlnaHQ6IDI3cHg7XFxyXFxufVxcclxcblxcclxcbi51bml0LXNsaWRlciAuc2xpZGVyOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0Oi0ycHg7XFxyXFxuICB0b3A6MDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAuMnM7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsMCwgMCwgLjIpO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMnB4IDJweCByZ2JhKDAsMCwwLDEpKTtcXHJcXG59XFxyXFxuLnVuaXQtc2xpZGVyIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOjpiZWZvcmUge1xcclxcbiAgd2lkdGg6OTBweDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg2NXB4KTtcXHJcXG59XFxyXFxuLnNsaWRlciAuY2Vsc2l1cyB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgdHJhbnNpdGlvbjogLjJzO1xcclxcbn1cXHJcXG4uc2xpZGVyIC5mYWhyZW5oZWl0IHtcXHJcXG4gIG9wYWNpdHk6IC4yO1xcclxcbiAgdHJhbnNpdGlvbjogLjJzO1xcclxcbn1cXHJcXG4udW5pdC1zbGlkZXIgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIgLmNlbHNpdXMge1xcclxcbiAgb3BhY2l0eTogLjI7XFxyXFxufVxcclxcbi51bml0LXNsaWRlciBpbnB1dDpjaGVja2VkICsgLnNsaWRlciAuZmFocmVuaGVpdCB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cuY3VzdG9tLW1vZGFsIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwuNzUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxyXFxufVxcclxcbi5jdXN0b20tbW9kYWwgYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwwLCAwLCAuMik7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjowO1xcclxcbiAgcGFkZGluZzogNDBweCAzMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwgLjIpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOjEwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgaWNvbmlmeS1pY29uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCk7XG5cbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cblxuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn0iLCJpbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0TG9jYWxlOyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbmltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gRyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlICdHJzpcbiAgICAgIGNhc2UgJ0dHJzpcbiAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBBLCBCXG5cbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuXG4gICAgICBjYXNlICdHR0dHJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ3lvJykge1xuICAgICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiBZKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7IC8vIFR3byBkaWdpdCB5ZWFyXG5cbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9IC8vIE9yZGluYWwgbnVtYmVyXG5cblxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9IC8vIFBhZGRpbmdcblxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gUihkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpOyAvLyBQYWRkaW5nXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiB1KGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIFEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gcShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAncXEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gTChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gdyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9rZW4gPT09ICd3bycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gSShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdJbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gRChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiBFKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ0VFJzpcbiAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ0VFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdFRUVFJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiBlKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gYyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdjbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdjY2NjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gaShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuXG4gICAgICBjYXNlICdpaSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG5cbiAgICAgIGNhc2UgJ2lvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVcblxuICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2lpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnaWlpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gYihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2JiYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIEIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdCJzpcbiAgICAgIGNhc2UgJ0JCJzpcbiAgICAgIGNhc2UgJ0JCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ0hvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENIb3VycygpLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gSyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiBrKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xuICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnc28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ1NlY29uZHMoKSwge1xuICAgICAgICB1bml0OiAnc2Vjb25kJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiBYKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWic7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuXG4gICAgICBjYXNlICdYWFhYJzpcbiAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiB4KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG5cbiAgICAgIGNhc2UgJ3h4eHgnOlxuICAgICAgY2FzZSAneHgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcblxuICAgICAgY2FzZSAneHh4eHgnOlxuICAgICAgY2FzZSAneHh4JzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIE8oZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiB6KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAneic6XG4gICAgICBjYXNlICd6eic6XG4gICAgICBjYXNlICd6enonOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gdChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiBUKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcblxuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiB5KGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09ICdNJyA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09ICdhbScgPyAnYS5tLicgOiAncC5tLic7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiBoKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gSChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gbShkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiBzKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ1NlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwidmFyIGRhdGVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xuXG52YXIgdGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiB0aW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG5cbnZhciBkYXRlVGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59O1xuXG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGZpcnN0V2Vla09mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ1dlZWsoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJ2YXIgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gWydEJywgJ0REJ107XG52YXIgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbJ1lZJywgJ1lZWVknXTtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSAnWVlZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnREQnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpO1xuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KTtcbn0iLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcblxudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7IC8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcblxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9vcHRpb25zJGxvY2FsZSwgX3JlZjIsIF9yZWYzLCBfcmVmNCwgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUyLCBfb3B0aW9ucyRsb2NhbGUyJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiwgX3JlZjUsIF9yZWY2LCBfcmVmNywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUzLCBfb3B0aW9ucyRsb2NhbGUzJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQ7XG5cbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgbG9jYWxlID0gKF9yZWYgPSAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX29wdGlvbnMkbG9jYWxlICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRsb2NhbGUgOiBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiBkZWZhdWx0TG9jYWxlO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmMiA9IChfcmVmMyA9IChfcmVmNCA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTIub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUyJG9wdGkuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmNCAhPT0gdm9pZCAwID8gX3JlZjQgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWY1ID0gKF9yZWY2ID0gKF9yZWY3ID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyRvcHRpID0gX29wdGlvbnMkbG9jYWxlMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTMkb3B0aS53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY3ICE9PSB2b2lkIDAgPyBfcmVmNyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjYgIT09IHZvaWQgMCA/IF9yZWY2IDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0LndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjUgIT09IHZvaWQgMCA/IF9yZWY1IDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfSAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cblxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcbiAgfTtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgIH1cblxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG5cbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgdmFyIG1hdGNoZWQgPSBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKTtcblxuICBpZiAoIW1hdGNoZWQpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuXG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDsgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcblxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuXG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG5cbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcblxudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuXG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGlhbG9nLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGlhbG9nLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2FkaW5nLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbG9hZGluZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuLzAxZC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3dlYXRoZXItcGhvdG9zLzAxZC5qcGdcIixcblx0XCIuLzAxbi5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3dlYXRoZXItcGhvdG9zLzAxbi5qcGdcIixcblx0XCIuLzAyZC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3dlYXRoZXItcGhvdG9zLzAyZC5qcGdcIixcblx0XCIuLzAybi5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3dlYXRoZXItcGhvdG9zLzAybi5qcGdcIixcblx0XCIuLzAzZC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3dlYXRoZXItcGhvdG9zLzAzZC5qcGdcIixcblx0XCIuLzAzbi5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3dlYXRoZXItcGhvdG9zLzAzbi5qcGdcIixcblx0XCIuLzA0ZC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3dlYXRoZXItcGhvdG9zLzA0ZC5qcGdcIixcblx0XCIuLzA0bi5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3dlYXRoZXItcGhvdG9zLzA0bi5qcGdcIixcblx0XCIuLzA5ZC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3dlYXRoZXItcGhvdG9zLzA5ZC5qcGdcIixcblx0XCIuLzA5bi5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3dlYXRoZXItcGhvdG9zLzA5bi5qcGdcIixcblx0XCIuLzEwZC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3dlYXRoZXItcGhvdG9zLzEwZC5qcGdcIixcblx0XCIuLzEwbi5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3dlYXRoZXItcGhvdG9zLzEwbi5qcGdcIixcblx0XCIuLzExZC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3dlYXRoZXItcGhvdG9zLzExZC5qcGdcIixcblx0XCIuLzExbi5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3dlYXRoZXItcGhvdG9zLzExbi5qcGdcIixcblx0XCIuLzEzZC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3dlYXRoZXItcGhvdG9zLzEzZC5qcGdcIixcblx0XCIuLzEzbi5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3dlYXRoZXItcGhvdG9zLzEzbi5qcGdcIixcblx0XCIuLzUwZC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3dlYXRoZXItcGhvdG9zLzUwZC5qcGdcIixcblx0XCIuLzUwbi5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3dlYXRoZXItcGhvdG9zLzUwbi5qcGdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy93ZWF0aGVyLXBob3RvcyBzeW5jIFxcXFwuanBnJFwiOyIsIi8qKlxuKiAoYykgSWNvbmlmeVxuKlxuKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgbGljZW5zZS50eHRcbiogZmlsZXMgYXQgaHR0cHM6Ly9naXRodWIuY29tL2ljb25pZnkvaWNvbmlmeVxuKlxuKiBMaWNlbnNlZCB1bmRlciBNSVQuXG4qXG4qIEBsaWNlbnNlIE1JVFxuKiBAdmVyc2lvbiAxLjAuMVxuKi9cbmNvbnN0IGRlZmF1bHRJY29uRGltZW5zaW9ucyA9IE9iamVjdC5mcmVlemUoXG4gIHtcbiAgICBsZWZ0OiAwLFxuICAgIHRvcDogMCxcbiAgICB3aWR0aDogMTYsXG4gICAgaGVpZ2h0OiAxNlxuICB9XG4pO1xuY29uc3QgZGVmYXVsdEljb25UcmFuc2Zvcm1hdGlvbnMgPSBPYmplY3QuZnJlZXplKHtcbiAgcm90YXRlOiAwLFxuICB2RmxpcDogZmFsc2UsXG4gIGhGbGlwOiBmYWxzZVxufSk7XG5jb25zdCBkZWZhdWx0SWNvblByb3BzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIC4uLmRlZmF1bHRJY29uRGltZW5zaW9ucyxcbiAgLi4uZGVmYXVsdEljb25UcmFuc2Zvcm1hdGlvbnNcbn0pO1xuY29uc3QgZGVmYXVsdEV4dGVuZGVkSWNvblByb3BzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIC4uLmRlZmF1bHRJY29uUHJvcHMsXG4gIGJvZHk6IFwiXCIsXG4gIGhpZGRlbjogZmFsc2Vcbn0pO1xuXG5jb25zdCBkZWZhdWx0SWNvblNpemVDdXN0b21pc2F0aW9ucyA9IE9iamVjdC5mcmVlemUoe1xuICB3aWR0aDogbnVsbCxcbiAgaGVpZ2h0OiBudWxsXG59KTtcbmNvbnN0IGRlZmF1bHRJY29uQ3VzdG9taXNhdGlvbnMgPSBPYmplY3QuZnJlZXplKHtcbiAgLi4uZGVmYXVsdEljb25TaXplQ3VzdG9taXNhdGlvbnMsXG4gIC4uLmRlZmF1bHRJY29uVHJhbnNmb3JtYXRpb25zXG59KTtcblxuZnVuY3Rpb24gcm90YXRlRnJvbVN0cmluZyh2YWx1ZSwgZGVmYXVsdFZhbHVlID0gMCkge1xuICBjb25zdCB1bml0cyA9IHZhbHVlLnJlcGxhY2UoL14tP1swLTkuXSovLCBcIlwiKTtcbiAgZnVuY3Rpb24gY2xlYW51cCh2YWx1ZTIpIHtcbiAgICB3aGlsZSAodmFsdWUyIDwgMCkge1xuICAgICAgdmFsdWUyICs9IDQ7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTIgJSA0O1xuICB9XG4gIGlmICh1bml0cyA9PT0gXCJcIikge1xuICAgIGNvbnN0IG51bSA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICByZXR1cm4gaXNOYU4obnVtKSA/IDAgOiBjbGVhbnVwKG51bSk7XG4gIH0gZWxzZSBpZiAodW5pdHMgIT09IHZhbHVlKSB7XG4gICAgbGV0IHNwbGl0ID0gMDtcbiAgICBzd2l0Y2ggKHVuaXRzKSB7XG4gICAgICBjYXNlIFwiJVwiOlxuICAgICAgICBzcGxpdCA9IDI1O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkZWdcIjpcbiAgICAgICAgc3BsaXQgPSA5MDtcbiAgICB9XG4gICAgaWYgKHNwbGl0KSB7XG4gICAgICBsZXQgbnVtID0gcGFyc2VGbG9hdCh2YWx1ZS5zbGljZSgwLCB2YWx1ZS5sZW5ndGggLSB1bml0cy5sZW5ndGgpKTtcbiAgICAgIGlmIChpc05hTihudW0pKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgbnVtID0gbnVtIC8gc3BsaXQ7XG4gICAgICByZXR1cm4gbnVtICUgMSA9PT0gMCA/IGNsZWFudXAobnVtKSA6IDA7XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWZhdWx0VmFsdWU7XG59XG5cbmNvbnN0IHNlcGFyYXRvciA9IC9bXFxzLF0rLztcbmZ1bmN0aW9uIGZsaXBGcm9tU3RyaW5nKGN1c3RvbSwgZmxpcCkge1xuICBmbGlwLnNwbGl0KHNlcGFyYXRvcikuZm9yRWFjaCgoc3RyKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBzdHIudHJpbSgpO1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgXCJob3Jpem9udGFsXCI6XG4gICAgICAgIGN1c3RvbS5oRmxpcCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInZlcnRpY2FsXCI6XG4gICAgICAgIGN1c3RvbS52RmxpcCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG59XG5cbmNvbnN0IGRlZmF1bHRDdXN0b21pc2F0aW9ucyA9IHtcbiAgICAuLi5kZWZhdWx0SWNvbkN1c3RvbWlzYXRpb25zLFxuICAgIHByZXNlcnZlQXNwZWN0UmF0aW86ICcnLFxufTtcbi8qKlxuICogR2V0IGN1c3RvbWlzYXRpb25zXG4gKi9cbmZ1bmN0aW9uIGdldEN1c3RvbWlzYXRpb25zKG5vZGUpIHtcbiAgICBjb25zdCBjdXN0b21pc2F0aW9ucyA9IHtcbiAgICAgICAgLi4uZGVmYXVsdEN1c3RvbWlzYXRpb25zLFxuICAgIH07XG4gICAgY29uc3QgYXR0ciA9IChrZXksIGRlZikgPT4gbm9kZS5nZXRBdHRyaWJ1dGUoa2V5KSB8fCBkZWY7XG4gICAgLy8gRGltZW5zaW9uc1xuICAgIGN1c3RvbWlzYXRpb25zLndpZHRoID0gYXR0cignd2lkdGgnLCBudWxsKTtcbiAgICBjdXN0b21pc2F0aW9ucy5oZWlnaHQgPSBhdHRyKCdoZWlnaHQnLCBudWxsKTtcbiAgICAvLyBSb3RhdGlvblxuICAgIGN1c3RvbWlzYXRpb25zLnJvdGF0ZSA9IHJvdGF0ZUZyb21TdHJpbmcoYXR0cigncm90YXRlJywgJycpKTtcbiAgICAvLyBGbGlwXG4gICAgZmxpcEZyb21TdHJpbmcoY3VzdG9taXNhdGlvbnMsIGF0dHIoJ2ZsaXAnLCAnJykpO1xuICAgIC8vIFNWRyBhdHRyaWJ1dGVzXG4gICAgY3VzdG9taXNhdGlvbnMucHJlc2VydmVBc3BlY3RSYXRpbyA9IGF0dHIoJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCBhdHRyKCdwcmVzZXJ2ZWFzcGVjdHJhdGlvJywgJycpKTtcbiAgICByZXR1cm4gY3VzdG9taXNhdGlvbnM7XG59XG4vKipcbiAqIENoZWNrIGlmIGN1c3RvbWlzYXRpb25zIGhhdmUgYmVlbiB1cGRhdGVkXG4gKi9cbmZ1bmN0aW9uIGhhdmVDdXN0b21pc2F0aW9uc0NoYW5nZWQodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkZWZhdWx0Q3VzdG9taXNhdGlvbnMpIHtcbiAgICAgICAgaWYgKHZhbHVlMVtrZXldICE9PSB2YWx1ZTJba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5jb25zdCBtYXRjaEljb25OYW1lID0gL15bYS16MC05XSsoLVthLXowLTldKykqJC87XG5jb25zdCBzdHJpbmdUb0ljb24gPSAodmFsdWUsIHZhbGlkYXRlLCBhbGxvd1NpbXBsZU5hbWUsIHByb3ZpZGVyID0gXCJcIikgPT4ge1xuICBjb25zdCBjb2xvblNlcGFyYXRlZCA9IHZhbHVlLnNwbGl0KFwiOlwiKTtcbiAgaWYgKHZhbHVlLnNsaWNlKDAsIDEpID09PSBcIkBcIikge1xuICAgIGlmIChjb2xvblNlcGFyYXRlZC5sZW5ndGggPCAyIHx8IGNvbG9uU2VwYXJhdGVkLmxlbmd0aCA+IDMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwcm92aWRlciA9IGNvbG9uU2VwYXJhdGVkLnNoaWZ0KCkuc2xpY2UoMSk7XG4gIH1cbiAgaWYgKGNvbG9uU2VwYXJhdGVkLmxlbmd0aCA+IDMgfHwgIWNvbG9uU2VwYXJhdGVkLmxlbmd0aCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChjb2xvblNlcGFyYXRlZC5sZW5ndGggPiAxKSB7XG4gICAgY29uc3QgbmFtZTIgPSBjb2xvblNlcGFyYXRlZC5wb3AoKTtcbiAgICBjb25zdCBwcmVmaXggPSBjb2xvblNlcGFyYXRlZC5wb3AoKTtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICBwcm92aWRlcjogY29sb25TZXBhcmF0ZWQubGVuZ3RoID4gMCA/IGNvbG9uU2VwYXJhdGVkWzBdIDogcHJvdmlkZXIsXG4gICAgICBwcmVmaXgsXG4gICAgICBuYW1lOiBuYW1lMlxuICAgIH07XG4gICAgcmV0dXJuIHZhbGlkYXRlICYmICF2YWxpZGF0ZUljb25OYW1lKHJlc3VsdCkgPyBudWxsIDogcmVzdWx0O1xuICB9XG4gIGNvbnN0IG5hbWUgPSBjb2xvblNlcGFyYXRlZFswXTtcbiAgY29uc3QgZGFzaFNlcGFyYXRlZCA9IG5hbWUuc3BsaXQoXCItXCIpO1xuICBpZiAoZGFzaFNlcGFyYXRlZC5sZW5ndGggPiAxKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgcHJvdmlkZXIsXG4gICAgICBwcmVmaXg6IGRhc2hTZXBhcmF0ZWQuc2hpZnQoKSxcbiAgICAgIG5hbWU6IGRhc2hTZXBhcmF0ZWQuam9pbihcIi1cIilcbiAgICB9O1xuICAgIHJldHVybiB2YWxpZGF0ZSAmJiAhdmFsaWRhdGVJY29uTmFtZShyZXN1bHQpID8gbnVsbCA6IHJlc3VsdDtcbiAgfVxuICBpZiAoYWxsb3dTaW1wbGVOYW1lICYmIHByb3ZpZGVyID09PSBcIlwiKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgcHJvdmlkZXIsXG4gICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICBuYW1lXG4gICAgfTtcbiAgICByZXR1cm4gdmFsaWRhdGUgJiYgIXZhbGlkYXRlSWNvbk5hbWUocmVzdWx0LCBhbGxvd1NpbXBsZU5hbWUpID8gbnVsbCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5jb25zdCB2YWxpZGF0ZUljb25OYW1lID0gKGljb24sIGFsbG93U2ltcGxlTmFtZSkgPT4ge1xuICBpZiAoIWljb24pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuICEhKChpY29uLnByb3ZpZGVyID09PSBcIlwiIHx8IGljb24ucHJvdmlkZXIubWF0Y2gobWF0Y2hJY29uTmFtZSkpICYmIChhbGxvd1NpbXBsZU5hbWUgJiYgaWNvbi5wcmVmaXggPT09IFwiXCIgfHwgaWNvbi5wcmVmaXgubWF0Y2gobWF0Y2hJY29uTmFtZSkpICYmIGljb24ubmFtZS5tYXRjaChtYXRjaEljb25OYW1lKSk7XG59O1xuXG5mdW5jdGlvbiBtZXJnZUljb25UcmFuc2Zvcm1hdGlvbnMob2JqMSwgb2JqMikge1xuICBjb25zdCByZXN1bHQgPSB7fTtcbiAgaWYgKCFvYmoxLmhGbGlwICE9PSAhb2JqMi5oRmxpcCkge1xuICAgIHJlc3VsdC5oRmxpcCA9IHRydWU7XG4gIH1cbiAgaWYgKCFvYmoxLnZGbGlwICE9PSAhb2JqMi52RmxpcCkge1xuICAgIHJlc3VsdC52RmxpcCA9IHRydWU7XG4gIH1cbiAgY29uc3Qgcm90YXRlID0gKChvYmoxLnJvdGF0ZSB8fCAwKSArIChvYmoyLnJvdGF0ZSB8fCAwKSkgJSA0O1xuICBpZiAocm90YXRlKSB7XG4gICAgcmVzdWx0LnJvdGF0ZSA9IHJvdGF0ZTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtZXJnZUljb25EYXRhKHBhcmVudCwgY2hpbGQpIHtcbiAgY29uc3QgcmVzdWx0ID0gbWVyZ2VJY29uVHJhbnNmb3JtYXRpb25zKHBhcmVudCwgY2hpbGQpO1xuICBmb3IgKGNvbnN0IGtleSBpbiBkZWZhdWx0RXh0ZW5kZWRJY29uUHJvcHMpIHtcbiAgICBpZiAoa2V5IGluIGRlZmF1bHRJY29uVHJhbnNmb3JtYXRpb25zKSB7XG4gICAgICBpZiAoa2V5IGluIHBhcmVudCAmJiAhKGtleSBpbiByZXN1bHQpKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gZGVmYXVsdEljb25UcmFuc2Zvcm1hdGlvbnNba2V5XTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleSBpbiBjaGlsZCkge1xuICAgICAgcmVzdWx0W2tleV0gPSBjaGlsZFtrZXldO1xuICAgIH0gZWxzZSBpZiAoa2V5IGluIHBhcmVudCkge1xuICAgICAgcmVzdWx0W2tleV0gPSBwYXJlbnRba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZ2V0SWNvbnNUcmVlKGRhdGEsIG5hbWVzKSB7XG4gIGNvbnN0IGljb25zID0gZGF0YS5pY29ucztcbiAgY29uc3QgYWxpYXNlcyA9IGRhdGEuYWxpYXNlcyB8fCB7fTtcbiAgY29uc3QgcmVzb2x2ZWQgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgZnVuY3Rpb24gcmVzb2x2ZShuYW1lKSB7XG4gICAgaWYgKGljb25zW25hbWVdKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZWRbbmFtZV0gPSBbXTtcbiAgICB9XG4gICAgaWYgKCEobmFtZSBpbiByZXNvbHZlZCkpIHtcbiAgICAgIHJlc29sdmVkW25hbWVdID0gbnVsbDtcbiAgICAgIGNvbnN0IHBhcmVudCA9IGFsaWFzZXNbbmFtZV0gJiYgYWxpYXNlc1tuYW1lXS5wYXJlbnQ7XG4gICAgICBjb25zdCB2YWx1ZSA9IHBhcmVudCAmJiByZXNvbHZlKHBhcmVudCk7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgcmVzb2x2ZWRbbmFtZV0gPSBbcGFyZW50XS5jb25jYXQodmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzb2x2ZWRbbmFtZV07XG4gIH1cbiAgKG5hbWVzIHx8IE9iamVjdC5rZXlzKGljb25zKS5jb25jYXQoT2JqZWN0LmtleXMoYWxpYXNlcykpKS5mb3JFYWNoKHJlc29sdmUpO1xuICByZXR1cm4gcmVzb2x2ZWQ7XG59XG5cbmZ1bmN0aW9uIGludGVybmFsR2V0SWNvbkRhdGEoZGF0YSwgbmFtZSwgdHJlZSkge1xuICBjb25zdCBpY29ucyA9IGRhdGEuaWNvbnM7XG4gIGNvbnN0IGFsaWFzZXMgPSBkYXRhLmFsaWFzZXMgfHwge307XG4gIGxldCBjdXJyZW50UHJvcHMgPSB7fTtcbiAgZnVuY3Rpb24gcGFyc2UobmFtZTIpIHtcbiAgICBjdXJyZW50UHJvcHMgPSBtZXJnZUljb25EYXRhKFxuICAgICAgaWNvbnNbbmFtZTJdIHx8IGFsaWFzZXNbbmFtZTJdLFxuICAgICAgY3VycmVudFByb3BzXG4gICAgKTtcbiAgfVxuICBwYXJzZShuYW1lKTtcbiAgdHJlZS5mb3JFYWNoKHBhcnNlKTtcbiAgcmV0dXJuIG1lcmdlSWNvbkRhdGEoZGF0YSwgY3VycmVudFByb3BzKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VJY29uU2V0KGRhdGEsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IG5hbWVzID0gW107XG4gIGlmICh0eXBlb2YgZGF0YSAhPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZGF0YS5pY29ucyAhPT0gXCJvYmplY3RcIikge1xuICAgIHJldHVybiBuYW1lcztcbiAgfVxuICBpZiAoZGF0YS5ub3RfZm91bmQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIGRhdGEubm90X2ZvdW5kLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIGNhbGxiYWNrKG5hbWUsIG51bGwpO1xuICAgICAgbmFtZXMucHVzaChuYW1lKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCB0cmVlID0gZ2V0SWNvbnNUcmVlKGRhdGEpO1xuICBmb3IgKGNvbnN0IG5hbWUgaW4gdHJlZSkge1xuICAgIGNvbnN0IGl0ZW0gPSB0cmVlW25hbWVdO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICBjYWxsYmFjayhuYW1lLCBpbnRlcm5hbEdldEljb25EYXRhKGRhdGEsIG5hbWUsIGl0ZW0pKTtcbiAgICAgIG5hbWVzLnB1c2gobmFtZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBuYW1lcztcbn1cblxuY29uc3Qgb3B0aW9uYWxQcm9wZXJ0eURlZmF1bHRzID0ge1xuICBwcm92aWRlcjogXCJcIixcbiAgYWxpYXNlczoge30sXG4gIG5vdF9mb3VuZDoge30sXG4gIC4uLmRlZmF1bHRJY29uRGltZW5zaW9uc1xufTtcbmZ1bmN0aW9uIGNoZWNrT3B0aW9uYWxQcm9wcyhpdGVtLCBkZWZhdWx0cykge1xuICBmb3IgKGNvbnN0IHByb3AgaW4gZGVmYXVsdHMpIHtcbiAgICBpZiAocHJvcCBpbiBpdGVtICYmIHR5cGVvZiBpdGVtW3Byb3BdICE9PSB0eXBlb2YgZGVmYXVsdHNbcHJvcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBxdWlja2x5VmFsaWRhdGVJY29uU2V0KG9iaikge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIiB8fCBvYmogPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBkYXRhID0gb2JqO1xuICBpZiAodHlwZW9mIGRhdGEucHJlZml4ICE9PSBcInN0cmluZ1wiIHx8ICFvYmouaWNvbnMgfHwgdHlwZW9mIG9iai5pY29ucyAhPT0gXCJvYmplY3RcIikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmICghY2hlY2tPcHRpb25hbFByb3BzKG9iaiwgb3B0aW9uYWxQcm9wZXJ0eURlZmF1bHRzKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IGljb25zID0gZGF0YS5pY29ucztcbiAgZm9yIChjb25zdCBuYW1lIGluIGljb25zKSB7XG4gICAgY29uc3QgaWNvbiA9IGljb25zW25hbWVdO1xuICAgIGlmICghbmFtZS5tYXRjaChtYXRjaEljb25OYW1lKSB8fCB0eXBlb2YgaWNvbi5ib2R5ICE9PSBcInN0cmluZ1wiIHx8ICFjaGVja09wdGlvbmFsUHJvcHMoXG4gICAgICBpY29uLFxuICAgICAgZGVmYXVsdEV4dGVuZGVkSWNvblByb3BzXG4gICAgKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIGNvbnN0IGFsaWFzZXMgPSBkYXRhLmFsaWFzZXMgfHwge307XG4gIGZvciAoY29uc3QgbmFtZSBpbiBhbGlhc2VzKSB7XG4gICAgY29uc3QgaWNvbiA9IGFsaWFzZXNbbmFtZV07XG4gICAgY29uc3QgcGFyZW50ID0gaWNvbi5wYXJlbnQ7XG4gICAgaWYgKCFuYW1lLm1hdGNoKG1hdGNoSWNvbk5hbWUpIHx8IHR5cGVvZiBwYXJlbnQgIT09IFwic3RyaW5nXCIgfHwgIWljb25zW3BhcmVudF0gJiYgIWFsaWFzZXNbcGFyZW50XSB8fCAhY2hlY2tPcHRpb25hbFByb3BzKFxuICAgICAgaWNvbixcbiAgICAgIGRlZmF1bHRFeHRlbmRlZEljb25Qcm9wc1xuICAgICkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGF0YTtcbn1cblxuY29uc3QgZGF0YVN0b3JhZ2UgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKTtcbmZ1bmN0aW9uIG5ld1N0b3JhZ2UocHJvdmlkZXIsIHByZWZpeCkge1xuICByZXR1cm4ge1xuICAgIHByb3ZpZGVyLFxuICAgIHByZWZpeCxcbiAgICBpY29uczogLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgbWlzc2luZzogLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKVxuICB9O1xufVxuZnVuY3Rpb24gZ2V0U3RvcmFnZShwcm92aWRlciwgcHJlZml4KSB7XG4gIGNvbnN0IHByb3ZpZGVyU3RvcmFnZSA9IGRhdGFTdG9yYWdlW3Byb3ZpZGVyXSB8fCAoZGF0YVN0b3JhZ2VbcHJvdmlkZXJdID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICByZXR1cm4gcHJvdmlkZXJTdG9yYWdlW3ByZWZpeF0gfHwgKHByb3ZpZGVyU3RvcmFnZVtwcmVmaXhdID0gbmV3U3RvcmFnZShwcm92aWRlciwgcHJlZml4KSk7XG59XG5mdW5jdGlvbiBhZGRJY29uU2V0KHN0b3JhZ2UsIGRhdGEpIHtcbiAgaWYgKCFxdWlja2x5VmFsaWRhdGVJY29uU2V0KGRhdGEpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHJldHVybiBwYXJzZUljb25TZXQoZGF0YSwgKG5hbWUsIGljb24pID0+IHtcbiAgICBpZiAoaWNvbikge1xuICAgICAgc3RvcmFnZS5pY29uc1tuYW1lXSA9IGljb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0b3JhZ2UubWlzc2luZy5hZGQobmFtZSk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIGFkZEljb25Ub1N0b3JhZ2Uoc3RvcmFnZSwgbmFtZSwgaWNvbikge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2YgaWNvbi5ib2R5ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBzdG9yYWdlLmljb25zW25hbWVdID0geyAuLi5pY29uIH07XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGxpc3RJY29ucyQxKHByb3ZpZGVyLCBwcmVmaXgpIHtcbiAgbGV0IGFsbEljb25zID0gW107XG4gIGNvbnN0IHByb3ZpZGVycyA9IHR5cGVvZiBwcm92aWRlciA9PT0gXCJzdHJpbmdcIiA/IFtwcm92aWRlcl0gOiBPYmplY3Qua2V5cyhkYXRhU3RvcmFnZSk7XG4gIHByb3ZpZGVycy5mb3JFYWNoKChwcm92aWRlcjIpID0+IHtcbiAgICBjb25zdCBwcmVmaXhlcyA9IHR5cGVvZiBwcm92aWRlcjIgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHByZWZpeCA9PT0gXCJzdHJpbmdcIiA/IFtwcmVmaXhdIDogT2JqZWN0LmtleXMoZGF0YVN0b3JhZ2VbcHJvdmlkZXIyXSB8fCB7fSk7XG4gICAgcHJlZml4ZXMuZm9yRWFjaCgocHJlZml4MikgPT4ge1xuICAgICAgY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UocHJvdmlkZXIyLCBwcmVmaXgyKTtcbiAgICAgIGFsbEljb25zID0gYWxsSWNvbnMuY29uY2F0KFxuICAgICAgICBPYmplY3Qua2V5cyhzdG9yYWdlLmljb25zKS5tYXAoXG4gICAgICAgICAgKG5hbWUpID0+IChwcm92aWRlcjIgIT09IFwiXCIgPyBcIkBcIiArIHByb3ZpZGVyMiArIFwiOlwiIDogXCJcIikgKyBwcmVmaXgyICsgXCI6XCIgKyBuYW1lXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gYWxsSWNvbnM7XG59XG5cbmxldCBzaW1wbGVOYW1lcyA9IGZhbHNlO1xuZnVuY3Rpb24gYWxsb3dTaW1wbGVOYW1lcyhhbGxvdykge1xuICBpZiAodHlwZW9mIGFsbG93ID09PSBcImJvb2xlYW5cIikge1xuICAgIHNpbXBsZU5hbWVzID0gYWxsb3c7XG4gIH1cbiAgcmV0dXJuIHNpbXBsZU5hbWVzO1xufVxuZnVuY3Rpb24gZ2V0SWNvbkRhdGEobmFtZSkge1xuICBjb25zdCBpY29uID0gdHlwZW9mIG5hbWUgPT09IFwic3RyaW5nXCIgPyBzdHJpbmdUb0ljb24obmFtZSwgdHJ1ZSwgc2ltcGxlTmFtZXMpIDogbmFtZTtcbiAgaWYgKGljb24pIHtcbiAgICBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZShpY29uLnByb3ZpZGVyLCBpY29uLnByZWZpeCk7XG4gICAgY29uc3QgaWNvbk5hbWUgPSBpY29uLm5hbWU7XG4gICAgcmV0dXJuIHN0b3JhZ2UuaWNvbnNbaWNvbk5hbWVdIHx8IChzdG9yYWdlLm1pc3NpbmcuaGFzKGljb25OYW1lKSA/IG51bGwgOiB2b2lkIDApO1xuICB9XG59XG5mdW5jdGlvbiBhZGRJY29uJDEobmFtZSwgZGF0YSkge1xuICBjb25zdCBpY29uID0gc3RyaW5nVG9JY29uKG5hbWUsIHRydWUsIHNpbXBsZU5hbWVzKTtcbiAgaWYgKCFpY29uKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKGljb24ucHJvdmlkZXIsIGljb24ucHJlZml4KTtcbiAgcmV0dXJuIGFkZEljb25Ub1N0b3JhZ2Uoc3RvcmFnZSwgaWNvbi5uYW1lLCBkYXRhKTtcbn1cbmZ1bmN0aW9uIGFkZENvbGxlY3Rpb24kMShkYXRhLCBwcm92aWRlcikge1xuICBpZiAodHlwZW9mIGRhdGEgIT09IFwib2JqZWN0XCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHR5cGVvZiBwcm92aWRlciAhPT0gXCJzdHJpbmdcIikge1xuICAgIHByb3ZpZGVyID0gZGF0YS5wcm92aWRlciB8fCBcIlwiO1xuICB9XG4gIGlmIChzaW1wbGVOYW1lcyAmJiAhcHJvdmlkZXIgJiYgIWRhdGEucHJlZml4KSB7XG4gICAgbGV0IGFkZGVkID0gZmFsc2U7XG4gICAgaWYgKHF1aWNrbHlWYWxpZGF0ZUljb25TZXQoZGF0YSkpIHtcbiAgICAgIGRhdGEucHJlZml4ID0gXCJcIjtcbiAgICAgIHBhcnNlSWNvblNldChkYXRhLCAobmFtZSwgaWNvbikgPT4ge1xuICAgICAgICBpZiAoaWNvbiAmJiBhZGRJY29uJDEobmFtZSwgaWNvbikpIHtcbiAgICAgICAgICBhZGRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkZWQ7XG4gIH1cbiAgY29uc3QgcHJlZml4ID0gZGF0YS5wcmVmaXg7XG4gIGlmICghdmFsaWRhdGVJY29uTmFtZSh7XG4gICAgcHJvdmlkZXIsXG4gICAgcHJlZml4LFxuICAgIG5hbWU6IFwiYVwiXG4gIH0pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKHByb3ZpZGVyLCBwcmVmaXgpO1xuICByZXR1cm4gISFhZGRJY29uU2V0KHN0b3JhZ2UsIGRhdGEpO1xufVxuZnVuY3Rpb24gaWNvbkV4aXN0cyQxKG5hbWUpIHtcbiAgcmV0dXJuICEhZ2V0SWNvbkRhdGEobmFtZSk7XG59XG5mdW5jdGlvbiBnZXRJY29uJDEobmFtZSkge1xuICBjb25zdCByZXN1bHQgPSBnZXRJY29uRGF0YShuYW1lKTtcbiAgcmV0dXJuIHJlc3VsdCA/IHtcbiAgICAuLi5kZWZhdWx0SWNvblByb3BzLFxuICAgIC4uLnJlc3VsdFxuICB9IDogbnVsbDtcbn1cblxuZnVuY3Rpb24gc29ydEljb25zKGljb25zKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICBsb2FkZWQ6IFtdLFxuICAgIG1pc3Npbmc6IFtdLFxuICAgIHBlbmRpbmc6IFtdXG4gIH07XG4gIGNvbnN0IHN0b3JhZ2UgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgaWNvbnMuc29ydCgoYSwgYikgPT4ge1xuICAgIGlmIChhLnByb3ZpZGVyICE9PSBiLnByb3ZpZGVyKSB7XG4gICAgICByZXR1cm4gYS5wcm92aWRlci5sb2NhbGVDb21wYXJlKGIucHJvdmlkZXIpO1xuICAgIH1cbiAgICBpZiAoYS5wcmVmaXggIT09IGIucHJlZml4KSB7XG4gICAgICByZXR1cm4gYS5wcmVmaXgubG9jYWxlQ29tcGFyZShiLnByZWZpeCk7XG4gICAgfVxuICAgIHJldHVybiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpO1xuICB9KTtcbiAgbGV0IGxhc3RJY29uID0ge1xuICAgIHByb3ZpZGVyOiBcIlwiLFxuICAgIHByZWZpeDogXCJcIixcbiAgICBuYW1lOiBcIlwiXG4gIH07XG4gIGljb25zLmZvckVhY2goKGljb24pID0+IHtcbiAgICBpZiAobGFzdEljb24ubmFtZSA9PT0gaWNvbi5uYW1lICYmIGxhc3RJY29uLnByZWZpeCA9PT0gaWNvbi5wcmVmaXggJiYgbGFzdEljb24ucHJvdmlkZXIgPT09IGljb24ucHJvdmlkZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGFzdEljb24gPSBpY29uO1xuICAgIGNvbnN0IHByb3ZpZGVyID0gaWNvbi5wcm92aWRlcjtcbiAgICBjb25zdCBwcmVmaXggPSBpY29uLnByZWZpeDtcbiAgICBjb25zdCBuYW1lID0gaWNvbi5uYW1lO1xuICAgIGNvbnN0IHByb3ZpZGVyU3RvcmFnZSA9IHN0b3JhZ2VbcHJvdmlkZXJdIHx8IChzdG9yYWdlW3Byb3ZpZGVyXSA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAgICBjb25zdCBsb2NhbFN0b3JhZ2UgPSBwcm92aWRlclN0b3JhZ2VbcHJlZml4XSB8fCAocHJvdmlkZXJTdG9yYWdlW3ByZWZpeF0gPSBnZXRTdG9yYWdlKHByb3ZpZGVyLCBwcmVmaXgpKTtcbiAgICBsZXQgbGlzdDtcbiAgICBpZiAobmFtZSBpbiBsb2NhbFN0b3JhZ2UuaWNvbnMpIHtcbiAgICAgIGxpc3QgPSByZXN1bHQubG9hZGVkO1xuICAgIH0gZWxzZSBpZiAocHJlZml4ID09PSBcIlwiIHx8IGxvY2FsU3RvcmFnZS5taXNzaW5nLmhhcyhuYW1lKSkge1xuICAgICAgbGlzdCA9IHJlc3VsdC5taXNzaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0ID0gcmVzdWx0LnBlbmRpbmc7XG4gICAgfVxuICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICBwcm92aWRlcixcbiAgICAgIHByZWZpeCxcbiAgICAgIG5hbWVcbiAgICB9O1xuICAgIGxpc3QucHVzaChpdGVtKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNhbGxiYWNrKHN0b3JhZ2VzLCBpZCkge1xuICBzdG9yYWdlcy5mb3JFYWNoKChzdG9yYWdlKSA9PiB7XG4gICAgY29uc3QgaXRlbXMgPSBzdG9yYWdlLmxvYWRlckNhbGxiYWNrcztcbiAgICBpZiAoaXRlbXMpIHtcbiAgICAgIHN0b3JhZ2UubG9hZGVyQ2FsbGJhY2tzID0gaXRlbXMuZmlsdGVyKChyb3cpID0+IHJvdy5pZCAhPT0gaWQpO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiB1cGRhdGVDYWxsYmFja3Moc3RvcmFnZSkge1xuICBpZiAoIXN0b3JhZ2UucGVuZGluZ0NhbGxiYWNrc0ZsYWcpIHtcbiAgICBzdG9yYWdlLnBlbmRpbmdDYWxsYmFja3NGbGFnID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHN0b3JhZ2UucGVuZGluZ0NhbGxiYWNrc0ZsYWcgPSBmYWxzZTtcbiAgICAgIGNvbnN0IGl0ZW1zID0gc3RvcmFnZS5sb2FkZXJDYWxsYmFja3MgPyBzdG9yYWdlLmxvYWRlckNhbGxiYWNrcy5zbGljZSgwKSA6IFtdO1xuICAgICAgaWYgKCFpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IGhhc1BlbmRpbmcgPSBmYWxzZTtcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gc3RvcmFnZS5wcm92aWRlcjtcbiAgICAgIGNvbnN0IHByZWZpeCA9IHN0b3JhZ2UucHJlZml4O1xuICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBpY29ucyA9IGl0ZW0uaWNvbnM7XG4gICAgICAgIGNvbnN0IG9sZExlbmd0aCA9IGljb25zLnBlbmRpbmcubGVuZ3RoO1xuICAgICAgICBpY29ucy5wZW5kaW5nID0gaWNvbnMucGVuZGluZy5maWx0ZXIoKGljb24pID0+IHtcbiAgICAgICAgICBpZiAoaWNvbi5wcmVmaXggIT09IHByZWZpeCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5hbWUgPSBpY29uLm5hbWU7XG4gICAgICAgICAgaWYgKHN0b3JhZ2UuaWNvbnNbbmFtZV0pIHtcbiAgICAgICAgICAgIGljb25zLmxvYWRlZC5wdXNoKHtcbiAgICAgICAgICAgICAgcHJvdmlkZXIsXG4gICAgICAgICAgICAgIHByZWZpeCxcbiAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChzdG9yYWdlLm1pc3NpbmcuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICBpY29ucy5taXNzaW5nLnB1c2goe1xuICAgICAgICAgICAgICBwcm92aWRlcixcbiAgICAgICAgICAgICAgcHJlZml4LFxuICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGFzUGVuZGluZyA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGljb25zLnBlbmRpbmcubGVuZ3RoICE9PSBvbGRMZW5ndGgpIHtcbiAgICAgICAgICBpZiAoIWhhc1BlbmRpbmcpIHtcbiAgICAgICAgICAgIHJlbW92ZUNhbGxiYWNrKFtzdG9yYWdlXSwgaXRlbS5pZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW0uY2FsbGJhY2soXG4gICAgICAgICAgICBpY29ucy5sb2FkZWQuc2xpY2UoMCksXG4gICAgICAgICAgICBpY29ucy5taXNzaW5nLnNsaWNlKDApLFxuICAgICAgICAgICAgaWNvbnMucGVuZGluZy5zbGljZSgwKSxcbiAgICAgICAgICAgIGl0ZW0uYWJvcnRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxubGV0IGlkQ291bnRlciA9IDA7XG5mdW5jdGlvbiBzdG9yZUNhbGxiYWNrKGNhbGxiYWNrLCBpY29ucywgcGVuZGluZ1NvdXJjZXMpIHtcbiAgY29uc3QgaWQgPSBpZENvdW50ZXIrKztcbiAgY29uc3QgYWJvcnQgPSByZW1vdmVDYWxsYmFjay5iaW5kKG51bGwsIHBlbmRpbmdTb3VyY2VzLCBpZCk7XG4gIGlmICghaWNvbnMucGVuZGluZy5sZW5ndGgpIHtcbiAgICByZXR1cm4gYWJvcnQ7XG4gIH1cbiAgY29uc3QgaXRlbSA9IHtcbiAgICBpZCxcbiAgICBpY29ucyxcbiAgICBjYWxsYmFjayxcbiAgICBhYm9ydFxuICB9O1xuICBwZW5kaW5nU291cmNlcy5mb3JFYWNoKChzdG9yYWdlKSA9PiB7XG4gICAgKHN0b3JhZ2UubG9hZGVyQ2FsbGJhY2tzIHx8IChzdG9yYWdlLmxvYWRlckNhbGxiYWNrcyA9IFtdKSkucHVzaChpdGVtKTtcbiAgfSk7XG4gIHJldHVybiBhYm9ydDtcbn1cblxuY29uc3Qgc3RvcmFnZSA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpO1xuZnVuY3Rpb24gc2V0QVBJTW9kdWxlKHByb3ZpZGVyLCBpdGVtKSB7XG4gIHN0b3JhZ2VbcHJvdmlkZXJdID0gaXRlbTtcbn1cbmZ1bmN0aW9uIGdldEFQSU1vZHVsZShwcm92aWRlcikge1xuICByZXR1cm4gc3RvcmFnZVtwcm92aWRlcl0gfHwgc3RvcmFnZVtcIlwiXTtcbn1cblxuZnVuY3Rpb24gbGlzdFRvSWNvbnMobGlzdCwgdmFsaWRhdGUgPSB0cnVlLCBzaW1wbGVOYW1lcyA9IGZhbHNlKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBsaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBpY29uID0gdHlwZW9mIGl0ZW0gPT09IFwic3RyaW5nXCIgPyBzdHJpbmdUb0ljb24oaXRlbSwgdmFsaWRhdGUsIHNpbXBsZU5hbWVzKSA6IGl0ZW07XG4gICAgaWYgKGljb24pIHtcbiAgICAgIHJlc3VsdC5wdXNoKGljb24pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIHNyYy9jb25maWcudHNcbnZhciBkZWZhdWx0Q29uZmlnID0ge1xuICByZXNvdXJjZXM6IFtdLFxuICBpbmRleDogMCxcbiAgdGltZW91dDogMmUzLFxuICByb3RhdGU6IDc1MCxcbiAgcmFuZG9tOiBmYWxzZSxcbiAgZGF0YUFmdGVyVGltZW91dDogZmFsc2Vcbn07XG5cbi8vIHNyYy9xdWVyeS50c1xuZnVuY3Rpb24gc2VuZFF1ZXJ5KGNvbmZpZywgcGF5bG9hZCwgcXVlcnksIGRvbmUpIHtcbiAgY29uc3QgcmVzb3VyY2VzQ291bnQgPSBjb25maWcucmVzb3VyY2VzLmxlbmd0aDtcbiAgY29uc3Qgc3RhcnRJbmRleCA9IGNvbmZpZy5yYW5kb20gPyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZXNvdXJjZXNDb3VudCkgOiBjb25maWcuaW5kZXg7XG4gIGxldCByZXNvdXJjZXM7XG4gIGlmIChjb25maWcucmFuZG9tKSB7XG4gICAgbGV0IGxpc3QgPSBjb25maWcucmVzb3VyY2VzLnNsaWNlKDApO1xuICAgIHJlc291cmNlcyA9IFtdO1xuICAgIHdoaWxlIChsaXN0Lmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IG5leHRJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxpc3QubGVuZ3RoKTtcbiAgICAgIHJlc291cmNlcy5wdXNoKGxpc3RbbmV4dEluZGV4XSk7XG4gICAgICBsaXN0ID0gbGlzdC5zbGljZSgwLCBuZXh0SW5kZXgpLmNvbmNhdChsaXN0LnNsaWNlKG5leHRJbmRleCArIDEpKTtcbiAgICB9XG4gICAgcmVzb3VyY2VzID0gcmVzb3VyY2VzLmNvbmNhdChsaXN0KTtcbiAgfSBlbHNlIHtcbiAgICByZXNvdXJjZXMgPSBjb25maWcucmVzb3VyY2VzLnNsaWNlKHN0YXJ0SW5kZXgpLmNvbmNhdChjb25maWcucmVzb3VyY2VzLnNsaWNlKDAsIHN0YXJ0SW5kZXgpKTtcbiAgfVxuICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICBsZXQgc3RhdHVzID0gXCJwZW5kaW5nXCI7XG4gIGxldCBxdWVyaWVzU2VudCA9IDA7XG4gIGxldCBsYXN0RXJyb3I7XG4gIGxldCB0aW1lciA9IG51bGw7XG4gIGxldCBxdWV1ZSA9IFtdO1xuICBsZXQgZG9uZUNhbGxiYWNrcyA9IFtdO1xuICBpZiAodHlwZW9mIGRvbmUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGRvbmVDYWxsYmFja3MucHVzaChkb25lKTtcbiAgfVxuICBmdW5jdGlvbiByZXNldFRpbWVyKCkge1xuICAgIGlmICh0aW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIHRpbWVyID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gYWJvcnQoKSB7XG4gICAgaWYgKHN0YXR1cyA9PT0gXCJwZW5kaW5nXCIpIHtcbiAgICAgIHN0YXR1cyA9IFwiYWJvcnRlZFwiO1xuICAgIH1cbiAgICByZXNldFRpbWVyKCk7XG4gICAgcXVldWUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0uc3RhdHVzID09PSBcInBlbmRpbmdcIikge1xuICAgICAgICBpdGVtLnN0YXR1cyA9IFwiYWJvcnRlZFwiO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHF1ZXVlID0gW107XG4gIH1cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGNhbGxiYWNrLCBvdmVyd3JpdGUpIHtcbiAgICBpZiAob3ZlcndyaXRlKSB7XG4gICAgICBkb25lQ2FsbGJhY2tzID0gW107XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgZG9uZUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZ2V0UXVlcnlTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0VGltZSxcbiAgICAgIHBheWxvYWQsXG4gICAgICBzdGF0dXMsXG4gICAgICBxdWVyaWVzU2VudCxcbiAgICAgIHF1ZXJpZXNQZW5kaW5nOiBxdWV1ZS5sZW5ndGgsXG4gICAgICBzdWJzY3JpYmUsXG4gICAgICBhYm9ydFxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZmFpbFF1ZXJ5KCkge1xuICAgIHN0YXR1cyA9IFwiZmFpbGVkXCI7XG4gICAgZG9uZUNhbGxiYWNrcy5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgICAgY2FsbGJhY2sodm9pZCAwLCBsYXN0RXJyb3IpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGNsZWFyUXVldWUoKSB7XG4gICAgcXVldWUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0uc3RhdHVzID09PSBcInBlbmRpbmdcIikge1xuICAgICAgICBpdGVtLnN0YXR1cyA9IFwiYWJvcnRlZFwiO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHF1ZXVlID0gW107XG4gIH1cbiAgZnVuY3Rpb24gbW9kdWxlUmVzcG9uc2UoaXRlbSwgcmVzcG9uc2UsIGRhdGEpIHtcbiAgICBjb25zdCBpc0Vycm9yID0gcmVzcG9uc2UgIT09IFwic3VjY2Vzc1wiO1xuICAgIHF1ZXVlID0gcXVldWUuZmlsdGVyKChxdWV1ZWQpID0+IHF1ZXVlZCAhPT0gaXRlbSk7XG4gICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgIGNhc2UgXCJwZW5kaW5nXCI6XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImZhaWxlZFwiOlxuICAgICAgICBpZiAoaXNFcnJvciB8fCAhY29uZmlnLmRhdGFBZnRlclRpbWVvdXQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChyZXNwb25zZSA9PT0gXCJhYm9ydFwiKSB7XG4gICAgICBsYXN0RXJyb3IgPSBkYXRhO1xuICAgICAgZmFpbFF1ZXJ5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpc0Vycm9yKSB7XG4gICAgICBsYXN0RXJyb3IgPSBkYXRhO1xuICAgICAgaWYgKCFxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgaWYgKCFyZXNvdXJjZXMubGVuZ3RoKSB7XG4gICAgICAgICAgZmFpbFF1ZXJ5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXhlY05leHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXNldFRpbWVyKCk7XG4gICAgY2xlYXJRdWV1ZSgpO1xuICAgIGlmICghY29uZmlnLnJhbmRvbSkge1xuICAgICAgY29uc3QgaW5kZXggPSBjb25maWcucmVzb3VyY2VzLmluZGV4T2YoaXRlbS5yZXNvdXJjZSk7XG4gICAgICBpZiAoaW5kZXggIT09IC0xICYmIGluZGV4ICE9PSBjb25maWcuaW5kZXgpIHtcbiAgICAgICAgY29uZmlnLmluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuICAgIHN0YXR1cyA9IFwiY29tcGxldGVkXCI7XG4gICAgZG9uZUNhbGxiYWNrcy5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZXhlY05leHQoKSB7XG4gICAgaWYgKHN0YXR1cyAhPT0gXCJwZW5kaW5nXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVzZXRUaW1lcigpO1xuICAgIGNvbnN0IHJlc291cmNlID0gcmVzb3VyY2VzLnNoaWZ0KCk7XG4gICAgaWYgKHJlc291cmNlID09PSB2b2lkIDApIHtcbiAgICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICByZXNldFRpbWVyKCk7XG4gICAgICAgICAgaWYgKHN0YXR1cyA9PT0gXCJwZW5kaW5nXCIpIHtcbiAgICAgICAgICAgIGNsZWFyUXVldWUoKTtcbiAgICAgICAgICAgIGZhaWxRdWVyeSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgY29uZmlnLnRpbWVvdXQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmYWlsUXVlcnkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaXRlbSA9IHtcbiAgICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXG4gICAgICByZXNvdXJjZSxcbiAgICAgIGNhbGxiYWNrOiAoc3RhdHVzMiwgZGF0YSkgPT4ge1xuICAgICAgICBtb2R1bGVSZXNwb25zZShpdGVtLCBzdGF0dXMyLCBkYXRhKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHF1ZXVlLnB1c2goaXRlbSk7XG4gICAgcXVlcmllc1NlbnQrKztcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoZXhlY05leHQsIGNvbmZpZy5yb3RhdGUpO1xuICAgIHF1ZXJ5KHJlc291cmNlLCBwYXlsb2FkLCBpdGVtLmNhbGxiYWNrKTtcbiAgfVxuICBzZXRUaW1lb3V0KGV4ZWNOZXh0KTtcbiAgcmV0dXJuIGdldFF1ZXJ5U3RhdHVzO1xufVxuXG4vLyBzcmMvaW5kZXgudHNcbmZ1bmN0aW9uIGluaXRSZWR1bmRhbmN5KGNmZykge1xuICBjb25zdCBjb25maWcgPSB7XG4gICAgLi4uZGVmYXVsdENvbmZpZyxcbiAgICAuLi5jZmdcbiAgfTtcbiAgbGV0IHF1ZXJpZXMgPSBbXTtcbiAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICBxdWVyaWVzID0gcXVlcmllcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0oKS5zdGF0dXMgPT09IFwicGVuZGluZ1wiKTtcbiAgfVxuICBmdW5jdGlvbiBxdWVyeShwYXlsb2FkLCBxdWVyeUNhbGxiYWNrLCBkb25lQ2FsbGJhY2spIHtcbiAgICBjb25zdCBxdWVyeTIgPSBzZW5kUXVlcnkoXG4gICAgICBjb25maWcsXG4gICAgICBwYXlsb2FkLFxuICAgICAgcXVlcnlDYWxsYmFjayxcbiAgICAgIChkYXRhLCBlcnJvcikgPT4ge1xuICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgIGlmIChkb25lQ2FsbGJhY2spIHtcbiAgICAgICAgICBkb25lQ2FsbGJhY2soZGF0YSwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgICBxdWVyaWVzLnB1c2gocXVlcnkyKTtcbiAgICByZXR1cm4gcXVlcnkyO1xuICB9XG4gIGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gcXVlcmllcy5maW5kKCh2YWx1ZSkgPT4ge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKHZhbHVlKTtcbiAgICB9KSB8fCBudWxsO1xuICB9XG4gIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIHF1ZXJ5LFxuICAgIGZpbmQsXG4gICAgc2V0SW5kZXg6IChpbmRleCkgPT4ge1xuICAgICAgY29uZmlnLmluZGV4ID0gaW5kZXg7XG4gICAgfSxcbiAgICBnZXRJbmRleDogKCkgPT4gY29uZmlnLmluZGV4LFxuICAgIGNsZWFudXBcbiAgfTtcbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBUElDb25maWcoc291cmNlKSB7XG4gIGxldCByZXNvdXJjZXM7XG4gIGlmICh0eXBlb2Ygc291cmNlLnJlc291cmNlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJlc291cmNlcyA9IFtzb3VyY2UucmVzb3VyY2VzXTtcbiAgfSBlbHNlIHtcbiAgICByZXNvdXJjZXMgPSBzb3VyY2UucmVzb3VyY2VzO1xuICAgIGlmICghKHJlc291cmNlcyBpbnN0YW5jZW9mIEFycmF5KSB8fCAhcmVzb3VyY2VzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICByZXNvdXJjZXMsXG4gICAgcGF0aDogc291cmNlLnBhdGggfHwgXCIvXCIsXG4gICAgbWF4VVJMOiBzb3VyY2UubWF4VVJMIHx8IDUwMCxcbiAgICByb3RhdGU6IHNvdXJjZS5yb3RhdGUgfHwgNzUwLFxuICAgIHRpbWVvdXQ6IHNvdXJjZS50aW1lb3V0IHx8IDVlMyxcbiAgICByYW5kb206IHNvdXJjZS5yYW5kb20gPT09IHRydWUsXG4gICAgaW5kZXg6IHNvdXJjZS5pbmRleCB8fCAwLFxuICAgIGRhdGFBZnRlclRpbWVvdXQ6IHNvdXJjZS5kYXRhQWZ0ZXJUaW1lb3V0ICE9PSBmYWxzZVxuICB9O1xuICByZXR1cm4gcmVzdWx0O1xufVxuY29uc3QgY29uZmlnU3RvcmFnZSA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpO1xuY29uc3QgZmFsbEJhY2tBUElTb3VyY2VzID0gW1xuICBcImh0dHBzOi8vYXBpLnNpbXBsZXN2Zy5jb21cIixcbiAgXCJodHRwczovL2FwaS51bmlzdmcuY29tXCJcbl07XG5jb25zdCBmYWxsQmFja0FQSSA9IFtdO1xud2hpbGUgKGZhbGxCYWNrQVBJU291cmNlcy5sZW5ndGggPiAwKSB7XG4gIGlmIChmYWxsQmFja0FQSVNvdXJjZXMubGVuZ3RoID09PSAxKSB7XG4gICAgZmFsbEJhY2tBUEkucHVzaChmYWxsQmFja0FQSVNvdXJjZXMuc2hpZnQoKSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgIGZhbGxCYWNrQVBJLnB1c2goZmFsbEJhY2tBUElTb3VyY2VzLnNoaWZ0KCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmYWxsQmFja0FQSS5wdXNoKGZhbGxCYWNrQVBJU291cmNlcy5wb3AoKSk7XG4gICAgfVxuICB9XG59XG5jb25maWdTdG9yYWdlW1wiXCJdID0gY3JlYXRlQVBJQ29uZmlnKHtcbiAgcmVzb3VyY2VzOiBbXCJodHRwczovL2FwaS5pY29uaWZ5LmRlc2lnblwiXS5jb25jYXQoZmFsbEJhY2tBUEkpXG59KTtcbmZ1bmN0aW9uIGFkZEFQSVByb3ZpZGVyJDEocHJvdmlkZXIsIGN1c3RvbUNvbmZpZykge1xuICBjb25zdCBjb25maWcgPSBjcmVhdGVBUElDb25maWcoY3VzdG9tQ29uZmlnKTtcbiAgaWYgKGNvbmZpZyA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25maWdTdG9yYWdlW3Byb3ZpZGVyXSA9IGNvbmZpZztcbiAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBnZXRBUElDb25maWcocHJvdmlkZXIpIHtcbiAgcmV0dXJuIGNvbmZpZ1N0b3JhZ2VbcHJvdmlkZXJdO1xufVxuZnVuY3Rpb24gbGlzdEFQSVByb3ZpZGVycygpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGNvbmZpZ1N0b3JhZ2UpO1xufVxuXG5mdW5jdGlvbiBlbXB0eUNhbGxiYWNrJDEoKSB7XG59XG5jb25zdCByZWR1bmRhbmN5Q2FjaGUgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKTtcbmZ1bmN0aW9uIGdldFJlZHVuZGFuY3lDYWNoZShwcm92aWRlcikge1xuICBpZiAoIXJlZHVuZGFuY3lDYWNoZVtwcm92aWRlcl0pIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRBUElDb25maWcocHJvdmlkZXIpO1xuICAgIGlmICghY29uZmlnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlZHVuZGFuY3kgPSBpbml0UmVkdW5kYW5jeShjb25maWcpO1xuICAgIGNvbnN0IGNhY2hlZFJldW5kYW5jeSA9IHtcbiAgICAgIGNvbmZpZyxcbiAgICAgIHJlZHVuZGFuY3lcbiAgICB9O1xuICAgIHJlZHVuZGFuY3lDYWNoZVtwcm92aWRlcl0gPSBjYWNoZWRSZXVuZGFuY3k7XG4gIH1cbiAgcmV0dXJuIHJlZHVuZGFuY3lDYWNoZVtwcm92aWRlcl07XG59XG5mdW5jdGlvbiBzZW5kQVBJUXVlcnkodGFyZ2V0LCBxdWVyeSwgY2FsbGJhY2spIHtcbiAgbGV0IHJlZHVuZGFuY3k7XG4gIGxldCBzZW5kO1xuICBpZiAodHlwZW9mIHRhcmdldCA9PT0gXCJzdHJpbmdcIikge1xuICAgIGNvbnN0IGFwaSA9IGdldEFQSU1vZHVsZSh0YXJnZXQpO1xuICAgIGlmICghYXBpKSB7XG4gICAgICBjYWxsYmFjayh2b2lkIDAsIDQyNCk7XG4gICAgICByZXR1cm4gZW1wdHlDYWxsYmFjayQxO1xuICAgIH1cbiAgICBzZW5kID0gYXBpLnNlbmQ7XG4gICAgY29uc3QgY2FjaGVkID0gZ2V0UmVkdW5kYW5jeUNhY2hlKHRhcmdldCk7XG4gICAgaWYgKGNhY2hlZCkge1xuICAgICAgcmVkdW5kYW5jeSA9IGNhY2hlZC5yZWR1bmRhbmN5O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBjb25maWcgPSBjcmVhdGVBUElDb25maWcodGFyZ2V0KTtcbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICByZWR1bmRhbmN5ID0gaW5pdFJlZHVuZGFuY3koY29uZmlnKTtcbiAgICAgIGNvbnN0IG1vZHVsZUtleSA9IHRhcmdldC5yZXNvdXJjZXMgPyB0YXJnZXQucmVzb3VyY2VzWzBdIDogXCJcIjtcbiAgICAgIGNvbnN0IGFwaSA9IGdldEFQSU1vZHVsZShtb2R1bGVLZXkpO1xuICAgICAgaWYgKGFwaSkge1xuICAgICAgICBzZW5kID0gYXBpLnNlbmQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICghcmVkdW5kYW5jeSB8fCAhc2VuZCkge1xuICAgIGNhbGxiYWNrKHZvaWQgMCwgNDI0KTtcbiAgICByZXR1cm4gZW1wdHlDYWxsYmFjayQxO1xuICB9XG4gIHJldHVybiByZWR1bmRhbmN5LnF1ZXJ5KHF1ZXJ5LCBzZW5kLCBjYWxsYmFjaykoKS5hYm9ydDtcbn1cblxuY29uc3QgYnJvd3NlckNhY2hlVmVyc2lvbiA9IFwiaWNvbmlmeTJcIjtcbmNvbnN0IGJyb3dzZXJDYWNoZVByZWZpeCA9IFwiaWNvbmlmeVwiO1xuY29uc3QgYnJvd3NlckNhY2hlQ291bnRLZXkgPSBicm93c2VyQ2FjaGVQcmVmaXggKyBcIi1jb3VudFwiO1xuY29uc3QgYnJvd3NlckNhY2hlVmVyc2lvbktleSA9IGJyb3dzZXJDYWNoZVByZWZpeCArIFwiLXZlcnNpb25cIjtcbmNvbnN0IGJyb3dzZXJTdG9yYWdlSG91ciA9IDM2ZTU7XG5jb25zdCBicm93c2VyU3RvcmFnZUNhY2hlRXhwaXJhdGlvbiA9IDE2ODtcblxuZnVuY3Rpb24gZ2V0U3RvcmVkSXRlbShmdW5jLCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZnVuYy5nZXRJdGVtKGtleSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICB9XG59XG5mdW5jdGlvbiBzZXRTdG9yZWRJdGVtKGZ1bmMsIGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBmdW5jLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGVycikge1xuICB9XG59XG5mdW5jdGlvbiByZW1vdmVTdG9yZWRJdGVtKGZ1bmMsIGtleSkge1xuICB0cnkge1xuICAgIGZ1bmMucmVtb3ZlSXRlbShrZXkpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRCcm93c2VyU3RvcmFnZUl0ZW1zQ291bnQoc3RvcmFnZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHNldFN0b3JlZEl0ZW0oc3RvcmFnZSwgYnJvd3NlckNhY2hlQ291bnRLZXksIHZhbHVlLnRvU3RyaW5nKCkpO1xufVxuZnVuY3Rpb24gZ2V0QnJvd3NlclN0b3JhZ2VJdGVtc0NvdW50KHN0b3JhZ2UpIHtcbiAgcmV0dXJuIHBhcnNlSW50KGdldFN0b3JlZEl0ZW0oc3RvcmFnZSwgYnJvd3NlckNhY2hlQ291bnRLZXkpKSB8fCAwO1xufVxuXG5jb25zdCBicm93c2VyU3RvcmFnZUNvbmZpZyA9IHtcbiAgbG9jYWw6IHRydWUsXG4gIHNlc3Npb246IHRydWVcbn07XG5jb25zdCBicm93c2VyU3RvcmFnZUVtcHR5SXRlbXMgPSB7XG4gIGxvY2FsOiAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpLFxuICBzZXNzaW9uOiAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpXG59O1xubGV0IGJyb3dzZXJTdG9yYWdlU3RhdHVzID0gZmFsc2U7XG5mdW5jdGlvbiBzZXRCcm93c2VyU3RvcmFnZVN0YXR1cyhzdGF0dXMpIHtcbiAgYnJvd3NlclN0b3JhZ2VTdGF0dXMgPSBzdGF0dXM7XG59XG5cbmxldCBfd2luZG93ID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiA/IHt9IDogd2luZG93O1xuZnVuY3Rpb24gZ2V0QnJvd3NlclN0b3JhZ2Uoa2V5KSB7XG4gIGNvbnN0IGF0dHIgPSBrZXkgKyBcIlN0b3JhZ2VcIjtcbiAgdHJ5IHtcbiAgICBpZiAoX3dpbmRvdyAmJiBfd2luZG93W2F0dHJdICYmIHR5cGVvZiBfd2luZG93W2F0dHJdLmxlbmd0aCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgcmV0dXJuIF93aW5kb3dbYXR0cl07XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgfVxuICBicm93c2VyU3RvcmFnZUNvbmZpZ1trZXldID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGl0ZXJhdGVCcm93c2VyU3RvcmFnZShrZXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGZ1bmMgPSBnZXRCcm93c2VyU3RvcmFnZShrZXkpO1xuICBpZiAoIWZ1bmMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgdmVyc2lvbiA9IGdldFN0b3JlZEl0ZW0oZnVuYywgYnJvd3NlckNhY2hlVmVyc2lvbktleSk7XG4gIGlmICh2ZXJzaW9uICE9PSBicm93c2VyQ2FjaGVWZXJzaW9uKSB7XG4gICAgaWYgKHZlcnNpb24pIHtcbiAgICAgIGNvbnN0IHRvdGFsMiA9IGdldEJyb3dzZXJTdG9yYWdlSXRlbXNDb3VudChmdW5jKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWwyOyBpKyspIHtcbiAgICAgICAgcmVtb3ZlU3RvcmVkSXRlbShmdW5jLCBicm93c2VyQ2FjaGVQcmVmaXggKyBpLnRvU3RyaW5nKCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBzZXRTdG9yZWRJdGVtKGZ1bmMsIGJyb3dzZXJDYWNoZVZlcnNpb25LZXksIGJyb3dzZXJDYWNoZVZlcnNpb24pO1xuICAgIHNldEJyb3dzZXJTdG9yYWdlSXRlbXNDb3VudChmdW5jLCAwKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgbWluVGltZSA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIGJyb3dzZXJTdG9yYWdlSG91cikgLSBicm93c2VyU3RvcmFnZUNhY2hlRXhwaXJhdGlvbjtcbiAgY29uc3QgcGFyc2VJdGVtID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGJyb3dzZXJDYWNoZVByZWZpeCArIGluZGV4LnRvU3RyaW5nKCk7XG4gICAgY29uc3QgaXRlbSA9IGdldFN0b3JlZEl0ZW0oZnVuYywgbmFtZSk7XG4gICAgaWYgKHR5cGVvZiBpdGVtICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShpdGVtKTtcbiAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgZGF0YS5jYWNoZWQgPT09IFwibnVtYmVyXCIgJiYgZGF0YS5jYWNoZWQgPiBtaW5UaW1lICYmIHR5cGVvZiBkYXRhLnByb3ZpZGVyID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiBkYXRhLmRhdGEgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGRhdGEuZGF0YS5wcmVmaXggPT09IFwic3RyaW5nXCIgJiYgY2FsbGJhY2soZGF0YSwgaW5kZXgpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgIH1cbiAgICByZW1vdmVTdG9yZWRJdGVtKGZ1bmMsIG5hbWUpO1xuICB9O1xuICBsZXQgdG90YWwgPSBnZXRCcm93c2VyU3RvcmFnZUl0ZW1zQ291bnQoZnVuYyk7XG4gIGZvciAobGV0IGkgPSB0b3RhbCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKCFwYXJzZUl0ZW0oaSkpIHtcbiAgICAgIGlmIChpID09PSB0b3RhbCAtIDEpIHtcbiAgICAgICAgdG90YWwtLTtcbiAgICAgICAgc2V0QnJvd3NlclN0b3JhZ2VJdGVtc0NvdW50KGZ1bmMsIHRvdGFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyb3dzZXJTdG9yYWdlRW1wdHlJdGVtc1trZXldLmFkZChpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdEJyb3dzZXJTdG9yYWdlKCkge1xuICBpZiAoYnJvd3NlclN0b3JhZ2VTdGF0dXMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgc2V0QnJvd3NlclN0b3JhZ2VTdGF0dXModHJ1ZSk7XG4gIGZvciAoY29uc3Qga2V5IGluIGJyb3dzZXJTdG9yYWdlQ29uZmlnKSB7XG4gICAgaXRlcmF0ZUJyb3dzZXJTdG9yYWdlKGtleSwgKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGljb25TZXQgPSBpdGVtLmRhdGE7XG4gICAgICBjb25zdCBwcm92aWRlciA9IGl0ZW0ucHJvdmlkZXI7XG4gICAgICBjb25zdCBwcmVmaXggPSBpY29uU2V0LnByZWZpeDtcbiAgICAgIGNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKFxuICAgICAgICBwcm92aWRlcixcbiAgICAgICAgcHJlZml4XG4gICAgICApO1xuICAgICAgaWYgKCFhZGRJY29uU2V0KHN0b3JhZ2UsIGljb25TZXQpLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBsYXN0TW9kaWZpZWQgPSBpY29uU2V0Lmxhc3RNb2RpZmllZCB8fCAtMTtcbiAgICAgIHN0b3JhZ2UubGFzdE1vZGlmaWVkQ2FjaGVkID0gc3RvcmFnZS5sYXN0TW9kaWZpZWRDYWNoZWQgPyBNYXRoLm1pbihzdG9yYWdlLmxhc3RNb2RpZmllZENhY2hlZCwgbGFzdE1vZGlmaWVkKSA6IGxhc3RNb2RpZmllZDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxhc3RNb2RpZmllZChzdG9yYWdlLCBsYXN0TW9kaWZpZWQpIHtcbiAgY29uc3QgbGFzdFZhbHVlID0gc3RvcmFnZS5sYXN0TW9kaWZpZWRDYWNoZWQ7XG4gIGlmIChsYXN0VmFsdWUgJiYgbGFzdFZhbHVlID49IGxhc3RNb2RpZmllZCkge1xuICAgIHJldHVybiBsYXN0VmFsdWUgPT09IGxhc3RNb2RpZmllZDtcbiAgfVxuICBzdG9yYWdlLmxhc3RNb2RpZmllZENhY2hlZCA9IGxhc3RNb2RpZmllZDtcbiAgaWYgKGxhc3RWYWx1ZSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGJyb3dzZXJTdG9yYWdlQ29uZmlnKSB7XG4gICAgICBpdGVyYXRlQnJvd3NlclN0b3JhZ2Uoa2V5LCAoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBpY29uU2V0ID0gaXRlbS5kYXRhO1xuICAgICAgICByZXR1cm4gaXRlbS5wcm92aWRlciAhPT0gc3RvcmFnZS5wcm92aWRlciB8fCBpY29uU2V0LnByZWZpeCAhPT0gc3RvcmFnZS5wcmVmaXggfHwgaWNvblNldC5sYXN0TW9kaWZpZWQgPT09IGxhc3RNb2RpZmllZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHN0b3JlSW5Ccm93c2VyU3RvcmFnZShzdG9yYWdlLCBkYXRhKSB7XG4gIGlmICghYnJvd3NlclN0b3JhZ2VTdGF0dXMpIHtcbiAgICBpbml0QnJvd3NlclN0b3JhZ2UoKTtcbiAgfVxuICBmdW5jdGlvbiBzdG9yZShrZXkpIHtcbiAgICBsZXQgZnVuYztcbiAgICBpZiAoIWJyb3dzZXJTdG9yYWdlQ29uZmlnW2tleV0gfHwgIShmdW5jID0gZ2V0QnJvd3NlclN0b3JhZ2Uoa2V5KSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2V0ID0gYnJvd3NlclN0b3JhZ2VFbXB0eUl0ZW1zW2tleV07XG4gICAgbGV0IGluZGV4O1xuICAgIGlmIChzZXQuc2l6ZSkge1xuICAgICAgc2V0LmRlbGV0ZShpbmRleCA9IEFycmF5LmZyb20oc2V0KS5zaGlmdCgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5kZXggPSBnZXRCcm93c2VyU3RvcmFnZUl0ZW1zQ291bnQoZnVuYyk7XG4gICAgICBpZiAoIXNldEJyb3dzZXJTdG9yYWdlSXRlbXNDb3VudChmdW5jLCBpbmRleCArIDEpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgaXRlbSA9IHtcbiAgICAgIGNhY2hlZDogTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gYnJvd3NlclN0b3JhZ2VIb3VyKSxcbiAgICAgIHByb3ZpZGVyOiBzdG9yYWdlLnByb3ZpZGVyLFxuICAgICAgZGF0YVxuICAgIH07XG4gICAgcmV0dXJuIHNldFN0b3JlZEl0ZW0oXG4gICAgICBmdW5jLFxuICAgICAgYnJvd3NlckNhY2hlUHJlZml4ICsgaW5kZXgudG9TdHJpbmcoKSxcbiAgICAgIEpTT04uc3RyaW5naWZ5KGl0ZW0pXG4gICAgKTtcbiAgfVxuICBpZiAoZGF0YS5sYXN0TW9kaWZpZWQgJiYgIXVwZGF0ZUxhc3RNb2RpZmllZChzdG9yYWdlLCBkYXRhLmxhc3RNb2RpZmllZCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCFPYmplY3Qua2V5cyhkYXRhLmljb25zKS5sZW5ndGgpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGRhdGEubm90X2ZvdW5kKSB7XG4gICAgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEpO1xuICAgIGRlbGV0ZSBkYXRhLm5vdF9mb3VuZDtcbiAgfVxuICBpZiAoIXN0b3JlKFwibG9jYWxcIikpIHtcbiAgICBzdG9yZShcInNlc3Npb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW1wdHlDYWxsYmFjaygpIHtcbn1cbmZ1bmN0aW9uIGxvYWRlZE5ld0ljb25zKHN0b3JhZ2UpIHtcbiAgaWYgKCFzdG9yYWdlLmljb25zTG9hZGVyRmxhZykge1xuICAgIHN0b3JhZ2UuaWNvbnNMb2FkZXJGbGFnID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHN0b3JhZ2UuaWNvbnNMb2FkZXJGbGFnID0gZmFsc2U7XG4gICAgICB1cGRhdGVDYWxsYmFja3Moc3RvcmFnZSk7XG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGxvYWROZXdJY29ucyhzdG9yYWdlLCBpY29ucykge1xuICBpZiAoIXN0b3JhZ2UuaWNvbnNUb0xvYWQpIHtcbiAgICBzdG9yYWdlLmljb25zVG9Mb2FkID0gaWNvbnM7XG4gIH0gZWxzZSB7XG4gICAgc3RvcmFnZS5pY29uc1RvTG9hZCA9IHN0b3JhZ2UuaWNvbnNUb0xvYWQuY29uY2F0KGljb25zKS5zb3J0KCk7XG4gIH1cbiAgaWYgKCFzdG9yYWdlLmljb25zUXVldWVGbGFnKSB7XG4gICAgc3RvcmFnZS5pY29uc1F1ZXVlRmxhZyA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzdG9yYWdlLmljb25zUXVldWVGbGFnID0gZmFsc2U7XG4gICAgICBjb25zdCB7IHByb3ZpZGVyLCBwcmVmaXggfSA9IHN0b3JhZ2U7XG4gICAgICBjb25zdCBpY29uczIgPSBzdG9yYWdlLmljb25zVG9Mb2FkO1xuICAgICAgZGVsZXRlIHN0b3JhZ2UuaWNvbnNUb0xvYWQ7XG4gICAgICBsZXQgYXBpO1xuICAgICAgaWYgKCFpY29uczIgfHwgIShhcGkgPSBnZXRBUElNb2R1bGUocHJvdmlkZXIpKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBwYXJhbXMgPSBhcGkucHJlcGFyZShwcm92aWRlciwgcHJlZml4LCBpY29uczIpO1xuICAgICAgcGFyYW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgc2VuZEFQSVF1ZXJ5KHByb3ZpZGVyLCBpdGVtLCAoZGF0YSwgZXJyb3IpID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciAhPT0gNDA0KSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZW0uaWNvbnMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgICBzdG9yYWdlLm1pc3NpbmcuYWRkKG5hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IGFkZEljb25TZXQoXG4gICAgICAgICAgICAgICAgc3RvcmFnZSxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGlmICghcGFyc2VkLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb25zdCBwZW5kaW5nID0gc3RvcmFnZS5wZW5kaW5nSWNvbnM7XG4gICAgICAgICAgICAgIGlmIChwZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgIHBlbmRpbmcuZGVsZXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHN0b3JlSW5Ccm93c2VyU3RvcmFnZShzdG9yYWdlLCBkYXRhKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGxvYWRlZE5ld0ljb25zKHN0b3JhZ2UpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5jb25zdCBsb2FkSWNvbnMkMSA9IChpY29ucywgY2FsbGJhY2spID0+IHtcbiAgY29uc3QgY2xlYW5lZEljb25zID0gbGlzdFRvSWNvbnMoaWNvbnMsIHRydWUsIGFsbG93U2ltcGxlTmFtZXMoKSk7XG4gIGNvbnN0IHNvcnRlZEljb25zID0gc29ydEljb25zKGNsZWFuZWRJY29ucyk7XG4gIGlmICghc29ydGVkSWNvbnMucGVuZGluZy5sZW5ndGgpIHtcbiAgICBsZXQgY2FsbENhbGxiYWNrID0gdHJ1ZTtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoY2FsbENhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soXG4gICAgICAgICAgICBzb3J0ZWRJY29ucy5sb2FkZWQsXG4gICAgICAgICAgICBzb3J0ZWRJY29ucy5taXNzaW5nLFxuICAgICAgICAgICAgc29ydGVkSWNvbnMucGVuZGluZyxcbiAgICAgICAgICAgIGVtcHR5Q2FsbGJhY2tcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNhbGxDYWxsYmFjayA9IGZhbHNlO1xuICAgIH07XG4gIH1cbiAgY29uc3QgbmV3SWNvbnMgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgY29uc3Qgc291cmNlcyA9IFtdO1xuICBsZXQgbGFzdFByb3ZpZGVyLCBsYXN0UHJlZml4O1xuICBzb3J0ZWRJY29ucy5wZW5kaW5nLmZvckVhY2goKGljb24pID0+IHtcbiAgICBjb25zdCB7IHByb3ZpZGVyLCBwcmVmaXggfSA9IGljb247XG4gICAgaWYgKHByZWZpeCA9PT0gbGFzdFByZWZpeCAmJiBwcm92aWRlciA9PT0gbGFzdFByb3ZpZGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxhc3RQcm92aWRlciA9IHByb3ZpZGVyO1xuICAgIGxhc3RQcmVmaXggPSBwcmVmaXg7XG4gICAgc291cmNlcy5wdXNoKGdldFN0b3JhZ2UocHJvdmlkZXIsIHByZWZpeCkpO1xuICAgIGNvbnN0IHByb3ZpZGVyTmV3SWNvbnMgPSBuZXdJY29uc1twcm92aWRlcl0gfHwgKG5ld0ljb25zW3Byb3ZpZGVyXSA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAgICBpZiAoIXByb3ZpZGVyTmV3SWNvbnNbcHJlZml4XSkge1xuICAgICAgcHJvdmlkZXJOZXdJY29uc1twcmVmaXhdID0gW107XG4gICAgfVxuICB9KTtcbiAgc29ydGVkSWNvbnMucGVuZGluZy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgY29uc3QgeyBwcm92aWRlciwgcHJlZml4LCBuYW1lIH0gPSBpY29uO1xuICAgIGNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKHByb3ZpZGVyLCBwcmVmaXgpO1xuICAgIGNvbnN0IHBlbmRpbmdRdWV1ZSA9IHN0b3JhZ2UucGVuZGluZ0ljb25zIHx8IChzdG9yYWdlLnBlbmRpbmdJY29ucyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCkpO1xuICAgIGlmICghcGVuZGluZ1F1ZXVlLmhhcyhuYW1lKSkge1xuICAgICAgcGVuZGluZ1F1ZXVlLmFkZChuYW1lKTtcbiAgICAgIG5ld0ljb25zW3Byb3ZpZGVyXVtwcmVmaXhdLnB1c2gobmFtZSk7XG4gICAgfVxuICB9KTtcbiAgc291cmNlcy5mb3JFYWNoKChzdG9yYWdlKSA9PiB7XG4gICAgY29uc3QgeyBwcm92aWRlciwgcHJlZml4IH0gPSBzdG9yYWdlO1xuICAgIGlmIChuZXdJY29uc1twcm92aWRlcl1bcHJlZml4XS5sZW5ndGgpIHtcbiAgICAgIGxvYWROZXdJY29ucyhzdG9yYWdlLCBuZXdJY29uc1twcm92aWRlcl1bcHJlZml4XSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGNhbGxiYWNrID8gc3RvcmVDYWxsYmFjayhjYWxsYmFjaywgc29ydGVkSWNvbnMsIHNvdXJjZXMpIDogZW1wdHlDYWxsYmFjaztcbn07XG5jb25zdCBsb2FkSWNvbiQxID0gKGljb24pID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChmdWxmaWxsLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBpY29uT2JqID0gdHlwZW9mIGljb24gPT09IFwic3RyaW5nXCIgPyBzdHJpbmdUb0ljb24oaWNvbiwgdHJ1ZSkgOiBpY29uO1xuICAgIGlmICghaWNvbk9iaikge1xuICAgICAgcmVqZWN0KGljb24pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsb2FkSWNvbnMkMShbaWNvbk9iaiB8fCBpY29uXSwgKGxvYWRlZCkgPT4ge1xuICAgICAgaWYgKGxvYWRlZC5sZW5ndGggJiYgaWNvbk9iaikge1xuICAgICAgICBjb25zdCBkYXRhID0gZ2V0SWNvbkRhdGEoaWNvbk9iaik7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgZnVsZmlsbCh7XG4gICAgICAgICAgICAuLi5kZWZhdWx0SWNvblByb3BzLFxuICAgICAgICAgICAgLi4uZGF0YVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVqZWN0KGljb24pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbi8qKlxuICogVGVzdCBpY29uIHN0cmluZ1xuICovXG5mdW5jdGlvbiB0ZXN0SWNvbk9iamVjdCh2YWx1ZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBKU09OLnBhcnNlKHZhbHVlKSA6IHZhbHVlO1xuICAgICAgICBpZiAodHlwZW9mIG9iai5ib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5vYmosXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy9cbiAgICB9XG59XG5cbi8qKlxuICogUGFyc2UgaWNvbiB2YWx1ZSwgbG9hZCBpZiBuZWVkZWRcbiAqL1xuZnVuY3Rpb24gcGFyc2VJY29uVmFsdWUodmFsdWUsIG9ubG9hZCkge1xuICAgIC8vIENoZWNrIGlmIGljb24gbmFtZSBpcyB2YWxpZFxuICAgIGNvbnN0IG5hbWUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gc3RyaW5nVG9JY29uKHZhbHVlLCB0cnVlLCB0cnVlKSA6IG51bGw7XG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICAgIC8vIFRlc3QgZm9yIHNlcmlhbGlzZWQgb2JqZWN0XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0ZXN0SWNvbk9iamVjdCh2YWx1ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIFZhbGlkIGljb24gbmFtZTogY2hlY2sgaWYgZGF0YSBpcyBhdmFpbGFibGVcbiAgICBjb25zdCBkYXRhID0gZ2V0SWNvbkRhdGEobmFtZSk7XG4gICAgLy8gSWNvbiBkYXRhIGV4aXN0cyBvciBpY29uIGhhcyBubyBwcmVmaXguIERvIG5vdCBsb2FkIGljb24gZnJvbSBBUEkgaWYgaWNvbiBoYXMgbm8gcHJlZml4XG4gICAgaWYgKGRhdGEgIT09IHZvaWQgMCB8fCAhbmFtZS5wcmVmaXgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGRhdGEsIC8vIGNvdWxkIGJlICdudWxsJyAtPiBpY29uIGlzIG1pc3NpbmdcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gTG9hZCBpY29uXG4gICAgY29uc3QgbG9hZGluZyA9IGxvYWRJY29ucyQxKFtuYW1lXSwgKCkgPT4gb25sb2FkKHZhbHVlLCBuYW1lLCBnZXRJY29uRGF0YShuYW1lKSkpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlLFxuICAgICAgICBuYW1lLFxuICAgICAgICBsb2FkaW5nLFxuICAgIH07XG59XG5cbi8qKlxuICogQ2hlY2sgZm9yIGlubGluZVxuICovXG5mdW5jdGlvbiBnZXRJbmxpbmUobm9kZSkge1xuICAgIHJldHVybiBub2RlLmhhc0F0dHJpYnV0ZSgnaW5saW5lJyk7XG59XG5cbi8vIENoZWNrIGZvciBTYWZhcmlcbmxldCBpc0J1Z2dlZFNhZmFyaSA9IGZhbHNlO1xudHJ5IHtcbiAgICBpc0J1Z2dlZFNhZmFyaSA9IG5hdmlnYXRvci52ZW5kb3IuaW5kZXhPZignQXBwbGUnKSA9PT0gMDtcbn1cbmNhdGNoIChlcnIpIHtcbiAgICAvL1xufVxuLyoqXG4gKiBHZXQgcmVuZGVyIG1vZGVcbiAqL1xuZnVuY3Rpb24gZ2V0UmVuZGVyTW9kZShib2R5LCBtb2RlKSB7XG4gICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICAgIC8vIEZvcmNlIG1vZGVcbiAgICAgICAgY2FzZSAnc3ZnJzpcbiAgICAgICAgY2FzZSAnYmcnOlxuICAgICAgICBjYXNlICdtYXNrJzpcbiAgICAgICAgICAgIHJldHVybiBtb2RlO1xuICAgIH1cbiAgICAvLyBDaGVjayBmb3IgYW5pbWF0aW9uLCB1c2UgJ3N0eWxlJyBmb3IgYW5pbWF0ZWQgaWNvbnMsIHVubGVzcyBicm93c2VyIGlzIFNhZmFyaVxuICAgIC8vIChvbmx5IDxhPiwgd2hpY2ggc2hvdWxkIGJlIGlnbm9yZWQgb3IgYW5pbWF0aW9ucyBzdGFydCB3aXRoICc8YScpXG4gICAgaWYgKG1vZGUgIT09ICdzdHlsZScgJiZcbiAgICAgICAgKGlzQnVnZ2VkU2FmYXJpIHx8IGJvZHkuaW5kZXhPZignPGEnKSA9PT0gLTEpKSB7XG4gICAgICAgIC8vIFJlbmRlciA8c3ZnPlxuICAgICAgICByZXR1cm4gJ3N2Zyc7XG4gICAgfVxuICAgIC8vIFVzZSBiYWNrZ3JvdW5kIG9yIG1hc2tcbiAgICByZXR1cm4gYm9keS5pbmRleE9mKCdjdXJyZW50Q29sb3InKSA9PT0gLTEgPyAnYmcnIDogJ21hc2snO1xufVxuXG5jb25zdCB1bml0c1NwbGl0ID0gLygtP1swLTkuXSpbMC05XStbMC05Ll0qKS9nO1xuY29uc3QgdW5pdHNUZXN0ID0gL14tP1swLTkuXSpbMC05XStbMC05Ll0qJC9nO1xuZnVuY3Rpb24gY2FsY3VsYXRlU2l6ZSQxKHNpemUsIHJhdGlvLCBwcmVjaXNpb24pIHtcbiAgaWYgKHJhdGlvID09PSAxKSB7XG4gICAgcmV0dXJuIHNpemU7XG4gIH1cbiAgcHJlY2lzaW9uID0gcHJlY2lzaW9uIHx8IDEwMDtcbiAgaWYgKHR5cGVvZiBzaXplID09PSBcIm51bWJlclwiKSB7XG4gICAgcmV0dXJuIE1hdGguY2VpbChzaXplICogcmF0aW8gKiBwcmVjaXNpb24pIC8gcHJlY2lzaW9uO1xuICB9XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBzaXplO1xuICB9XG4gIGNvbnN0IG9sZFBhcnRzID0gc2l6ZS5zcGxpdCh1bml0c1NwbGl0KTtcbiAgaWYgKG9sZFBhcnRzID09PSBudWxsIHx8ICFvbGRQYXJ0cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gc2l6ZTtcbiAgfVxuICBjb25zdCBuZXdQYXJ0cyA9IFtdO1xuICBsZXQgY29kZSA9IG9sZFBhcnRzLnNoaWZ0KCk7XG4gIGxldCBpc051bWJlciA9IHVuaXRzVGVzdC50ZXN0KGNvZGUpO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIGlmIChpc051bWJlcikge1xuICAgICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdChjb2RlKTtcbiAgICAgIGlmIChpc05hTihudW0pKSB7XG4gICAgICAgIG5ld1BhcnRzLnB1c2goY29kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdQYXJ0cy5wdXNoKE1hdGguY2VpbChudW0gKiByYXRpbyAqIHByZWNpc2lvbikgLyBwcmVjaXNpb24pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdQYXJ0cy5wdXNoKGNvZGUpO1xuICAgIH1cbiAgICBjb2RlID0gb2xkUGFydHMuc2hpZnQoKTtcbiAgICBpZiAoY29kZSA9PT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm4gbmV3UGFydHMuam9pbihcIlwiKTtcbiAgICB9XG4gICAgaXNOdW1iZXIgPSAhaXNOdW1iZXI7XG4gIH1cbn1cblxuZnVuY3Rpb24gaWNvblRvU1ZHKGljb24sIGN1c3RvbWlzYXRpb25zKSB7XG4gIGNvbnN0IGZ1bGxJY29uID0ge1xuICAgIC4uLmRlZmF1bHRJY29uUHJvcHMsXG4gICAgLi4uaWNvblxuICB9O1xuICBjb25zdCBmdWxsQ3VzdG9taXNhdGlvbnMgPSB7XG4gICAgLi4uZGVmYXVsdEljb25DdXN0b21pc2F0aW9ucyxcbiAgICAuLi5jdXN0b21pc2F0aW9uc1xuICB9O1xuICBjb25zdCBib3ggPSB7XG4gICAgbGVmdDogZnVsbEljb24ubGVmdCxcbiAgICB0b3A6IGZ1bGxJY29uLnRvcCxcbiAgICB3aWR0aDogZnVsbEljb24ud2lkdGgsXG4gICAgaGVpZ2h0OiBmdWxsSWNvbi5oZWlnaHRcbiAgfTtcbiAgbGV0IGJvZHkgPSBmdWxsSWNvbi5ib2R5O1xuICBbZnVsbEljb24sIGZ1bGxDdXN0b21pc2F0aW9uc10uZm9yRWFjaCgocHJvcHMpID0+IHtcbiAgICBjb25zdCB0cmFuc2Zvcm1hdGlvbnMgPSBbXTtcbiAgICBjb25zdCBoRmxpcCA9IHByb3BzLmhGbGlwO1xuICAgIGNvbnN0IHZGbGlwID0gcHJvcHMudkZsaXA7XG4gICAgbGV0IHJvdGF0aW9uID0gcHJvcHMucm90YXRlO1xuICAgIGlmIChoRmxpcCkge1xuICAgICAgaWYgKHZGbGlwKSB7XG4gICAgICAgIHJvdGF0aW9uICs9IDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2Zvcm1hdGlvbnMucHVzaChcbiAgICAgICAgICBcInRyYW5zbGF0ZShcIiArIChib3gud2lkdGggKyBib3gubGVmdCkudG9TdHJpbmcoKSArIFwiIFwiICsgKDAgLSBib3gudG9wKS50b1N0cmluZygpICsgXCIpXCJcbiAgICAgICAgKTtcbiAgICAgICAgdHJhbnNmb3JtYXRpb25zLnB1c2goXCJzY2FsZSgtMSAxKVwiKTtcbiAgICAgICAgYm94LnRvcCA9IGJveC5sZWZ0ID0gMDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZGbGlwKSB7XG4gICAgICB0cmFuc2Zvcm1hdGlvbnMucHVzaChcbiAgICAgICAgXCJ0cmFuc2xhdGUoXCIgKyAoMCAtIGJveC5sZWZ0KS50b1N0cmluZygpICsgXCIgXCIgKyAoYm94LmhlaWdodCArIGJveC50b3ApLnRvU3RyaW5nKCkgKyBcIilcIlxuICAgICAgKTtcbiAgICAgIHRyYW5zZm9ybWF0aW9ucy5wdXNoKFwic2NhbGUoMSAtMSlcIik7XG4gICAgICBib3gudG9wID0gYm94LmxlZnQgPSAwO1xuICAgIH1cbiAgICBsZXQgdGVtcFZhbHVlO1xuICAgIGlmIChyb3RhdGlvbiA8IDApIHtcbiAgICAgIHJvdGF0aW9uIC09IE1hdGguZmxvb3Iocm90YXRpb24gLyA0KSAqIDQ7XG4gICAgfVxuICAgIHJvdGF0aW9uID0gcm90YXRpb24gJSA0O1xuICAgIHN3aXRjaCAocm90YXRpb24pIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdGVtcFZhbHVlID0gYm94LmhlaWdodCAvIDIgKyBib3gudG9wO1xuICAgICAgICB0cmFuc2Zvcm1hdGlvbnMudW5zaGlmdChcbiAgICAgICAgICBcInJvdGF0ZSg5MCBcIiArIHRlbXBWYWx1ZS50b1N0cmluZygpICsgXCIgXCIgKyB0ZW1wVmFsdWUudG9TdHJpbmcoKSArIFwiKVwiXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICB0cmFuc2Zvcm1hdGlvbnMudW5zaGlmdChcbiAgICAgICAgICBcInJvdGF0ZSgxODAgXCIgKyAoYm94LndpZHRoIC8gMiArIGJveC5sZWZ0KS50b1N0cmluZygpICsgXCIgXCIgKyAoYm94LmhlaWdodCAvIDIgKyBib3gudG9wKS50b1N0cmluZygpICsgXCIpXCJcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHRlbXBWYWx1ZSA9IGJveC53aWR0aCAvIDIgKyBib3gubGVmdDtcbiAgICAgICAgdHJhbnNmb3JtYXRpb25zLnVuc2hpZnQoXG4gICAgICAgICAgXCJyb3RhdGUoLTkwIFwiICsgdGVtcFZhbHVlLnRvU3RyaW5nKCkgKyBcIiBcIiArIHRlbXBWYWx1ZS50b1N0cmluZygpICsgXCIpXCJcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChyb3RhdGlvbiAlIDIgPT09IDEpIHtcbiAgICAgIGlmIChib3gubGVmdCAhPT0gYm94LnRvcCkge1xuICAgICAgICB0ZW1wVmFsdWUgPSBib3gubGVmdDtcbiAgICAgICAgYm94LmxlZnQgPSBib3gudG9wO1xuICAgICAgICBib3gudG9wID0gdGVtcFZhbHVlO1xuICAgICAgfVxuICAgICAgaWYgKGJveC53aWR0aCAhPT0gYm94LmhlaWdodCkge1xuICAgICAgICB0ZW1wVmFsdWUgPSBib3gud2lkdGg7XG4gICAgICAgIGJveC53aWR0aCA9IGJveC5oZWlnaHQ7XG4gICAgICAgIGJveC5oZWlnaHQgPSB0ZW1wVmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0cmFuc2Zvcm1hdGlvbnMubGVuZ3RoKSB7XG4gICAgICBib2R5ID0gJzxnIHRyYW5zZm9ybT1cIicgKyB0cmFuc2Zvcm1hdGlvbnMuam9pbihcIiBcIikgKyAnXCI+JyArIGJvZHkgKyBcIjwvZz5cIjtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBjdXN0b21pc2F0aW9uc1dpZHRoID0gZnVsbEN1c3RvbWlzYXRpb25zLndpZHRoO1xuICBjb25zdCBjdXN0b21pc2F0aW9uc0hlaWdodCA9IGZ1bGxDdXN0b21pc2F0aW9ucy5oZWlnaHQ7XG4gIGNvbnN0IGJveFdpZHRoID0gYm94LndpZHRoO1xuICBjb25zdCBib3hIZWlnaHQgPSBib3guaGVpZ2h0O1xuICBsZXQgd2lkdGg7XG4gIGxldCBoZWlnaHQ7XG4gIGlmIChjdXN0b21pc2F0aW9uc1dpZHRoID09PSBudWxsKSB7XG4gICAgaGVpZ2h0ID0gY3VzdG9taXNhdGlvbnNIZWlnaHQgPT09IG51bGwgPyBcIjFlbVwiIDogY3VzdG9taXNhdGlvbnNIZWlnaHQgPT09IFwiYXV0b1wiID8gYm94SGVpZ2h0IDogY3VzdG9taXNhdGlvbnNIZWlnaHQ7XG4gICAgd2lkdGggPSBjYWxjdWxhdGVTaXplJDEoaGVpZ2h0LCBib3hXaWR0aCAvIGJveEhlaWdodCk7XG4gIH0gZWxzZSB7XG4gICAgd2lkdGggPSBjdXN0b21pc2F0aW9uc1dpZHRoID09PSBcImF1dG9cIiA/IGJveFdpZHRoIDogY3VzdG9taXNhdGlvbnNXaWR0aDtcbiAgICBoZWlnaHQgPSBjdXN0b21pc2F0aW9uc0hlaWdodCA9PT0gbnVsbCA/IGNhbGN1bGF0ZVNpemUkMSh3aWR0aCwgYm94SGVpZ2h0IC8gYm94V2lkdGgpIDogY3VzdG9taXNhdGlvbnNIZWlnaHQgPT09IFwiYXV0b1wiID8gYm94SGVpZ2h0IDogY3VzdG9taXNhdGlvbnNIZWlnaHQ7XG4gIH1cbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIHdpZHRoOiB3aWR0aC50b1N0cmluZygpLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQudG9TdHJpbmcoKSxcbiAgICAgIHZpZXdCb3g6IGJveC5sZWZ0LnRvU3RyaW5nKCkgKyBcIiBcIiArIGJveC50b3AudG9TdHJpbmcoKSArIFwiIFwiICsgYm94V2lkdGgudG9TdHJpbmcoKSArIFwiIFwiICsgYm94SGVpZ2h0LnRvU3RyaW5nKClcbiAgICB9LFxuICAgIGJvZHlcbiAgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuY29uc3QgZGV0ZWN0RmV0Y2ggPSAoKSA9PiB7XG4gIGxldCBjYWxsYmFjaztcbiAgdHJ5IHtcbiAgICBjYWxsYmFjayA9IGZldGNoO1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gIH1cbn07XG5sZXQgZmV0Y2hNb2R1bGUgPSBkZXRlY3RGZXRjaCgpO1xuZnVuY3Rpb24gc2V0RmV0Y2goZmV0Y2gyKSB7XG4gIGZldGNoTW9kdWxlID0gZmV0Y2gyO1xufVxuZnVuY3Rpb24gZ2V0RmV0Y2goKSB7XG4gIHJldHVybiBmZXRjaE1vZHVsZTtcbn1cbmZ1bmN0aW9uIGNhbGN1bGF0ZU1heExlbmd0aChwcm92aWRlciwgcHJlZml4KSB7XG4gIGNvbnN0IGNvbmZpZyA9IGdldEFQSUNvbmZpZyhwcm92aWRlcik7XG4gIGlmICghY29uZmlnKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgbGV0IHJlc3VsdDtcbiAgaWYgKCFjb25maWcubWF4VVJMKSB7XG4gICAgcmVzdWx0ID0gMDtcbiAgfSBlbHNlIHtcbiAgICBsZXQgbWF4SG9zdExlbmd0aCA9IDA7XG4gICAgY29uZmlnLnJlc291cmNlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBob3N0ID0gaXRlbTtcbiAgICAgIG1heEhvc3RMZW5ndGggPSBNYXRoLm1heChtYXhIb3N0TGVuZ3RoLCBob3N0Lmxlbmd0aCk7XG4gICAgfSk7XG4gICAgY29uc3QgdXJsID0gcHJlZml4ICsgXCIuanNvbj9pY29ucz1cIjtcbiAgICByZXN1bHQgPSBjb25maWcubWF4VVJMIC0gbWF4SG9zdExlbmd0aCAtIGNvbmZpZy5wYXRoLmxlbmd0aCAtIHVybC5sZW5ndGg7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIHNob3VsZEFib3J0KHN0YXR1cykge1xuICByZXR1cm4gc3RhdHVzID09PSA0MDQ7XG59XG5jb25zdCBwcmVwYXJlID0gKHByb3ZpZGVyLCBwcmVmaXgsIGljb25zKSA9PiB7XG4gIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgY29uc3QgbWF4TGVuZ3RoID0gY2FsY3VsYXRlTWF4TGVuZ3RoKHByb3ZpZGVyLCBwcmVmaXgpO1xuICBjb25zdCB0eXBlID0gXCJpY29uc1wiO1xuICBsZXQgaXRlbSA9IHtcbiAgICB0eXBlLFxuICAgIHByb3ZpZGVyLFxuICAgIHByZWZpeCxcbiAgICBpY29uczogW11cbiAgfTtcbiAgbGV0IGxlbmd0aCA9IDA7XG4gIGljb25zLmZvckVhY2goKG5hbWUsIGluZGV4KSA9PiB7XG4gICAgbGVuZ3RoICs9IG5hbWUubGVuZ3RoICsgMTtcbiAgICBpZiAobGVuZ3RoID49IG1heExlbmd0aCAmJiBpbmRleCA+IDApIHtcbiAgICAgIHJlc3VsdHMucHVzaChpdGVtKTtcbiAgICAgIGl0ZW0gPSB7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIHByb3ZpZGVyLFxuICAgICAgICBwcmVmaXgsXG4gICAgICAgIGljb25zOiBbXVxuICAgICAgfTtcbiAgICAgIGxlbmd0aCA9IG5hbWUubGVuZ3RoO1xuICAgIH1cbiAgICBpdGVtLmljb25zLnB1c2gobmFtZSk7XG4gIH0pO1xuICByZXN1bHRzLnB1c2goaXRlbSk7XG4gIHJldHVybiByZXN1bHRzO1xufTtcbmZ1bmN0aW9uIGdldFBhdGgocHJvdmlkZXIpIHtcbiAgaWYgKHR5cGVvZiBwcm92aWRlciA9PT0gXCJzdHJpbmdcIikge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEFQSUNvbmZpZyhwcm92aWRlcik7XG4gICAgaWYgKGNvbmZpZykge1xuICAgICAgcmV0dXJuIGNvbmZpZy5wYXRoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gXCIvXCI7XG59XG5jb25zdCBzZW5kID0gKGhvc3QsIHBhcmFtcywgY2FsbGJhY2spID0+IHtcbiAgaWYgKCFmZXRjaE1vZHVsZSkge1xuICAgIGNhbGxiYWNrKFwiYWJvcnRcIiwgNDI0KTtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IHBhdGggPSBnZXRQYXRoKHBhcmFtcy5wcm92aWRlcik7XG4gIHN3aXRjaCAocGFyYW1zLnR5cGUpIHtcbiAgICBjYXNlIFwiaWNvbnNcIjoge1xuICAgICAgY29uc3QgcHJlZml4ID0gcGFyYW1zLnByZWZpeDtcbiAgICAgIGNvbnN0IGljb25zID0gcGFyYW1zLmljb25zO1xuICAgICAgY29uc3QgaWNvbnNMaXN0ID0gaWNvbnMuam9pbihcIixcIik7XG4gICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgICAgaWNvbnM6IGljb25zTGlzdFxuICAgICAgfSk7XG4gICAgICBwYXRoICs9IHByZWZpeCArIFwiLmpzb24/XCIgKyB1cmxQYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFwiY3VzdG9tXCI6IHtcbiAgICAgIGNvbnN0IHVyaSA9IHBhcmFtcy51cmk7XG4gICAgICBwYXRoICs9IHVyaS5zbGljZSgwLCAxKSA9PT0gXCIvXCIgPyB1cmkuc2xpY2UoMSkgOiB1cmk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIGNhbGxiYWNrKFwiYWJvcnRcIiwgNDAwKTtcbiAgICAgIHJldHVybjtcbiAgfVxuICBsZXQgZGVmYXVsdEVycm9yID0gNTAzO1xuICBmZXRjaE1vZHVsZShob3N0ICsgcGF0aCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICBjb25zdCBzdGF0dXMgPSByZXNwb25zZS5zdGF0dXM7XG4gICAgaWYgKHN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2FsbGJhY2soc2hvdWxkQWJvcnQoc3RhdHVzKSA/IFwiYWJvcnRcIiA6IFwibmV4dFwiLCBzdGF0dXMpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRlZmF1bHRFcnJvciA9IDUwMTtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBkYXRhICE9PSBcIm9iamVjdFwiIHx8IGRhdGEgPT09IG51bGwpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjYWxsYmFjayhcIm5leHRcIiwgZGVmYXVsdEVycm9yKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNhbGxiYWNrKFwic3VjY2Vzc1wiLCBkYXRhKTtcbiAgICB9KTtcbiAgfSkuY2F0Y2goKCkgPT4ge1xuICAgIGNhbGxiYWNrKFwibmV4dFwiLCBkZWZhdWx0RXJyb3IpO1xuICB9KTtcbn07XG5jb25zdCBmZXRjaEFQSU1vZHVsZSA9IHtcbiAgcHJlcGFyZSxcbiAgc2VuZFxufTtcblxuZnVuY3Rpb24gdG9nZ2xlQnJvd3NlckNhY2hlKHN0b3JhZ2UsIHZhbHVlKSB7XG4gIHN3aXRjaCAoc3RvcmFnZSkge1xuICAgIGNhc2UgXCJsb2NhbFwiOlxuICAgIGNhc2UgXCJzZXNzaW9uXCI6XG4gICAgICBicm93c2VyU3RvcmFnZUNvbmZpZ1tzdG9yYWdlXSA9IHZhbHVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImFsbFwiOlxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gYnJvd3NlclN0b3JhZ2VDb25maWcpIHtcbiAgICAgICAgYnJvd3NlclN0b3JhZ2VDb25maWdba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuLy8gQ29yZVxuLyoqXG4gKiBHZXQgZnVuY3Rpb25zIGFuZCBpbml0aWFsaXNlIHN0dWZmXG4gKi9cbmZ1bmN0aW9uIGV4cG9ydEZ1bmN0aW9ucygpIHtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlIHN0dWZmXG4gICAgICovXG4gICAgLy8gU2V0IEFQSSBtb2R1bGVcbiAgICBzZXRBUElNb2R1bGUoJycsIGZldGNoQVBJTW9kdWxlKTtcbiAgICAvLyBBbGxvdyBzaW1wbGUgaWNvbiBuYW1lc1xuICAgIGFsbG93U2ltcGxlTmFtZXModHJ1ZSk7XG4gICAgbGV0IF93aW5kb3c7XG4gICAgdHJ5IHtcbiAgICAgICAgX3dpbmRvdyA9IHdpbmRvdztcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICAvL1xuICAgIH1cbiAgICBpZiAoX3dpbmRvdykge1xuICAgICAgICAvLyBTZXQgY2FjaGUgYW5kIGxvYWQgZXhpc3RpbmcgY2FjaGVcbiAgICAgICAgaW5pdEJyb3dzZXJTdG9yYWdlKCk7XG4gICAgICAgIC8vIExvYWQgaWNvbnMgZnJvbSBnbG9iYWwgXCJJY29uaWZ5UHJlbG9hZFwiXG4gICAgICAgIGlmIChfd2luZG93Lkljb25pZnlQcmVsb2FkICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGNvbnN0IHByZWxvYWQgPSBfd2luZG93Lkljb25pZnlQcmVsb2FkO1xuICAgICAgICAgICAgY29uc3QgZXJyID0gJ0ludmFsaWQgSWNvbmlmeVByZWxvYWQgc3ludGF4Lic7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHByZWxvYWQgPT09ICdvYmplY3QnICYmIHByZWxvYWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAocHJlbG9hZCBpbnN0YW5jZW9mIEFycmF5ID8gcHJlbG9hZCA6IFtwcmVsb2FkXSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgaXRlbSBpcyBhbiBvYmplY3QgYW5kIG5vdCBudWxsL2FycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgaXRlbSAhPT0gJ29iamVjdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSBpbnN0YW5jZW9mIEFycmF5IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yICdpY29ucycgYW5kICdwcmVmaXgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGl0ZW0uaWNvbnMgIT09ICdvYmplY3QnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGl0ZW0ucHJlZml4ICE9PSAnc3RyaW5nJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBpY29uIHNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFhZGRDb2xsZWN0aW9uJDEoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFNldCBBUEkgZnJvbSBnbG9iYWwgXCJJY29uaWZ5UHJvdmlkZXJzXCJcbiAgICAgICAgaWYgKF93aW5kb3cuSWNvbmlmeVByb3ZpZGVycyAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBjb25zdCBwcm92aWRlcnMgPSBfd2luZG93Lkljb25pZnlQcm92aWRlcnM7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb3ZpZGVycyA9PT0gJ29iamVjdCcgJiYgcHJvdmlkZXJzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcHJvdmlkZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9ICdJY29uaWZ5UHJvdmlkZXJzWycgKyBrZXkgKyAnXSBpcyBpbnZhbGlkLic7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3ZpZGVyc1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdmFsdWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5yZXNvdXJjZXMgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhZGRBUElQcm92aWRlciQxKGtleSwgdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgX2FwaSA9IHtcbiAgICAgICAgZ2V0QVBJQ29uZmlnLFxuICAgICAgICBzZXRBUElNb2R1bGUsXG4gICAgICAgIHNlbmRBUElRdWVyeSxcbiAgICAgICAgc2V0RmV0Y2gsXG4gICAgICAgIGdldEZldGNoLFxuICAgICAgICBsaXN0QVBJUHJvdmlkZXJzLFxuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW5hYmxlQ2FjaGU6IChzdG9yYWdlKSA9PiB0b2dnbGVCcm93c2VyQ2FjaGUoc3RvcmFnZSwgdHJ1ZSksXG4gICAgICAgIGRpc2FibGVDYWNoZTogKHN0b3JhZ2UpID0+IHRvZ2dsZUJyb3dzZXJDYWNoZShzdG9yYWdlLCBmYWxzZSksXG4gICAgICAgIGljb25FeGlzdHM6IGljb25FeGlzdHMkMSxcbiAgICAgICAgZ2V0SWNvbjogZ2V0SWNvbiQxLFxuICAgICAgICBsaXN0SWNvbnM6IGxpc3RJY29ucyQxLFxuICAgICAgICBhZGRJY29uOiBhZGRJY29uJDEsXG4gICAgICAgIGFkZENvbGxlY3Rpb246IGFkZENvbGxlY3Rpb24kMSxcbiAgICAgICAgY2FsY3VsYXRlU2l6ZTogY2FsY3VsYXRlU2l6ZSQxLFxuICAgICAgICBidWlsZEljb246IGljb25Ub1NWRyxcbiAgICAgICAgbG9hZEljb25zOiBsb2FkSWNvbnMkMSxcbiAgICAgICAgbG9hZEljb246IGxvYWRJY29uJDEsXG4gICAgICAgIGFkZEFQSVByb3ZpZGVyOiBhZGRBUElQcm92aWRlciQxLFxuICAgICAgICBfYXBpLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGljb25Ub0hUTUwoYm9keSwgYXR0cmlidXRlcykge1xuICBsZXQgcmVuZGVyQXR0cmlic0hUTUwgPSBib2R5LmluZGV4T2YoXCJ4bGluazpcIikgPT09IC0xID8gXCJcIiA6ICcgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCInO1xuICBmb3IgKGNvbnN0IGF0dHIgaW4gYXR0cmlidXRlcykge1xuICAgIHJlbmRlckF0dHJpYnNIVE1MICs9IFwiIFwiICsgYXR0ciArICc9XCInICsgYXR0cmlidXRlc1thdHRyXSArICdcIic7XG4gIH1cbiAgcmV0dXJuICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIicgKyByZW5kZXJBdHRyaWJzSFRNTCArIFwiPlwiICsgYm9keSArIFwiPC9zdmc+XCI7XG59XG5cbmZ1bmN0aW9uIGVuY29kZVNWR2ZvclVSTChzdmcpIHtcbiAgcmV0dXJuIHN2Zy5yZXBsYWNlKC9cIi9nLCBcIidcIikucmVwbGFjZSgvJS9nLCBcIiUyNVwiKS5yZXBsYWNlKC8jL2csIFwiJTIzXCIpLnJlcGxhY2UoLzwvZywgXCIlM0NcIikucmVwbGFjZSgvPi9nLCBcIiUzRVwiKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKTtcbn1cbmZ1bmN0aW9uIHN2Z1RvVVJMKHN2Zykge1xuICByZXR1cm4gJ3VybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwnICsgZW5jb2RlU1ZHZm9yVVJMKHN2ZykgKyAnXCIpJztcbn1cblxuLy8gTGlzdCBvZiBwcm9wZXJ0aWVzIHRvIGFwcGx5XG5jb25zdCBtb25vdG9uZVByb3BzID0ge1xuICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJ2N1cnJlbnRDb2xvcicsXG59O1xuY29uc3QgY29sb3JlZFByb3BzID0ge1xuICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJ3RyYW5zcGFyZW50Jyxcbn07XG4vLyBEeW5hbWljYWxseSBhZGQgY29tbW9uIHByb3BzIHRvIHZhcmlhYmxlcyBhYm92ZVxuY29uc3QgcHJvcHNUb0FkZCA9IHtcbiAgICBpbWFnZTogJ3ZhcigtLXN2ZyknLFxuICAgIHJlcGVhdDogJ25vLXJlcGVhdCcsXG4gICAgc2l6ZTogJzEwMCUgMTAwJScsXG59O1xuY29uc3QgcHJvcHNUb0FkZFRvID0ge1xuICAgICctd2Via2l0LW1hc2snOiBtb25vdG9uZVByb3BzLFxuICAgICdtYXNrJzogbW9ub3RvbmVQcm9wcyxcbiAgICAnYmFja2dyb3VuZCc6IGNvbG9yZWRQcm9wcyxcbn07XG5mb3IgKGNvbnN0IHByZWZpeCBpbiBwcm9wc1RvQWRkVG8pIHtcbiAgICBjb25zdCBsaXN0ID0gcHJvcHNUb0FkZFRvW3ByZWZpeF07XG4gICAgZm9yIChjb25zdCBwcm9wIGluIHByb3BzVG9BZGQpIHtcbiAgICAgICAgbGlzdFtwcmVmaXggKyAnLScgKyBwcm9wXSA9IHByb3BzVG9BZGRbcHJvcF07XG4gICAgfVxufVxuLyoqXG4gKiBGaXggc2l6ZTogYWRkICdweCcgdG8gbnVtYmVyc1xuICovXG5mdW5jdGlvbiBmaXhTaXplKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICsgKHZhbHVlLm1hdGNoKC9eWy0wLTkuXSskLykgPyAncHgnIDogJycpO1xufVxuLyoqXG4gKiBSZW5kZXIgbm9kZSBhcyA8c3Bhbj5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyU1BBTihkYXRhLCBpY29uLCB1c2VNYXNrKSB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAvLyBCb2R5XG4gICAgbGV0IGJvZHkgPSBkYXRhLmJvZHk7XG4gICAgaWYgKGJvZHkuaW5kZXhPZignPGEnKSAhPT0gLTEpIHtcbiAgICAgICAgLy8gQW5pbWF0ZWQgU1ZHOiBhZGQgc29tZXRoaW5nIHRvIGZpeCB0aW1pbmcgYnVnXG4gICAgICAgIGJvZHkgKz0gJzwhLS0gJyArIERhdGUubm93KCkgKyAnIC0tPic7XG4gICAgfVxuICAgIC8vIEdlbmVyYXRlIFNWRyBhcyBVUkxcbiAgICBjb25zdCByZW5kZXJBdHRyaWJzID0gZGF0YS5hdHRyaWJ1dGVzO1xuICAgIGNvbnN0IGh0bWwgPSBpY29uVG9IVE1MKGJvZHksIHtcbiAgICAgICAgLi4ucmVuZGVyQXR0cmlicyxcbiAgICAgICAgd2lkdGg6IGljb24ud2lkdGggKyAnJyxcbiAgICAgICAgaGVpZ2h0OiBpY29uLmhlaWdodCArICcnLFxuICAgIH0pO1xuICAgIGNvbnN0IHVybCA9IHN2Z1RvVVJMKGh0bWwpO1xuICAgIC8vIEdlbmVyYXRlIHN0eWxlXG4gICAgY29uc3Qgc3ZnU3R5bGUgPSBub2RlLnN0eWxlO1xuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgJy0tc3ZnJzogdXJsLFxuICAgICAgICAnd2lkdGgnOiBmaXhTaXplKHJlbmRlckF0dHJpYnMud2lkdGgpLFxuICAgICAgICAnaGVpZ2h0JzogZml4U2l6ZShyZW5kZXJBdHRyaWJzLmhlaWdodCksXG4gICAgICAgIC4uLih1c2VNYXNrID8gbW9ub3RvbmVQcm9wcyA6IGNvbG9yZWRQcm9wcyksXG4gICAgfTtcbiAgICAvLyBBcHBseSBzdHlsZVxuICAgIGZvciAoY29uc3QgcHJvcCBpbiBzdHlsZXMpIHtcbiAgICAgICAgc3ZnU3R5bGUuc2V0UHJvcGVydHkocHJvcCwgc3R5bGVzW3Byb3BdKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbi8qKlxuICogUmVuZGVyIG5vZGUgYXMgPHN2Zz5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyU1ZHKGRhdGEpIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIC8vIEdlbmVyYXRlIFNWR1xuICAgIG5vZGUuaW5uZXJIVE1MID0gaWNvblRvSFRNTChkYXRhLmJvZHksIGRhdGEuYXR0cmlidXRlcyk7XG4gICAgcmV0dXJuIG5vZGUuZmlyc3RDaGlsZDtcbn1cblxuLyoqXG4gKiBSZW5kZXIgaWNvblxuICovXG5mdW5jdGlvbiByZW5kZXJJY29uKHBhcmVudCwgc3RhdGUpIHtcbiAgICBjb25zdCBpY29uRGF0YSA9IHN0YXRlLmljb24uZGF0YTtcbiAgICBjb25zdCBjdXN0b21pc2F0aW9ucyA9IHN0YXRlLmN1c3RvbWlzYXRpb25zO1xuICAgIC8vIFJlbmRlciBpY29uXG4gICAgY29uc3QgcmVuZGVyRGF0YSA9IGljb25Ub1NWRyhpY29uRGF0YSwgY3VzdG9taXNhdGlvbnMpO1xuICAgIGlmIChjdXN0b21pc2F0aW9ucy5wcmVzZXJ2ZUFzcGVjdFJhdGlvKSB7XG4gICAgICAgIHJlbmRlckRhdGEuYXR0cmlidXRlc1sncHJlc2VydmVBc3BlY3RSYXRpbyddID1cbiAgICAgICAgICAgIGN1c3RvbWlzYXRpb25zLnByZXNlcnZlQXNwZWN0UmF0aW87XG4gICAgfVxuICAgIGNvbnN0IG1vZGUgPSBzdGF0ZS5yZW5kZXJlZE1vZGU7XG4gICAgbGV0IG5vZGU7XG4gICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICAgIGNhc2UgJ3N2Zyc6XG4gICAgICAgICAgICBub2RlID0gcmVuZGVyU1ZHKHJlbmRlckRhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBub2RlID0gcmVuZGVyU1BBTihyZW5kZXJEYXRhLCB7XG4gICAgICAgICAgICAgICAgLi4uZGVmYXVsdEljb25Qcm9wcyxcbiAgICAgICAgICAgICAgICAuLi5pY29uRGF0YSxcbiAgICAgICAgICAgIH0sIG1vZGUgPT09ICdtYXNrJyk7XG4gICAgfVxuICAgIC8vIFNldCBlbGVtZW50XG4gICAgY29uc3Qgb2xkTm9kZSA9IEFycmF5LmZyb20ocGFyZW50LmNoaWxkTm9kZXMpLmZpbmQoKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFnID0gbm9kZS50YWdOYW1lICYmXG4gICAgICAgICAgICBub2RlLnRhZ05hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIHRhZyA9PT0gJ1NQQU4nIHx8IHRhZyA9PT0gJ1NWRyc7XG4gICAgfSk7XG4gICAgaWYgKG9sZE5vZGUpIHtcbiAgICAgICAgLy8gUmVwbGFjZSBvbGQgZWxlbWVudFxuICAgICAgICBpZiAobm9kZS50YWdOYW1lID09PSAnU1BBTicgJiYgb2xkTm9kZS50YWdOYW1lID09PSBub2RlLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIC8vIFN3YXAgc3R5bGUgaW5zdGVhZCBvZiB3aG9sZSBub2RlXG4gICAgICAgICAgICBvbGROb2RlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBub2RlLmdldEF0dHJpYnV0ZSgnc3R5bGUnKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnQucmVwbGFjZUNoaWxkKG5vZGUsIG9sZE5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBBZGQgbmV3IGVsZW1lbnRcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBBdHRyaWJ1dGUgdG8gYWRkXG4gKi9cbmNvbnN0IG5vZGVBdHRyID0gJ2RhdGEtc3R5bGUnO1xuLyoqXG4gKiBBZGQvdXBkYXRlIHN0eWxlIG5vZGVcbiAqL1xuZnVuY3Rpb24gdXBkYXRlU3R5bGUocGFyZW50LCBpbmxpbmUpIHtcbiAgICAvLyBHZXQgbm9kZSwgY3JlYXRlIGlmIG5lZWRlZFxuICAgIGxldCBzdHlsZU5vZGUgPSBBcnJheS5mcm9tKHBhcmVudC5jaGlsZE5vZGVzKS5maW5kKChub2RlKSA9PiBub2RlLmhhc0F0dHJpYnV0ZSAmJlxuICAgICAgICBub2RlLmhhc0F0dHJpYnV0ZShub2RlQXR0cikpO1xuICAgIGlmICghc3R5bGVOb2RlKSB7XG4gICAgICAgIHN0eWxlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHN0eWxlTm9kZS5zZXRBdHRyaWJ1dGUobm9kZUF0dHIsIG5vZGVBdHRyKTtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHN0eWxlTm9kZSk7XG4gICAgfVxuICAgIC8vIFVwZGF0ZSBjb250ZW50XG4gICAgc3R5bGVOb2RlLnRleHRDb250ZW50ID1cbiAgICAgICAgJzpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOicgK1xuICAgICAgICAgICAgKGlubGluZSA/ICctMC4xMjVlbScgOiAnMCcpICtcbiAgICAgICAgICAgICd9c3Bhbixzdmd7ZGlzcGxheTpibG9ja30nO1xufVxuXG4vKipcbiAqIFNldCBzdGF0ZSB0byBQZW5kaW5nU3RhdGVcbiAqL1xuZnVuY3Rpb24gc2V0UGVuZGluZ1N0YXRlKGljb24sIGlubGluZSwgbGFzdFN0YXRlKSB7XG4gICAgY29uc3QgbGFzdFJlbmRlciA9IGxhc3RTdGF0ZSAmJlxuICAgICAgICAobGFzdFN0YXRlLnJlbmRlcmVkXG4gICAgICAgICAgICA/IGxhc3RTdGF0ZVxuICAgICAgICAgICAgOiBsYXN0U3RhdGUubGFzdFJlbmRlcik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVuZGVyZWQ6IGZhbHNlLFxuICAgICAgICBpbmxpbmUsXG4gICAgICAgIGljb24sXG4gICAgICAgIGxhc3RSZW5kZXIsXG4gICAgfTtcbn1cblxuLyoqXG4gKiBSZWdpc3RlciAnaWNvbmlmeS1pY29uJyBjb21wb25lbnQsIGlmIGl0IGRvZXMgbm90IGV4aXN0XG4gKi9cbmZ1bmN0aW9uIGRlZmluZUljb25pZnlJY29uKG5hbWUgPSAnaWNvbmlmeS1pY29uJykge1xuICAgIC8vIENoZWNrIGZvciBjdXN0b20gZWxlbWVudHMgcmVnaXN0cnkgYW5kIEhUTUxFbGVtZW50XG4gICAgbGV0IGN1c3RvbUVsZW1lbnRzO1xuICAgIGxldCBQYXJlbnRDbGFzcztcbiAgICB0cnkge1xuICAgICAgICBjdXN0b21FbGVtZW50cyA9IHdpbmRvdy5jdXN0b21FbGVtZW50cztcbiAgICAgICAgUGFyZW50Q2xhc3MgPSB3aW5kb3cuSFRNTEVsZW1lbnQ7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBNYWtlIHN1cmUgcmVnaXN0cnkgYW5kIEhUTUxFbGVtZW50IGV4aXN0XG4gICAgaWYgKCFjdXN0b21FbGVtZW50cyB8fCAhUGFyZW50Q2xhc3MpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBDaGVjayBmb3IgZHVwbGljYXRlXG4gICAgY29uc3QgQ29uZmxpY3RpbmdDbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChuYW1lKTtcbiAgICBpZiAoQ29uZmxpY3RpbmdDbGFzcykge1xuICAgICAgICByZXR1cm4gQ29uZmxpY3RpbmdDbGFzcztcbiAgICB9XG4gICAgLy8gQWxsIGF0dHJpYnV0ZXNcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gW1xuICAgICAgICAvLyBJY29uXG4gICAgICAgICdpY29uJyxcbiAgICAgICAgLy8gTW9kZVxuICAgICAgICAnbW9kZScsXG4gICAgICAgICdpbmxpbmUnLFxuICAgICAgICAvLyBDdXN0b21pc2F0aW9uc1xuICAgICAgICAnd2lkdGgnLFxuICAgICAgICAnaGVpZ2h0JyxcbiAgICAgICAgJ3JvdGF0ZScsXG4gICAgICAgICdmbGlwJyxcbiAgICBdO1xuICAgIC8qKlxuICAgICAqIENvbXBvbmVudCBjbGFzc1xuICAgICAqL1xuICAgIGNvbnN0IEljb25pZnlJY29uID0gY2xhc3MgZXh0ZW5kcyBQYXJlbnRDbGFzcyB7XG4gICAgICAgIC8vIFJvb3RcbiAgICAgICAgX3NoYWRvd1Jvb3Q7XG4gICAgICAgIC8vIFN0YXRlXG4gICAgICAgIF9zdGF0ZTtcbiAgICAgICAgLy8gQXR0cmlidXRlcyBjaGVjayBxdWV1ZWRcbiAgICAgICAgX2NoZWNrUXVldWVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgLy8gQXR0YWNoIHNoYWRvdyBET01cbiAgICAgICAgICAgIGNvbnN0IHJvb3QgPSAodGhpcy5fc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHtcbiAgICAgICAgICAgICAgICBtb2RlOiAnb3BlbicsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAvLyBBZGQgc3R5bGVcbiAgICAgICAgICAgIGNvbnN0IGlubGluZSA9IGdldElubGluZSh0aGlzKTtcbiAgICAgICAgICAgIHVwZGF0ZVN0eWxlKHJvb3QsIGlubGluZSk7XG4gICAgICAgICAgICAvLyBDcmVhdGUgZW1wdHkgc3RhdGVcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gc2V0UGVuZGluZ1N0YXRlKHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICB9LCBpbmxpbmUpO1xuICAgICAgICAgICAgLy8gUXVldWUgaWNvbiByZW5kZXJcbiAgICAgICAgICAgIHRoaXMuX3F1ZXVlQ2hlY2soKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogT2JzZXJ2ZWQgYXR0cmlidXRlc1xuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gYXR0cmlidXRlcy5zbGljZSgwKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogT2JzZXJ2ZWQgcHJvcGVydGllcyB0aGF0IGFyZSBkaWZmZXJlbnQgZnJvbSBhdHRyaWJ1dGVzXG4gICAgICAgICAqXG4gICAgICAgICAqIEV4cGVyaW1lbnRhbCEgTmVlZCB0byB0ZXN0IHdpdGggdmFyaW91cyBmcmFtZXdvcmtzIHRoYXQgc3VwcG9ydCBpdFxuICAgICAgICAgKi9cbiAgICAgICAgLypcbiAgICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpbmxpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICAgICAgcmVmbGVjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vIE5vdCBsaXN0aW5nIG90aGVyIGF0dHJpYnV0ZXMgYmVjYXVzZSB0aGV5IGFyZSBzdHJpbmdzIG9yIGNvbWJpbmF0aW9uXG4gICAgICAgICAgICAgICAgLy8gb2Ygc3RyaW5nIGFuZCBhbm90aGVyIHR5cGUuIENhbm5vdCBoYXZlIG11bHRpcGxlIHR5cGVzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgICovXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBdHRyaWJ1dGUgaGFzIGNoYW5nZWRcbiAgICAgICAgICovXG4gICAgICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lKSB7XG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gJ2lubGluZScpIHtcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgaW1tZWRpYXRlbHk6IG5vdCBhZmZlY3RlZCBieSBvdGhlciBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3SW5saW5lID0gZ2V0SW5saW5lKHRoaXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5fc3RhdGU7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0lubGluZSAhPT0gc3RhdGUuaW5saW5lKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBzdHlsZSBpZiBpbmxpbmUgbW9kZSBjaGFuZ2VkXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmlubGluZSA9IG5ld0lubGluZTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlU3R5bGUodGhpcy5fc2hhZG93Um9vdCwgbmV3SW5saW5lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBRdWV1ZSBjaGVjayBmb3Igb3RoZXIgYXR0cmlidXRlc1xuICAgICAgICAgICAgICAgIHRoaXMuX3F1ZXVlQ2hlY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0L3NldCBpY29uXG4gICAgICAgICAqL1xuICAgICAgICBnZXQgaWNvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2ljb24nKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5zbGljZSgwLCAxKSA9PT0gJ3snKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHNldCBpY29uKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2ljb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldC9zZXQgaW5saW5lXG4gICAgICAgICAqL1xuICAgICAgICBnZXQgaW5saW5lKCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldElubGluZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBzZXQgaW5saW5lKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnaW5saW5lJywgdmFsdWUgPyAndHJ1ZScgOiBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmVzdGFydCBhbmltYXRpb25cbiAgICAgICAgICovXG4gICAgICAgIHJlc3RhcnRBbmltYXRpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuX3N0YXRlO1xuICAgICAgICAgICAgaWYgKHN0YXRlLnJlbmRlcmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuX3NoYWRvd1Jvb3Q7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLnJlbmRlcmVkTW9kZSA9PT0gJ3N2ZycpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHJvb3Qgbm9kZVxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdC5sYXN0Q2hpbGQuc2V0Q3VycmVudFRpbWUoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmFpbGVkOiBzZXRDdXJyZW50VGltZSgpIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZW5kZXJJY29uKHJvb3QsIHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHN0YXR1c1xuICAgICAgICAgKi9cbiAgICAgICAgZ2V0IHN0YXR1cygpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5fc3RhdGU7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUucmVuZGVyZWRcbiAgICAgICAgICAgICAgICA/ICdyZW5kZXJlZCdcbiAgICAgICAgICAgICAgICA6IHN0YXRlLmljb24uZGF0YSA9PT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICA/ICdmYWlsZWQnXG4gICAgICAgICAgICAgICAgICAgIDogJ2xvYWRpbmcnO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBRdWV1ZSBhdHRyaWJ1dGVzIHJlLWNoZWNrXG4gICAgICAgICAqL1xuICAgICAgICBfcXVldWVDaGVjaygpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fY2hlY2tRdWV1ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja1F1ZXVlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIGZvciBjaGFuZ2VzXG4gICAgICAgICAqL1xuICAgICAgICBfY2hlY2soKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2NoZWNrUXVldWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fY2hlY2tRdWV1ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5fc3RhdGU7XG4gICAgICAgICAgICAvLyBHZXQgaWNvblxuICAgICAgICAgICAgY29uc3QgbmV3SWNvbiA9IHRoaXMuZ2V0QXR0cmlidXRlKCdpY29uJyk7XG4gICAgICAgICAgICBpZiAobmV3SWNvbiAhPT0gc3RhdGUuaWNvbi52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ljb25DaGFuZ2VkKG5ld0ljb24pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElnbm9yZSBvdGhlciBhdHRyaWJ1dGVzIGlmIGljb24gaXMgbm90IHJlbmRlcmVkXG4gICAgICAgICAgICBpZiAoIXN0YXRlLnJlbmRlcmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIG1vZGUgYW5kIGF0dHJpYnV0ZSBjaGFuZ2VzXG4gICAgICAgICAgICBjb25zdCBtb2RlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ21vZGUnKTtcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbWlzYXRpb25zID0gZ2V0Q3VzdG9taXNhdGlvbnModGhpcyk7XG4gICAgICAgICAgICBpZiAoc3RhdGUuYXR0ck1vZGUgIT09IG1vZGUgfHxcbiAgICAgICAgICAgICAgICBoYXZlQ3VzdG9taXNhdGlvbnNDaGFuZ2VkKHN0YXRlLmN1c3RvbWlzYXRpb25zLCBjdXN0b21pc2F0aW9ucykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJJY29uKHN0YXRlLmljb24sIGN1c3RvbWlzYXRpb25zLCBtb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSWNvbiB2YWx1ZSBoYXMgY2hhbmdlZFxuICAgICAgICAgKi9cbiAgICAgICAgX2ljb25DaGFuZ2VkKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBpY29uID0gcGFyc2VJY29uVmFsdWUobmV3VmFsdWUsICh2YWx1ZSwgbmFtZSwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEFzeW5jaHJvbm91cyBjYWxsYmFjazogcmUtY2hlY2sgdmFsdWVzIHRvIG1ha2Ugc3VyZSBzdHVmZiB3YXNuJ3QgY2hhbmdlZFxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5fc3RhdGU7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLnJlbmRlcmVkIHx8IHRoaXMuZ2V0QXR0cmlidXRlKCdpY29uJykgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEljb24gZGF0YSBpcyBhbHJlYWR5IGF2YWlsYWJsZSBvciBpY29uIGF0dHJpYnV0ZSB3YXMgY2hhbmdlZFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIENoYW5nZSBpY29uXG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoaWNvbi5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbmRlciBpY29uXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dvdEljb25EYXRhKGljb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm90aGluZyB0byByZW5kZXI6IHVwZGF0ZSBpY29uIGluIHN0YXRlXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmljb24gPSBpY29uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGljb24uZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vIEljb24gaXMgcmVhZHkgdG8gcmVuZGVyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ290SWNvbkRhdGEoaWNvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBQZW5kaW5nIGljb25cbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IHNldFBlbmRpbmdTdGF0ZShpY29uLCB0aGlzLl9zdGF0ZS5pbmxpbmUsIHRoaXMuX3N0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogR290IG5ldyBpY29uIGRhdGEsIGljb24gaXMgcmVhZHkgdG8gKHJlKXJlbmRlclxuICAgICAgICAgKi9cbiAgICAgICAgX2dvdEljb25EYXRhKGljb24pIHtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrUXVldWVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJJY29uKGljb24sIGdldEN1c3RvbWlzYXRpb25zKHRoaXMpLCB0aGlzLmdldEF0dHJpYnV0ZSgnbW9kZScpKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmUtcmVuZGVyIGJhc2VkIG9uIGljb24gZGF0YVxuICAgICAgICAgKi9cbiAgICAgICAgX3JlbmRlckljb24oaWNvbiwgY3VzdG9taXNhdGlvbnMsIGF0dHJNb2RlKSB7XG4gICAgICAgICAgICAvLyBHZXQgbW9kZVxuICAgICAgICAgICAgY29uc3QgcmVuZGVyZWRNb2RlID0gZ2V0UmVuZGVyTW9kZShpY29uLmRhdGEuYm9keSwgYXR0ck1vZGUpO1xuICAgICAgICAgICAgLy8gSW5saW5lIHdhcyBub3QgY2hhbmdlZFxuICAgICAgICAgICAgY29uc3QgaW5saW5lID0gdGhpcy5fc3RhdGUuaW5saW5lO1xuICAgICAgICAgICAgLy8gU2V0IHN0YXRlIGFuZCByZW5kZXJcbiAgICAgICAgICAgIHJlbmRlckljb24odGhpcy5fc2hhZG93Um9vdCwgKHRoaXMuX3N0YXRlID0ge1xuICAgICAgICAgICAgICAgIHJlbmRlcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGljb24sXG4gICAgICAgICAgICAgICAgaW5saW5lLFxuICAgICAgICAgICAgICAgIGN1c3RvbWlzYXRpb25zLFxuICAgICAgICAgICAgICAgIGF0dHJNb2RlLFxuICAgICAgICAgICAgICAgIHJlbmRlcmVkTW9kZSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gQWRkIGdldHRlcnMgYW5kIHNldHRlcnNcbiAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgaWYgKCEoYXR0ciBpbiBJY29uaWZ5SWNvbi5wcm90b3R5cGUpKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSWNvbmlmeUljb24ucHJvdG90eXBlLCBhdHRyLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBBZGQgZXhwb3J0ZWQgZnVuY3Rpb25zOiBib3RoIGFzIHN0YXRpYyBhbmQgaW5zdGFuY2UgbWV0aG9kc1xuICAgIGNvbnN0IGZ1bmN0aW9ucyA9IGV4cG9ydEZ1bmN0aW9ucygpO1xuICAgIGZvciAoY29uc3Qga2V5IGluIGZ1bmN0aW9ucykge1xuICAgICAgICBJY29uaWZ5SWNvbltrZXldID0gSWNvbmlmeUljb24ucHJvdG90eXBlW2tleV0gPSBmdW5jdGlvbnNba2V5XTtcbiAgICB9XG4gICAgLy8gRGVmaW5lIG5ldyBjb21wb25lbnRcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUobmFtZSwgSWNvbmlmeUljb24pO1xuICAgIHJldHVybiBJY29uaWZ5SWNvbjtcbn1cblxuLyoqXG4gKiBDcmVhdGUgZXhwb3J0ZWQgZGF0YTogZWl0aGVyIGNvbXBvbmVudCBpbnN0YW5jZSBvciBmdW5jdGlvbnNcbiAqL1xuY29uc3QgSWNvbmlmeUljb25Db21wb25lbnQgPSBkZWZpbmVJY29uaWZ5SWNvbigpIHx8IGV4cG9ydEZ1bmN0aW9ucygpO1xuLyoqXG4gKiBFeHBvcnQgZnVuY3Rpb25zXG4gKi9cbmNvbnN0IHsgZW5hYmxlQ2FjaGUsIGRpc2FibGVDYWNoZSwgaWNvbkV4aXN0cywgZ2V0SWNvbiwgbGlzdEljb25zLCBhZGRJY29uLCBhZGRDb2xsZWN0aW9uLCBjYWxjdWxhdGVTaXplLCBidWlsZEljb24sIGxvYWRJY29ucywgbG9hZEljb24sIGFkZEFQSVByb3ZpZGVyLCBfYXBpLCB9ID0gSWNvbmlmeUljb25Db21wb25lbnQ7XG5cbmV4cG9ydCB7IEljb25pZnlJY29uQ29tcG9uZW50LCBfYXBpLCBhZGRBUElQcm92aWRlciwgYWRkQ29sbGVjdGlvbiwgYWRkSWNvbiwgYnVpbGRJY29uLCBjYWxjdWxhdGVTaXplLCBkaXNhYmxlQ2FjaGUsIGVuYWJsZUNhY2hlLCBnZXRJY29uLCBpY29uRXhpc3RzLCBsaXN0SWNvbnMsIGxvYWRJY29uLCBsb2FkSWNvbnMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgcmVuZGVyIGZyb20gJy4vY29tcG9uZW50cy9yZW5kZXInO1xyXG5cclxucmVuZGVyKCk7XHJcbiJdLCJuYW1lcyI6WyJjb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbWdPYmoiLCJpbXBvcnRBbGwiLCJyIiwia2V5cyIsInVybHMiLCJtYXAiLCJmb3JFYWNoIiwidXJsIiwiaSIsImtleSIsInJlcGxhY2UiLCJyZXF1aXJlIiwiY29udGV4dCIsImNoYW5nZUJhY2tncm91bmQiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImltYWdlcyIsImNvbmZpcm1Nb2RhbCIsIm9wdGlvbnMiLCJib3giLCJ0aXRsZSIsInRleHRDb250ZW50IiwibWVzc2FnZSIsIm1lbnUiLCJ5ZXMiLCJubyIsImFwcGVuZCIsImhpZGVObyIsImJvZHkiLCJzaG93TW9kYWwiLCJoaWRlQm94IiwiY2xvc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpY29uIiwiY3JlYXRlTGluayIsImNyZWRpdCIsImdpdGh1YiIsInRleHQiLCJocmVmIiwid2ViIiwiaW5uZXJIVE1MIiwiY2xvY2siLCJmb3JtYXQiLCJ0aW1lem9uZSIsInRpbWUiLCJjb252ZXJ0VGltZXpvbmUiLCJvZmZzZXQiLCJ1c2VyT2Zmc2V0IiwiRGF0ZSIsImdldFRpbWV6b25lT2Zmc2V0Iiwibm93IiwidXBkYXRlQ2xvY2siLCJ0b2RheSIsInRvTG93ZXJDYXNlIiwic2V0SW50ZXJ2YWwiLCJnZXRVc2VyTG9jYXRpb24iLCJnZXRXZWF0aGVyIiwiZ2V0TG9jYXRpb24iLCJ3ZWF0aGVyRGlzcGxheSIsImRpc3BsYXlEYXRhIiwiaGlkZUVsZW1lbnQiLCJsb2NhdGlvblNlYXJjaCIsImxvY2F0aW9uQ29udGFpbmVyIiwiYXV0b2NvbXBsZXRlQ29udGFpbmVyIiwic2hvd0NvbnRhaW5lciIsImRpc3BsYXkiLCJoaWRlQ29udGFpbmVyIiwiZm9ybSIsImlucHV0Iiwic3VibWl0IiwicXVlcnkiLCJwbGFjZWhvbGRlciIsImdldElucHV0IiwidmFsdWUiLCJzZXRJbnB1dCIsImdldFF1ZXJ5Iiwic2V0UXVlcnkiLCJsb2NhdGlvbiIsInNldFF1ZXJ5QW5kSW5wdXQiLCJkaXNwbGF5X25hbWUiLCJzdWJtaXRGb3JtIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2xlYXJPdXRwdXRzIiwidGhlbiIsInJlcyIsInNlbGVjdGVkIiwibGlzdCIsInF1ZXJ5U2VsZWN0b3IiLCJjaGlsZHJlbiIsInVuc2VsZWN0IiwiYSIsInJlbW92ZSIsInNlbGVjdCIsIml0ZW0iLCJsZW5ndGgiLCJmb2N1cyIsInByZXZpb3VzU2libGluZyIsIm5leHRTaWJsaW5nIiwiY2xpY2siLCJhdXRvY29tcGxldGUiLCJzdGFydCIsInVzZU15TG9jYXRpb24iLCJidXR0b24iLCJ0aW1lb3V0Iiwic2hvd1Jlc3VsdHMiLCJ1bCIsInRyaW0iLCJsaXN0UGxhY2Vob2xkZXIiLCJub1Jlc3VsdHMiLCJsb2FkaW5nVGV4dCIsImxpIiwiZGF0YXNldCIsImxhdCIsImxvbiIsIm5ld1RpbWVvdXQiLCJzZXRUaW1lb3V0IiwicmVzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicmVzdGFydFRpbWVvdXQiLCJ3ZWF0aGVyIiwibG9jYXRpb25JbnB1dCIsImxvYWRpbmciLCJiYWNrZ3JvdW5kIiwic2F2ZSIsImxvYWQiLCJsb2NhdGlvbk91cHV0IiwiY2xvY2tPdXRwdXQiLCJjdXJyZW50VGVtcE91dHB1dCIsInNjYWxlT3V0cHV0Iiwid2VhdGhlckltZ091dHB1dCIsImRlc2NyaXB0aW9uT3V0cHV0IiwiaGlnaE91dHB1dCIsImxvd091dHB1dCIsImhpTG8iLCJ1bml0U2xpZGVyIiwibGFiZWwiLCJzbGlkZXIiLCJjZWxzaXVzIiwiZmFocmVuaGVpdCIsInR5cGUiLCJjaGVja2VkIiwidW5pdHMiLCJnZXRTY2FsZSIsInNldFNjYWxlIiwiZGVnIiwic2V0TG9jYXRpb25PdXRwdXQiLCJjbGVhckNsb2NrT3V0cHV0Iiwic2V0Q2xvY2tPdXRwdXQiLCJjb3VudHJ5Q29kZSIsInNldEN1cnJlbnRUZW1wT3V0cHV0Iiwic2V0U2NhbGVPdXRwdXQiLCJzZXRXZWF0aGVySW1nU3JjIiwic3JjIiwic2V0V2VhdGhlckltZ0FsdFRleHQiLCJhbHQiLCJzZXRXZWF0aGVySW1nVGl0bGUiLCJzZXRXZWF0aGVySW1nQWx0QW5kVGl0bGUiLCJzZXREZXNjcmlwdGlvbk91dHB1dCIsInNldEhpZ2hPdXRwdXQiLCJzZXRMb3dPdXRwdXQiLCJyZXNwb25zZSIsImRhdGEiLCJjb29yZCIsIm1haW4iLCJkZXNjcmlwdGlvbiIsInRlbXAiLCJoaWdoIiwidGVtcF9tYXgiLCJsb3ciLCJ0ZW1wX21pbiIsInN1bnJpc2UiLCJzeXMiLCJzdW5zZXQiLCJsb2NhdGlvbk5hbWUiLCJuYW1lIiwiY2l0eSIsImFkZHJlc3MiLCJtdW5pY2lwYWxpdHkiLCJzdWJ1cmIiLCJ0b3duIiwidmlsbGFnZSIsInN0YXRlIiwiY291bnRyeSIsInNjYWxlIiwiY29udmVydFVuaXRzIiwia2VsdmluIiwiYyIsIk1hdGgiLCJyb3VuZCIsImYiLCJjb252ZXJ0ZWRUZW1wIiwiY29udmVydGVkSGlnaCIsImNvbnZlcnRlZExvdyIsImxvY2F0aW9uU3RyaW5nIiwiYiIsInJlZ2lvbiIsInNob3dXZWF0aGVyIiwiaGVhZGVyIiwiZm9vdGVyIiwiZGVmYXVsdFdlYXRoZXIiLCJnZXRMb2NhdGlvbk5hbWUiLCJjb29yZHMiLCJmZXRjaCIsImpzb24iLCJFcnJvciIsIm9rIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsImluaXRpYWxXZWF0aGVyIiwicG9zIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImVsZW1lbnQiLCJzZWxlY3RvciIsImhpZGUiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaWNvbmlmeUljb24iLCJzZXRBdHRyaWJ1dGUiLCJvcHRzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9