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
        <div className="card-back">
          <h2>{props.front.name}</h2>
          <p>Type: {props.front.type}</p>
          <p>{props.front.description}</p>
          <p>HP: {props.front.hp}</p>
        </div>
        <div className="card-front">
          <h2>Guess That Pokémon!</h2>
          <img src={props.back.image} alt={props.front.name} />
          <p>{props.back.power}</p>
        </div>
      </div>
     
    </div>
  );
}
