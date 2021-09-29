function WeatherSectionOne(props) {
    return(
        <div key={props.key}>
        <img src={props.imagePath} alt={props.title} />
        <p>{props.title}</p>
        </div>
    )
}
export default WeatherSectionOne;