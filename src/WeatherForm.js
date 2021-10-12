import {useState} from 'react';



function WeatherForm(props) {
    const [userChoice,setUserChoice] = useState('placeholder')

    const handleUserChoice = (e)=>{
        setUserChoice(e.target.value);
    }

    const handleGetWeather = (e)=>{
        e.preventDefault()
        props.getWeather(userChoice)
    }


    return(
        <form onSubmit={ (e) => {handleGetWeather(e)}}>
            <select 
            id="locations" 
            name="location" 
            value={userChoice}
            onChange={handleUserChoice}> 
                <option value="placeholder" disabled>Choose your Location</option>
                <option value="Toronto">Toronto</option>
                <option value="Gatineau">Hull</option>
                <option value="Vik">Vik</option>
                <option value="Osaka">Osaka</option>
                <option value="Norman Wells">Norman Wells</option>
                <option value="Edmonton">Oilers Nation</option>
                <option value="Vancouver">and Vancouver</option>
                <option value="Regina">and Ragina</option>
                <option value="Munster">and Münster for Lazer</option>
            </select>
            <button type="submit">The Next 7 Days</button>
        </form>
    )
}

export default WeatherForm;