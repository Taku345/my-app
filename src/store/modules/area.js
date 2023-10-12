import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAreaAPI } from "../../api/getWeatherAPI";
import { current } from "@reduxjs/toolkit";

const initAreaWithStatus = createAsyncThunk(
  'area/get',
  async (payload) => {
    const response = await getAreaAPI();
    return response.data;
  }
)

const area = createSlice({
  name: 'area',
  initialState:{
    areaObj:{},
    areaArray:[],
    subAreaArray:[],
    // currentArea:'',
    // currentSubArea:'',
    status:''
  },
  reducers: {
    getSubArea(state, { type, payload }) {
      const areaObj = current(state).areaObj
      const subAreaCode = areaObj.centers[payload].children
      const subAreaArray = subAreaCode.map(code=> {
        return [code,areaObj.offices[code].name]
      })
      state.subAreaArray = subAreaArray;
      // console.log(subAreaArray);
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(initAreaWithStatus.pending,(state)=>{
      state.status = 'Loading...'
    })
    .addCase(initAreaWithStatus.fulfilled,(state,action)=>{
      const areaArray = [];
      Object.keys(action.payload.centers).forEach((areaNum)=>{
        areaArray.push([areaNum, action.payload.centers[areaNum]])
      });
      state.areaObj = action.payload;
      state.areaArray = areaArray;
      //サブエリアの初期化
      const firstSubAreaCode = state.areaObj.centers[Object.keys(action.payload.centers)[0]].children
      state.subAreaArray = firstSubAreaCode.map(code=> {
        return [code,state.areaObj.offices[code].name]
      })
      //天気予報の初期化
    })
    .addCase(initAreaWithStatus.rejected,(state)=>{
      state.status = '情報取得エラー'
    })
  }
});


const { getSubArea } = area.actions;
const areaReducer = area.reducer;

export default areaReducer;
export { initAreaWithStatus, getSubArea }

