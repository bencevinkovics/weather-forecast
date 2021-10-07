import BoxRight from "./BoxRight";
import moment from "moment";
import "../styles/RightContainer.css"

const RightContainer = ({ forecast, screenSize }) => {
    const today = (moment().format('YYYY-MM-DD'));
    const todayPlusOne = (moment().add(1, 'd').format('YYYY-MM-DD'));
    console.log(todayPlusOne);
    const todayPlusTwo = (moment().add(2, 'd').format('YYYY-MM-DD'));
    const todayPlusThree = (moment().add(3, 'd').format('YYYY-MM-DD'));
    const todayPlusFour = (moment().add(4, 'd').format('YYYY-MM-DD'));
    const todayPlusFive = (moment().add(5, 'd').format('YYYY-MM-DD'));
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

    console.log(f1);





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