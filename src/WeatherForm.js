import {useState} from 'react';


function WeatherForm(props) {
    const [userChoice,setUserChoice] = useState('placeholder')

    const handleUserChoice = (e)=>{
        setUserChoice(e.target.value);
    }
    return(
        <form onSubmit={ (e) => {props.getPhotos(e, userChoice)}}>
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
            </select>
            <button type="submit">The Next 7 Days</button>
        </form>
    )
}
export default WeatherForm;