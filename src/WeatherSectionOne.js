function WeatherSectionOne(props) {

    const {key, date, high, low, snow, xxx} = props

    return(
        <div className="weatherBit">
            <div className="weatherTab" key={key}>
                <div>
                    <p>{date}</p>
                    <p><i className="fas fa-caret-up"></i>  {high}°c</p>
                    <p><i className="fas fa-caret-down"></i>  {low}°c</p>
                    <p><i className="far fa-snowflake"></i>  {snow} cm</p>
                    <p><i className="far fa-snowflake"></i>  {xxx} xxx</p>
                </div>
            </div>
        </div>
    )
}
export default WeatherSectionOne;