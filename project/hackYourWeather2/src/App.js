import React, { useState } from 'react'
import Weather from './components/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import DetailWeatherCard from './components/DetailWeatherCard'

function App({ props }) {
  const [cityName, setCityName] = useState('')
  const callBack = (city) => {
    setCityName(city)
  }
  return (
    <Router>
      <div className="text-center mt-4">
        <h1>Weather App</h1>
        <Switch>
          <Route path="/" exact>
            <Weather parentCallback={callBack} />
          </Route>
          <Route path="/:id">
            <DetailWeatherCard city={cityName} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
