const getLocationName = async (coords) => {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lon}`;
  const res = await fetch(url);
  const json = await res.json();
  console.log(json)
  return json;
};

const getLocation = async (input) => {
  const url = `https://nominatim.openstreetmap.org/search?q=${input}&format=json&limit=5`
  try {
    const res = await fetch(url);
    const json = await res.json();
    console.log(json);
    return json;
  } catch (e) {
    console.error(e);
  }
};

export { getLocation, getLocationName };
