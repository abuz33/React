import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './joke.css';

import Joke from './Joke';


const RandomJoke = () => {
    const [joke, setJoke] = useState({});

    useEffect( () => {
        axios.get('https://official-joke-api.appspot.com/random_joke').then(res => setJoke(res.data));
    }, [])

    return (
        <div className='joke'>
            <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
        </div>
    )
}

export default RandomJoke;