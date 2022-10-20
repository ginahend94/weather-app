import { format } from 'date-fns';

export default (() => {
  const container = document.createElement('div');
  const time = document.createElement('span');
  container.append(time);

  const updateClock = () => {
    const today = new Date();
    time.textContent = format(today, 'h:mm bbb');
  };
  updateClock();
  setInterval(updateClock, 10);
  return container;
})();
