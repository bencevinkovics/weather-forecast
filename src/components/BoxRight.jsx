import "../styles/RightContainer.css"

import { DateTime } from "luxon";

const BoxRight = ({ key, date, minTemp, maxTemp, id, description, screenSize }) => {
    let img = '';
    const day = DateTime.fromFormat(date, 'yyyy-MM-dd HH:mm:ss').toFormat('ccc');
    const dateFormed = DateTime.fromFormat(date, 'yyyy-MM-dd HH:mm:ss').toFormat('dd/MMM');
    const smallForecastClass = `smallForecastStyle${screenSize}`;

    if (/801/.test(id)) {
        img = "few_clouds_d.png"
    }
    if ((/802/.test(id)) || (/803/.test(id)) || (/804/.test(id))) {
        img = "clouds.png"
    }
    if (/800/.test(id)) {
        img = "clear_d.png"
    }
    if (/^7/.test(id)) {
        img = "fog.png"
    }
    if (/^6/.test(id)) {
        img = "snow.png"
    }
    if ((/^5/.test(id)) || (/^3/.test(id))) {
        img = "rain.png"
    }
    if (/^2/.test(id)) {
        img = "storm.png"
    }

    return (
        <div className='boxRightStyle'>
            <div className='dateStyle'>
                <div className='forecastTextStyle'>{day}</div>
                <div className={smallForecastClass}>{dateFormed}</div>
            </div>
            <div className='forecastDataStyle'>
                <div className='forecastInfoStyle'>
                    <div className='forecastTextStyle'> {Math.round(minTemp)}°C/{Math.round(maxTemp)}°C </div>
                    <div className={smallForecastClass}> {description} </div>
                </div>
                <img className='imgStyle' src={`/weatherIcons/${img}`} alt="Couldn't load." />
            </div>

        </div >
    );
}



export default BoxRight
