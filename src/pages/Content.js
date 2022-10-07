// Using json-server to mock data.  To launch, open new terminal instance.  Use command "npx json-server --watch (the location of the json file) --(not default port 3000)".  Ex. "npx json-server --watch data/db.json --port 8000"

import useFetch from "./useFetch"
import Table from "./Table";

const Content= () => {
  const { cards, isPending, error } = useFetch("http://localhost:3000/api/v1/cards");

  // Passing cards into Table component using props. First conditional displays error.  Second conditional displays loading message while data is fetching.  Third Conditional prevents null error.
  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {cards && <Table cards={cards} />}
    </div>
  );
}

export default Content;