import React from "react";
import "./components.css" 
import { teamBackgroundColors } from "../Assets/teamDetails";


export default function CareerStats({statistics: { avg, obp, slg, ops, opsPlus, hr, rbi, r, sb, w, l, ip, era, k, whip, eraPlus, bb, sho}, mainTeam, position}){
    
    const HittingStatsArray = { 
                         AVG: avg,
                         OBP: obp, 
                         SLG: slg, 
                         OPS: ops, 
                         "OPS+": opsPlus,
                         HR: hr,
                         RBI: rbi,
                         Runs : r,
                         SB: sb 
                        };

    const PitchingStatsArray = {
                        Wins: w,
                        Losses : l,
                        Innings: ip,
                        ERA: era,
                        Strikeouts: k,
                        WHIP: whip,
                        "ERA+": eraPlus,
                        Walks: bb,
                        Shutouts: sho
    }

    const formatValue = (value) => {
        if (value === undefined) return "N/A";
        if (typeof value === "number") {
            return value.toString().startsWith("0.") ? value.toFixed(3).slice(1) : value.toString();
        }
        return value;
    };

    const backgroundColor = teamBackgroundColors[mainTeam];

    const statsArray = position === "Pitcher" ? PitchingStatsArray : HittingStatsArray;

    return(
        <div className={`w-full px-7 py-5 grid grid-cols-3 ${backgroundColor} rounded-3xl text-white self-start gap-3`}>
            <p className="col-span-3 text-center font-bold text-lg">Career Stats:</p>
           {Object.entries(statsArray).map(([key, value]) => (
            
            <div key={key} className="flex flex-col items-center">
            <p className="font-bold">{key}</p>
            <p className="font-normal">{formatValue(value)}</p>
            </div>
           ))}
        
        </div>
    )
}