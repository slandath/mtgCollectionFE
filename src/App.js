import Navbar from "./pages/Navbar";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Sidebar from "./pages/Sidebar";
import Content from "./pages/Content"

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
