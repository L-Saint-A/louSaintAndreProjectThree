import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import WeatherSectionOne from './WeatherSectionOne';
import WeatherForm from './WeatherForm.js';

function App() {

const [weather, setWeather] = useState([]);

useEffect( ()=> {
  axios({
    method: 'GET',
    url: `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=6ff5d0608cbb47d69b5230426212911`,
    dataResponse: 'json',
    params: {
      q: 'Toronto',
      num_of_days: 7,
      format: 'json'
    }
  }).then( (result) => {
    setWeather(result.data.data.weather)
  });
}, []);  

const getWeather = (town) => {
  axios({
    method: 'GET',
    url: `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=6ff5d0608cbb47d69b5230426212911`,
    dataResponse: 'json',
    params: {
      q: town,
      num_of_days: 7,
      format: 'json'
    }
  }).then( (result) => {
    setWeather(result.data.data.weather)
  });
}


return (

    <div className="App wrapper">
      <h1>the WEATHER outside is frightful!! </h1>
      <div>
        <WeatherForm getWeather={getWeather} />
      </div>
      <div className="container">
          {
            weather.map( (oneDay) => {
              return <WeatherSectionOne 
                key={oneDay.date} 
                date={oneDay.date} 
                high={oneDay.maxtempC} 
                low={oneDay.mintempC} 
                snow={oneDay.totalSnow_cm} 
                xxx={oneDay.astronomy}
              />
            })

          }
      </div>
      <footer>Created @ Juno College</footer>
    </div>
  );
}

export default App;
