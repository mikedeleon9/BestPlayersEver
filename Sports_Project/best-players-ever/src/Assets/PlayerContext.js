import React, { createContext, useState } from "react";

// Create the context
export const PlayerContext = createContext();

// Create the provider component
export const PlayerProvider = ({ children }) => {
  // Initialize the state with the correct type (e.g., an array or object)
  const [players, setPlayers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Provide the value that you need for context consumers
  return (
    <PlayerContext.Provider value={{ players, currentIndex, setCurrentIndex }}>
      {children}
    </PlayerContext.Provider>
  );
};
