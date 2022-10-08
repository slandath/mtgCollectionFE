// Importing useState to monitor for changes.  Importing useEffect to trigger an action on render

import { useEffect, useState } from "react";

// Custom hooks must start with "use"
const useFetchCards= (url) => {
  const [cards, setCards] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      // Cannot use async with useEffect - have to use a promise.
      .then((res) => {
        if (!res.ok) {
          throw Error("Cannot find data from that resource");
        }
        return res.json();
      })
      .then((data) => {
        setCards(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
    // Empty array means it will only trigger on inital render.  Can set params in array to trigger when a state changes.
  }, []);

  return { cards, isPending, error };
};

export default useFetchCards;
