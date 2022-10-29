import { format } from 'date-fns';

export default (timeZone = '') => {
  const container = document.createElement('div');
  container.classList.add('clock');
  const time = document.createElement('span');
  container.append(time);

  const convertTimeZone = (offset) => {
    const userOffset = (new Date()).getTimezoneOffset() * 60;
    return new Date(((offset + userOffset + Date.now() / 1000) * 1000));
  };

  const updateClock = () => {
    const today = new Date();
    if (timeZone) {
      // console.log(convertTimeZone(timeZone))
      time.textContent = format(convertTimeZone(timeZone), 'p').toLowerCase();
    } else {
      time.textContent = format(today, 'p').toLowerCase();
    }
  };
  updateClock();
  setInterval(updateClock, 10);
  return container;
};
