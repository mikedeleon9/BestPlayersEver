import React, { useContext } from "react";
import { PlayerContext } from "../Assets/PlayerContext";
import forwardIcon from "../Assets/Images/right-arrow.png";
import backIcon from "../Assets/Images/left-arrow.png";
import '../App.css';
import stats from "../Assets/stats";
import PersonalDetails from "../Components/Personal-Info";
import CareerStats from "../Components/Career-Stats";
import Excerpt from "../Components/Excerpt";
import YoutubeVideo from "../Components/Youtube-Video";
import CareerYear from "../Components/CareerYear";
import Sidebar from "../Components/Sidebar";

export default function PlayersPage() {
  const RANK_RANGES = {
    '25-21': {min: 21, max: 25},
    '20-16': { min: 16, max: 20 },
    '15-11': { min: 11, max: 15 },
    '10-6': { min: 6, max: 10 },
    '5-1': { min: 1, max: 5 },
  };

  const sortedPlayers = stats.sort((a, b) => a.rank - b.rank);
  const { currentIndex, setCurrentIndex } = useContext(PlayerContext);

  const currentPlayer = sortedPlayers[currentIndex];
  if (!currentPlayer) return null;

  const currentRankRange = Object.keys(RANK_RANGES).find(range => {
    const { min, max } = RANK_RANGES[range];
    return currentPlayer.rank >= min && currentPlayer.rank <= max;
  });

  if (!currentRankRange) return null;

  const { min, max } = RANK_RANGES[currentRankRange];

  const playersInRange = sortedPlayers.filter(player => player.rank >= min && player.rank <= max);
  const currentIndexInRange = playersInRange.findIndex(player => player.rank === currentPlayer.rank);

  function nextPlayer() {
    setCurrentIndex(prevIndex => {
      const nextIndexInRange = (currentIndexInRange - 1) % playersInRange.length;
      const nextPlayer = playersInRange[nextIndexInRange];
      if (nextPlayer) {
        return sortedPlayers.indexOf(nextPlayer);
      }
      return prevIndex;
    });
  }

  function prevPlayer() {
    setCurrentIndex(prevIndex => {
      const prevIndexInRange = (currentIndexInRange + 1);
      const prevPlayer = playersInRange[prevIndexInRange];
      if (prevPlayer) {
        return sortedPlayers.indexOf(prevPlayer);
      }
      return prevIndex;
    });
  }

  return (
    <div className="flex ">
      <Sidebar />
     
      <div className="w-full flex flex-col lg:flex-row ml-52">
        <main className="w-full flex flex-col justify-center">
        <PlayerContext.Provider value={{ nextPlayer, prevPlayer }}>
          <PersonalDetails
            details={currentPlayer.personalDetails}
            position={currentPlayer.position}
            accomplishments={currentPlayer.accomplishments}
            rank={currentPlayer.rank}
            
          />
          </PlayerContext.Provider>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="space-y-4">
              <CareerStats
                statistics={currentPlayer.CareerStats || {}}
                mainTeam={currentPlayer.personalDetails.mainTeam}
                position={currentPlayer.position}
                careerYear={currentPlayer.careerYear || {}}
              />
              <YoutubeVideo
                mainTeam={currentPlayer.personalDetails.mainTeam}
                youtubeUrl={currentPlayer.youtubeUrl}
              />
            </div>
            <div className="self-start space-y-4">
              <Excerpt
                mainTeam={currentPlayer.personalDetails.mainTeam}
                Excerpt={currentPlayer.Excerpt}
              />
              <CareerYear
                careerYear={currentPlayer.careerYear || {}}
                mainTeam={currentPlayer.personalDetails.mainTeam}
              />
            </div>
          </div>
        </main>
      </div>
    
    </div>
  );
}
