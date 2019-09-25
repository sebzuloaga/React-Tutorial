import React, {Component} from 'react';
import './WeatherIcon.css';
import Cloudy from'./images/cloudy.svg';
import Rainy from'./images/rain.svg';
import Sunny from'./images/sunny.svg';
import Thunderstorms from'./images/storm.svg';


class WeatherIcon extends Component {

    getIcon(forecast) {
        if(forecast === "Sunny with Clouds"){
            return Cloudy;
        }else if (forecast ==="Rain") {
            return Rainy;
        }else if (forecast ==="Sunny") {
            return Sunny;
        }else{
            return Thunderstorms;
        }
    }

    render() {
        return (
            <figure>
                <img src={this.getIcon(this.props.forecast.forecast)} alt={this.props.forecast.forecast}/>
            </figure>
        )
    }
}

export default WeatherIcon;