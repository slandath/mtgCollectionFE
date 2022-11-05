import { useState } from "react";
import "../styles.css";
import "./Scryfall.css";

const Scryfall = () => {
  const [card, setCard] = useState("");
  const cardData = [];

  const handleChange = (e) => {
    setCard(e.target.value);
  };

  const pingScryfall = (e) => {
    const Url = `https://api.scryfall.com/cards/search?q=${card}`;

    fetch(Url)
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        cardData.push(res);
        console.log(cardData[0].data[0].image_uris.small)
      });
      e.preventDefault();
  };

  return (
    <div className="scryfall-container">
      <h1 className="scryfall-header">Search for a card</h1>
      <form className="scryfall-form">
        <input
          className="scryfall-input"
          placeholder="Card Name"
          name="card"
          onChange={handleChange}
          value={card}
        />
        <button onClick={pingScryfall}>Submit</button>
      </form>
    </div>
  );
};

export default Scryfall;
