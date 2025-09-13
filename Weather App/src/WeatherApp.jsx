import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Ghaziabad",
        feelsLike: 33.76,
        humidity: 74,
        temp: 29.11,
        tempMax: 29.11,
        tempMin: 29.11,
        weather: "overcast clouds",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return(
        <div style={{textAlign: "center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo= {updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    );
}