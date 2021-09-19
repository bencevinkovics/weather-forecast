import { useState } from 'react';
import RightContainer from './components/RightContainer';
import axios from 'axios';
import SearchBar from "./components/SearchBar";
import BoxMain from "./components/BoxMain";
import BoxDown from "./components/BoxDown";

function App() {
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);

  const getWeather = async (text) => {
    const ApiKey = process.env.REACT_APP_API_KEY
    const urlCurrent = `http://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${ApiKey}`;
    const urlForecast = `http://api.openweathermap.org/data/2.5/forecast?q=${text}&units=metric&appid=${ApiKey}`;
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
    <div>
      {((typeof weather.main != "undefined") && (forecast.cod === "200")) ?
        (
          <div style={mainStyle}>
            <div style={leftContainerStyle}>
              <SearchBar getWeather={getWeather} />
              {(typeof weather.main != "undefined") ?
                (<BoxMain weather={weather} />)
                : (<div style={placeholderStyle}> Please type in a city</div>)}
              {(typeof weather.main != "undefined") ?
                (<BoxDown weather={weather} />)
                : (<div style={placeholderStyle}></div>)}
            </div>
            <RightContainer forecast={forecast} />
          </div >
        ) :
        (
          <div style={blankStyle}>
            <p style={{ fontSize: "45px", fontWeight: '700', color: '#FEFFED' }}>Hello, please search for your city.</p>
            <SearchBar getWeather={getWeather} />
          </div>
        )}
    </div>
  )
};

const mainStyle = {
  top: '0px',
  bottom: '0px',
  right: '0px',
  left: '0px',
  position: 'absolute',
  background: 'linear-gradient( #419AF2, #4FA9F2, #5EB9F1, #6CC8F1)',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
};

const placeholderStyle = {
  margin: 0,
  padding: 0,
  width: '100%',
  height: '44%',
  background: 'rgba(255, 255, 255, 0.8)',
  borderRadius: '25px',
  boxShadow: '5px 5px 10px 5px rgba(0,0,0,0.1)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
};

const leftContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '40%',
  height: '90%',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const blankStyle = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  position: 'absolute',
  background: 'linear-gradient( #419AF2, #4FA9F2, #5EB9F1, #6CC8F1)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  paddingLeft: '25%',
  paddingRight: '25%',
};

export default App;
