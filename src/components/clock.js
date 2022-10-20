import { format } from 'date-fns';

export default () => {
  const hours = document.querySelector('.hours');
  const minutes = document.querySelector('.minutes');
  const amPM = document.querySelector('.am-pm');
  const date = document.querySelector('.date');
  const updateClock = () => {
    const today = new Date();
    hours.textContent = format(today, 'h');
    minutes.textContent = format(today, 'mm');
    amPM.textContent = format(today, 'bbb');
    date.textContent = format(today, 'PPPP');
  };
  updateClock();
  setInterval(updateClock, 10);
};
