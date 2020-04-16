import React from 'react';
import './App.css'
import Friend from './components/ex-1/Friend';
import DogGallery from './components/ex-2/DogGallery';
import RandomJoke from './components/ex-3/RandomJoke';

function App() {
  return (
    <div className="App">
      <Friend />
      <DogGallery />
      <RandomJoke />
    </div>
  );
}

export default App;
