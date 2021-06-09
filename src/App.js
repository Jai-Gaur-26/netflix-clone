/*below are the different rows corresponding to the different sections of clone webpage
<Row title="NETFLIX ORIGINALS" />
.
.
.
*/
import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Hey Jai Gaur! Let's build netflix clone front-end today</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      
    </div>
  );
}

export default App;
