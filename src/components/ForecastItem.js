import React from 'react';

function ForecastItem(props) {
    return(
        <div className="forecastItem">
            <p className="forecastItemDate">{props.date}</p>
            <i className={`${props.className} forecastItemIcon`}></i>
            <div className="forecastItemTempContainer">
                <i className="fas fa-temperature-high forecastItemTempHigh forecastItemTempIcon"></i>
                <p className="forecastItemTemp">33<span>°C</span></p>
            </div>
            <div className="forecastItemTempContainer">
                <i className="fas fa-temperature-low forecastItemTempIcon forecastItemTempLow"></i>
                <p className="forecastItemTemp">25<span>°C</span></p>
            </div>
            <div className="forecastItemTempContainer">
                <i className="fas fa-tint forecastItemTempIcon forecastItemTempLow"></i>
                <p className="forecastItemTemp">75<span>%</span></p>
            </div>
        </div>
    )
}

export default ForecastItem;