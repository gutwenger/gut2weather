import React from 'react';
import tempConverter from './tempConverter';
import dateFormat from './dateFormat';

function DailyItem(props) {
    return(
        <div className="dailyItem">
            <p className="dailyItemWeekday">{props.weekday}</p>
            <i className={`dailyItemIcon ${props.icon}`}></i>
            <div className="dailyItemHighLow">
                <p className="dailyItemLow">{props.low}<span>°</span></p>
                <p className="dailyItemHigh">{props.high}<span>°</span></p>
            </div>
        </div>
    )
}

class Daily extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                
            ],
            weekday: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ],
            dailyItems: '',
        };
    };

    componentDidMount() {
        this.displayItems(this.props.daily);
    };

    displayItems = (daily) => {
        let icon = {
            "Clear": "fas fa-sun",
            "Clouds": "fas fa-cloud",
            "Rain": "fas fa-cloud-showers-heavy",
        };
        let dailyItems = [];
        if (!daily) {
            for (let i = 0; i < 7; i++) {
                dailyItems.push(
                    <DailyItem
                        key={`dailyitem-${i}`}
                        weekday={this.state.weekday[i]}
                        icon="fas fa-cloud-showers-heavy"
                    />
                );
            };
        };

        daily.forEach((item, i) => {
            if (i > 0){
                dailyItems.push(
                    <DailyItem
                        key={`dailyitem-${i}`}
                        weekday={dateFormat("weekday", item.dt, this.props.timezone_offset)}
                        icon={icon[item.weather[0].main]}
                        low={tempConverter("kelvin", "celcius", item.temp.min)}
                        high={tempConverter("kelvin", "celcius", item.temp.max)}
                    />
                )
            }
        });


        this.setState({
            dailyItems: dailyItems,
        })
    };


    render() {
        return(
            <div id="daily" className="daily">
                {this.state.dailyItems}
            </div>
        );
    };
};

export default Daily;