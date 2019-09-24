```javascript
import React, {Component} from 'react';
import ForecastList from '../ForecastList/ForecastList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="weatherApp">
        <h1>Brisbane</h1>
        <ForecastList />
      </div>
    )
  }
}

export default App;
```
