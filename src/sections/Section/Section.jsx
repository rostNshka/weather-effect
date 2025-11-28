import {useEffect, useState} from "react"
import './Section.scss'

const KEY = 'f62cf74417334a4498b173325252711'

const Section = () => {
  const [city, setCity] = useState("")
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!city.trim()) {
      setWeatherData(null)
      setError(null)
      return
    }

    async function getData() {
      setLoading(true)
      try {
        const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&q=${city}`)
        const data = await res.json()

        if (data.error) {
          setError(data.error.message)
          setWeatherData(null)
          return
        }
        setWeatherData(data)
        setError(null)
      } catch {
        setError("Failed to fetch data")
        setWeatherData(null)
      } finally {
        setLoading(false)
      }
    }

    getData().then(r => r)
  }, [city])

  function renderError() {
    return <p>{error}</p>
  }

  function renderLoading() {
    return <p>Loading...</p>
  }

  function renderWeather() {
    return (
      <div className="weather-app__body">
        <div
          className="weather-app__body__location">{weatherData?.location.country}, {weatherData?.location.name}</div>
        <img src={`https:${weatherData?.current?.condition?.icon}`} alt="icon" className="weather-app__body__icon"/>
        <p className="weather-app__body__temps">{Math.round(weatherData?.current?.temp_c)} °C</p>
        <p className="weather-app__body__condition">{weatherData?.current?.condition?.text}</p>
        <div className="weather-app__body__details">
          <p className="details__humidity">Humidity: {weatherData?.current?.humidity}</p>
          <p className="details__wind">Wind: {weatherData?.current?.wind_kph} km/h</p>
        </div>
      </div>
    )
  }

  return (
    <div className="section">
      <div className="weather-app">
        <div className="weather-app__header">
          <h1 className="weather-app__header__title h2">Weather Effect</h1>
          <input
            type="text"
            className="weather-app__header__input"
            placeholder="Enter City..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        {error && renderError()}
        {loading && renderLoading()}
        {!error && !loading && weatherData && renderWeather()}
      </div>
    </div>
  )
}

export default Section