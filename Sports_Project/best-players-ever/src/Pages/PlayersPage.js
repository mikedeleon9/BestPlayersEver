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

export default function PlayersPage() {

  const RANK_RANGES = {
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

  // Filter players within the current rank range
  const playersInRange = sortedPlayers.filter(player => player.rank >= min && player.rank <= max);

  // Find index of the current player in the filtered list
  const currentIndexInRange = playersInRange.findIndex(player => player.rank === currentPlayer.rank);

  function nextPlayer() {
    setCurrentIndex(prevIndex => {
      const nextIndexInRange = (currentIndexInRange - 1) % playersInRange.length;
      const nextPlayer = playersInRange[nextIndexInRange];
      if (nextPlayer) {
        return sortedPlayers.indexOf(nextPlayer); // Update global index
      }
      return prevIndex;
    });
  }

  function prevPlayer() {
    setCurrentIndex(prevIndex => {
      const prevIndexInRange = (currentIndexInRange + 1 ) ;
      const prevPlayer = playersInRange[prevIndexInRange];
      if (prevPlayer) {
        return sortedPlayers.indexOf(prevPlayer); // Update global index
      }
      return prevIndex;
    });
  }

  return (
    <div className="flex items-center gap-4">
      <button onClick={prevPlayer} className="p-2 bg-gray-700 rounded-full">
        <img className="w-10 h-10" src={backIcon} alt="Previous" />
      </button>
      <div className="w-full flex flex-col lg:flex-row">
        <main className="w-full flex flex-col justify-center">
          <PersonalDetails
            details={currentPlayer.personalDetails}
            position={currentPlayer.position}
            accomplishments={currentPlayer.accomplishments}
            rank={currentPlayer.rank}
          />
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
            <div className="self-start">
              <Excerpt
                mainTeam={currentPlayer.personalDetails.mainTeam}
                Excerpt={currentPlayer.Excerpt}
              />
            </div>
          </div>
        </main>
      </div>
      <button onClick={nextPlayer} className="p-2 bg-gray-700 rounded-full">
        <img className="w-10 h-10" src={forwardIcon} alt="Next" />
      </button>
    </div>
  );
}
