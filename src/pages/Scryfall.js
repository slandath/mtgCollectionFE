import React, { useState } from "react";
import axios from "axios";
import "../styles.css";
import "../css/Scryfall.css";
import mtgBack from "../images/mtgBack.jpg";
import { useNavigate } from "react-router-dom";

export default function Scryfall() {
  const [card, setCard] = useState("");
  const [result, setResult] = useState(
    <div className="card-results-container">
      <h2>Search for a Card</h2>
      <img src={mtgBack} alt="" />
    </div>
  );
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCard(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let scryData = await axios
      .get(`${process.env.REACT_APP_SFURL}/cards/named?exact=${card}`)
      .then((response) => response.data);
    setResult(
      <div className="card-results-container">
        <h2>Card Found!</h2>
        <img
          src={scryData.image_uris.normal}
          alt=""
          onClick={cardClickHandler}
        />
      </div>
    );
  };

  const cardClickHandler = (e) => {
    e.preventDefault();
    navigate("/versions");
  };

  return (
    <div className="scryfall-form-container">
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
      {result}
    </div>
  );
}
