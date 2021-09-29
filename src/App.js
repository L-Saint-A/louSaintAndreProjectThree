import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [weather, setWeather] = useState([]);
  useEffect( ()=> {
  axios({
    method: 'GET',
    url: `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=5006b4f52810441184b183358212809&q=Toronto&format=json&num_of_days=5`,
    dataResponse: 'json',

  }).then( (result)=> {
    //save our response array to STATE
    setWeather(result.data)
  });
}, []);  

  return (
    <div className="App">
      <h1>Ooooooh, hello...</h1>
      {
      weather.map( (eachDay) => {
        console.log(eachDay)
        return (
          //call our piece of art component (the other .js) and PASS it the props, which are the three things we need to display
          <WeatherSectionOne key={eachDay.id} title={eachDay.title}/>
        );
      })
    }

    </div>
  );
  
}

export default App;
