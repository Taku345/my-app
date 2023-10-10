import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from "react";

const URL = "https://www.jma.go.jp/bosai/forecast/data/forecast/"
const SHIGA = 250000;
const KYOTO = 260000;

function App() {
  const [ state, setState ] = useState("");

  useEffect(() => {
    const getWeather = async () => {
      const res = await axios.get(`${URL}${KYOTO}.json`);
      setState(res.data);
    }
    getWeather();
  }, []);

  return (
    <div className="App">
    <h1>ウェザーリポート</h1>
    <h2>京都市</h2>
    {console.log(state)}
    {
      state[0]?.timeSeries[0].areas.map((area)=> {
        return (
          <>
            <h3>---{area.area.name}---</h3>
            {area.weathers.map((weather)=><p>{weather}</p>)}
          </>
        )
      })
    }
    </div>
  );
}

export default App;
