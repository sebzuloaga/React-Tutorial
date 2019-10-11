const fetch = require('node-fetch');

const apiKey = "f411c7c62d8111abe6bdde05b949e1e1";
const baseUrl = "http://api.openweathermap.org/data/2.5/forecast?q=";

const OpenWeather = {
    requestWeather(city, country) {
        const completeUrl = baseUrl + city + "," + country + "&units=metric&appid=" + apiKey;
        return fetch(completeUrl).then( (response) => {
            return response.json();
        }).then( (data) => {
            return data.list.map( (weatherInterval) => ({
                description: weatherInterval.weather[0].description,
                date: weatherInterval['dt_txt'],
                maxTemp: weatherInterval.main['temp_max'],
                minTemp: weatherInterval.main['temp_min']
            }));
        }).then( (completeData) => {
            return this.convertToDaily(completeData);
        })
    },

    convertToDaily(fullForecast) {
        let dateTime = fullForecast[0].date.split(" ");
        let day = dateTime[0];
        let dailyInformation = [];
        let temperatures = [];
        let descriptions = []; 

        for(let i = 0; i < fullForecast.length +1 ; i++){

            if( i === 40){
                dailyInformation.push( {
                    date: day,
                    forecast: descriptions,
                    temperatures: temperatures
                })
            }else{
                let currentDateTime = fullForecast[i].date.split(" ");
                let currentDay = currentDateTime[0];

                if (currentDay === day) {
                    temperatures.push(fullForecast[i].maxTemp);
                    temperatures.push(fullForecast[i].minTemp);
                    descriptions.push(fullForecast[i].description);
                }else{
                    dailyInformation.push( {
                        date: day,
                        forecast: descriptions,
                        temperatures: temperatures
                    })

                    temperatures = [];
                    temperatures.push(fullForecast[i].maxTemp);
                    temperatures.push(fullForecast[i].minTemp);

                    descriptions = [];
                    descriptions.push(fullForecast[i].description);
                    day = currentDay;
                }
            }
        }

        let minTemperatures = this.getMin(dailyInformation);
        let maxTemperatures = this.getMax(dailyInformation);
        let mainDescriptions = this.getDescription(dailyInformation);

        let finalWeatherInfo = [];

        for( let i = 0; i < 5; i++) {
            let dayInformation = {
                day: dailyInformation[i].date,
                forecast: mainDescriptions[i],
                max: maxTemperatures[i],
                min: minTemperatures[i]
            }

            finalWeatherInfo.push(dayInformation);
        }

        console.log(finalWeatherInfo);
        return finalWeatherInfo;

    }, 

    getMin(dayForecasts){
        let minTemperatures = [];
        for (let i = 0; i < dayForecasts.length; i++) {
            let min = dayForecasts[i].temperatures.reduce(function(a, b) {
                return Math.min(a, b);
            });

            minTemperatures.push(Math.round(min));
        }
        return minTemperatures;
    },

    getMax(dayForecasts){
        let maxTemperatures = [];
        for (let i = 0; i < dayForecasts.length; i++) {
            let max = dayForecasts[i].temperatures.reduce(function(a, b) {
                return Math.max(a, b);
            });

            maxTemperatures.push(Math.round(max));
        }

        return maxTemperatures;
    }, 

    getDescription(dayForecasts){

        let mainDescriptions = [];

        for (let i = 0; i < dayForecasts.length; i++) {
            
            let descriptionCount = {};
            let currentDayDescriptions = dayForecasts[i].forecast;

            for ( let j = 0; j < currentDayDescriptions.length; j++){
                if( currentDayDescriptions[j] in descriptionCount){
                    descriptionCount[currentDayDescriptions[j]] = descriptionCount[currentDayDescriptions[j]] +1;
                }else{
                    descriptionCount[currentDayDescriptions[j]] = 1;
                }
            }

            let highestFrequency = 0;

            Object.keys(descriptionCount).forEach( (key, index) => {
                let currentComparison = descriptionCount[key];
                highestFrequency = Math.max(highestFrequency, currentComparison);
            })

            let mostFrequentDescription = Object.keys(descriptionCount).find(key => descriptionCount[key] === highestFrequency);

            mainDescriptions.push(mostFrequentDescription);
        }

        return mainDescriptions;
    }

};

export default OpenWeather;
