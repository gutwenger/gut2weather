import React from 'react';
import Result from './Result';

function Main(props) {
    let cityname = props.city ? true : false;
    let dayNight = (props.result.current.dt > props.result.current.sunrise)
        ? "day"
        : "night";
    let backgroundTime = {
        time: dayNight,
        condition: props.result.current.weather[0].main,
    }
    let backgroundTheme = {
        "day": {
            "Clear": "background-clear-sunny",
            "Clouds": "background-cloud",
            "Rain": "background-rain",
            "Thunderstorm": "background-rain",
        },
        "night": {
            "Clear": "background-clear-night",
            "Clouds": "background-cloud-night",
            "Rain": "background-rain-night",
            "Thunderstorm": "background-rain-night",
        },
    };
    // Weather Background Effect
    let weatherEffect = [];

    // Rain effect
    let rainEffect = [
        "Rain",
        "Thunderstorm",
    ];

    let drops = props.result.current.weather[0].description === "light rain" ? 300 : 900;

    let randRange = (min, max) => {
        return (Math.floor(Math.random() * (max - min + 1) + min));
    }

    let createRain = () => {
        for (let i = 0; i < drops; i++) {
            let rainDropStyle = dayNight === "day" ? "background-rain-drop" : "background-rain-drop-night";
            const divStyle = {
                left: randRange(0, window.innerWidth),
                top: randRange(-1000, window.innerHeight),
            }
            weatherEffect.push(
                <div key={`drop-${i}`} id={`drop-${i}`} className={rainDropStyle} style={divStyle}></div>
            )
        }
        
    };

    if (rainEffect.includes(props.result.current.weather[0].main)) (createRain());


    // Starry Night
    let stars = () => {
        let count = 250;
        for (let i = 0; i < count; i++) {
            let x = Math.floor(Math.random() * window.innerWidth);
            let y = Math.floor(Math.random() * window.innerHeight);
            let duration = Math.random() * 10;
            let size = Math.random() * 1;
            let divStyle = {
                left: x,
                top: y,
                width: 1 + size,
                height: 1 + size,
                animationDuration: `${duration}s`,
            };
            weatherEffect.push(
                <div key={`star-${i}`} id={`star-${i}`} className="background-night-star" style={divStyle}></div>
            )
        }
    }

    if ((dayNight === "night") && (props.result.current.weather[0].main === "Clear")) (stars());

    // ClassName
    //let backgroundClassName = '';
    let backgroundClassName = backgroundTheme[backgroundTime.time][backgroundTime.condition];
    console.log("BACKGROUND: ", backgroundClassName);

    return(
        <div id="main" className="main">
            <div id="background" className={`background ${backgroundClassName}`}>{weatherEffect}</div>
            <div id="mainNav" className="mainNav">
                <div id="mainBtnHome" className="mainBtnHome" onClick={() => {props.displayPage("home")}}>
                    <i className="fas fa-undo-alt"></i>
                </div>
                <div id="mainLocation" className="mainLocation">
                    <h1>{props.cityname}</h1>
                </div>
            </div>
            <Result
                key="result"
                result={props.result}
                dayNight={dayNight}
                timezone_offset={props.timezone_offset}
                collectData={props.collectData}
            />
        </div>
    );
};

export default Main;