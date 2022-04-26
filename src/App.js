import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import "./styles/style.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import "./styles/style.scss"

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} exact/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
