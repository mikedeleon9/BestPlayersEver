import React, { useState } from "react";
import forwardIcon from "../Assets/Images/right-arrow.png"
import backIcon from "../Assets/Images/left-arrow.png"
import '../App.css';
import stats from "../Assets/stats";
import PersonalDetails from  "../Components/Personal-Info";
import CareerStats from "../Components/Career-Stats";
import Excerpt from "../Components/Excerpt";
import YoutubeVideo from "../Components/Youtube-Video";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function PlayersPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function prevPlayer(){
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? stats.length - 1 : prevIndex - 1));
  }
 
  function nextPlayer() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stats.length);
  }

  return (
    <div className="min-h-screen text-white flex ml-3">
            <aside className="sticky ">
                <Sidebar mainTeam={stats[currentIndex].personalDetails.mainTeam} />
            </aside>

        <div className="w-3/5 ml-6" >

            <Navbar />

        <div className="w-full flex flex-col lg:flex-row ">
            <main className="w-full flex flex-col  justify-center " >    

            <PersonalDetails 
              details={stats[currentIndex].personalDetails} 
              position={stats[currentIndex].position}
              accomplishments={stats[currentIndex].accomplishments}
            />

        <div className="grid md:grid-cols-2 gap-4 mt-4 ">
            <div className="space-y-4 ">
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

              
        <div className="self-start">
                <Excerpt
                  mainTeam={stats[currentIndex].personalDetails.mainTeam}
                  Excerpt={stats[currentIndex].Excerpt}
                />
         </div>
              

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

