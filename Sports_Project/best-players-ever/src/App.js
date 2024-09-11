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
    <div className="min-h-screen text-white flex">
        <aside className="sticky  ">

            <Sidebar mainTeam={stats[currentIndex].personalDetails.mainTeam} />
          </aside>
          <div className="w-1/2 ml-8" >
       <Navbar />
      
      
        
        <div className="w-full flex flex-col lg:flex-row gap-4 ">
        
          <main className="w-full flex flex-col  justify-center " >
        
            <PersonalDetails 
              details={stats[currentIndex].personalDetails} 
              position={stats[currentIndex].position}
              accomplishments={stats[currentIndex].accomplishments}
            />
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="space-y-4 flex flex-col">
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
              

<div className="flex items-center">
              <button onClick={prevPlayer} className="p-2 bg-gray-700 rounded-full">
                <img className="w-6 h-6" src={backIcon} alt="Previous" />
              </button>
              <button onClick={nextPlayer} className="p-2 bg-gray-700 rounded-full">
                <img className="w-6 h-6" src={forwardIcon} alt="Next" />
              </button>
            </div>
            </div>
          </main>
        </div>
      
      </div>
    </div>
  );
}

export default App;