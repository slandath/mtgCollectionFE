import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Scryfall from "./pages/Scryfall";
import CardResults from "./pages/CardResults";
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
            <Header />
            <Login />
            <Footer />
          </div>
        }
      />
      <Route
        path="/new"
        element={
          <div className="account">
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
            <CardResults />
            <Footer />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
