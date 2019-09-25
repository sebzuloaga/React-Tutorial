import React, {Component} from 'react';
import './WeatherInfo.css';

class WeatherInfo extends Component {
    render() {
        return(
            <main>
                <h2>{this.props.forecast.day}</h2>
                <h4>{this.props.forecast.forecast}</h4>
                <aside>
                    <ul>
                        <li className="maxTemp">{this.props.forecast.max}</li>
                        <li className="minTemp">{this.props.forecast.min}</li>
                    </ul>
                </aside>
            </main>
        )
    }
}

export default WeatherInfo;