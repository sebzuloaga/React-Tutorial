import React, {Component} from 'react';
import Forecast from '../Forecast/Forecast';
import './ForecastList.css';

class ForecastList extends Component {
    render() {
        return (
            <section>
                {this.props.forecasts.map( (forecast) => {
                   return <Forecast forecast={forecast}/>
                })}
            </section>
        )
    }
} 

export default ForecastList;