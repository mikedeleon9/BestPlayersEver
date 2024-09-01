import React from "react";
import "./components.css" 
import { teamBackgroundColors } from "../Assets/teamDetails";


export default function CareerStats({statistics, mainTeam}){
    
    const {avg, obp, slg, ops, opsPlus} = statistics;
    const backgroundColor = teamBackgroundColors[mainTeam];

    return(
        <div className={`w-1/2 grid grid-cols-5 ${backgroundColor} rounded-3xl border-2 border-white`}>
           <p>AVG: {avg}</p>
            <p>OBP: {obp}</p>
            <p>SLG: {slg}</p>
            <p>OPS: {ops}</p>
            <p>OPS+: {opsPlus}</p>
        
        </div>
    )
}