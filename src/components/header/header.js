export default (() => {
  const container = document.createElement('header');
  const title = document.createElement('h1');
  const scaleToggle = document.createElement('input');
  title.textContent = 'weather';
  scaleToggle.setAttribute('type', 'checkbox');

  const getScale = () => scaleToggle.checked;

  container.append(title, scaleToggle);
  return {
    container,
    getScale,
  };
})();
