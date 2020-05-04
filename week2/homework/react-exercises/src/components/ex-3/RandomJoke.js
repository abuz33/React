import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './joke.css'

import Joke from './Joke'

const RandomJoke = () => {
  const [joke, setJoke] = useState({})
  const [err, setErr] = useState('')

  useEffect(() => {
    fetchJoke()
  }, [])

  const fetchJoke = async () => {
    try {
      const res = await axios.get(
        'https://official-joke-api.appspot.com/random_joke'
      )
      const data = res.data
      setJoke(data)
    } catch (error) {
      setErr(error.message)
    }
  }
  if (err) return <p>{err}</p>

  return (
    <div className="joke">
      {Object.keys(joke).length ? (
        <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
      ) : null}
    </div>
  )
}

export default RandomJoke
