import React from "react";
import "./components.css";
import { teamBackgroundColors, teamBorderColors } from "../Assets/teamDetails";

export default function Navbar() {
  return (
    <nav className=" py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center ">
          
          <div className="lg:w-3/4">
            <input 
              className="w-full bg-gray-700 text-white border-none rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-600" 
              placeholder="Search for a Player"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}