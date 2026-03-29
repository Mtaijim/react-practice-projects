const API_KEY = "90ec140ed0dbee565e9c11eb3a332fdb";
const url = "https://api.openweathermap.org/data/2.5";

export async function getWeather(city) {
  const res = await fetch(
    `${url}/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  if (!res.ok) throw new Error("city not found");
  return res.json();
}
