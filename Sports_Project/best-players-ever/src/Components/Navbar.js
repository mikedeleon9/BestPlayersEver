import React from "react";
import "./components.css";
import { teamBackgroundColors, teamBorderColors } from "../Assets/teamDetails";

export default function Navbar() {
  return (
    <nav className=" py-3">
      <div className="container  px-4">
        <div className="flex  items-center justify-between ">
        <h1 className="text-lg font-bold text-center ">Best Players Ever</h1>
          <div className="lg:w-3/4 mr-40">
          
            <input 
              className="w-full bg-gray-700  text-white border-none rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-600" 
              placeholder="Search for a Player"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}