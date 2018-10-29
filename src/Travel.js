import React from "react";
import Travels from "./Travels";
// src/Quotes.js
const travel = [
  {
    Destination: "Belgique",
    Country: "Arlon",
    photos: "https://images.salaun-holidays.com/(Image)-image-Madagascar-Italy-Baoab-le-long-de-la-route-rurale-au-jour-ensoille-86-fo_71593159-09032017.jpg",
    Distance: "10000"
  },
  {
    Destination: "Allemagne",
    Country: "Berlin",
    photos: "https://images.salaun-holidays.com/(Image)-image-Madagascar-Italy-Baoab-le-long-de-la-route-rurale-au-jour-ensoille-86-fo_71593159-09032017.jpg",
    Distance: "10000"
  },
  {
    Destination : "Birmanie",
    Country : "Yangon",
    photos : "https://images.salaun-holidays.com/(Image)-image-Madagascar-Italy-Baoab-le-long-de-la-route-rurale-au-jour-ensoille-86-fo_71593159-09032017.jpg",
    Distance : "10000"
  },
  {
    Destination : "Angleterre",
    Country : "Londres",
    photos : "https://images.salaun-holidays.com/(Image)-image-Madagascar-Italy-Baoab-le-long-de-la-route-rurale-au-jour-ensoille-86-fo_71593159-09032017.jpg",
    Distance : "10000"
  },
  {
    Destination : "Mada",
    Country : "Majunga",
    photos : "https://images.salaun-holidays.com/(Image)-image-Madagascar-Italy-Baoab-le-long-de-la-route-rurale-au-jour-ensoille-86-fo_71593159-09032017.jpg",
    Distance : "10000"
  }

];

const Travel = () => (
  <div>
    {travel.map(travelsItem => (
      <Travels Destination={travelsItem.Destination} Country={travelsItem.Country} Distance={travelsItem.Distance} Photos={travelsItem.photos} />
    ))}
  </div>
);

export default Travel;
