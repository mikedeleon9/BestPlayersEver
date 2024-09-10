import React from "react";
import "./components.css";
import { teamBackgroundColors, teamBorderColors } from "../Assets/teamDetails";
import DRFlag from "../Assets/Images/DR-Flag.png"
import SearchIcon from "../Assets/Images/Nav-icons/search.png"

export default function Navbar() {
  return (
 
    <nav className="w-full py-3 flex fixed bg-backgroundColor z-10 justify-evenly ">
        
       <div className="flex items-center gap-2">
      <img className="w-6 h-6" src={DRFlag} alt="DR Flag" />
     <h1 className="font-Inter font-extrabold text-lg  ">Best Players Ever</h1>
    </div>
     
         
          <div className="w-3/4 flex justify-end items-center ">
          
            <input 
              className="bg-gray-700 placeholder:ml-4 relative w-full text-white border-none rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-600" 
              placeholder="Search for a Player"
             
            />
            <img src={SearchIcon} alt="search icon" className="z-10 absolute w-6 h-6 mr-4" />
          </div>
        
      
    </nav>
  
  );
}