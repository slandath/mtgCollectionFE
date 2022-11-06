import { useState } from "react";
import CardResults from "./CardResults";
import mtgBack from "../images/mtgBack.jpg";
import "../styles.css";
import "../css/Scryfall.css";

export default function Scryfall() {
  // Managing State
  const [card, setCard] = useState("");
  const handleChange = (e) => {
    setCard(e.target.value);
  };

  // Empty array to receive Scryfall search results
  const cardData = [];

  // Button click function.  Pings the Scryfall endpoint, returns the data as JSON, then pushes the data to cardData.
  const onSubmit = (e) => {
    fetch(`https://api.scryfall.com/cards/search?q=${card}`)
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        cardData.push(res.data);
        console.log(cardData);
      });
    e.preventDefault();
  };

  return (
    <div className="scryfall-container">
      <h2 className="scryfall-header">Search for a card</h2>
      <form className="scryfall-form">
        <input
          className="scryfall-input"
          placeholder="Card Name"
          name="card"
          onChange={handleChange}
          value={card}
        />
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
}
