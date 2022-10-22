const getLocationName = async (coords) => {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lon}`;
  const res = await fetch(url);
  const json = await res.json();
  console.log(json);
  return json;
};

export default getLocationName;
