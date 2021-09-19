import moment from "moment";

const BoxMain = ({ weather }) => {
    let img = "";
    const id = weather.weather[0].id;
    const timezone = weather.timezone;
    const timeDiff = parseInt(timezone / 3600)
    const sunrise = weather.sys.sunrise;
    const sunset = weather.sys.sunset;
    console.log(moment.utc());

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
        <div style={boxLeftStyle}>
            <div style={frameStyle}>
                <img style={iconStyle} src={`weatherIcons/${img}`} alt="Couldn't load." />
            </div>
            <div style={infoStyle}>
                <div style={{ fontSize: '30px', padding: 0, margin: 0 }}>{weather.name}</div>
                <div style={{ fontSize: '90px', fontWeight: '500', padding: 0, margin: 0 }}>{Math.round(weather.main.temp)} °C</div>
                <div style={{ fontSize: '30px', padding: 0, margin: 0 }}>{weather.weather[0].description}</div>
            </div>


        </div >
    )
    //return (<div style={boxLeftStyle}></div>);
}

const boxLeftStyle = {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '44%',
    background: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '25px',
    boxShadow: '5px 5px 10px 5px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'row',
};

const infoStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '40px',
    paddingLeft: '20px'

};

const iconStyle = {
    maxWidth: '300px',
    maxHeight: '300px'
};

const frameStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '300px',
    maxHeight: '300px'
}




export default BoxMain;