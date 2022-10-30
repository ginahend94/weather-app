import weatherDisplay from './weatherDisplay';
import locationInput from './locationInput';

export default (() => {
  const container = document.createElement('main');
  container.append(
    locationInput.container,
    weatherDisplay.container,
  );
  return container;
})();
