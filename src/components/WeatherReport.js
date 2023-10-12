import CityWeather from "./CityWeather";
import PulldownPanel from "./PulldownPanel"

const WeatherReport = () => {
  
  return (
    <div className="App">
      <h1>ウェザーリポート!!!</h1>
      <PulldownPanel/>
      <CityWeather/>
    </div>
  )
}

export default WeatherReport;