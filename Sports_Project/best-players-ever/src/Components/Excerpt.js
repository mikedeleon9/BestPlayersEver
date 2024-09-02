import React from "react";
import "./components.css" 
import { teamBackgroundColors } from "../Assets/teamDetails";

export default function Excerpt({mainTeam}){

    const backgroundColor = teamBackgroundColors[mainTeam];
    return(
        <div className={`w-1/2 px-7 py-5 grid grid-cols-3 ${backgroundColor} rounded-3xl border-2 border-white text-white self-start gap-3`}>


        </div>
    )
}