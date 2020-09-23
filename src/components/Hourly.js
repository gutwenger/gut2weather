import React from 'react';
import tempConverter from './tempConverter';
import dateFormat from './dateFormat';

function HourlyItem(props) {
    return(
        <div className="hourlyItem">
            <p className="hourlyItemTime">
                {props.time}
            </p>
            <i className={`hourlyItemIcon ${props.icon}`}></i>
            <p className="hourlyItemTemp">{props.temp}<span>°</span></p>
        </div>
    )
}

class Hourly extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {time: "Now", temp: 23},
                {time: "1pm", temp: 33},
                {time: "2pm", temp: 30},
                {time: "3pm", temp: 23},
                {time: "4pm", temp: 20},
                {time: "5pm", temp: 16},
                {time: "6pm", temp: 33},
                {time: "7pm", temp: 30},
                {time: "8pm", temp: 23},
                {time: "9pm", temp: 20},
                {time: "10pm", temp: 16},
                {time: "11pm", temp: 33},
                {time: "12am", temp: 30},
                {time: "1am", temp: 23},
                {time: "2am", temp: 20},
                {time: "3am", temp: 16},
                {time: "4am", temp: 33},
                {time: "5am", temp: 30},
                {time: "6am", temp: 23},
                {time: "7am", temp: 20},
                {time: "8am", temp: 16},
            ],
            hourlyItem: '',
        };
        this.myRef = React.createRef();
    };

    componentDidMount() {
        this.displayHourlyItem(this.props.hourly);
    };

    displayHourlyItem = (hourly) => {
        let hourlyItem = [];
        let icon = {
            "Clear": "fas fa-sun",
            "Clouds": "fas fa-cloud",
            "Rain": "fas fa-cloud-showers-heavy",
        };

        if (!hourly) {
            this.state.data.forEach((item, i) => {
                let time = i === 0 ? "Now" : item.time;

                hourlyItem.push(
                    <HourlyItem
                        key={`hourlyitem-${i}`}
                        time={time}
                        icon="fas fa-cloud-showers-heavy"
                        temp={item.temp}
                    />
                );
            });
        };

        hourly.forEach((item, i) => {
            let time = i === 0 ? "Now" : dateFormat("H_APM", item.dt, this.props.timezone_offset);

            hourlyItem.push(
                <HourlyItem
                    key={`hourlyItem-${i}`}
                    time={time}
                    icon={icon[item.weather[0].main]}
                    temp={tempConverter("kelvin", "celcius", item.temp)}
                />
            )
        });

        this.setState({
            hourlyItem: hourlyItem,
        })
        return;
    };

    render() {
        return(
            <div id="hourly" className="hourly">
                {this.state.hourlyItem}
            </div>
        );
    };
};

export default Hourly;