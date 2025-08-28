
import "../styles/LeftContainer.css";
import { DateTime } from "luxon";

const BoxDown = ({ sunrise, sunset, timezone, feels, wind, humidity, screenSize }) => {
    const sunriseTime = DateTime.fromSeconds(sunrise, { zone: 'UTC'}).plus({seconds: timezone}).toFormat('HH:mm');
    const sunsetTime = DateTime.fromSeconds(sunset, { zone: 'UTC'}).plus({seconds: timezone}).toFormat('HH:mm');
    const boxDownLeftClass = `boxDownLeftStyle${screenSize}`;


    return (
        <div className={boxDownLeftClass}>
            <div className='rowStyle'>
                <div>Feels like:</div>
                <div>{Math.round(feels)}°C</div>
            </div>
            <hr className='hrStyle' />
            <div className='rowStyle'>
                <div>Wind:</div>
                <div>{wind} km/h</div>
            </div>
            <hr className='hrStyle' />
            <div className='rowStyle'>
                <div>Humidity:</div>
                <div>{humidity}%</div>
            </div>
            <hr className='hrStyle' />
            <div className='rowStyle'>
                <div>Sunrise:</div>
                <div>{sunriseTime}</div>
            </div>
            <hr className='hrStyle' />
            <div className='rowStyle'>
                <div>Sunset:</div>
                <div>{sunsetTime}</div>
            </div>
        </div>
    )
}


export default BoxDown;