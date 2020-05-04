import React, { useState } from 'react'
import './friend.css'

import FriendProfile from './FriendProfile'
import Button from './Button'

const Friend = () => {
  const [err, setErr] = useState('')
  const [friend, setFriend] = useState({})

  async function getFriend() {
    try {
      const res = await fetch(
        'https://www.randomuser.me/api?results=1'
      ).then((res) => res.json())
      const data = await res.results[0]

      const { name, location, email, phone, picture } = data
      setFriend({ name, location, email, phone, picture })
      return { name, location, email, phone, picture }
    } catch (error) {
      setErr(error.message)
    }
  }

  return (
    <div className="container">
      <Button clickHandler={getFriend} />
      {err && <p>{err}</p>}
      {Object.keys(friend).length ? (
        <FriendProfile friend={friend} />
      ) : (
        <p>Loading some friends for you.</p>
      )}
    </div>
  )
}

export default Friend
