export default function WeatherCard({ data }) {
  function getEmoji(condition) {
    switch (condition) {
      case "Clear":
        return "☀️";
      case "Clouds":
        return "☁️";
      case "Rain":
        return "🌧️";
      default:
        return "🌤️";
    }
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }
  const condition = data.weather[0].main;
  const description = data.weather[0].description;
  const icon = getEmoji(condition);
  return (
    <div className="flex flex-col items-center gap-2 bg-gray-300 h-98 w-96 justify-around p-4 rounded-lg shadow-md">
      <div>
        <h1 className="text-xl font-semibold text-gray-700">{data.name}</h1>
      </div>{" "}
      <div>
        <span className="font-bold">{getCurrentDate()}</span>
      </div>
      <div>
        <p className="text-4xl font-bold text-blue-500 mt-2">
          {Math.round(data.main.temp)}°C
        </p>
      </div>
      <div className="text-6xl">{icon}</div>{" "}
      <div>
        <p className="text-gray-500 capitalize mt-1 font-extrabold">
          {description}
        </p>
      </div>
      <div className="flex gap-40 ">
        <div>
          <p className="font-extrabold">Humidity</p>
          <p className="text-2xl "> {data.main.humidity}%</p>
        </div>
        <div>
          <p className="font-extrabold">wind-speed</p>
          <p className="text-2xl">{(data.wind.speed * 3.6).toFixed(1)}km/h</p>
        </div>
      </div>
    </div>
  );
}
