import { useState } from 'react';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';
import axios from 'axios';
import SearchBar from './components/SearchBar'
import './styles/App.css';
import useBreakPoint from './hooks/useBreakPoints';

function App() {
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);


  const screenSize = useBreakPoint();
  const searchContainerClass = `searchContainer${screenSize}`;

  const getWeather = async (text) => {
    const ApiKey = process.env.REACT_APP_API_KEY
    const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${ApiKey}`;
    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${text}&units=metric&appid=${ApiKey}`;
    console.log(urlCurrent);
    console.log(urlForecast);
    await axios.get(urlCurrent)
      .then((response) => {
        setWeather(response.data);
        return (
          weather
        )
      })
      .catch((error) => {
        if (error.request) {
          alert("There's no such city in the database.");
        }
      })
    await axios.get(urlForecast)
      .then((response) => {
        setForecast(response.data);
        return (
          forecast
        )
      })
    return (
      forecast,
      weather
    )
  };

  return (
    <>
      {((typeof weather.main != "undefined") && (forecast.cod === "200")) ?
        (
          <div className='mainStyle'>
            <LeftContainer weather={weather} getWeather={getWeather} screenSize={screenSize} />
            <RightContainer forecast={forecast} screenSize={screenSize} />
          </div>
        ) :
        (
          <div className='blankStyle'>
            <p className='welcomeTextStyle'>Hello, please search for your city.</p>
            <div className={searchContainerClass}><SearchBar getWeather={getWeather} screenSize={screenSize} /></div>
          </div>
        )
      }
    </>
  )
};

export default App;
