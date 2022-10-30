import { format } from 'date-fns';

export default (timezone = '') => {
  const container = document.createElement('div');
  container.classList.add('clock');
  const time = document.createElement('span');
  container.append(time);

  const convertTimezone = (offset) => {
    const userOffset = (new Date()).getTimezoneOffset() * 60;
    return new Date(((offset + userOffset + Date.now() / 1000) * 1000));
  };

  const updateClock = () => {
    const today = new Date();
    if (typeof timezone === 'number') { // allows 0 to be passed in
      time.textContent = format(convertTimezone(timezone), 'p').toLowerCase();
    } else {
      time.textContent = format(today, 'p').toLowerCase();
    }
  };
  updateClock();
  setInterval(updateClock, 10);
  return container;
};
