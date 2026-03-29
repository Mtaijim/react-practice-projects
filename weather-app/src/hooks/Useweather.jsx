import { useState } from "react";
import { getWeather } from "../api/weatherApi";

export default function UseWeather() {
  const [data, setData] = useState(null);
  const [loading, SetLoading] = useState(false);
  const [err, seterr] = useState(null);

  async function fetchWeather(city) {
    SetLoading(true);
    try {
      const res = await getWeather(city);
      setData(res);
      SetLoading(false);
    } catch (error) {
      console.log(error);
      seterr(error.message);
      SetLoading(false);
    }
  }
  return { data, loading, err, fetchWeather };
}
