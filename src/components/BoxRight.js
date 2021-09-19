import moment from "moment";

const BoxRight = (props) => {
    let img = '';
    const id = props.id;
    const day = moment(props.date).format('ddd');
    const date = moment(props.date).format('DD/MMM');

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
        <div style={boxRightStyle}>
            <div style={dateStyle}>
                <div style={{ fontSize: '40px', fontWeight: '600' }}>{day}</div>
                <div>{date}</div>
            </div>
            <div style={forecastDataStyle}>
                <div style={forecastInfoStyle}>
                    <div style={{ height: '50%', fontSize: '40px', fontWeight: '600' }}> {Math.round(props.temp)} °C </div>
                    <div style={{ height: '30%' }}> {props.description} </div>
                </div>
                <img style={imgStyle} src={`weatherIcons/${img}`} alt="Couldn't load." />
            </div>

        </div>
    );
}

const boxRightStyle = {
    width: '100%',
    height: '15%',
    background: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '25px',
    boxShadow: '5px 5px 10px 5px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirecton: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const dateStyle = {
    height: '98%',
    width: '25%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: '25px',
    marginRight: 0,
};

const forecastDataStyle = {
    height: '98%',
    width: '40%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
}

const forecastInfoStyle = {
    padding: 0,
    maring: 0,
    height: '98%',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
};

const imgStyle = {
    height: '90%',
    width: 'auto',
};

export default BoxRight
