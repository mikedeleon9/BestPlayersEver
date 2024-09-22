import React from "react";
import "./components.css";
import { teamBackgroundColors } from "../Assets/teamDetails";

export default function Excerpt({ mainTeam, Excerpt }) {
  const backgroundColor = teamBackgroundColors[mainTeam];


  return (
    <div className={` p-6 ${backgroundColor} rounded-xl text-white `}>
      <h2 className="font-bold text-xl mb-4">Player Excerpt</h2>
     
        <p className="text-sm leading-relaxed ">{Excerpt}</p>
     
    </div>
  );
}