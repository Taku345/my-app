import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { initAreaWithStatus, getSubArea } from "../store/modules/area";

const AreaMenu = () => {
  const dispatch = useDispatch();
  const areaArray = useSelector(state => state.area.areaArray);

  useEffect(()=>{
    dispatch(initAreaWithStatus());
  },[]);

  const handleChange = (e) => {
    console.log(e.target.value);
    dispatch(getSubArea(e.target.value));
    // dispatch(getWeatherWithStatus(subAreaArray[0][0]));
  }

  return (
    <>
      {
        areaArray != []
          ? <select onChange={(e)=>handleChange(e)}>
              {areaArray.map((area) => <option key={area[0]} value={area[0]}>{area[1].name}</option>)}
            </select>
          : "メインエリア初期化中..."
      }
    </>
  );
};

export default AreaMenu;