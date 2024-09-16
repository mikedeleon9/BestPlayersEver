import React from "react";
import "./components.css";
import { teamBackgroundColors, teamBorderColors } from "../Assets/teamDetails";
import RankBar from "./RankBar";
import SearchIcon from "../Assets/Images/Nav-icons/search.png"
import DRFlag from "../Assets/Images/DR-Flag.png"
import { PlayerProvider } from "../Assets/PlayerContext";

export default function Navbar() {
  return (
    <nav className="w-full flex flex-col sticky top-0 bg-backgroundColor z-10 px-6 border-b pt-4">
      <div className="flex gap-12">
          <div className="flex items-center gap-2 py-4">
          <img className="w-6 h-6" src={DRFlag} alt="DR Flag" />
        <h1 className="font-Inter font-extrabold text-lg  ">Best Players Ever</h1>
        </div> 
          <div className="w-1/4 flex items-center relative ">

        
            <input 
              className="bg-darkerGray placeholder:ml-4 w-full relative text-white border-2 border-blue-600 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-600" 
              placeholder="Search for a Player"
            />
            <img src={SearchIcon} alt="search icon" className="z-10 absolute w-6 h-6 right-2" />
          </div>
      </div>
      <PlayerProvider>
      <RankBar />
      </PlayerProvider>
    </nav>
  );
}