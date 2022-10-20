// import autocomplete from '../functions/autocomplete';

export default (() => {
  const container = document.createElement('form');
  const input = document.createElement('input');
  const submit = document.createElement('button');
  let query;

  container.classList.add('location-input');
  input.placeholder = 'Enter a location';
  submit.textContent = 'Go';

  container.append(input, submit);

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
    console.log(e);
    console.log('submitted');
  });

  return {
    container,
    getInput,
    setInput,
    getQuery,
    setQuery,
    setQueryAndInput,
  };
})();
