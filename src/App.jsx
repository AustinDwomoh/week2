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
    {
      front: {
        name: "Bulbasaur",
        type: "Grass/Poison",
        description:
          "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
        hp: 45,
      },
      back: {
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        power: "Vine Whip",
      },
    },
    {
      front: {
        name: "Jigglypuff",
        type: "Normal",
        description:
          "When it sings a lullaby, it puts the whole room to sleep. Its soft, balloon-like body inflates and deflates.",
        hp: 115,
      },
      back: {
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
        power: "Sing",
      },
    },
    {
      front: {
        name: "Eevee",
        type: "Normal",
        description:
          "Its genetic code is unstable, so it could evolve in a variety of ways. It adapts to its surroundings.",
        hp: 55,
      },
      back: {
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
        power: "Quick Attack",
      },
    },
    {
      front: {
        name: "Meowth",
        type: "Normal",
        description:
          "A Pokémon that loves shiny coins. It collects them and can carry a coin on its head.",
        hp: 40,
      },
      back: {
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
        power: "Pay Day",
      },
    },
    {
      front: {
        name: "Pidgey",
        type: "Normal/Flying",
        description:
          "A common, small bird Pokémon that is docile and easily tamed. It flutters around looking for food.",
        hp: 40,
      },
      back: {
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
        power: "Gust",
      },
    },
    {
      front: {
        name: "Caterpie",
        type: "Bug",
        description:
          "Its short feet are tipped with suction pads that enable it to move around on walls and ceilings.",
        hp: 45,
      },
      back: {
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
        power: "Tackle",
      },
    },
    {
      front: {
        name: "Rattata",
        type: "Normal",
        description:
          "Bites anything when it attacks. Small and very quick, it is a common sight in grasslands.",
        hp: 30,
      },
      back: {
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
        power: "Hyper Fang",
      },
    },
  ];

  const [index, setIndex] = useState(0);
  const [numStreak, setNumStreak] = useState(0);
  const [numGuesses, setNumGuesses] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");

  const nextCard = () => {
    setIndex((prev) => (prev === cardData.length - 1 ? 0 : prev + 1));
  };
  const prevCard = () => {
    setIndex((prev) => (prev === 0 ? cardData.length - 1 : prev - 1));
  };

  const checkGuess = () => {
    setNumGuesses(numGuesses + 1);
    if (
      currentGuess.toLowerCase() === cardData[index].front.name.toLowerCase()
    ) {
      setNumStreak(numStreak + 1);
      document.getElementById("input-box").style.borderColor = "green";
      if (numStreak + 1 > longestStreak) {
        setLongestStreak(numStreak + 1);
      }
    } else {
      setNumStreak(0);
      document.getElementById("input-box").style.borderColor = "red";
    }
    setCurrentGuess("");
  };
  const next = <button onClick={nextCard}>Next </button>;
  const prev = <button onClick={prevCard}>Previous </button>;

  return (
    <div className="card-set">
      <h1>Pokédex</h1>
      <div className="card-set-description">
        <p>
          Welcome to the Pokédex! Click on the card to flip and see more details
          about each Pokémon. Use the "Next" button to explore different Pokémon
          cards.
        </p>
      </div>
      <div className="card-area">
        <div className="card-column">
          <Card props={cardData[index]} />
          <input
            className="guess-input"
            id="input-box"
            type="text"
            value={currentGuess}
            onChange={(e) => setCurrentGuess(e.target.value)}
            placeholder="Enter"
            style={{ margin: "20px 20px 0 20px" }}
          />
          <div className="card-actions" style={{ marginBottom: 20 }}>
            <button onClick={checkGuess}>Submit</button>
          </div>

          <div className="controls">
            <div className="stats">
              <p>Number of Cards: {cardData.length}</p>
              <p>Number of Guesses: {numGuesses}</p>
              <p>Current Streak: {numStreak}</p>
              <p>Longest Streak: {longestStreak}</p>
            </div>
            <div className="card-actions">
              <button onClick={prevCard}>Previous</button>
              <button onClick={nextCard}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
