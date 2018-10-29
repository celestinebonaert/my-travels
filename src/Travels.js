import React from "react";

const Travels = props => (
  <figure>
    <img src={props.Photos} alt={props.Country} />
    <figcaption>
      <p>{props.Destination}</p>
      <p>{props.Country}</p>
      <p>{props.Distance}</p>
    </figcaption>
  </figure>
);

export default Travels;