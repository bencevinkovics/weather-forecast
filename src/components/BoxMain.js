import { findByLabelText } from "@testing-library/dom";
import "../styles/LeftContainer.css"

const { DateTime, Interval} = require("luxon");

const BoxMain = ({ name, temp, description, id, sunrise, sunset, timezone, screenSize }) => {
    let img = "";
    const newSeconds = Math.floor(DateTime.now().toSeconds());
    const currentTime = DateTime.fromSeconds(newSeconds, { zone: 'UTC'}).plus({seconds: timezone});
    const sunriseTime = DateTime.fromSeconds(sunrise, { zone: 'UTC'}).plus({seconds: timezone});
    const sunsetTime = DateTime.fromSeconds(sunset, { zone: 'UTC'}).plus({seconds: timezone});
    const iconClass = `iconStyle${screenSize}`;
    const smallMainTextClass = `smallMainTextStyle${screenSize}`;
    const largeMainTextClass = `largeMainTextStyle${screenSize}`;

    if (/801/.test(id)) {
        (Interval.fromDateTimes(sunriseTime, sunsetTime).contains(currentTime)) ?
            (img = "few_clouds_d.png") : (img = "few_clouds_n.png")
    }
    if ((/802/.test(id)) || (/803/.test(id)) || (/804/.test(id))) {
        img = "clouds.png"
    }
    if (/800/.test(id)) {
        (Interval.fromDateTimes(sunriseTime, sunsetTime).contains(currentTime)) ?
            (img = "clear_d.png") : (img = "clear_n.png")

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
        <div className='boxMainLeftStyle'>
            <div className='frameStyle'>
                <img className={iconClass} src={`${process.env.PUBLIC_URL}/weatherIcons/${img}`} alt="Couldn't load." />
            </div>
            <div className='infoStyle'>
                <div className={smallMainTextClass}>{name}</div>
                <div className={largeMainTextClass}>{Math.round(temp)}°C</div>
                <div className={smallMainTextClass}>{description}</div>
            </div>
        </div >
    )
    //return (<div style={boxLeftStyle}></div>);
}



export default BoxMain;