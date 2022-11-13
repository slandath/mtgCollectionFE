import React, { useState } from "react";
import axios from "axios";
import "../styles.css";
import "../css/Scryfall.css";
import mtgBack from "../images/mtgBack.jpg";

export default function Scryfall() {

/* Managing State

card is the contents of the form input
spell is the img divs created by the map function

*/
  const [card, setCard] = useState("");
  const [spell, setSpell] = useState(<img src={mtgBack} alt="" />);

  const handleChange = (e) => {
    setCard(e.target.value);
  };

  // Array to hold JSON objects created from Scryfall Results
  let sfCards = [];

  const onSubmit = async (e) => {
    sfCards = [];
    e.preventDefault();
    let scryData = await axios
      .get(`${process.env.REACT_APP_SFURL}/cards/search?q=${card}`)
      .then((response) => response.data);
/* Map Function 

Loops through scryfall results and creates JSON objects to be posted into our DB

*/
    let scryfallRes = scryData.data.map((card, index) => {
      let cardBody = {
        scry_id: card.id,
        name: card.name,
        price: card.prices.usd,
        quantity: 1,
      };
      sfCards.push(cardBody);

      return [
        <img
          src={card.image_uris.normal}
          alt="my image"
          id={index}
          className="card-body"
          key={index}
          // onClick={addDB}
        />,
      ];
    });

// Replacing default img with results from map function    
    setSpell(scryfallRes);
  };

  // const addDB = async (e) => {
  //   e.preventDefault();
  //   let myUrl = `${process.env.REACT_APP_APIURL}/api/v1/account/cards`;
  //   let body = sfCards[e.target.id];
  //   let headers = {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   let card2MyDB = await axios
  //     .post(myUrl, body, headers)
  //     .then((response) => response);
  //   console.log(card2MyDB.status);
  // };

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
      {spell}
    </div>
  );
}
