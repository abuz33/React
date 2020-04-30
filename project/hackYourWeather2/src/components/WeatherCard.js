import React from 'react'

const WeatherCard = ({
  city,

  onClick,
}) => {
  return (
    <div className="row d-flex justify-content-center ">
      <div className="card m-1" style={{ width: '30rem' }}>
        <div className="card-body border border-dark text-left">
          <button
            onClick={() => onClick(city.id)}
            type="button"
            className="btn btn-danger btn-circle position-absolute"
            style={{
              width: 40,
              height: 40,
              padding: '6px 0px',
              borderRadius: 25,
              textAlignLast: 'center',
              fontSize: 20,
              lineHeight: '1.42857',
              top: 20,
              right: 20,
            }}
          >
            X
          </button>
          <h1 className="card-title">
            {city.name}, {city.sys.country}
          </h1>
          <div className="card-subtitle mb-2 text-muted ">
            <h3>{city.weather[0].main}</h3>
            <p> {city.weather[0].description} </p>
          </div>
          <div className="card-text">
            <p>Min Temp: {(Math.floor(city.main.temp_min - 273) * 10) / 10}</p>
            <p>Min Temp: {(Math.floor(city.main.temp_max - 273) * 10) / 10}</p>
            <p>
              Location: {city.coord.lon}, {city.coord.lat}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
