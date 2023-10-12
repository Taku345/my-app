import axios from "axios";

const AREA_URL = "https://www.jma.go.jp/bosai/common/const/area.json"
const WEATHER_URL = "https://www.jma.go.jp/bosai/forecast/data/forecast/"
const SHIGA = 250000;
const KYOTO = 260000;

const getWeatherAPI = async (areaNum) => {
  // debugger;
  console.log("API request send");
  const res = await axios.get(`${WEATHER_URL}${areaNum}.json`);
  // debugger;
  return res;
}
const getAreaAPI = async () => {
  // debugger;
  console.log("API request send");
  const res = await axios.get(AREA_URL);
  // debugger;
  return res;
}

export { getWeatherAPI, getAreaAPI };