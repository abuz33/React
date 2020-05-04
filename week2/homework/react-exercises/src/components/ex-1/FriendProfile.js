import React from 'react'

const FriendProfile = ({ friend }) => {
  const name = friend.name.first + ' ' + friend.name.last
  return (
    <div className="profile">
      <img src={friend.picture.large} alt={name} />
      <div className="info">
        <ul>
          <li>
            {friend.name.title === 'Mr' ? 'His' : 'Her '} name is{' '}
            {friend.name.first} {friend.name.last}{' '}
          </li>
          <li>
            {friend.name.title === 'Mr' ? 'His' : 'Her '} address is{' '}
            {friend.location.street.name} {friend.location.street.number}{' '}
            {friend.location.city} {friend.location.country}
          </li>
          <li>
            {friend.name.title === 'Mr' ? 'His' : 'Her '} email-address is{' '}
            {friend.email}{' '}
          </li>
          <li>
            {friend.name.title === 'Mr' ? 'His' : 'Her '} phone number is{' '}
            {friend.phone}{' '}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FriendProfile
