import React, {Component} from 'react';
import './Forecast.css';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import WeatherInfo from '../WeatherInfo/WeatherInfo';

class Forecast extends Component {
    render() {
        return (
            <article className="dayForecast">
                <WeatherIcon/>
                <WeatherInfo />
            </article>
        )
    }
}

export default Forecast;
