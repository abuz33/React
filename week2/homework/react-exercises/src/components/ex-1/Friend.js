import React, { useState } from 'react';
import axios from 'axios';
import './friend.css';

import FriendProfile from './FriendProfile';
import Button from './Button';





const Friend = () => {
    const [err, setErr] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [friend, setFriend] = useState({
        name:{
                title: "Mr",
                first: "Lance",
                last: "Boyd"
            },
        location: {
                    street: {
                        number: 67,
                        name: "George Street"
                        },
                    city: "Bangor",
                    "country": "United Kingdom",
                    },
        email: "lance.boyd@example.com",
        phone: "019467 54023",
        picture: {
            "large": "https://randomuser.me/api/portraits/med/men/40.jpg"
        }
    });
    

    

    async function getFriend()  {
        setIsLoading(false);

        const data = await axios.get("https://www.randomuser.me/api?results=1").then(res => res.data.results[0]);
        const { name, location, email, phone, picture } = data;
        setFriend({ name, location, email, phone, picture });
        console.log(data)
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