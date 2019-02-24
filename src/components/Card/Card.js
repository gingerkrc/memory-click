import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpeg", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default Card;