import icon from '../../functions/icon';

export default (() => {
  const container = document.createElement('footer');
  const credit = document.createElement('span');
  const github = icon('mdi:github');
  credit.innerHTML = 'Created by <a href="https://ginahenderson.me" target="_blank">Gina Henderson</a>.';
  container.append(credit, github);
  return container;
})();
