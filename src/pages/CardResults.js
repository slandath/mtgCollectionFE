import { useState } from "react";
import mtgBack from "../images/mtgBack.jpg";
import Scryfall from "./Scryfall";
import cardData from "./Scryfall";
import onSubmit from "./Scryfall"
import "../css/CardResults.css";

export default function CardResults(props) {
  const [spell, setSpell] = useState(<img src={mtgBack} alt="" />);

  return (
    <>
    {spell}
    </>
  );
}
