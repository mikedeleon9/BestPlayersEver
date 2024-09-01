import React from "react";
import "./components.css" 
import { teamBackgroundColors } from "../Assets/teamDetails";


export default function CareerStats({statistics, mainTeam}){
    
    const {avg, obp, slg, ops, opsPlus} = statistics;
    const backgroundColor = teamBackgroundColors[mainTeam];

    return(
        <div className={`w-1/2 p-5 grid grid-cols-5 ${backgroundColor} rounded-3xl border-2 border-white text-white`}>
           <p className="text-lg font-bold">AVG: <span className="text-base font-normal">{avg}</span></p>
            <p>OBP: <span>{obp}</span></p>
            <p>SLG: <span>{slg}</span></p>
            <p>OPS: <span>{ops}</span></p>
            <p>OPS+: <span>{opsPlus}</span></p>
        
        </div>
    )
}