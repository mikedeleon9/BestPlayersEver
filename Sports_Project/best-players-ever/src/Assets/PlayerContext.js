import React, { createContext, useState } from "react";

export const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRankClick = (startIndex) => {
    setCurrentIndex(startIndex);
  };

  return (
    <PlayerContext.Provider value={{ currentIndex, setCurrentIndex, handleRankClick }}>
      {children}
    </PlayerContext.Provider>
  );
}
