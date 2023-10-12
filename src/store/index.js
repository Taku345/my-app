import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules/weather"
import areaReducer from "./modules/area";

export default configureStore({
  reducer: {
    weather: reducer,
    area: areaReducer
  }
});
