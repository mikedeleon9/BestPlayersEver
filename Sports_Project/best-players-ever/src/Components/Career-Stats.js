import React from "react";
import "./components.css" 
import { teamBackgroundColors } from "../Assets/teamDetails";


export default function CareerStats({statistics: { avg, obp, slg, ops, opsPlus, hr, rbi, r, sb }, mainTeam}){
    
    const statsArray = { AVG: avg.toString().slice(1),
                         OBP: obp.toString().slice(1), 
                         SLG: slg.toString().slice(1), 
                         OPS: ops.toString().slice(1), 
                         "OPS+": opsPlus,
                         HR: hr,
                         RBI: rbi,
                         Runs : r,
                         SB: sb 
                        };
    const backgroundColor = teamBackgroundColors[mainTeam];

    return(
        <div className={`w-1/2 px-7 py-5 grid grid-cols-3 ${backgroundColor} rounded-3xl border-2 border-white text-white self-start gap-3`}>
            <p className="col-span-3 text-center font-bold text-lg">Career Stats:</p>
           {Object.entries(statsArray).map(([key, value]) => (
            
            <div key={key} className="flex flex-col items-center">
            <p className="font-bold">{key}</p>
            <p className="font-normal">{value}</p>
            </div>
           ))}
        
        </div>
    )
}