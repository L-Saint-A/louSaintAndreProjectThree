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
    url: `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=5006b4f52810441184b183358212809`,
    dataResponse: 'json',
    params: {
      q: 'Toronto',
      num_of_days: 7,
      format: 'json'
    }
  }).then( (result) => {
    setWeather(result.data.data.weather)
    console.log(result.data.data)
  });
}, []);  
console.log('data', weather)

return (

    <div className="App wrapper">
      <h1>le WEATHER POUR VOUS?</h1>
      <div>
        <WeatherForm/>
      </div>
      <div className="container">
          {
            weather.map( (oneDay) => {
              return <WeatherSectionOne key={oneDay.date} date={oneDay.date} high={oneDay.maxtempC} low={oneDay.mintempC} moon={oneDay.astronomy}/>
            })

          }
      </div>
    </div>
  );
}

export default App;
