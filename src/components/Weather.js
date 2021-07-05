import { useState } from "react";


const Weather = (props) => {
    
const apiKey = "64af9d5996df5b93f42b6448709a5c4d";
  let scale = "F";  

  const [temp, setTemp] = useState(0);
  const [feelsLike, setFeelsLike] = useState(0);
  const [weather, setWeather] = useState();
  const [showFahrenheit, setShowFarenheit] = useState(true);

  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.long}&appid=${apiKey}&units=imperial`;

  const displayTemp = (val) => {
    if (!showFahrenheit) {
        scale = "C";
      return Math.floor((((val - 32) * 5) / 9) * 100) / 100;
    }
    scale= "F";
    return Math.floor(val);
  };

  const getWeather = () => {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        const { main, weather } = response;

        setTemp(main.temp);
        setFeelsLike(main.feels_like);
        setWeather(weather[0].description);
      });
  };

  if (props && !weather) {
    getWeather();
  }


  return (
      <div>
          <p>Current Temp: {displayTemp(temp)}&deg;{scale}</p>
          <p>Feels Like: {displayTemp(feelsLike)}&deg;{scale}</p>
          <p>Weather: {weather}</p>
          <button id="tempToggle" type="submit" onClick={() => setShowFarenheit(!showFahrenheit)}>Toggle Temp</button>
      </div>
  )
};

export default Weather;
