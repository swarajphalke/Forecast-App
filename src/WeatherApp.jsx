import {useState} from 'react';
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Wonderland",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div className="WeatherContent">
      <h2>Weather App by swarajphalke_</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
