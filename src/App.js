import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Sidebar from "./pages/Sidebar";
import Content from "./pages/Content";
import Login from "./pages/Login";
import "./styles.css";

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
        path="/"
        element={
          <div className="container">
            <Header />
            <Navbar />
            <Sidebar />
            <Content />
            <Footer />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
