import React, {Component} from 'react';
import './WeatherIcon.css';
import Cloudy from'./images/cloudy.svg';

class WeatherIcon extends Component {

    render() {
        return (
            <figure>
                <img src={Cloudy} alt={"Cloudy"}/>
            </figure>
        )
    }
}

export default WeatherIcon;
