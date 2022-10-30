export default (() => {
  const container = document.createElement('div');
  container.classList.add('background');
  const imgObj = {};
  const importAll = (r) => {
    const keys = r.keys();
    const urls = r.keys().map(r);
    return urls.forEach((url, i) => {
      const key = keys[i].replace(/.\/|.jpg/g, '');
      imgObj[key] = url;
    });
  };
  importAll( // import all background images
    require.context('../../assets/images/weather-photos', false, /\.jpg$/)
  );

  const changeBackground = (url) => {
    container.style.backgroundImage = `url(${url})`;
  };

  changeBackground(imgObj['03d']);

  return {
    container,
    changeBackground,
    images: imgObj,
  };
})();
