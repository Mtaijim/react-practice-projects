import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Useweather from "./hooks/Useweather";
export default function App() {
  const { data, loading, err, fetchWeather } = Useweather();
  return (
    <div className="flex flex-col items-center">
      <SearchBar onSearch={fetchWeather} />
      {loading && <p>Loading...</p>}
      {err && <p>{err}</p>}
      {data && <WeatherCard data={data} />}
      {console.log(data)}
    </div>
  );
}
