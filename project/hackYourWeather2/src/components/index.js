import React, { useState } from 'react'
import SearchForm from './SearchForm'
import WeatherCard from './WeatherCard'
import { toast } from 'react-toastify'

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY

const Weather = () => {
  const [city, setCity] = useState('')
  const [cities, setCities] = useState([])
  const [Loaded, setLoaded] = useState(false)

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  const fetchData = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Enter a proper city name')
        }
        return res.json()
      })
      .then((data) => {
        setLoaded(true)
        setCities([data, ...cities])
      })
      .catch((err) => {
        toast.error(err.message, {
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchData(city)
  }
  const deleteCity = (id) => {
    const leftCities = cities.filter((city) => city.id !== id)
    setCities(leftCities)
  }

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} onChange={handleChange} />
      {Loaded &&
        cities.map((city) => (
          <div key={city.id}>
            <WeatherCard city={city} onClick={deleteCity} />
          </div>
        ))}
    </div>
  )
}

export default Weather
