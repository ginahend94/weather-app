import { icon, createLink } from '../../functions/helpers';

export default (() => {
  const container = document.createElement('footer');
  const credit = document.createElement('span');
  const github = createLink({
    text: icon('mdi:github'),
    href: 'https://github.com/ginahend94',
    title: 'GitHub',
  });
  credit.innerHTML =
    'Created by <a href="https://ginahenderson.me" target="_blank">Gina Henderson</a>.';
  container.append(credit, github);
  return container;
})();
