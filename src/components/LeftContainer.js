import SearchBar from "./SearchBar";
import BoxMain from "./BoxMain";
import BoxDown from "./BoxDown";
import "../styles/LeftContainer.css";

const LeftContainer = ({ weather, getWeather, screenSize }) => {
    const leftContainerClass = `leftContainerStyle${screenSize}`;

    return (
        <div className={leftContainerClass}>
            <SearchBar getWeather={getWeather} screenSize={screenSize} />
            <BoxMain
                name={weather.name}
                temp={weather.main.temp}
                description={weather.weather[0].description}
                id={weather.weather[0].id}
                sunrise={weather.sys.sunrise}
                sunset={weather.sys.sunset}
                timezone={weather.timezone}
                screenSize={screenSize}
            />
            <BoxDown
                sunrise={weather.sys.sunrise}
                sunset={weather.sys.sunset}
                feels={weather.main.feels_like}
                wind={weather.wind.speed}
                humidity={weather.main.humidity}
                screenSize={screenSize}
            />
        </div>
    )
};

export default LeftContainer;