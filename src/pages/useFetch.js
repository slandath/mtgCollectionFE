// Importing useState to monitor for changes.  Importing useEffect to trigger an action on render

import { useEffect, useState } from "react";

// Custom hooks must start with "use"
const useFetch = (url) => {
  // Created an array with an initial state of null
  const [cards, setCards] = useState(null);
  // Displays waiting message when fetching from server
  const [isPending, setIsPending] = useState(true);
  // Error handling
  const [error, setError] = useState(null);
  // On first render, it is making a fetch request to the specified endpoint
  useEffect(() => {
    fetch(url)
      // Cannot use async - have to use a promise.  Passes the json into a JS object and returns the value.
      .then((res) => {
        if (!res.ok) {
          throw Error("Cannot find data from that resource");
        }
        return res.json();
      })
      // Fires after JS object is created to get the json data and updates state
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

export default useFetch;
