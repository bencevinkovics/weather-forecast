import moment from "moment";
import rain from '../assets/weatherIcons/rain.png'
import "../styles/RightContainer.css"

const BoxRight = (props) => {
    let img = '';
    const id = props.id;
    const day = moment(props.date).format('ddd');
    const date = moment(props.date).format('DD/MMM');
    const smallTextClass = `smallTextStyle${props.screensize}`;

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
                <div className={smallTextClass}>{date}</div>
            </div>
            <div className='forecastDataStyle'>
                <div className='forecastInfoStyle'>
                    <div className='forecastTextStyle'> {Math.round(props.temp)}°C </div>
                    <div className={smallTextClass}> {props.description} </div>
                </div>
                <img className='imgStyle' src={/*`weatherIcons/${img}`*/rain} alt="Couldn't load." />
            </div>

        </div >
    );
}



export default BoxRight
