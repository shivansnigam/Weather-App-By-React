import SerachBox from "./SearchBox"
import InfoBox from './InfoBox'
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo,setWeatherInfo] = useState({
        city:"Rewa",
        feelsLike:21.57,
        humidity:19,
        temp:22.74,
        tempMax:22.74,
        tempMin:22.74,
        weather:"clear sky"
    });

    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    }
    return(
        <div style={{textAlign:"center"}}>
           <h2>Weather App by Delta</h2>
           <SerachBox updateInfo = {updateInfo}/>
           <InfoBox info={weatherInfo}/>
        </div>
    );
}