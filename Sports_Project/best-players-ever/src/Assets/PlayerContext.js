import React, { createContext, useState } from "react";

// Create the context
export const PlayerContext = createContext();

// Create the provider component
export const PlayerProvider = ({ children }) => {
  // Initialize the states for players and rank
  const [players, setPlayers] = useState([]);
  const [rank, setRank] = useState(0); // Initialize rank as needed, or remove if unused
  const [currentIndex, setCurrentIndex] = useState(0);

  // Provide the value that you need for context consumers
  return (
    <PlayerContext.Provider value={{ players, currentIndex, setCurrentIndex, rank, setPlayers }}>
      {children}
    </PlayerContext.Provider>
  );
};
