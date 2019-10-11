const fetch = require('node-fetch');

const apiKey = "f411c7c62d8111abe6bdde05b949e1e1";
const baseUrl = "http://api.openweathermap.org/data/2.5/forecast?q=";

const OpenWeather = {

    requestWeather(city, countryCode) {
        let completeUrl = baseUrl + city + "," + countryCode + "&units=metric&appid=" + apiKey;
        return fetch(completeUrl).then( (response) => {
            return response.json();
        }).then( (data) => {
            return data.list.map( (weatherInterval) => ({
                description: weatherInterval.weather[0].description,
                date: weatherInterval['dt_txt'],
                maxTemp: weatherInterval.main['temp_max'],
                minTemp: weatherInterval.main['temp_min']
            }));
        }).then( (list) => {
            return OpenWeather.convertToDaily(list);
        });
    },

    convertToDaily(fullForecast) {
        let dateTime = fullForecast[0].date.split(" ");
        let day = dateTime[0];
        let dailyInformation = [];
        let temperatures = [];
        let descriptions = []; 
        let descriptionCount = {};

        for(let i = 0; i < fullForecast.length +1 ; i++){

            if(i === 40){
                let max = temperatures.reduce(function(a, b) {
                    return Math.max(a, b);
                }); 
                let min = temperatures.reduce(function(a, b) {
                    return Math.min(a, b);
                });

                descriptions.map( (description) => {
                    if( description in descriptionCount){
                        return descriptionCount[description] = descriptionCount[description] +1;
                    }else{
                        return descriptionCount[description] = 1;
                    }
                })

                let highestFrequency = 0;
                let highestDescription = "";

                Object.keys(descriptionCount).forEach( (key, index) => {
                    let currentValue = descriptionCount[key];
                    highestFrequency = Math.max(highestFrequency, currentValue);
                })

                highestDescription = Object.keys(descriptionCount).find(key => descriptionCount[key] === highestFrequency);

                dailyInformation.push( {
                    date: day,
                    forecast: highestDescription,
                    max: Math.round(max),
                    min: Math.round(min),
                })
            }else{
                let currentDateTime = fullForecast[i].date.split(" ");
                let currentDay = currentDateTime[0];

            if(currentDay === day){
                temperatures.push(fullForecast[i].maxTemp);
                temperatures.push(fullForecast[i].minTemp);
                descriptions.push(fullForecast[i].description);
            }else{
                let max = temperatures.reduce(function(a, b) {
                    return Math.max(a, b);
                }); 
                let min = temperatures.reduce(function(a, b) {
                    return Math.min(a, b);
                });

                descriptions.map( (description) => {
                    if( description in descriptionCount){
                        descriptionCount[description] = descriptionCount[description] +1;
                    }else{
                        descriptionCount[description] = 1;
                    }
                })

                let highestFrequency = 0;
                let highestDescription = "";

                Object.keys(descriptionCount).forEach( (key, index) => {
                    let currentValue = descriptionCount[key];
                    highestFrequency = Math.max(highestFrequency, currentValue);
                })

                highestDescription = Object.keys(descriptionCount).find(key => descriptionCount[key] === highestFrequency);

                dailyInformation.push( {
                    date: day,
                    forecast: highestDescription,
                    max: Math.round(max),
                    min: Math.round(min)
                })

                temperatures = [];
                temperatures.push(fullForecast[i].maxTemp);
                temperatures.push(fullForecast[i].minTemp);

                descriptions = [];
                descriptionCount = {};
                descriptions.push(fullForecast[i].description);

                day = currentDay;
                }
            }
        }
        
        let finalWeather = OpenWeather.reduceToFive(dailyInformation);
        return finalWeather;
    }, 

    reduceToFive(information){
        if(information.length > 5){
            information.splice(information.length -1, 1);
            return information;
        }else{
            return information;
        }
    },

}

export default OpenWeather;