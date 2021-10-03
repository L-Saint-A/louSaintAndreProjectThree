function WeatherSectionOne(props) {

    const {key, date, high, low} = props
    return(
        <div className="weatherBit">
            <div className="weatherTab" key={key}>
                <p>{date}</p>
                <p>High: {high}</p>
                <p>Low: {low}</p>
            </div>
        </div>
    )
}
export default WeatherSectionOne;