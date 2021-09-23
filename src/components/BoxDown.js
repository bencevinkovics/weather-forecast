import moment from "moment";
import "../styles/LeftContainer.css";

const BoxDown = ({ sunrise, sunset, feels, wind, humidity, screenSize }) => {
    const sunriseTime = moment.unix(sunrise).format("HH:mm");
    const sunsetTime = moment.unix(sunset).format("HH:mm");
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