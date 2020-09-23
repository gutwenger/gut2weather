import React, { Fragment } from 'react';
import Expand from 'react-expand-animated';

function HomeResultError(props) {
    let message;
    
    switch(props.type) {
        case "noResult":
            message = "Opps. No result.";
            break;
        case "tooMany":
            message = "Opps. There are too many results, please be more specific!";
            break;
        case "emptyEntry":
            message = "Opps. You must search something!"
            break;
        default:
            message = "Opps!"
            break;
    }

    return(
        <div id="homeResultError" className="homeResultError">
            <div id="homeResultErrorCon" className="homeResultErrorCon">
                <p>{message}</p>
            </div>
        </div>
    )
}

function HomeResult(props) {

    return(
        <div className="cityResult" onClick={() => props.collectData(`${props.item.city_coord.latitude}`, `${props.item.city_coord.longitude}`, `${props.item.city_name}`)}>
            <div className="cityResultInfo">
                <h1 className="cityResultInfoH1">{props.item.city_name}, <span className="cityResultCountry">{props.item.city_country}</span></h1>
                <div className="cityResultCoord">
                    <p className="cityResultLat">latitude: {props.item.city_coord.latitude}</p>
                    <p className="cityResultLon">longitude: {props.item.city_coord.longitude}</p>
                </div>
            </div>
            <div className="cityResultInspect">
                <i className="fas fa-chevron-right"></i>
            </div>
            
        </div>
    )
}

function HomeResultContainer(props) {
    return(
        <div id="homeResultContainer" className="homeResultContainer">
            {props.result}
        </div>
    )
}

function HomeResultLoading(props) {
    return(
        <div id="homeResultLoading" className="homeResultLoading">
            <i className="fas fa-spinner"></i>
        </div>
    )
}

class HomeSelectSearchCity extends React.Component {
    render() {
        return(
            <div id="homeSelectSearchCity" className="homeSelectSearchCity">
                <form id="homeSelectSearchCityForm" className="homeSelectSearchCityForm" onSubmit={(event) => this.props.showResult(event)}>
                    <div className="searchCityField" data-method="cityname">
                        <input id="searchCityInput" type="text" name="cityname" autoComplete="off" placeholder="enter city name"/>
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </div>
                </form>
            </div>
        )
    }
}

function HomeSelect(props) {
    return(
        <div id="homeSelect" className="homeSelect">
            <ul id="homeSelectMethod" className="homeSelectMethod">
                <li 
                    className="homeSelectMethodOption"
                    onClick={() => props.handleSearchByCurrentLocation()}
                >
                    Current Location
                </li>
                <li 
                    className="homeSelectMethodOption"
                    onClick={() => props.openCloseSearchField()}
                >
                    Search City
                </li>
            </ul>
        </div>      
    );
};

function HomeLogo() {
    return(
        <div id="homeLogo" className="homeLogo">
            <h1 className="homeLogoH1">G2Weather</h1>
        </div>
    );
};

class Home extends React.Component {
    constructor(props) {
        super(props); {
            this.state = {
              isOpen: {
                  searchField: false,
                  result: false,
              },
              result: <HomeResultLoading
                            key="homeselectsearchcity"
                        />,
              paginator: {
                  current: 0,
                  results: '',
              }
            };
        };
        this.handleSearchByCurrentLocation = this.handleSearchByCurrentLocation.bind(this);
        this.openCloseSearchField = this.openCloseSearchField.bind(this);
        this.showResult = this.showResult.bind(this);
    };

    openCloseSearchField = () => {
        this.setState({
            isOpen: {
                searchField: !this.state.isOpen.searchField,
                //searchField: true,
            },
        });
        document.querySelector("#searchCityInput").value = '';
    };

    showResult = (event) => {
        event.preventDefault();
        this.setState({
            isOpen: {
                result: !this.state.isOpen.result,
                //result: true,
            },
            result: <HomeResultLoading
                        key="homeselectsearchcity"
                    />,
        });
        if (event.target.dataset.method === "geocoords") {

        } else {
            this.getCity("cityname", event.target.cityname.value);
            event.target.cityname.value = '';   
        }
    };

    handleSearchByCurrentLocation = () => {
        this.props.searchMethod("currentLocation");
        this.getGeoData();
        this.setState({
            isOpen: {
                result: !this.state.isOpen.result,
            }
        })
    }

    getGeoData = () => {
        navigator.geolocation.getCurrentPosition(this.getGeoDataSuccess, this.getGeoDataError);
    }

    // Function to return value if successfully obtain geodata
    getGeoDataSuccess = (pos) => {
        this.getCity("geocoords", [pos.coords.latitude, pos.coords.longitude])
    };

    // Function to print an error message if unsuccessfull
    getGeoDataError = (err) => {
        console.log(`Error: ${err}`);
    }

    // Display Result
    displayResult = (data) => {
        let result = [];
        data.forEach((item, i) => {
            result.push(
                <HomeResult
                    key={`homeresult-${i}`}
                    item={item}
                    collectData={this.props.collectData}
                    setCity={this.props.setCity}
                />
            )
        })
        return result;
    }

    // Function to search for locations
    getCity = (method, value) => {
        let latitude;
        let longitude;
        let body;
        let cityname;
        let url;

        // If method === Geolocation
        if (method === "geocoords") {
            latitude = value[0].toFixed(1);
            longitude = value[1].toFixed(1);
            url = `https://gut2weather.herokuapp.com/api/get_cityname_geo/${latitude}/${longitude}`;
        } else {
            cityname = value;
            url = `https://gut2weather.herokuapp.com/api/get_cityname_get/${cityname}`;
        }

        // Fetch API
        fetch(url)
            .then(response => response.status === 404
                                ? this.setState({
                                    result: <HomeResultError key="homeresulterror" type="emptyEntry"/>
                                })
                                : response.json())
            .then(res => {
                let result = res.error
                                ? res.error_message
                                    ? <HomeResultError key="homeresulterror" type="tooMany"/>
                                    : <HomeResultError key="homeresulterror" type="noResult"/>
                                : this.displayResult(res);
                let resultCon = <HomeResultContainer
                                    key="homeresultcontainer"
                                    result={result}
                                />
                this.setState({
                    result: resultCon,
                });
            })
            .catch(error => {
                console.log(error)
            });
    };

    render() {
        return(
            <div id="home" className="home">
                <HomeLogo
                    key="homelogo"
                />
                <HomeSelect
                    key="homeSelect"
                    searchMethod={this.props.searchMethod}
                    handleSearchByCurrentLocation={this.handleSearchByCurrentLocation}
                    openCloseSearchField={this.openCloseSearchField}
                />
                <Fragment>
                    <Expand open={this.state.isOpen.searchField}>
                        <HomeSelectSearchCity
                            key="homeselectsearchcity"
                            showResult={this.showResult}
                        />
                    </Expand>
                </Fragment>
                <Fragment>
                    <Expand open={this.state.isOpen.result}>
                        {this.state.result}
                    </Expand>
                </Fragment>
            </div>
        );
    }
}

export default Home;