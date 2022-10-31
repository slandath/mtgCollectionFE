import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Scryfall from "./pages/Scryfall";
// import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
// import Sidebar from "./pages/Sidebar";
// import Content from "./pages/Content";
import Login from "./pages/Login";
import Account from "./pages/Account";

function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <div className="login">
            <Login />
          </div>
        }
      />
      <Route
        path="/new"
        element={
          <div className="login">
            <Account />
          </div>
        }
      />
      <Route
        path="/"
        element={
          <div className="container">
            <Header />
            <Scryfall />
            <Footer />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
