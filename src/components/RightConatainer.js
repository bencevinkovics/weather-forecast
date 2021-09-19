import BoxRight from "./BoxRight";
import moment from "moment";

const RightContainer = ({ forecast }) => {
    const today = (moment().format('YYYY-MM-DD'));
    const regexToday = new RegExp(today);



    return (
        <div style={rightContainerStyle}>
            {(forecast.list).map((forecast) => (
                ((regexToday.test(forecast.dt_txt)) || !(/12:00:00$/.test(forecast.dt_txt))) ?
                    ('') :
                    (<BoxRight
                        key={forecast.dt_txt}
                        date={forecast.dt_txt}
                        temp={forecast.main.temp}
                        id={forecast.weather[0].id}
                        description={forecast.weather[0].description}
                    />)
            ))}
        </div>
    )
};

const rightContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
};

export default RightContainer;