import React, { useState } from "react";
import PlayersPage from "./Pages/PlayersPage";
import HomePage from "./Pages/HomePage";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Assets/Layouts/MainLayout";


function App() {
  
  return (
   
    
      <Router>
        <MainLayout >
          
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/PlayersPage" element={<PlayersPage />} />
        </Routes>
        </MainLayout>
      </Router>

    
    
  );
}

export default App;