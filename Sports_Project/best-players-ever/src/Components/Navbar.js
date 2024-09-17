import React from "react";
import "./components.css";
import { teamBackgroundColors, teamBorderColors } from "../Assets/teamDetails";
import RankBar from "./RankBar";
import SearchIcon from "../Assets/Images/Nav-icons/search.png"
import DRFlag from "../Assets/Images/DR-Flag.png"
import { PlayerProvider } from "../Assets/PlayerContext";
import { Link } from "react-router-dom";

<Link to ="/">Home</Link>

export default function Navbar() {
  return (
    <nav className="w-full flex items-center sticky top-0 bg-backgroundColor z-10 border-b border-darkerGray pt-2 px-4 shadow-md">
      <div className="flex w-1/4 justify-between mb-2">
      <Link to ="/"> 
        <div className="flex items-center gap-2 py-4 cursor-pointer">
          <img className="w-6 h-6" src={DRFlag} alt="DR Flag" />
        <h1 className="font-Inter font-extrabold text-xl  ">Best Players Ever</h1>
        </div> 
      </Link>
          
      </div>
<div className="flex items-center w-full">
      
      <PlayerProvider>
      <RankBar />
      </PlayerProvider>

      <div className="w-1/3 flex items-center relative">

        
            <input 
              className="bg-backgroundColor placeholder:text-sm placeholder:ml-4 w-full relative text-white border border-blue-600 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-600" 
              placeholder="Search for a Player"
            />
            <img src={SearchIcon} alt="search icon" className="z-10 absolute w-6 h-6 right-2" />
          </div>

          </div>
    </nav>
  );
}