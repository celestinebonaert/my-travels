import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Travels from './Travels';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
</header>
  <Travels
  Destination = "Madagascar"
  Country = "Majunga"
  photos = "https://images.salaun-holidays.com/(Image)-image-Madagascar-Italy-Baoab-le-long-de-la-route-rurale-au-jour-ensoille-86-fo_71593159-09032017.jpg"
  Distance = "10000"

  />

  <Travels
  Destination = "Belgique"
  Country = "Arlon"
  photos = "https://www.campus.uliege.be/upload/docs/image/jpeg/2017-08/vivre_a_arlon_1.jpg"
  Distance = "200"

  />

      </div>
    );
  }
}

export default App;
