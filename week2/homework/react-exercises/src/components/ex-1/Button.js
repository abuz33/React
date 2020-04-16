import React from 'react';

const Button = ({ clickHandler }) => {
    return (
        <>
            <button onClick = { clickHandler } >Get a friend</button>
        </>
    )
}

export default Button;