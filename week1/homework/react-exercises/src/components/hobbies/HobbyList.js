import React from 'react'

import Hobby from './Hobby'

function HobbyList() {
  const hobbies = [
    'Surfing',
    'Rock climbing',
    'Mountain biking',
    'Breakdancing',
  ]

  return (
    <div className="sports">
      <h1>Some Extreme Sports</h1>
      <ul>
        {hobbies.map((h) => {
          return <Hobby hobby={h} />
        })}
      </ul>
    </div>
  )
}

export default HobbyList
