import React, { useState } from "react";
import forwardIcon from "./Assets/Images/right-arrow.png"
import backIcon from "./Assets/Images/left-arrow.png"
import './App.css';
import stats from "./Assets/stats";
import PersonalDetails from  "./Components/Personal-Info";
import CareerStats from "./Components/Career-Stats";
import Excerpt from "./Components/Excerpt";
import YoutubeVideo from "./Components/Youtube-Video";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function prevPlayer(){
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? stats.length - 1 : prevIndex - 1));
  }
 
  function nextPlayer() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stats.length);
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Best Players Ever</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/4">
            <Sidebar mainTeam={stats[currentIndex].personalDetails.mainTeam} />
          </aside>
          <main className="lg:w-3/4">
            <div className="flex items-center justify-between mb-4">
              <button onClick={prevPlayer} className="p-2 bg-gray-700 rounded-full">
                <img className="w-6 h-6" src={backIcon} alt="Previous" />
              </button>
              <button onClick={nextPlayer} className="p-2 bg-gray-700 rounded-full">
                <img className="w-6 h-6" src={forwardIcon} alt="Next" />
              </button>
            </div>
            <PersonalDetails 
              details={stats[currentIndex].personalDetails} 
              position={stats[currentIndex].position}
              accomplishments={stats[currentIndex].accomplishments}
            />
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="space-y-8">
                <CareerStats
                  statistics={stats[currentIndex].CareerStats}
                  mainTeam={stats[currentIndex].personalDetails.mainTeam}
                  position={stats[currentIndex].position}
                />
                <YoutubeVideo 
                  mainTeam={stats[currentIndex].personalDetails.mainTeam}
                  youtubeUrl={stats[currentIndex].youtubeUrl}
                />
              </div>
              <Excerpt
                mainTeam={stats[currentIndex].personalDetails.mainTeam}
                Excerpt={stats[currentIndex].Excerpt}
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;