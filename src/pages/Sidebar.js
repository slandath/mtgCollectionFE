export default function Sidebar() {
  let addCardClick = () => {  }
  let removeCardClick = () => {}

  return (
    <aside>
      <h1>This is the Sidebar</h1>
      <button onClick={addCardClick}>Button to Add Card</button>
      <button onClikc={removeCardClick}>Button to Remove Card</button>
    </aside>
  );
}
