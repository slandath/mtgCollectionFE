import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import "./styles.css";
import App from "./App";

// import Navbar from "./pages/Navbar";
// import Header from "./pages/Header";
// import Footer from "./pages/Footer";
// import Sidebar from "./pages/Sidebar";
// import Content from "./pages/Content";

// function App() {
//   return (
//     <div className="container">
//       <Header />
//       <Navbar />
//       <Sidebar />
//       <Content />
//       <Footer />
//     </div>
//   );
// }

// export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
