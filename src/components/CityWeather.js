import { useDispatch,useSelector } from "react-redux";
import { getWeatherWithStatus } from "../store/modules/weather";
import { getAreaWithStatus } from "../store/modules/area";


const CityWeather = () => {
  const dispatch = useDispatch();
  // dispatch(getWeatherWithStatus());
  const status = useSelector(state => state.weather.status);
  const weathers = useSelector(state => state.weather.weathers);


  return (
    <div className="App">
    {status != "取得済"
      ? <h3>{status}</h3>
      : weathers[0]?.timeSeries[0].areas.map((area)=> {
        return (
          <>
            <h3>---{area.area.name}---</h3>
            {area.weathers.map((weather)=><p>{weather}</p>)}
          </>
        )
      })
    }

    </div>
  )
}

export default CityWeather;