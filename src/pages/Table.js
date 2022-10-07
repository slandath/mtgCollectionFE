// Looping through the data called by the fetch request in the Content function and creating a table

const Table = (props) => {
  const cards = props.cards;
  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Qty</th>
          <th>Card Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cards.map((card) => (
          <tr key={card.id}>
            <td>{card.quantity}</td>
            <td>{card.name}</td>
            <td>{card.usd}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
