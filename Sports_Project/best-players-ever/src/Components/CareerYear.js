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

      const statThresholds = {
        AVG: 0.330,
        OBP: 0.420,
        SLG: 0.620,
        OPS: 1.000,
        "OPS+": 150,
        WAR: 7,
        HR: 50,
        SB: 30
      };

      const getBarWidthPercentage = (key, value) => {
      const threshold = statThresholds[key];
        if (threshold && value >= threshold) {
          return "100%"; // Full bar if value meets or exceeds the threshold
        } 
        else if (threshold && value >= threshold * 0.9) {
          return "80%"; 
        }
        else if(threshold && value >= threshold * 0.8){
          return "60%"
        }
        else if(threshold && value >= threshold * 0.7){
          return "40%"
        }
        else if (threshold && value >= threshold * 0.5){
          return "50%";
          }
        else if (threshold && value >= threshold * 0.3) {
          return "30%"; // One-third bar
        }
        return "0%"; // Default width for non-rate stats or undefined thresholds
      };
    

    const formatValue = (value) => {
        if (value === undefined) return "N/A";
        if (typeof value === "number") {
          return value.toString().startsWith("0.") ? value.toFixed(3).slice(1) : value.toString();
        }
        return value;
      };

    
    const BestcareerArray = position === "Pitcher" ? BestPitchingCareerYearArray : BestHittingCareerYearArray;

    return (
      <div className={`${backgroundColor} w-full px-4 py-2 rounded-xl`}>
        <div className="gap-4">
          {Object.entries(BestcareerArray).map(([key, value]) => (
            <div key={key} className="flex gap-2 py-2 items-center">
              <p className="font-bold w-12">{key}</p>
              <div
                className="fill-bar border-2 text-center"
                style={{ width: getBarWidthPercentage(key, value) }}
              >
                {formatValue(value)}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}