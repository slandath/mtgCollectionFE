import { useState } from "react";

export default function Collection() {
  let [cards, setCards] = useState([
    {
      name: "White Knight",
      set: "3ED",
      id: "ce573cee-40e0-4740-8b86-538ad8a16bce",
    },
    {
      name: "Lightning Bolt",
      set: "3ED",
      id: "cb9b9a9d-ae4c-4e04-bf9d-cae48f01292c",
    },
    {
      name: "Bad Moon",
      set: "3ED",
      id: "9cb767eb-2161-4068-be80-c3cf68945393",
    },
  ]);

  return (
    <article className="collection">
      {cards.map((card) => (
        <div className="card-preview" key={card.id}>
          <h3>{card.name}</h3>
          <p>{card.set}</p>
        </div>
      ))}
    </article>
  );
}
