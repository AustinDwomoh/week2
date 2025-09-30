import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  const cardData = [
    {
      front: {
        name: "Pikachu",
        type: "Electric",
        description:
          "A Mouse Pokémon. It keeps its tail raised to monitor surroundings.",
        hp: 60,
      },
      back: {
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        power: "Thunderbolt",
      },
    },
    {
      front: {
        name: "Charmander",
        type: "Fire",
        description:
          "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.",
        hp: 50,
      },
      back: {
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        power: "Flamethrower",
      },
    },
    {
      front: {
        name: "Squirtle",
        type: "Water",
        description:
          "After birth, its back swells and hardens into a shell. It powerfully sprays foam from its mouth.",
        hp: 55,
      },
      back: {
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        power: "Water Gun",
      },
    },
  ];

  const [index, setIndex] = useState(0);

  const changeCard = () => {
    setIndex((prev) => (prev === cardData.length - 1 ? 0 : prev + 1));// Cycle through cards tene
  };

  return (
    <div className="card-set">
      <h1>Pokédex</h1>
      <div className="card-set-description">
        <p>
          Welcome to the Pokédex! Click on the card to flip and see more details
          about each Pokémon. Use the "Next" button to explore different
          Pokémon cards.
        </p>
      </div>
      <div>
        <Card
          props={cardData[index]}
          button={<button onClick={changeCard}>Next ({index + 1}/{cardData.length})</button>}
        />
      </div>
    </div>
  );
}

export default App;
