function WeatherSectionOne(props) {

    const {key, date, high, low, moon} = props

    return(
        <div className="weatherBit">
            <div className="weatherTab" key={key}>
                <p><i class="fas fa-moon"></i> {moon.phase_moon}</p>
                <p>{date}</p>
                <p><i class="fas fa-caret-up"></i>  {high}°C</p>
                <p><i class="fas fa-caret-down"></i>  {low}°C</p>
            </div>
        </div>
    )
}
export default WeatherSectionOne;