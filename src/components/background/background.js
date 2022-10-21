// TODO - import time
// TODO - import weather

export default (() => {
  const container = document.createElement('div');
  container.classList.add('background');
  // set bg color based on time of day
  // bg img based on weather
  // animated sheep/small animal
  // tree/landscape
  const imgObj = {};
  const importAll = (r) => {
    const keys = r.keys();
    const urls = r.keys().map(r);
    return urls.forEach((url, i) => {
      const key = keys[i].replace(/.\/|.jpg/g, '');
      imgObj[key] = url;
    });
  };
  importAll(
    require.context('../../assets/images/weather-photos', false, /\.jpg$/)
  );
  // console.log(imgObj);

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
