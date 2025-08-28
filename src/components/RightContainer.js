import BoxRight from "./BoxRight";
import "../styles/RightContainer.css"

import { DateTime } from "luxon";


const todayPlus = (offsetDays) => {
    return DateTime.now().plus({ days: offsetDays }).toFormat('yyyy-MM-dd');
}

const RightContainer = ({ forecast, screenSize }) => {
    const today = DateTime.now().toFormat('yyyy-MM-dd');
    const todayPlusOne = todayPlus(1);
    const todayPlusTwo = todayPlus(2);
    const todayPlusThree = todayPlus(3);
    const todayPlusFour = todayPlus(4);
    const todayPlusFive = todayPlus(5);
    const regexToday = new RegExp(today);
    const regexTodayPlusOne = new RegExp(todayPlusOne);
    const regexTodayPlusTwo = new RegExp(todayPlusTwo);
    const regexTodayPlusThree = new RegExp(todayPlusThree);
    const regexTodayPlusFour = new RegExp(todayPlusFour);
    const regexTodayPlusFive = new RegExp(todayPlusFive);
    const rightContainerClass = `rightContainerStyle${screenSize}`;
    const f1 = [];
    const f2 = [];
    const f3 = [];
    const f4 = [];
    const f5 = [];

    (forecast.list).map((forecast) => (
        
        (regexTodayPlusOne.test(forecast.dt_txt)) ? (
            f1.push(forecast.main.temp)
            
        ) :
            (regexTodayPlusTwo.test(forecast.dt_txt)) ? (
                f2.push(forecast.main.temp)
            ) :
                (regexTodayPlusThree.test(forecast.dt_txt)) ? (
                    f3.push(forecast.main.temp)
                ) :
                    (regexTodayPlusFour.test(forecast.dt_txt)) ? (
                        f4.push(forecast.main.temp)
                    ) :
                        (regexTodayPlusFive.test(forecast.dt_txt)) ? (
                            f5.push(forecast.main.temp)
                        ) : ('')
    ))

    return (
        <div className={rightContainerClass}>
            {(forecast.list).map((forecast) => (
                ((regexToday.test(forecast.dt_txt)) || !(/12:00:00$/.test(forecast.dt_txt))) ?
                    ('') :
                    (<BoxRight
                        key={forecast.dt_txt}
                        date={forecast.dt_txt}
                        minTemp={
                            (regexTodayPlusOne.test(forecast.dt_txt)) ? (
                                Math.min(...f1)
                            ) :
                                (regexTodayPlusTwo.test(forecast.dt_txt)) ? (
                                    Math.min(...f2)
                                ) :
                                    (regexTodayPlusThree.test(forecast.dt_txt)) ? (
                                        Math.min(...f3)
                                    ) :
                                        (regexTodayPlusFour.test(forecast.dt_txt)) ? (
                                            Math.min(...f4)
                                        ) :
                                            (regexTodayPlusFive.test(forecast.dt_txt)) ? (
                                                Math.min(...f5)
                                            ) : ('')
                        }
                        maxTemp={
                            (regexTodayPlusOne.test(forecast.dt_txt)) ? (
                                Math.max(...f1)
                            ) :
                                (regexTodayPlusTwo.test(forecast.dt_txt)) ? (
                                    Math.max(...f2)
                                ) :
                                    (regexTodayPlusThree.test(forecast.dt_txt)) ? (
                                        Math.max(...f3)
                                    ) :
                                        (regexTodayPlusFour.test(forecast.dt_txt)) ? (
                                            Math.max(...f4)
                                        ) :
                                            (regexTodayPlusFive.test(forecast.dt_txt)) ? (
                                                Math.max(...f5)
                                            ) : ('')
                        }
                        id={forecast.weather[0].id}
                        description={forecast.weather[0].description}
                        screenSize={screenSize}
                    />)
            ))}
        </div>
    )
};

export default RightContainer;