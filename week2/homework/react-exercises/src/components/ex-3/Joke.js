import React from 'react';

const Joke = ({setup, punchline}) => {
    return (
        <div>
            <p>Quetion: {setup}</p>
            <p>Answer: {punchline}</p>
        </div>
    )
}

export default Joke;