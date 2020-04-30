import React from 'react'
import Weather from './components/index'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="text-center">
      <ToastContainer autoClose={3000} hideProgressBar />
      <h1>Weather App</h1>
      <Weather />
    </div>
  )
}

export default App
