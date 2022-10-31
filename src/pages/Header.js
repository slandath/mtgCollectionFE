import "../styles.css";
import "./Header.css";

export default function Header() {
  let title = "Magic: the Gathering Collection App"
  return (
    <header>
      <h1 className="header-h1">{ title }</h1>
    </header>
  );
}
