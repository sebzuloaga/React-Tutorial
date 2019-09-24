import React, {Component} from 'react';
import Forecast from '../Forecast/Forecast';
import './ForecastList.css';

class ForecastList extends Component {
    render() {
        return (
            <section>
                <Forecast />
                <Forecast />
                <Forecast />
                <Forecast />
                <Forecast />
            </section>
        )
    }
} 

export default ForecastList;
