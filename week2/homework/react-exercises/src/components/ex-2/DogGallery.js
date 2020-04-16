import React, { useState } from 'react';
import axios from 'axios';
import './dogGallery.css';

import Button from './Button';
import DogPhoto from './DogPhoto';

const DogGallery = () => {
    const [dogPhoto, setDogPhoto] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getDogPhoto = async () => {
        setIsLoading(false);
        const data = await axios.get('https://dog.ceo/api/breeds/image/random').then(res => res.data);

        setDogPhoto([...dogPhoto, data.message]);
    }
    const Dogphotos = dogPhoto.map((dogPhoto, i) => <DogPhoto key={i} imgURL={dogPhoto} />);
    return (
        <div>
            <Button clickHandler={getDogPhoto}></Button>
            <div className='dogPhotos'>
                {isLoading ? <p>You poor thing without a dog. Get you dog by clicking the button above.</p> : Dogphotos}        
            </div>
        </div>
    )
};

export default DogGallery;