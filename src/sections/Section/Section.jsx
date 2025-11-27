import './Section.scss'

const Section = () => {
  return (
    <div className="section">
      <div className="weather-app">
        <div className="weather-app__header">
          <h1 className="weather-app__header__title h2">Weather Effect</h1>
          <input type="text" className="weather-app__header__input" placeholder="Location..." />
        </div>
        <div className="weather-app__body">
          <div className="weather-app__body__location">Paris, France</div>
          <img src="#" alt="icon" className="weather-app__body__icon" />
          <p className="weather-app__body__temps">17 °C</p>
          <p className="weather-app__body__condition">Sunny</p>
          <div className="weather-app__body__details">
            <p className="details__humidity">Humidity: 55%</p>
            <p className="details__wind">Wind: 23 km/h</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section