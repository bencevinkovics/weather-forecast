import { findByLabelText } from "@testing-library/dom";
import moment from "moment";
import rain from "../assets/weatherIcons/rain.png";
import "../styles/LeftContainer.css"

const BoxMain = ({ name, temp, description, id, sunrise, sunset, timezone, screenSize }) => {
    let img = "";
    const timeDiff = parseInt(timezone / 3600)
    console.log(moment.utc());
    const iconClass = `iconStyle${screenSize}`;
    const smallTextClass = `smallTextStyle${screenSize}`;
    const largeTextClass = `largeTextStyle${screenSize}`;

    if (/801/.test(id)) {
        (moment((moment.utc())).add((parseInt(timeDiff / 3600)), 'hours').isBetween(moment.unix(sunrise), moment.unix(sunset))) ?
            (img = "few_clouds_d.png") : (img = "few_clouds_n.png")
    }
    if ((/802/.test(id)) || (/803/.test(id)) || (/804/.test(id))) {
        img = "clouds.png"
    }
    if (/800/.test(id)) {
        (moment((moment.utc())).add((parseInt(timeDiff / 3600)), 'hours').isBetween(moment.unix(sunrise), moment.unix(sunset))) ?
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
                <img className={iconClass} src={/*../assets/weatherIcons/${img}`*/rain} alt="Couldn't load." />
            </div>
            <div className='infoStyle'>
                <div className={smallTextClass}>{name}</div>
                <div className={largeTextClass}>{Math.round(temp)}°C</div>
                <div className={smallTextClass}>{description}</div>
            </div>
        </div >
    )
    //return (<div style={boxLeftStyle}></div>);
}



export default BoxMain;