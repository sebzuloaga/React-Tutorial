import React, {Component} from 'react';
import ForecastList from '../ForecastList/ForecastList';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
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
  }

  render() {
    return (
      <div className="weatherApp">
        <h1>{this.state.location}</h1>
        <ForecastList forecasts={this.state.forecastList}/>
      </div>
    )
  }
}

export default App;