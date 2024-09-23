import React from "react"
import "./components.css";
import { teamBackgroundColors } from "../Assets/teamDetails";

export default function CareerYear({careerYear, mainTeam, position}){

   
    const backgroundColor = teamBackgroundColors[mainTeam];

    const BestHittingCareerYearArray = {
        AVG: careerYear.avg , OBP: careerYear.obp, SLG: careerYear.slg, 
        OPS: careerYear.ops, "OPS+": careerYear.opsPlus, 
        WAR: careerYear.war,
        
        ...(careerYear.sb && { SB: careerYear.sb }),
        ...(careerYear.hr && { HR: careerYear.hr}),
        ...(careerYear.h && { H: careerYear.h}),
        ...(careerYear.doubles && {'2B': careerYear.doubles}),
        ...(careerYear.rbi && { RBI : careerYear.rbi})
       }
      
       const BestPitchingCareerYearArray = {
        Wins: careerYear.w, Losses: careerYear.l, Innings: careerYear.ip,
        ERA: careerYear.era, Strikeouts: careerYear.k, WHIP: careerYear.whip,
        "ERA+": careerYear.eraPlus, Walks: careerYear.bb, Shutouts: careerYear.sho
      };

      const rateStats = ["AVG", "OBP", "SLG", "OPS"];

      const getBarWidth = (key, value) => {
        // Only apply the width logic to rate stats
        if (rateStats.includes(key) && value > 0.330) {
          return "w-full"; // Adjust width for rate stats > 0.290
        }
        else if(rateStats.includes(key) && value < 0.330 && value > .300){
            return "w-3/4"
        }
        return "w-1/4"; // Default width for other stats or for rate stats <= 0.290
      };
    

    const formatValue = (value) => {
        if (value === undefined) return "N/A";
        if (typeof value === "number") {
          return value.toString().startsWith("0.") ? value.toFixed(3).slice(1) : value.toString();
        }
        return value;
      };

    
    const BestcareerArray = position === "Pitcher" ? BestPitchingCareerYearArray : BestHittingCareerYearArray;

    return(
        <div className={`${backgroundColor} w-full px-4 py-2 rounded-xl`}>
            <div className={` gap-4 `}>
        {Object.entries(BestcareerArray ).map(([key, value]) => (
         
         <div key={key} className={`flex gap-2 py-2 transition-all duration-500 `}>
         <p className="font-bold w-12">{key}</p><div className={`${getBarWidth(key, value)} border-2`}></div>
       { /* <p className="font-extralight text-sm">{formatValue(value)}</p> */}
       </div>
        ))}
      </div>
        </div>
    )
}