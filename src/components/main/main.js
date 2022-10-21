import weatherDisplay from './weatherDisplay';
import locationInput from './locationInput';
import todoList from './todo';
import calendar from './calendar';
import clock from './clock';
import radio from './radio';

export default (() => {
  const container = document.createElement('main');
  container.append(
    clock,
    weatherDisplay.container,
    locationInput.container,
    // todoList,
    // calendar,
    // radio,
  );
  return container;
})();
