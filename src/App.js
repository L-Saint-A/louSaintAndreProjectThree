import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import WeatherSectionOne from './WeatherSectionOne';

function App() {

const [weather, setWeather] = useState([]);

useEffect( ()=> {
  axios({
    method: 'GET',
    url: `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=5006b4f52810441184b183358212809`,
    dataResponse: 'json',
    params: {
      q: 'Gatineau',
      num_of_days: 7,
      format: 'json'
    }
  }).then( (result) => {
    //save our response array to STATE
    console.log(result.data.data.current_condition);
    setWeather(result.data.data.current_condition)
  });
}, []);  

return (
    <div className="App">
      <h1>Ooooooh, hello...</h1>
      <form action="submit">
        <div id="userChoice1">
          <select value="Toronto">Toronto</select>
          <select value="Something">Something</select>
        </div>
      </form>
      {
          weather.map( (oneDay) => {
            console.log(oneDay.temp_C, `Deg. C`)
            console.log(oneDay.weatherIconUrl[0], `picture`)
            return (
              <div title={oneDay.temp_C}></div>
            )
          })
      }
    </div>
  );
}

export default App;
