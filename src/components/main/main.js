import weatherDisplay from './weatherDisplay';
import locationInput from './locationInput';
import todoList from './todo';
import calendar from './calendar';
import clock from './clock';
import radio from './radio';

export default (() => {
  const container = document.createElement('main');
  container.textContent = 'main';
  container.append(
    weatherDisplay,
    locationInput.container,
    todoList,
    calendar,
    clock,
    radio,
  );
  return container;
})();
