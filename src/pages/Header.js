import React from "react"
import "../styles.css";
import "../css/Header.css";

export default function Header() {
  let title = "My MTG Collection"
  return (
    <header>
      <h1>{ title }</h1>
    </header>
  );
}
