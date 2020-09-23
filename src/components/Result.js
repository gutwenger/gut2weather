import React from 'react';
import Hourly from './Hourly';
import Daily from './Daily';
import tempConverter from './tempConverter';
import dateFormat from './dateFormat';

function DetailsItem(props) {
  return(
    <div className="detailsItem">
      <i className={`detailsItemIcon ${props.icon}`}></i>
      <p className="detailsItemLabel">{props.label}</p>
      <p className="detailsItemData">{props.data}</p>
    </div>
  )
}

function Details(props) {
  return(
    <div id="details" className="details">
      <DetailsItem
        key="feelslike"
        icon="fas fa-thermometer-half"
        label="Feels like"
        data={`${tempConverter("kelvin", "celcius", props.item.feels_like)}°`}
      />
      <DetailsItem
        key="wind"
        icon="fas fa-wind"
        label="Wind"
        data={props.item.wind_speed}
      />
      <DetailsItem
        key="humidity"
        icon="fas fa-tint"
        label="Humidity"
        data={`${props.item.humidity}%`}
      />
      <DetailsItem
        key="pressure"
        icon="fas fa-tachometer-alt"
        label="Pressure"
        data={props.item.pressure}
      />
      <DetailsItem
        key="sunrise"
        icon="far fa-sun"
        label="Sunrise"
        data={dateFormat("HH:MM", props.today.sunrise, props.timezone_offset)}
      />
      <DetailsItem
        key="sunset"
        icon="far fa-moon"
        label="Sunset"
        data={dateFormat("HH:MM", props.today.sunset, props.timezone_offset)}
      />
    </div>
  )
}

function Summary(props) {
  let icon = {
    "day": {
      "Atmosphere": "fas fa-smog",
      "Clear": "fas fa-sun",
      "Clouds": "fas fa-cloud",
      "Drizzle": "fas fa-cloud-showers-heavy",
      "Rain": "fas fa-cloud-showers-heavy",
      "Snow": "fas fa-snowflake",
      "Thunderstorm": "fas fa-bolt",
    },
    "night": {
      "Atmosphere": "fas fa-smog",
      "Clear": "fas fa-moon",
      "Clouds": "fas fa-cloud-moon",
      "Drizzle": "fas fa-cloud-showers-heavy",
      "Rain": "fas fa-cloud-showers-heavy",
      "Snow": "fas fa-snowflake",
      "Thunderstorm": "fas fa-bolt",
    }
  }

  return(
    <div id="summary" className="summary">
      <div id="summaryIcon" className="summaryIcon">
        <i className={`summaryIconIcon ${icon[props.dayNight][props.item.weather[0].main]}`}></i>
        <p className="summaryIconDescription">{props.item.weather[0].description}</p>
      </div>
      <div id="summaryTemp" className="summaryTemp">
        <p className="summaryCurrentTemp">{tempConverter("kelvin", "celcius", props.item.temp)}<span>°</span></p>
      </div>
      <div id="summaryHighLow" className="summaryHighLow">
        <div id="summaryHigh" className="summaryHighLowItem">
          <i className="fas fa-long-arrow-alt-up"></i>
          <p className="summaryHighLowTemp">{tempConverter("kelvin", "celcius", props.today.temp.max)}<span>°</span></p>
        </div>
        <div id="summaryLow" className="summaryHighLowItem">
          <i className="fas fa-long-arrow-alt-down"></i>
          <p className="summaryHighLowTemp">{tempConverter("kelvin", "celcius", props.today.temp.min)}<span>°</span></p>
        </div>
      </div>
    </div>
  )
}

function Result(props) {
    return(
        <div id="result" className="result">
          <Summary
            key="summary"
            item={props.result.current}
            today={props.result.daily[0]}
            dayNight={props.dayNight}
          />
          <Details
            key="details"
            item={props.result.current}
            today={props.result.daily[0]}
            timezone_offset={props.timezone_offset}
          />
          <Hourly
            key="hourly"
            hourly={props.result.hourly}
            timezone_offset={props.timezone_offset}
          />
          <Daily
            key="daily"
            daily={props.result.daily}
            timezone_offset={props.timezone_offset}
          />
        </div>
    )
}

export default Result;