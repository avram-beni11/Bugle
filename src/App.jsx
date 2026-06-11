import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import "./style.css";
import Register from "./components/auth/Register.jsx";
import Lander from "./components/pages/LandingPage.jsx"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Lander/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
