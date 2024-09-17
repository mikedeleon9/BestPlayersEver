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
  const { currentIndex, setCurrentIndex } = useContext(PlayerContext);

 

  function prevPlayer() {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? stats.length - 1 : prevIndex - 1));
  }

  function nextPlayer() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stats.length);
  }

  return (
    <div className="flex items-center gap-4">
      <button onClick={prevPlayer} className="p-2 bg-gray-700 rounded-full">
        <img className="w-10 h-10" src={backIcon} alt="Previous" />
      </button>
      <div className="w-full flex flex-col lg:flex-row">
        <main className="w-full flex flex-col justify-center">
          <PersonalDetails
            details={stats[currentIndex].personalDetails}
            position={stats[currentIndex].position}
            accomplishments={stats[currentIndex].accomplishments}
            rank={stats[currentIndex].rank}
          />
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="space-y-4">
              <CareerStats
                statistics={stats[currentIndex].CareerStats || {}}
                mainTeam={stats[currentIndex].personalDetails.mainTeam}
                position={stats[currentIndex].position}
                careerYear={stats[currentIndex].careerYear || {}}
              />
              <YoutubeVideo
                mainTeam={stats[currentIndex].personalDetails.mainTeam}
                youtubeUrl={stats[currentIndex].youtubeUrl}
              />
            </div>
            <div className="self-start">
              <Excerpt
                mainTeam={stats[currentIndex].personalDetails.mainTeam}
                Excerpt={stats[currentIndex].Excerpt}
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
