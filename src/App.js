import React from 'react';
import './App.css';
import Row from './Row';

function App() {
  return (
    <div className="App">
      <h1>Hey Jai Gaur! Let's build netflix clone front-end today</h1>
      //below are the different rows corresponding to the different sections of clone webpage
      <Row title="NETFLIX ORIGINALS" />
      <Row title="Trending Now" />
      
    </div>
  );
}

export default App;
