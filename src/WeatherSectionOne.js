function WeatherSectionOne(props) {

    const {key, date, high, low, moon} = props

    return(
        <div className="weatherBit">
            <div className="weatherTab" key={key}>
                <div>
                    <p><i className="fas fa-moon"></i> {moon.phase_moon}</p>
                </div>
                <div>
                    <p>{date}</p>
                    <p><i className="fas fa-caret-up"></i>  {high}°C</p>
                    <p><i className="fas fa-caret-down"></i>  {low}°C</p>
                </div>
            </div>
        </div>
    )
}
export default WeatherSectionOne;