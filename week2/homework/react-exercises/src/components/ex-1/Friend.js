import React, { useState } from 'react';
import axios from 'axios';
import './friend.css';

import FriendProfile from './FriendProfile';
import Button from './Button';





const Friend = () => {
    const [err, setErr] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [friend, setFriend] = useState(null);
    

    

    async function getFriend()  {
        setIsLoading(true);

        fetch("https://www.randomuser.me/api?results=1")
            .then(res => res.json())
            .then(data => console.log(data.results[0]))
            .finally(() => setIsLoading(false));
        // const { name, location, email, phone, picture } = data;
        // setFriend({ name, location, email, phone, picture });
        // console.log(data)
        return data;

    };

    return (
        <div>

            <Button clickHandler={getFriend} />
            {err && <p>{err}</p> }
            {isLoading ?  <p>Lodaing some friends for you.</p> : <FriendProfile friend={friend} />}
    
        </div>
    );
};

export default Friend;