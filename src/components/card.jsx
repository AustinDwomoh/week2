import { useState } from "react";
export default function Card({ props, button }) {
  const [flipped, setFlipped] = useState(false);
  const handleFlip = () => {
    setFlipped(!flipped);
  };
  return (
    <div className="card">
      <div
        className={`card-inner ${flipped ? "flipped" : ""}`}
        onClick={handleFlip}
      >
        <div className="card-front">
          <h2>{props.front.name}</h2>
          <p>Type: {props.front.type}</p>
          <p>{props.front.description}</p>
          <p>HP: {props.front.hp}</p>
        </div>
        <div className="card-back">
          <img src={props.back.image} alt={props.front.name} />
          <h2>{props.back.power}</h2>
        </div>
      </div>
      <div className="card-actions">{button}</div>
    </div>
  );
}
