import React, { useEffect, useState } from 'react'
import { AreaChart, Tooltip, XAxis, CartesianGrid, YAxis, Area } from 'recharts'
import { useParams, useHistory } from 'react-router-dom'

const DetailWeatherCard = (props) => {
  const [weatherData, setWeatherData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const params = useParams()
  const { id } = params

  const history = useHistory()
  useEffect(() => {
    getData(id)
  }, [id])

  async function getData(cityId) {
    setLoading(true)
    const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&appid=${API_KEY}`
      )
      const data = await res.json()
      setWeatherData(data.list)
      setLoading(false)
    } catch (err) {
      setErrorMessage(err.message)
    }
  }

  const handleClick = () => {
    history.goBack()
  }

  if (isLoading) {
    return (
      <div>
        <p>Please wait a moment, while getting data</p>
      </div>
    )
  }
  if (errorMessage) {
    return (
      <div>
        <p>{errorMessage}</p>
      </div>
    )
  }

  return (
    <div>
      <h1 className="badge badge-secondary" style={{ fontSize: 24 }}>
        5 DAY FORECAST
      </h1>
      <h3>{props.city}</h3>
      <div className="row d-flex justify-content-center">
        <AreaChart
          width={500}
          height={400}
          data={weatherData}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dt_txt" />
          <YAxis dataKey="main.temp" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="main.temp"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </div>
      <button onClick={handleClick}>Back</button>
    </div>
  )
}

export default DetailWeatherCard
