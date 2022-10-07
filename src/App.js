import Header from "./pages/Header";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Sidebar from "./pages/Sidebar";
import Content from "./pages/Content";
import "./styles.css";

// function Header () {
//   let title = "This is some heading text";
//   return (
//     <h1>{title}</h1>
//   )
// };

function App() {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
