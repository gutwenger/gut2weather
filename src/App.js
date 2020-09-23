import React from 'react';
import Main from './components/Main';
import Home from './components/Home';
import Loading from './components/Loading';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      geodata: {
        latitude: '',
        longitude: '',
        isLoading: true,
      },
      result: '',
      isLoading: true,
      displayPage: '',
      cityname: '',
    };
    this.displayPage = this.displayPage.bind(this);
    this.searchMethod = this.searchMethod.bind(this);
    this.getCity = this.getCity.bind(this);
    this.collectData = this.collectData.bind(this);
    this.setCity = this.setCity.bind(this);
  };

  componentDidMount() {
    this.displayPage("home");
  };

  componentDidUpdate(prevState) {
    if(this.state !== prevState) {
      // Geodata loading complete
      if (this.state.geodata.isLoading === false) {
        this.printState();
      }
    }
  }

  // Function to get CSRF token
  getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }

  // Function to change page
  displayPage = (page) => {
    let displayPage;
    switch (page) {
      case "home":
        displayPage = <Home
                        key="home"
                        searchMethod={this.searchMethod}
                        getCity={this.getCity}
                        setCity={this.setCity}
                        collectData={this.collectData}
                        result={this.state.result}
                        geodata={this.state.geodata}
                      />
        break;
      case "loading":
        displayPage = <Loading
                        key="loading"
                      />
        break;
      case "main":
        displayPage = <Main
                        key="main"
                        cityname={this.state.cityname}
                        result={this.state.main.result}
                        timezone_offset={this.state.main.result.timezone_offset}
                        displayPage={this.displayPage}
                        collectData={this.collectData}
                      />
        break;
      default:
        displayPage = <Home
                        key="home"
                        searchMethod={this.searchMethod}
                        getCity={this.getCity}
                        setCity={this.setCity}
                        collectData={this.collectData}
                        result={this.state.result}
                        geodata={this.state.geodata}
                      />
        break;
    };
    this.setState({
      displayPage: displayPage,
    });
  };

  // Function to conduct search as per instructed by the user
  searchMethod = (method) => {
    if (method === "currentLocation") {
      navigator.geolocation.getCurrentPosition(this.getGeoDataSuccess, this.getGeoDataError);
    } else {
    }
    this.setState({
      geodata: {
        isLoading: true,
      }
    });
  };

  printState = () => {
    console.log(this.state.geodata);
  };

  // Function to return value if successfully obtain geodata
  getGeoDataSuccess = (pos) => {
    this.setState({
      geodata: {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        isLoading: false,
      }
    });
    // this.collectData(pos.coords.latitude, pos.coords.longitude)
  };

  // Function to print an error message if unsuccessfull
  getGeoDataError = (err) => {
    console.log(`Error: ${err}`);
  }

  // Function to get geodata by city
  getCity = (cityname) => {
    const csrftoken = this.getCookie('csrftoken');
    fetch(`https://gut2weather.herokuapp.com/api/get_cityname_get/${cityname}`)
    .then(response => response.json())
    .then(result => {
      this.setState({
        result: result,
      });
    })
    .catch(error => {
      console.log(error)
    })
    .then(console.log(this.state))
  };

  // Set City
  setCity = (cityname) => {
    console.log(`setCity: ${cityname}`);
    this.setState({
      cityname: cityname
    });
  };

  // Function to collect weather data by latitude and longitude
  collectData = (lat, lon, cityname) => {    
    const API_KEY = "81292baa61f67339affb10a09e0661d9";
    const part = '';
    
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(result => {
      this.setState({
        isLoading: false,
        cityname: cityname,
        main: {
          cityname: cityname,
          results: result,
          result: result,
        }
      })
      this.displayPage("main");
    });
  }

  render() {
    return(
      <div id="App" className="App">
        {this.state.displayPage}
      </div>
    )
  }
}

export default App;
