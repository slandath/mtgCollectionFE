export default function Sidebar() {
  const updatePriceClick = () => {
    fetch("http://localhost:3000/api/v1/prices")
    setTimeout(() => {
      window.location.reload(true);
    }, 1500);
    
  };

  return (
    <aside>
      <h1>This is the Sidebar</h1>
      <button>Button to Add Card</button>
      <button>Button to Remove Card</button>
      <button onClick={() => updatePriceClick()}>Update Card Prices</button>
    </aside>
  );
}
