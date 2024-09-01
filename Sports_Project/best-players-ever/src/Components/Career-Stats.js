import React from "react";
import "./components.css" 
import { teamBackgroundColors } from "../Assets/teamDetails";


export default function CareerStats({statistics: { avg, obp, slg, ops, opsPlus }, mainTeam}){
    
    const statsArray = { AVG: avg, OBP: obp, SLG: slg, OPS: ops, "OPS+": opsPlus };
    const backgroundColor = teamBackgroundColors[mainTeam];

    return(
        <div className={`w-1/2 p-5 grid grid-cols-5 ${backgroundColor} rounded-3xl border-2 border-white text-white`}>
           {Object.entries(statsArray).map(([key, value]) => (
            <p key={key}>{key}: {value}</p>
           ))}
        
        </div>
    )
}