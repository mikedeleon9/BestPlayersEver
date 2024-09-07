import React from "react";
import "./components.css";
import { teamBackgroundColors, teamBorderColors } from "../Assets/teamDetails";

export default function CareerStats({ statistics, mainTeam, position }) {
  const HittingStatsArray = { 
    AVG: statistics.avg, OBP: statistics.obp, SLG: statistics.slg, 
    OPS: statistics.ops, "OPS+": statistics.opsPlus, HR: statistics.hr,
    RBI: statistics.rbi, Runs: statistics.r, SB: statistics.sb 
  };

  const PitchingStatsArray = {
    Wins: statistics.w, Losses: statistics.l, Innings: statistics.ip,
    ERA: statistics.era, Strikeouts: statistics.k, WHIP: statistics.whip,
    "ERA+": statistics.eraPlus, Walks: statistics.bb, Shutouts: statistics.sho
  };

  const formatValue = (value) => {
    if (value === undefined) return "N/A";
    if (typeof value === "number") {
      return value.toString().startsWith("0.") ? value.toFixed(3).slice(1) : value.toString();
    }
    return value;
  };

  const backgroundColor = teamBackgroundColors[mainTeam];
  const bordercolor = teamBorderColors[mainTeam];

  const statsArray = position === "Pitcher" ? PitchingStatsArray : HittingStatsArray;

  return (
    <div className={`w-full p-4 ${backgroundColor} font-Inter rounded-3xl text-white`}>
      <h2 className="text-center font-bold text-xl mb-4">Career Stats</h2>
      <div className="grid grid-cols-3 gap-4">
        {Object.entries(statsArray).map(([key, value]) => (
          <div key={key} className="flex flex-col items-center">
            <p className="font-bold">{key}</p>
            <p className="font-extralight text-sm">{formatValue(value)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}