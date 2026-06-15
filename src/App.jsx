import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import "./style.css";
import Register from "./components/auth/Register.jsx";
import Login from "./components/auth/Login.jsx"
import Lander from "./components/pages/LandingPage.jsx"
import ChatPage from "./components/pages/channels.jsx";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Lander/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/chat" element={<ChatPage/>}/>
      </Routes>
    </>
  );
}

export default App;
