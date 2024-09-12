import React, { useState } from "react";
import PlayersPage from "./Pages/PlayersPage";
import HomePage from "./Pages/HomePage";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/PlayersPage" element={<PlayersPage />} />
      </Routes>
    </Router>
  );
}

export default App;