import clock from '../main/clock';

export default (() => {
  const container = document.createElement('header');
  const title = document.createElement('h1');
  title.textContent = 'weather';

  container.append(
    title,
    clock(),
  );
  return {
    container,
  };
})();
