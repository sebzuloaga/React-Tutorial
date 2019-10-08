import React, {Component} from 'react';
import ForecastList from '../ForecastList/ForecastList';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      searchCity: "",
      searchCountry: "",
      location: "Brisbane",
      forecastList: [
        {
          day:"Monday",
          forecast: "Sunny with Clouds",
          max: 30,
          min: 20
        },
        {
          day:"Tuesday",
          forecast: "Rain",
          max: 30,
          min: 20
        },
        {
          day:"Wednesday",
          forecast: "Sunny with Clouds",
          max: 25,
          min: 15
        },
        {
          day:"Thursday",
          forecast: "Thunderstorms",
          max: 28,
          min: 19
        },
        {
          day:"Friday",
          forecast: "Sunny",
          max: 33,
          min: 25
        }
      ]
    }

    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCityChange(e){
    let newText = e.target.value;
    this.setState({ searchCity: newText});
  }

  handleCountryChange(e){
    let newText = e.target.value;
    this.setState({ searchCountry: newText});
  }

  handleSubmit(e){
      this.setState({ location: this.state.searchCity});
      console.log("You have clicked the buttON and it is working, now lets make the API call");
  }


  render() {
    return (
      <div className="weatherApp">
        <h1>{this.state.location}</h1>
        <input type="text" placeholder="City" onChange={this.handleCityChange}></input>
        <input type="text" placeholder="Country Code" onChange={this.handleCountryChange}></input>
        <button onClick={this.handleSubmit}>Submit!</button>
        <ForecastList forecasts={this.state.forecastList}/>
      </div>
    )
  }
}

export default App;
