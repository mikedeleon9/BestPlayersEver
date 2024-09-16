import {React, useState} from "react";
import "./components.css";
import { teamBackgroundColors,  } from "../Assets/teamDetails";

export default function CareerStats({ statistics, mainTeam, position, careerYear }) {

const [isButtonPressed, pressButton] = useState(false);
  
function triggerStats(){
  if(!isButtonPressed){
  pressButton(true)
  }
  else{
    pressButton(false)
  }
}

  const HittingStatsArray = { 
    AVG: statistics.avg, OBP: statistics.obp, SLG: statistics.slg, 
    OPS: statistics.ops, "OPS+": statistics.opsPlus, 
    RBI: statistics.rbi,  WAR: statistics.war,
    
    ...(statistics.sb && { SB: statistics.sb }),
    ...(statistics.hr && { HR: statistics.hr}),
    ...(statistics.h && { H: statistics.h})
    
  };

 const BestHittingCareerYearArray = {
  AVG: careerYear.avg , OBP: careerYear.obp, SLG: careerYear.slg, 
  OPS: careerYear.ops, "OPS+": careerYear.opsPlus, 
  RBI: careerYear.rbi,  WAR: careerYear.war,
  
  ...(careerYear.sb && { SB: careerYear.sb }),
  ...(careerYear.hr && { HR: careerYear.hr}),
  ...(careerYear.h && { H: careerYear.h})
 }


  const PitchingStatsArray = {
    Wins: statistics.w, Losses: statistics.l, Innings: statistics.ip,
    ERA: statistics.era, Strikeouts: statistics.k, WHIP: statistics.whip,
    "ERA+": statistics.eraPlus, Walks: statistics.bb, Shutouts: statistics.sho
  };

  const BestPitchingCareerYearArray = {
    Wins: careerYear.w, Losses: careerYear.l, Innings: careerYear.ip,
    ERA: careerYear.era, Strikeouts: careerYear.k, WHIP: careerYear.whip,
    "ERA+": careerYear.eraPlus, Walks: careerYear.bb, Shutouts: careerYear.sho
  };

  const formatValue = (value) => {
    if (value === undefined) return "N/A";
    if (typeof value === "number") {
      return value.toString().startsWith("0.") ? value.toFixed(3).slice(1) : value.toString();
    }
    return value;
  };

  const backgroundColor = teamBackgroundColors[mainTeam];


  const statsArray = position === "Pitcher" ? PitchingStatsArray : HittingStatsArray;
  const BestcareerArray = position === "Pitcher" ? BestPitchingCareerYearArray : BestHittingCareerYearArray;

  return (
    <div className={`w-full px-4 py-2 ${backgroundColor} font-Inter rounded-xl text-white border-2`}>
      <div className="flex justify-between py-2">
      <h2 className=" font-bold text-xl">{isButtonPressed ? 'Best Season': 'Career Stats'}</h2>
      <button onClick={triggerStats} className="px-2 rounded-lg bg-white text-black">Turn</button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {Object.entries(isButtonPressed ? BestcareerArray: statsArray).map(([key, value]) => (
         
          <div key={key} className="flex flex-col items-center">
            <p className="font-bold">{key}</p>
            <p className="font-extralight text-sm">{formatValue(value)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}