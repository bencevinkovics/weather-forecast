import BoxRight from "./BoxRight";
import moment from "moment";
import "../styles/RightContainer.css"

const RightContainer = ({ forecast, screenSize }) => {
    const today = (moment().format('YYYY-MM-DD'));
    const regexToday = new RegExp(today);
    const rightContainerClass = `rightContainerStyle${screenSize}`



    return (
        <div className={rightContainerClass}>
            {(forecast.list).map((forecast) => (
                ((regexToday.test(forecast.dt_txt)) || !(/12:00:00$/.test(forecast.dt_txt))) ?
                    ('') :
                    (<BoxRight
                        key={forecast.dt_txt}
                        date={forecast.dt_txt}
                        temp={forecast.main.temp}
                        id={forecast.weather[0].id}
                        description={forecast.weather[0].description}
                        screenSize={screenSize}
                    />)
            ))}
        </div>
    )
};

export default RightContainer;