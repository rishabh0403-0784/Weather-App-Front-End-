import http from "./http";

const openWeatherMapApiEndPoint = `https://api.openweathermap.org/data/2.5/onecall?appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&exclude=minutely&units=metric`;
const geoApifyApiEndPoint = `https://api.geoapify.com/v1/geocode/autocomplete?apiKey=${process.env.REACT_APP_GEOAPIFY_API_KEY}&format=json`;

export async function getWeather(lat, lon) {
  const url = openWeatherMapApiEndPoint + `&lat=${lat}&lon=${lon}`;
  const { data } = await http.get(url);
  // console.log(data);
  return data;
}

export async function autoCompleteService(query) {
  const url = geoApifyApiEndPoint + `&text=${query}`;
  const { data } = await http.get(url);
  // console.log(data);
  const res = data.results.map(({ name, lat, lon, country, state }) => ({
    name,
    state,
    country,
    coord: { lat, lon },
  }));
  return res;
}
