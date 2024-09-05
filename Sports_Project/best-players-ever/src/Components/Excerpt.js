import React from "react";
import "./components.css" 
import { teamBackgroundColors, teamBorderColors } from "../Assets/teamDetails";

export default function Excerpt({mainTeam, Excerpt}){

    const backgroundColor = teamBackgroundColors[mainTeam];
    const bordercolor = teamBorderColors[mainTeam]
    return(
        <div className={`w-full px-7 py-5 ${backgroundColor} rounded-3xl  text-white self-start gap-3 border-2 ${bordercolor}`}>
                <p className="">{Excerpt}</p>

        </div>
    )
}