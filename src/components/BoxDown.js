import moment from 'moment';

const BoxDown = ({ weather }) => {
    const sunrise = moment.unix(weather.sys.sunrise).format("HH:mm");
    const sunset = moment.unix(weather.sys.sunset).format("HH:mm");


    return (
        <div style={boxLeftStyle}>
            <div style={rowStyle}>
                <div>Feels like:</div>
                <div>{Math.round(weather.main.feels_like)} °C</div>
            </div>
            <hr style={hrStyle} />
            <div style={rowStyle}>
                <div>Wind:</div>
                <div>{weather.wind.speed} km/h</div>
            </div>
            <hr style={hrStyle} />
            <div style={rowStyle}>
                <div>Humidity:</div>
                <div>{weather.main.humidity} %</div>
            </div>
            <hr style={hrStyle} />
            <div style={rowStyle}>
                <div>Sunrise:</div>
                <div>{sunrise}</div>
            </div>
            <hr style={hrStyle} />
            <div style={rowStyle}>
                <div>Sunset:</div>
                <div>{sunset}</div>
            </div>
        </div>
    )
}

const boxLeftStyle = {
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '44%',
    background: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '25px',
    boxShadow: '5px 5px 10px 5px rgba(0,0,0,0.1)',
    fontSize: '25px'
}

const rowStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'space-around',
    paddingTop: 0,
    paddingLeft: '35px',
    paddingBottom: 0,
    paddingRight: '35px',
    margin: 0,
}

const hrStyle = {
    height: '1px',
    width: '90%',
    marginTop: '5px',
    marginBottom: '5px',
    color: 'black',
    opacity: 0.4
}

export default BoxDown;