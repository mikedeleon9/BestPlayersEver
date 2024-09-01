import React from "react";
import "./components.css" 
import { teamBackgroundColors } from "../Assets/teamDetails";
import stats from "../Assets/stats";

export default function CareerStats({statistics}){
    
    const {avg, obp, slg, ops, opsPlus} = statistics;
    const mainTeam = stats[0].personalDetails.mainTeam;
    const backgroundColor = teamBackgroundColors[mainTeam];

    return(
        <div className={`w-1/2 h-48 flex items-center relative ${backgroundColor} rounded-3xl border-2 border-white`}>
           <p>AVG: {avg}</p>
            <p>OBP: {obp}</p>
            <p>SLG: {slg}</p>
            <p>OPS: {ops}</p>
            <p>OPS+: {opsPlus}</p>
        
        </div>
    )
}