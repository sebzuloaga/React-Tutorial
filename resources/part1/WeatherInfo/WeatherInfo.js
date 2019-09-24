import React, {Component} from 'react';
import './WeatherInfo.css';

class WeatherInfo extends Component {
    render() {
        return(
            <main>
                <h2>Monday</h2>
                <h4>Sunny with clouds</h4>
                <aside>
                    <ul>
                        <li className="maxTemp">30</li>
                        <li className="minTemp">20</li>
                    </ul>
                </aside>
            </main>
        )
    }
}

export default WeatherInfo;
