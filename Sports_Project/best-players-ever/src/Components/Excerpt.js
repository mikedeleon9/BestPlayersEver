import React from "react";
import "./components.css";
import { teamBackgroundColors, teamBorderColors } from "../Assets/teamDetails";

export default function Excerpt({ mainTeam, Excerpt }) {
  const backgroundColor = teamBackgroundColors[mainTeam];
  const bordercolor = teamBorderColors[mainTeam];

  return (
    <div className={`w-full p-6 ${backgroundColor} rounded-3xl text-white  `}>
      <h2 className="font-bold text-xl mb-4">Player Excerpt</h2>
      <p className="text-sm leading-relaxed">{Excerpt}</p>
    </div>
  );
}