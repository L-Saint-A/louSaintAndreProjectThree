import WeatherSectionOne from './WeatherSectionOne';


function WeatherPic(props) {

    const {key} = props
    return(
        <div className="weatherBit">
            <div  key={key}>
                <p>HI THERE</p>
                <img src="{props.weatherIconUrl[0]}" alt="" />
            </div>
        </div>
    )
}
export default WeatherPic;