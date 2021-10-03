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
      q: 'Toronto',
      num_of_days: 7,
      format: 'json'
    }
  }).then( (result) => {
    setWeather(result.data.data.weather)
  });
}, []);  

console.log(weather)

return (

    <div className="App wrapper">
      <h1>Ooooooh, hello...</h1>
      <form action="submit">
        <div id="userChoice1">
        <label for="town">Choose a weather town:   </label>
        <select id="town" name="town">
        <option value="Gatineau">Hull</option>
        <option value="Toronto">Toronto</option>
        <option value="Norman Wells">Norman Wells</option>
        <option value="Vik">Vik</option>
        </select> 
        </div>
      </form>
      <form action="submit">
        <div id="userChoice2">
        <label for="forecast">Choose a weather time:   </label>
        <select id="forecast" name="forecast">
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="7">7</option>
        </select> 
        </div>
      </form>
      <div className="container">
        {
            weather.map( (oneDay) => {
              return <WeatherSectionOne key={oneDay.date} date={oneDay.date} high={oneDay.maxtempC} low={oneDay.mintempC}/>
            })
        }
      </div>
    </div>
  );
}

export default App;
